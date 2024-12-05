// import { boolean, serial, varchar, pgTable, integer, timestamp } from "drizzle-orm/pg-core";
// import { jsonb } from "drizzle-orm/pg-core"; 

// export const Users = pgTable('users', {
//     id: serial('id').primaryKey(),
//     clerkUserId: varchar('clerk_user_id', { length: 255 }).notNull().unique(),
//     name: varchar('name', { length: 100 }),
//     email: varchar('email', { length: 100 }).notNull().unique(),
//     imageUrl: varchar('image_url', { length: 255 }),
//     joinedAt: timestamp('joined_at').defaultNow()
// });


// export const Progress = pgTable('progress', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id').notNull().references(() => Users.id),
//     level: integer('level').default(1),
//     score: integer('score').default(0),
//     currentStep: integer('current_step').default(0), // New column to track the current step
//     updatedAt: timestamp('updated_at').defaultNow()
// });



// export const Quizzes = pgTable('quizzes', {
//     id: serial('id').primaryKey(),
//     title: varchar('title', { length: 255 }).notNull(),
//     questions: jsonb('questions').notNull(),
//     createdAt: timestamp('created_at').defaultNow()
// });

// export const QuizResults = pgTable('quiz_results', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id').notNull().references(() => Users.id),
//     quizId: integer('quiz_id').notNull().references(() => Quizzes.id),
//     score: integer('score'),
//     completedAt: timestamp('completed_at').defaultNow()
// });

// export const Lessons = pgTable('lessons', {
//     id: serial('id').primaryKey(),
//     track: varchar('track', { length: 100 }).notNull(),
//     title: varchar('title', { length: 255 }).notNull(),
//     content: jsonb('content').notNull(),
//     level: integer('level').default(1),
//     order: integer('order').notNull(),
//     createdAt: timestamp('created_at').defaultNow()
// });

// export const UserLessons = pgTable('user_lessons', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id').notNull().references(() => Users.id),
//     lessonId: integer('lesson_id').notNull().references(() => Lessons.id),
//     completedAt: timestamp('completed_at').defaultNow(),
//     progress: integer('progress').default(0),
// });





// import { boolean, serial, varchar, pgTable, integer, timestamp } from "drizzle-orm/pg-core";
// import { jsonb } from "drizzle-orm/pg-core";

// // User Profile Table
// export const Users = pgTable('users', {
//     id: serial('id').primaryKey(),
//     clerkUserId: varchar('clerk_user_id', { length: 255 }).notNull().unique(),
//     name: varchar('name', { length: 100 }),
//     email: varchar('email', { length: 100 }).notNull().unique(),
//     imageUrl: varchar('image_url', { length: 255 }),
//     joinedAt: timestamp('joined_at').defaultNow()
// });

// // Lessons Table - Store content inside JSON
// export const Lessons = pgTable('lessons', {
//     id: serial('id').primaryKey(),
//     track: varchar('track', { length: 100 }).notNull(),
//     title: varchar('title', { length: 255 }).notNull(),
//     content: jsonb('content').notNull(), // Full lesson content in JSON
//     level: integer('level').default(1),
//     order: integer('order').notNull(),
//     createdAt: timestamp('created_at').defaultNow()
// });

// // User Progress Table - Store user progress (including checkpoints)
// export const UserLessons = pgTable('user_lessons', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id').notNull().references(() => Users.id),
//     lessonId: integer('lesson_id').notNull().references(() => Lessons.id),
//     lastCheckpoint: jsonb('last_checkpoint').default({}), // Updated progress
// });


// // Quizzes Table - Store quiz content inside JSON
// export const Quizzes = pgTable('quizzes', {
//     id: serial('id').primaryKey(),
//     title: varchar('title', { length: 255 }).notNull(),
//     questions: jsonb('questions').notNull(), // Full quiz content in JSON
//     createdAt: timestamp('created_at').defaultNow()
// });

// // Quiz Results Table - Track results of users for each quiz
// export const QuizResults = pgTable('quiz_results', {
//     id: serial('id').primaryKey(),
//     userId: integer('user_id').notNull().references(() => Users.id),
//     quizId: integer('quiz_id').notNull().references(() => Quizzes.id),
//     score: integer('score'), // Store the quiz score
//     completedAt: timestamp('completed_at').defaultNow()
// });





import { boolean, serial, varchar, pgTable, integer, timestamp } from "drizzle-orm/pg-core";
import { jsonb } from "drizzle-orm/pg-core";

// User Profile Table
export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    clerkUserId: varchar('clerk_user_id', { length: 255 }).notNull().unique(),
    name: varchar('name', { length: 100 }),
    email: varchar('email', { length: 100 }).notNull().unique(),
    imageUrl: varchar('image_url', { length: 255 }),
    joinedAt: timestamp('joined_at').defaultNow()
});

// Lessons Table - Store content inside JSON
export const Lessons = pgTable('lessons', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    level: integer('level').default(1),
    order: integer('order').notNull(),
    createdAt: timestamp('created_at').defaultNow()
});


export const UserLessons = pgTable('user_lessons', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => Users.id),
    lessonId: integer('lesson_id').notNull().references(() => Lessons.id),
    currentStep: integer('current_step').default(0), // Track the current step of the lesson
    score: integer('score').default(0), // Track the user's score for the lesson (default value is 0)
    updatedAt: timestamp('updated_at')
        .defaultNow()
        .$onUpdateFn('CURRENT_TIMESTAMP') // Automatically update the timestamp when the record is updated
});