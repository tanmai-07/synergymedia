"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Play, ExternalLink, Zap, Target, Rocket, Star } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { HoverCard } from "@/components/animations/hover-card";
import { motion } from "framer-motion";
'yes added comment'

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Company Logo/Name */}
              <div className="space-y-4">
                <motion.h1
                  className="font-serif text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent gradient-animate"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  SYNERGY
                </motion.h1>
                <motion.div
                  className="text-4xl lg:text-6xl font-light text-foreground/90 tracking-[0.2em]"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  MEDIA
                </motion.div>
              </div>

              <motion.p
                className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Crafting digital experiences that captivate, convert, and create lasting impact for forward-thinking brands.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-12 py-6 neon-glow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500"
                >
                  <Link href="/portfolio" className="flex items-center">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-12 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-500 bg-transparent"
                >
                  <Link href="/contact" className="flex items-center">
                    Start Project
                    <Rocket className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center space-y-6 mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've transformed brands through innovative digital strategies and creative excellence.
              </p>
            </div>
          </FadeIn>
          {/* Add your client work here */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <StaggerItem>
              <HoverCard>
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img src="/luxury-brand-campaign-showcase.png" alt="Luxury Brand Campaign" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="neon-glow"><Play className="h-4 w-4 mr-1" />Watch Reel</Button>
                        <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/10 bg-transparent"><ExternalLink className="h-4 w-4 mr-1" />Live Site</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Luxury Brand Campaign</h3>
                    <p className="text-muted-foreground mb-4">Complete brand transformation with 300% ROI increase</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">Brand Strategy • Social Media</span>
                      <div className="flex items-center text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">Featured</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
            {/* Add more StaggerItem/HoverCard for other projects as needed */}
          </StaggerContainer>

          {/* Client logos section */}
          <FadeIn delay={0.4}>
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-semibold text-muted-foreground">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center justify-center h-16">
                    <img
                      src={`/generic-company-logo.png?height=60&width=120&query=client logo ${i}`}
                      alt={`Client ${i}`}
                      className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center space-y-6 mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Our Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions that drive growth and create meaningful connections.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Brand Strategy", description: "Complete brand transformation and positioning", icon: Target, color: "from-primary to-primary/50" },
              { title: "Digital Marketing", description: "Data-driven campaigns that convert", icon: Zap, color: "from-secondary to-secondary/50" },
              { title: "Creative Production", description: "Stunning visuals and engaging content", icon: Star, color: "from-accent to-accent/50" },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <Card className="group h-full bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <CardContent className="p-8 text-center space-y-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500">
                          <service.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <FadeIn>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ready to Create Something Extraordinary?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground">Let's collaborate to bring your vision to life with cutting-edge digital solutions.</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-12 py-6 neon-glow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent">
                <Link href="/portfolio">Explore Portfolio</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
