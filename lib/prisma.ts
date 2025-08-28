import { PrismaClient } from "@prisma/client"

declare global {
  var __prisma: PrismaClient | undefined
}

// Singleton pattern for Prisma client
export const prisma =
  globalThis.__prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  })

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma
}

// Initialize database connection
export async function connectDB() {
  try {
    await prisma.$connect()
    console.log("[v0] Database connected successfully")
  } catch (error) {
    console.error("[v0] Database connection failed:", error)
    throw error
  }
}

// Graceful shutdown
export async function disconnectDB() {
  await prisma.$disconnect()
}
