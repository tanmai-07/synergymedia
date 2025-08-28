import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding SYNERGY MEDIA database...")

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@synergymedia.com" },
    update: {},
    create: {
      email: "admin@synergymedia.com",
      name: "SYNERGY MEDIA Admin",
    },
  })

  const services = [
    {
      title: "Brand Strategy & Identity",
      description:
        "Complete brand transformation with strategic positioning, visual identity, and market differentiation that resonates with your target audience.",
      icon: "Target",
      features: JSON.stringify([
        "Brand Positioning",
        "Visual Identity Design",
        "Brand Guidelines",
        "Market Research",
        "Competitive Analysis",
      ]),
      price: "Starting at $5,000",
      order: 1,
    },
    {
      title: "Digital Marketing Campaigns",
      description:
        "Data-driven marketing campaigns across all digital channels that maximize ROI and drive measurable business growth.",
      icon: "Zap",
      features: JSON.stringify([
        "Multi-Channel Strategy",
        "Performance Marketing",
        "Conversion Optimization",
        "Analytics & Insights",
        "Campaign Management",
      ]),
      price: "Starting at $4,500/month",
      order: 2,
    },
    {
      title: "Creative Production",
      description:
        "Stunning visual content, video production, and creative assets that captivate audiences and drive engagement.",
      icon: "Star",
      features: JSON.stringify([
        "Video Production",
        "Motion Graphics",
        "Photography",
        "Graphic Design",
        "Social Media Content",
      ]),
      price: "Starting at $3,500/project",
      order: 3,
    },
    {
      title: "Web Development",
      description:
        "Custom websites and applications built with cutting-edge technology for optimal performance and user experience.",
      icon: "Code",
      features: JSON.stringify([
        "Custom Development",
        "E-commerce Solutions",
        "Mobile Optimization",
        "Performance Optimization",
        "Ongoing Maintenance",
      ]),
      price: "Starting at $8,000",
      order: 4,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { title: service.title },
      update: service,
      create: service,
    })
  }

  const clients = [
    {
      name: "Luxe Fashion Co.",
      logo: "/luxe-fashion-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://luxefashion.com",
      testimonial:
        "SYNERGY MEDIA transformed our brand identity and digital presence. Our online sales increased by 400% and brand recognition soared. Exceptional creative vision and execution.",
      rating: 5,
      order: 1,
    },
    {
      name: "TechNova Solutions",
      logo: "/technova-solutions-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://technova.com",
      testimonial:
        "The team's strategic approach to our product launch campaign exceeded all expectations. We achieved 250% of our target metrics and gained significant market share.",
      rating: 5,
      order: 2,
    },
    {
      name: "Apex Financial",
      logo: "/apex-financial-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://apexfinancial.com",
      testimonial:
        "Professional, innovative, and results-driven. SYNERGY MEDIA helped us establish thought leadership in fintech with compelling content and strategic positioning.",
      rating: 5,
      order: 3,
    },
    {
      name: "Wellness Collective",
      logo: "/wellness-collective-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://wellnesscollective.com",
      testimonial:
        "Their creative campaigns resonated perfectly with our audience. Social media engagement increased by 500% and we saw unprecedented brand loyalty growth.",
      rating: 5,
      order: 4,
    },
    {
      name: "Urban Architecture",
      logo: "/urban-architecture-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://urbanarch.com",
      testimonial:
        "SYNERGY MEDIA's visual storytelling brought our architectural projects to life. The video content they created won multiple industry awards.",
      rating: 5,
      order: 5,
    },
    {
      name: "Elite Hospitality",
      logo: "/elite-hospitality-logo.png", // EXACT LOCATION FOR CLIENT LOGO
      website: "https://elitehospitality.com",
      testimonial:
        "Outstanding creative direction and flawless execution. Our luxury hotel bookings increased by 180% after their comprehensive rebranding campaign.",
      rating: 5,
      order: 6,
    },
  ]

  for (const client of clients) {
    const createdClient = await prisma.client.upsert({
      where: { name: client.name },
      update: client,
      create: client,
    })

    const projects = [
      {
        title: `${client.name} Brand Transformation`,
        description: `Complete brand overhaul including visual identity, digital strategy, and market positioning that elevated ${client.name} to industry leadership.`,
        clientId: createdClient.id,
        category: "Branding",
        thumbnail: `/placeholder.svg?height=600&width=800&query=${client.name}+luxury+brand+campaign+showcase`, // EXACT LOCATION FOR PROJECT THUMBNAIL
        images: JSON.stringify([
          `/placeholder.svg?height=400&width=600&query=${client.name}+brand+identity+design`,
          `/placeholder.svg?height=400&width=600&query=${client.name}+marketing+materials`,
          `/placeholder.svg?height=400&width=600&query=${client.name}+digital+campaign+results`,
        ]),
        videoUrl: "https://www.youtube.com/watch?v=example", // EXACT LOCATION FOR PROJECT VIDEOS
        instagramUrl: "https://www.instagram.com/reel/example/", // EXACT LOCATION FOR INSTAGRAM REELS
        results: JSON.stringify({
          "Brand Recognition": "400% increase",
          "Social Media Engagement": "500% growth",
          "Revenue Growth": "250% increase",
          "Market Share": "35% improvement",
          "Customer Satisfaction": "95% rating",
        }),
        tags: JSON.stringify(["Branding", "Strategy", "Digital Marketing", "Creative"]),
        projectUrl: client.website,
        isFeatured: true,
        order: 1,
      },
      {
        title: `${client.name} Digital Campaign`,
        description: `Multi-channel digital marketing campaign featuring innovative creative content and strategic audience targeting for maximum impact.`,
        clientId: createdClient.id,
        category: "Digital Marketing",
        thumbnail: `/placeholder.svg?height=600&width=800&query=${client.name}+digital+marketing+campaign`, // EXACT LOCATION FOR PROJECT THUMBNAIL
        images: JSON.stringify([
          `/placeholder.svg?height=400&width=600&query=${client.name}+social+media+content`,
          `/placeholder.svg?height=400&width=600&query=${client.name}+advertising+creative`,
        ]),
        videoUrl: "https://www.youtube.com/watch?v=example2", // EXACT LOCATION FOR PROJECT VIDEOS
        instagramUrl: "https://www.instagram.com/reel/example2/", // EXACT LOCATION FOR INSTAGRAM REELS
        results: JSON.stringify({
          "Click-Through Rate": "8.5% (industry avg: 2.1%)",
          "Conversion Rate": "12.3% improvement",
          "Cost Per Acquisition": "45% reduction",
          "Return on Ad Spend": "650%",
        }),
        tags: JSON.stringify(["Digital Marketing", "Advertising", "Social Media"]),
        projectUrl: client.website,
        isFeatured: false,
        order: 2,
      },
    ]

    for (const project of projects) {
      await prisma.project.upsert({
        where: { title: project.title },
        update: project,
        create: project,
      })
    }
  }

  const contactSubmissions = [
    {
      name: "Sarah Johnson",
      email: "sarah@startup.com",
      company: "Innovative Startup",
      message:
        "Interested in a complete brand identity package for our tech startup. Looking for modern, professional design.",
      status: "new",
    },
    {
      name: "Michael Chen",
      email: "m.chen@retailbrand.com",
      company: "Retail Brand Co.",
      message: "Need help with digital marketing strategy and social media management for our e-commerce business.",
      status: "contacted",
    },
  ]

  for (const contact of contactSubmissions) {
    await prisma.contact.create({
      data: contact,
    })
  }

  console.log("✅ SYNERGY MEDIA database seeded successfully!")
  console.log("📊 Created:")
  console.log(`   • ${services.length} services`)
  console.log(`   • ${clients.length} clients`)
  console.log(`   • ${clients.length * 2} projects`)
  console.log(`   • ${contactSubmissions.length} contact submissions`)
  console.log("🔐 Admin login: admin@synergymedia.com / admin123")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
