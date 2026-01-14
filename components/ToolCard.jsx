"use client"

import Link from "next/link"
import { memo } from "react"
import { ArrowRight } from "lucide-react"

const ToolCard = memo(function ToolCard({ title, description, href, tags }) {
  return (
    <Link href={href} className="group block h-full">
      <div className="card h-full hover:shadow-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col h-full">
          <div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag) => (
              <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all">
            Use Tool
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
})

export default ToolCard
