"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, Zap } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { motion } from "framer-motion"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your authentication logic here
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back to home link */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardHeader className="text-center space-y-4 pb-8">
                {/* Company Logo */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    SYNERGY MEDIA
                  </h1>
                </motion.div>

                <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
                <p className="text-muted-foreground">Sign in to access your dashboard</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@synergymedia.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </motion.div>
                </form>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center space-y-4"
                >
                  <div className="text-sm text-muted-foreground">
                    Demo credentials: admin@synergymedia.com / admin123
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Need access?{" "}
                      <Link
                        href="/contact"
                        className="text-primary hover:text-secondary transition-colors duration-300 font-medium"
                      >
                        Contact us
                      </Link>
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  )
}
