"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { ArrowLeft, Save, Loader2 } from "lucide-react"

interface ClientFormProps {
  client?: {
    id: string
    name: string
    logo?: string | null
    website?: string | null
    testimonial?: string | null
    rating?: number | null
    isActive: boolean
    order: number
  }
}

export function ClientForm({ client }: ClientFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: client?.name || "",
    logo: client?.logo || "",
    website: client?.website || "",
    testimonial: client?.testimonial || "",
    rating: client?.rating || 5,
    isActive: client?.isActive ?? true,
    order: client?.order || 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = client ? `/api/clients/${client.id}` : "/api/clients"
      const method = client ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/dashboard/clients")
        router.refresh()
      } else {
        console.error("Failed to save client")
      }
    } catch (error) {
      console.error("Error saving client:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button variant="outline" asChild>
          <Link href="/dashboard/clients">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Clients
          </Link>
        </Button>
        <div>
          <h1 className="font-playfair text-3xl font-bold text-foreground">
            {client ? "Edit Client" : "Add New Client"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {client ? "Update client information and testimonials." : "Add a new client to your showcase."}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Client Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter client name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://client-website.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">
                Logo URL *
                <span className="text-sm text-muted-foreground ml-2">
                  (EXACT LOCATION: Upload your client logo and paste the URL here)
                </span>
              </Label>
              <Input
                id="logo"
                type="url"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                placeholder="https://example.com/client-logo.png"
              />
              {formData.logo && (
                <div className="mt-2 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Logo Preview:</p>
                  <img
                    src={formData.logo || "/placeholder.svg"}
                    alt="Logo preview"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="testimonial">
                Client Testimonial
                <span className="text-sm text-muted-foreground ml-2">
                  (EXACT LOCATION: Add client feedback and reviews here)
                </span>
              </Label>
              <Textarea
                id="testimonial"
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                placeholder="Enter client testimonial..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rating">Rating (1-5 stars)</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number.parseInt(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  min="0"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: Number.parseInt(e.target.value) })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-border">
              <Button type="button" variant="outline" asChild>
                <Link href="/dashboard/clients">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {client ? "Update Client" : "Add Client"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
