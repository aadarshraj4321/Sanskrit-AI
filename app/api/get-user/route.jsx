import { db } from "@/configs/db";
import { Users } from "@/configs/Schema";
import { getAuth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";



// Export a named GET handler
export async function GET(req) {
  try {
    // Get the authenticated Clerk user ID
    const { userId } = getAuth(req);

    // If no userId is found, return unauthorized response
    if (!userId) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    // Query the database for the user by clerkUserId
    const user = await db.select()
    .from(Users)
    .where(eq(Users.clerkUserId, userId))
    .execute();
    // If no user is found in the database, return a 404 error
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
