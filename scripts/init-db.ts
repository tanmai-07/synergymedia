import { prisma, connectDB } from "../lib/prisma"

async function initializeDatabase() {
  try {
    console.log("[v0] Initializing database...")

    await connectDB()

    // Create admin user if it doesn't exist
    const adminUser = await prisma.user.upsert({
      where: { email: "admin@synergyMedia.com" },
      update: {},
      create: {
        email: "admin@synergyMedia.com",
        name: "Admin User",
      },
    })

    console.log("[v0] Admin user created:", adminUser.email)

    // Add sample data
    const sampleService = await prisma.service.upsert({
      where: { id: "sample-seo" },
      update: {},
      create: {
        id: "sample-seo",
        title: "SEO Optimization",
        description: "Boost your search engine rankings",
        icon: "search",
        price: "$2,999/month",
        isActive: true,
      },
    })

    console.log("[v0] Sample service created:", sampleService.title)
    console.log("[v0] Database initialized successfully!")
  } catch (error) {
    console.error("[v0] Database initialization failed:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

initializeDatabase()
