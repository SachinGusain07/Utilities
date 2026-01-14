"use client"

import { memo } from "react"

const ToolLayout = memo(function ToolLayout({ title, description, children }) {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      </div>
      <div className="bg-card border border-border rounded-lg p-8">{children}</div>
    </div>
  )
})

export default ToolLayout
