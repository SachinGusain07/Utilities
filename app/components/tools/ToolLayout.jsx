"use client"

export default function ToolLayout({ title, description, children }) {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-foreground/70">{description}</p>
      </div>
      {children}
    </div>
  )
}
