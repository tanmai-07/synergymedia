import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Plus, Edit, Trash2, ExternalLink, Play, Instagram } from "lucide-react"

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        client: true,
      },
      orderBy: [{ isFeatured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    })
    return projects
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export default async function ProjectsManagePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-foreground">Manage Projects</h1>
            <p className="text-muted-foreground mt-2">
              Showcase your work with project details, images, videos, and Instagram reels.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard">← Back to Dashboard</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard/projects/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Link>
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EXACT LOCATION: Your projects will appear here - manage via this interface */}
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={project.thumbnail || "/placeholder.svg?height=200&width=300&query=project"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.isFeatured && (
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {project.videoUrl && (
                      <Badge variant="secondary" className="text-xs">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                    {project.instagramUrl && (
                      <Badge variant="secondary" className="text-xs">
                        <Instagram className="h-3 w-3 mr-1" />
                        Reel
                      </Badge>
                    )}
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/projects/${project.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive hover:text-destructive bg-transparent"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant={project.isActive ? "default" : "secondary"}>
                      {project.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium">{project.client.name}</span>
                    {project.client.logo && (
                      <img
                        src={project.client.logo || "/placeholder.svg"}
                        alt={project.client.name}
                        className="h-4 w-auto"
                      />
                    )}
                  </div>

                  {project.results && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Results: </span>
                      <span className="text-primary font-medium">
                        {Object.keys(JSON.parse(project.results)).length} metrics tracked
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Order: {project.order}</span>
                    {project.projectUrl && (
                      <Link
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-primary"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-xl font-semibold text-foreground mb-4">No Projects Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start building your portfolio by adding your first project showcase.
              </p>
              <Button asChild>
                <Link href="/dashboard/projects/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
