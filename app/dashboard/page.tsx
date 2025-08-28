import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Briefcase, Settings, MessageSquare, Eye } from "lucide-react"

async function getDashboardStats() {
  try {
    const [clientsCount, projectsCount, servicesCount, contactsCount] = await Promise.all([
      prisma.client.count({ where: { isActive: true } }),
      prisma.project.count({ where: { isActive: true } }),
      prisma.service.count({ where: { isActive: true } }),
      prisma.contactSubmission.count({ where: { isRead: false } }),
    ])

    return {
      clients: clientsCount,
      projects: projectsCount,
      services: servicesCount,
      unreadContacts: contactsCount,
    }
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return {
      clients: 0,
      projects: 0,
      services: 0,
      unreadContacts: 0,
    }
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  const stats = await getDashboardStats()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {session.user?.name || session.user?.email}. Manage your marketing agency website content.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.clients}</div>
              <p className="text-xs text-muted-foreground">Active client profiles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.projects}</div>
              <p className="text-xs text-muted-foreground">Portfolio projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Services</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.services}</div>
              <p className="text-xs text-muted-foreground">Available services</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.unreadContacts}</div>
              <p className="text-xs text-muted-foreground">Unread contact forms</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Manage Clients</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Add, edit, and manage your client profiles, logos, and testimonials.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/dashboard/clients">View All Clients</Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/dashboard/clients/new">Add New Client</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Manage Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Showcase your work with project details, images, videos, and results.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/dashboard/projects">View All Projects</Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/dashboard/projects/new">Add New Project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>Manage Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Update your service offerings, pricing, and feature lists.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/dashboard/services">View All Services</Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/dashboard/services/new">Add New Service</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Contact Messages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Review and respond to contact form submissions from potential clients.
              </p>
              <Button asChild className="w-full">
                <Link href="/dashboard/contacts">
                  View Messages {stats.unreadContacts > 0 && `(${stats.unreadContacts} new)`}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary" />
                <span>View Website</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Preview your live website and see how your content appears to visitors.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/" target="_blank">
                  Open Website
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
