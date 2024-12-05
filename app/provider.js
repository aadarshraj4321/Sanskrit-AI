"use client";

import { useUser } from "@clerk/nextjs";
import { Users } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";
import React, { useEffect } from 'react';

export default function Provider({ children }) {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            isNewUser();
        }
    }, [user]);

    const isNewUser = async () => {
        // Check if the user already exists based on the unique clerkUserId
        const result = await db.select().from(Users)
            .where(eq(Users.clerkUserId, user?.id)); // Use clerkUserId as unique identifier

        // If the user does not exist, insert the new user into the database
        if (!result[0]) {
            await db.insert(Users).values({
                clerkUserId: user?.id, // Insert the Clerk user ID
                name: user?.fullName,  // User's full name
                email: user?.primaryEmailAddress?.emailAddress, // User's email
                imageUrl: user?.imageUrl, // User's profile image URL
            });
        }
    };

    return (
        <div>
            {children}
        </div>
    );
}
