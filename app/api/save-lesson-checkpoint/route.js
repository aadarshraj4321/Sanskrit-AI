import { db } from "@/configs/db";
import { Users, UserLessons } from "@/configs/Schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    
    console.log('Received save checkpoint request:', body);

    const { 
      lessonId, 
      currentStep, 
      checkpoint, 
      userId: clerkUserId 
    } = body;

    // Validate input data
    if (!clerkUserId || !lessonId || currentStep === undefined) {
      console.error('Invalid request data', { clerkUserId, lessonId, currentStep });
      return new Response(JSON.stringify({ 
        error: "Invalid request data" 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find the local user ID based on Clerk user ID
    const userResult = await db
      .select({ id: Users.id })
      .from(Users)
      .where(eq(Users.clerkUserId, clerkUserId))
      .limit(1)
      .execute();

    // If no user found, return an error
    if (userResult.length === 0) {
      console.error('User not found', { clerkUserId });
      return new Response(JSON.stringify({ 
        error: "User not found" 
      }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userIdFormatted = userResult[0].id;
    const lessonIdFormatted = Number(lessonId);

    // Check if progress exists
    const existingProgress = await db
      .select()
      .from(UserLessons)
      .where(
        eq(UserLessons.userId, userIdFormatted) && 
        eq(UserLessons.lessonId, lessonIdFormatted)
      )
      .limit(1)
      .execute();

    if (existingProgress.length > 0) {
      // Update existing progress
      await db
        .update(UserLessons)
        .set({
          currentStep,
          lastCheckpoint: checkpoint,
          updatedAt: new Date(),
        })
        .where(
          eq(UserLessons.userId, userIdFormatted) && 
          eq(UserLessons.lessonId, lessonIdFormatted)
        )
        .execute();
    } else {
      // Insert new progress
      await db.insert(UserLessons)
        .values({
          userId: userIdFormatted,
          lessonId: lessonIdFormatted,
          currentStep,
          lastCheckpoint: checkpoint,
        });
    }

    return new Response(JSON.stringify({ 
      message: "Checkpoint saved successfully" 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error saving checkpoint:", error);
    return new Response(JSON.stringify({ 
      error: "Error saving checkpoint",
      details: error instanceof Error ? error.message : String(error)
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Add this to handle OPTIONS preflight requests if needed
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Allow': 'POST, OPTIONS',
      'Content-Type': 'application/json'
    }
  });
}