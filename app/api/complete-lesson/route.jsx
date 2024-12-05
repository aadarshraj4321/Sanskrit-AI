import { UserLessons } from "@/configs/Schema";



export default async function handler(req, res) {
    const { userId, lessonId } = req.body; // Get user ID and lesson ID from the request body

    try {
        // Mark the lesson as completed for the user
        await UserLessons.create({
            data: {
                userId,
                lessonId,
                completedAt: new Date(),  // Save the timestamp when the lesson is completed
                progress: 100 // Mark the progress as 100% (completed)
            }
        });
        res.status(200).json({ message: "Lesson marked as completed" });
    } catch (error) {
        res.status(500).json({ error: "Error completing lesson" });
    }
}
