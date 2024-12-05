import { getAuth } from '@clerk/nextjs/server'; // Assuming you're using Clerk for authentication
import { db } from "@/configs/db";
import { UserLessons } from "@/configs/Schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";






export async function POST(req) {
    const { userId } = getAuth();
    
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { 
            lessonId, 
            currentStep, 
            score 
        } = await req.json();

        // Check if a record already exists for this user and lesson
        const existingProgress = await db
            .select()
            .from(UserLessons)
            .where(
                and(
                    eq(UserLessons.userId, parseInt(userId)), 
                    eq(UserLessons.lessonId, lessonId)
                )
            )
            .limit(1);

        if (existingProgress.length > 0) {
            // Update existing progress
            await db
                .update(UserLessons)
                .set({ 
                    currentStep, 
                    score,
                    updatedAt: new Date() 
                })
                .where(
                    and(
                        eq(UserLessons.userId, parseInt(userId)), 
                        eq(UserLessons.lessonId, lessonId)
                    )
                );
        } else {
            // Create new progress record
            await db
                .insert(UserLessons)
                .values({
                    userId: parseInt(userId),
                    lessonId,
                    currentStep,
                    score,
                    updatedAt: new Date()
                });
        }

        return NextResponse.json({ 
            message: 'Lesson progress saved successfully' 
        }, { status: 200 });

    } catch (error) {
        console.error('Error saving lesson progress:', error);
        return NextResponse.json({ 
            error: 'Failed to save lesson progress' 
        }, { status: 500 });
    }
}

export async function GET(req) {
    const { userId } = getAuth();
    
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const lessonId = req.nextUrl.searchParams.get('lessonId');
        
        if (!lessonId) {
            return NextResponse.json({ error: 'Lesson ID is required' }, { status: 400 });
        }

        const progress = await db
            .select()
            .from(UserLessons)
            .where(
                and(
                    eq(UserLessons.userId, parseInt(userId)), 
                    eq(UserLessons.lessonId, parseInt(lessonId))
                )
            )
            .limit(1);

        return NextResponse.json({ 
            progress: progress[0] || null 
        }, { status: 200 });

    } catch (error) {
        console.error('Error retrieving lesson progress:', error);
        return NextResponse.json({ 
            error: 'Failed to retrieve lesson progress' 
        }, { status: 500 });
    }
}