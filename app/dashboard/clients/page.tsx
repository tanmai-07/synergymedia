import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Plus, Edit, Trash2, ExternalLink, Star } from "lucide-react"

async function getClients() {
  try {
    const clients = await prisma.client.findMany({
      include: {
        projects: {
          where: { isActive: true },
        },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    })
    return clients
  } catch (error) {
    console.error("Error fetching clients:", error)
    return []
  }
}

export default async function ClientsManagePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  const clients = await getClients()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-foreground">Manage Clients</h1>
            <p className="text-muted-foreground mt-2">
              Add, edit, and manage your client profiles, logos, and testimonials.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard">← Back to Dashboard</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard/clients/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Client
              </Link>
            </Button>
          </div>
        </div>

        {/* Clients Grid */}
        {clients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EXACT LOCATION: Your clients will appear here - manage via this interface */}
            {clients.map((client) => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/clients/${client.id}/edit`}>
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

                  {/* Client Logo Display */}
                  {client.logo && (
                    <div className="flex justify-center p-4 bg-muted rounded-lg">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={client.isActive ? "default" : "secondary"}>
                      {client.isActive ? "Active" : "Inactive"}
                    </Badge>
                    {client.rating && (
                      <div className="flex items-center space-x-1">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    )}
                  </div>

                  {client.website && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                      <Link
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        {client.website}
                      </Link>
                    </div>
                  )}

                  {client.testimonial && (
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm italic line-clamp-3">"{client.testimonial}"</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{client.projects.length} projects</span>
                    <span>Order: {client.order}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-xl font-semibold text-foreground mb-4">No Clients Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start building your client showcase by adding your first client.
              </p>
              <Button asChild>
                <Link href="/dashboard/clients/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Client
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
