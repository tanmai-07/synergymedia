import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">About Elite Marketing</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a team of passionate digital marketing experts dedicated to helping businesses achieve
                  extraordinary growth through innovative strategies and measurable results.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/marketing-team-office.png"
                alt="Elite Marketing Team"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              {/* EXACT LOCATION: Update your mission statement here */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing strategies that drive sustainable
                growth, increase brand visibility, and deliver exceptional return on investment. We believe in
                transparent communication, data-driven decisions, and building long-term partnerships with our clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Transparent and honest communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Data-driven marketing strategies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Measurable results and ROI focus</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              {/* EXACT LOCATION: Update your vision statement here */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading digital marketing agency that transforms how businesses connect with their
                audiences in the digital age. We envision a future where every business, regardless of size, has access
                to world-class marketing strategies that drive meaningful growth and create lasting impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Industry-leading innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Global reach with local expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Sustainable business growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in digital marketing, analytics, and
              creative strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EXACT LOCATION: Add your team members here */}
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/professional-woman-ceo-marketing-executive.png",
                bio: "10+ years in digital marketing with expertise in strategic planning and client relations.",
              },
              {
                name: "Michael Chen",
                role: "Head of SEO",
                image: "/professional-man-seo-specialist-marketing.png",
                bio: "SEO expert with a track record of improving organic rankings for 200+ websites.",
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                image: "/professional-woman-creative-director-marketing.png",
                bio: "Award-winning creative professional specializing in brand storytelling and content strategy.",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client-Centric",
                description:
                  "Your success is our success. We prioritize your goals and work tirelessly to achieve them.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from strategy to execution.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Driven",
                description: "Every campaign is designed with clear objectives and measurable outcomes in mind.",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Innovation",
                description: "We stay ahead of industry trends and continuously evolve our strategies.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary mx-auto">{value.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Let's discuss how our team can help you achieve your marketing goals.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
