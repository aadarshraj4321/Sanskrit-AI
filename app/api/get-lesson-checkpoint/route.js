import { db } from "@/configs/db";
import { UserLessons } from "@/configs/Schema";

// GET method to retrieve lesson checkpoint
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lessonId = searchParams.get("lessonId");
  const userId = searchParams.get("userId");

  if (!lessonId || !userId) {
    return new Response(JSON.stringify({ error: "Invalid request data." }), {
      status: 400,
    });
  }

  try {
    // Fetch the user's progress for the lesson
    const progress = await db
      .select()
      .from(UserLessons)
      .where({ userId: Number(userId), lessonId: Number(lessonId) })
      .limit(1)
      .execute();

    if (progress.length > 0) {
      return new Response(JSON.stringify({ checkpoint: progress[0] }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ error: "Progress not found for the user." }),
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error("Error retrieving checkpoint:", error);
    return new Response(
      JSON.stringify({ error: "Error retrieving checkpoint." }),
      {
        status: 500,
      }
    );
  }
}

// Export other methods (if necessary)
