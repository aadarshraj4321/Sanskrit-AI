import { db } from "@/configs/db";
import { Users } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request) {
  const clerkUserId = request.nextUrl.searchParams.get('clerkUserId');

  if (!clerkUserId) {
    return new Response(JSON.stringify({ error: 'Clerk user ID is required' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const [user] = await db
      .select()
      .from(Users)
      .where(eq(Users.clerkUserId, clerkUserId))
      .limit(1);

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(user), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}