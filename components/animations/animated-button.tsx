"use client"

import { motion } from "framer-motion"
import type React from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={className}
    >
      <motion.span
        initial={{ opacity: 1 }}
        whileHover={{
          opacity: 0.9,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
