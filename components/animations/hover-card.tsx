"use client"

import { motion } from "framer-motion"
import type React from "react"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  scale?: number
  y?: number
}

export function HoverCard({ children, className, scale = 1.02, y = -8 }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        y,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
