/** @type { import("drizzle-kit").Config } */



export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    //driver: "@neondatabase/serverless",  // Specify the correct driver for Neon
    dbCredentials: {
        url: 'postgresql://neondb_owner:6vqNlPAGRFB3@ep-holy-waterfall-a4blk8mm.us-east-1.aws.neon.tech/SanskritAI?sslmode=require',
    }
};
