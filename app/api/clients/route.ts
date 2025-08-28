import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const clients = await prisma.client.findMany({
      include: {
        projects: {
          where: { isActive: true },
        },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    })

    return NextResponse.json(clients)
  } catch (error) {
    console.error("Error fetching clients:", error)
    return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, logo, website, testimonial, rating, isActive, order } = body

    const client = await prisma.client.create({
      data: {
        name,
        logo: logo || null,
        website: website || null,
        testimonial: testimonial || null,
        rating: rating || null,
        isActive: isActive ?? true,
        order: order || 0,
      },
    })

    return NextResponse.json(client)
  } catch (error) {
    console.error("Error creating client:", error)
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 })
  }
}
