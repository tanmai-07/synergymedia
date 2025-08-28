"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut, Zap } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { HoverCard } from "@/components/animations/hover-card"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const session = null // Temporarily disabled auth until NextAuth is properly configured

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Work" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HoverCard scale={1.05}>
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow"
              >
                <Zap className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SYNERGY
                </span>
                <span className="font-sans text-xs text-muted-foreground tracking-[0.2em] -mt-1">MEDIA</span>
              </div>
            </Link>
          </HoverCard>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"
                    whileHover={{
                      width: "100%",
                      boxShadow: "0 0 8px currentColor",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <HoverCard>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <User className="h-4 w-4" />
                      <span>{session.user?.name || session.user?.email}</span>
                    </Button>
                  </HoverCard>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur border-border/50">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="hover:text-primary transition-colors duration-200">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => console.log("Sign Out")}
                    className="hover:text-destructive transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <HoverCard>
                  <Button
                    variant="ghost"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                </HoverCard>
                <HoverCard>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg hover:shadow-xl transition-all duration-500 border border-primary/20"
                  >
                    <Link href="mailto:hello@synergymedia.com">Get Started</Link>
                  </Button>
                </HoverCard>
              </>
            )}
          </div>

          <div className="md:hidden">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)}>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/50 backdrop-blur border-t border-border/30">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-4 border-t border-border/30"
                >
                  {session ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          console.log("Sign Out")
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-300"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/signin"
                        className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="mailto:hello@synergymedia.com"
                        className="block px-3 py-2 text-primary font-medium hover:bg-primary/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
