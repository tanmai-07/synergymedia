"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Play, Instagram, TrendingUp, Users, Target, Mail, Phone } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { HoverCard } from "@/components/animations/hover-card"
import { motion } from "framer-motion"

function getProjects() {
  return [
    {
      id: "gully-tours-1",
      title: "Gully Tours & Travels - Social Media Campaign",
      description:
        "Comprehensive social media strategy for travel experiences, creating engaging content that showcases unique destinations and builds community engagement.",
      category: "Social Media",
      thumbnail: "/gully-tours-logo.png",
      videoUrl: "https://www.instagram.com/reel/C9RiiEOyAMb/",
      instagramUrl: "https://www.instagram.com/gully.tours/",
      projectUrl: "https://www.instagram.com/gully.tours/",
      isFeatured: true,
      isActive: true,
      client: {
        id: "gully-tours",
        name: "Gully Tours & Travels",
        logo: "/gully-tours-logo.png",
      },
    },
    {
      id: "gully-tours-2",
      title: "Gully Tours & Travels - Content Creation",
      description:
        "Creative Instagram reel content showcasing unique travel experiences and destinations with engaging storytelling.",
      category: "Content Marketing",
      thumbnail: "/gully-tours-logo.png",
      videoUrl: "https://www.instagram.com/reel/C9jpCxCyl8P/",
      instagramUrl: "https://www.instagram.com/gully.tours/",
      projectUrl: "https://www.instagram.com/gully.tours/",
      isFeatured: true,
      isActive: true,
      client: {
        id: "gully-tours",
        name: "Gully Tours & Travels",
        logo: "/gully-tours-logo.png",
      },
    },
    {
      id: "mayabazar-1",
      title: "Maya Bazaar - Festival Marketing Campaign",
      description:
        "India's largest inclusive festival marketing campaign, creating buzz and engagement across multiple platforms for this cultural celebration.",
      category: "Content Marketing",
      thumbnail: "/mayabazar-logo.jpg",
      videoUrl: "https://www.instagram.com/reel/DM4-jTGsHDl/",
      instagramUrl: "https://www.instagram.com/_maya_bazaar/",
      projectUrl: "https://www.instagram.com/_maya_bazaar/",
      isFeatured: true,
      isActive: true,
      client: {
        id: "mayabazar",
        name: "Maya Bazaar",
        logo: "/mayabazar-logo.jpg",
      },
    },
    {
      id: "mayabazar-2",
      title: "Maya Bazaar - Social Media Strategy",
      description:
        "Comprehensive social media strategy for India's largest inclusive festival, building community and cultural engagement.",
      category: "Social Media",
      thumbnail: "/mayabazar-logo.jpg",
      videoUrl: "",
      instagramUrl: "https://www.instagram.com/_maya_bazaar/reels/",
      projectUrl: "https://www.instagram.com/_maya_bazaar/",
      isFeatured: true,
      isActive: true,
      client: {
        id: "mayabazar",
        name: "Maya Bazaar",
        logo: "/mayabazar-logo.jpg",
      },
    },
    {
      id: "startup-mahakumbh-1",
      title: "Startup Mahakumbh 2025 - Event Promotion",
      description:
        "Strategic digital marketing campaign for India's premier startup event, driving registrations and building excitement for the 2025 edition.",
      category: "PPC",
      thumbnail: "/startup-mahakumbh-logo.jpg",
      videoUrl: "",
      instagramUrl: "",
      projectUrl: "",
      isFeatured: true,
      isActive: true,
      client: {
        id: "startup-mahakumbh",
        name: "Startup Mahakumbh",
        logo: "/startup-mahakumbh-logo.jpg",
      },
    },
    {
      id: "govt-karnataka-1",
      title: "Government of Karnataka - Digital Initiatives",
      description:
        "Government digital communication strategy to promote state initiatives and engage with citizens through modern digital channels.",
      category: "Content Marketing",
      thumbnail: "/govt-karnataka-logo.webp",
      videoUrl: "",
      instagramUrl: "",
      projectUrl: "",
      isFeatured: false,
      isActive: true,
      client: {
        id: "govt-karnataka",
        name: "Government of Karnataka",
        logo: "/govt-karnataka-logo.webp",
      },
    },
    {
      id: "blr-hubba-1",
      title: "BLR Hubba - Startup Ecosystem Branding",
      description:
        "Complete branding and digital presence strategy for Bangalore's premier startup hub, connecting entrepreneurs and investors.",
      category: "Branding",
      thumbnail: "/blr-hubba-logo.png",
      videoUrl: "",
      instagramUrl: "",
      projectUrl: "",
      isFeatured: false,
      isActive: true,
      client: {
        id: "blr-hubba",
        name: "BLR Hubba",
        logo: "/blr-hubba-logo.png",
      },
    },
    {
      id: "tagda-raho-1",
      title: "Tagda Raho - Health & Wellness Campaign",
      description:
        "Comprehensive health and wellness brand campaign promoting active lifestyle and community engagement through creative content.",
      category: "Social Media",
      thumbnail: "/tagda-raho-logo.png",
      videoUrl: "https://www.instagram.com/reel/C2pgyQstgbj/",
      instagramUrl: "",
      projectUrl: "",
      isFeatured: true,
      isActive: true,
      client: {
        id: "tagda-raho",
        name: "Tagda Raho",
        logo: "/tagda-raho-logo.png",
      },
    },
  ]
}

function getClients() {
  return [
    {
      id: "gully-tours",
      name: "Gully Tours & Travels",
      logo: "/gully-tours-logo.png",
      website: "https://www.instagram.com/gully.tours/",
      industry: "Travel & Tourism",
      projectsCompleted: 3,
    },
    {
      id: "mayabazar",
      name: "Maya Bazaar",
      logo: "/mayabazar-logo.jpg",
      website: "https://www.instagram.com/_maya_bazaar/",
      industry: "Events & Culture",
      projectsCompleted: 5,
    },
    {
      id: "startup-mahakumbh",
      name: "Startup Mahakumbh",
      logo: "/startup-mahakumbh-logo.jpg",
      website: "",
      industry: "Events & Startups",
      projectsCompleted: 4,
    },
    {
      id: "govt-karnataka",
      name: "Government of Karnataka",
      logo: "/govt-karnataka-logo.webp",
      website: "",
      industry: "Government",
      projectsCompleted: 8,
    },
    {
      id: "blr-hubba",
      name: "BLR Hubba",
      logo: "/blr-hubba-logo.png",
      website: "",
      industry: "Startups & Innovation",
      projectsCompleted: 6,
    },
    {
      id: "tagda-raho",
      name: "Tagda Raho",
      logo: "/tagda-raho-logo.png",
      website: "",
      industry: "Health & Wellness",
      projectsCompleted: 4,
    },
  ]
}

export default function PortfolioPage() {
  const projects = getProjects()
  const clients = getClients()

  const categories = ["All", "SEO", "PPC", "Social Media", "Content Marketing", "Branding"]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <FadeIn>
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-playfair text-4xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
                >
                  Our Work & Clients
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Discover how SYNERGY MEDIA has helped businesses achieve remarkable growth through strategic digital
                  marketing campaigns and creative solutions.
                </motion.p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <StaggerContainer className="flex flex-wrap justify-center gap-4">
                <StaggerItem className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/20">
                  <TrendingUp className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-white">50+ Projects Completed</span>
                </StaggerItem>
                <StaggerItem className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/20">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-white">6 Happy Clients</span>
                </StaggerItem>
                <StaggerItem className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/20">
                  <Target className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-white">300% Avg ROI</span>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-slate-900 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <HoverCard key={category}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-transparent border-yellow-400/30 text-gray-300 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    {category}
                  </Button>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <HoverCard scale={1.03} y={-12}>
                  <Card className="group hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-yellow-400/30">
                    <div className="relative aspect-video overflow-hidden">
                      {/* EXACT LOCATION: Project thumbnail image */}
                      <img
                        src={project.thumbnail || "/placeholder.svg?height=300&width=500&query=marketing+project"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {project.isFeatured && (
                        <Badge className="absolute top-3 left-3 bg-yellow-400 text-black animate-pulse">Featured</Badge>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {/* EXACT LOCATION: Video/Instagram reel links */}
                        {project.videoUrl && (
                          <HoverCard>
                            <Button
                              size="sm"
                              variant="secondary"
                              asChild
                              className="bg-yellow-400 text-black hover:bg-yellow-300"
                            >
                              <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                                <Play className="h-4 w-4 mr-2" />
                                Watch Video
                              </Link>
                            </Button>
                          </HoverCard>
                        )}
                        {project.instagramUrl && (
                          <HoverCard>
                            <Button
                              size="sm"
                              variant="secondary"
                              asChild
                              className="bg-yellow-400 text-black hover:bg-yellow-300"
                            >
                              <Link href={project.instagramUrl} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-4 w-4 mr-2" />
                                View Reel
                              </Link>
                            </Button>
                          </HoverCard>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="border-yellow-400/30 text-yellow-400 group-hover:border-yellow-400/50 transition-colors duration-300"
                          >
                            {project.category}
                          </Badge>
                          {project.client.logo && (
                            <img
                              src={project.client.logo || "/placeholder.svg"}
                              alt={project.client.name}
                              className="h-6 w-auto group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                        </div>
                        <h3 className="font-semibold text-lg text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <span className="text-sm text-gray-400">Client: {project.client.name}</span>
                        {project.projectUrl && (
                          <HoverCard>
                            <Button size="sm" variant="ghost" asChild className="text-yellow-400 hover:text-yellow-300">
                              <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </HoverCard>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-slate-900 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-4">
                Trusted by Leading Brands
              </h2>
              <p className="text-gray-400">Join the growing list of successful businesses we've helped</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <StaggerItem key={client.id}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-yellow-400/30"
                >
                  <img
                    src={client.logo || "/placeholder.svg?height=60&width=120&query=company+logo"}
                    alt={`${client.name} logo`}
                    className="max-h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 relative overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <FadeIn>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Start Your Success Story?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help your business achieve similar results and become our next success story.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <HoverCard>
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-orange-400 hover:to-yellow-400 shadow-lg hover:shadow-xl transition-all duration-500 border border-yellow-400/20 text-lg px-8 py-6"
                >
                  <Link href="mailto:hello@synergymedia.com" className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>hello@synergymedia.com</span>
                  </Link>
                </Button>
              </HoverCard>
              <HoverCard>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="tel:+1234567890" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (234) 567-8900</span>
                  </Link>
                </Button>
              </HoverCard>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
