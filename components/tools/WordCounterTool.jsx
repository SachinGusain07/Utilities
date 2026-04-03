"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import ToolLayout from "@/components/ToolLayout"
import { 
  Type, Trash2, Clipboard, Layers, Clock, 
  AlignLeft, Hash, ShieldCheck, Image as ImageIcon, 
  Calculator, Sparkles, CircleHelp, FileText, 
  ArrowUpRight, CaseSensitive, Languages
} from "lucide-react"
import gsap from "gsap"

export default function WordCounterTool() {
  const [text, setText] = useState("")
  const containerRef = useRef(null)

  // --- LOGIC ---
  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, "").length
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0
    const paragraphs = trimmed ? trimmed.split(/\n\n+/).filter(Boolean).length : 0
    const readingTime = Math.ceil(words / 200) || 0
    const speakingTime = Math.ceil(words / 130) || 0

    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime }
  }, [text])

  useEffect(() => {
    gsap.from(".animate-reveal", { opacity: 0, y: 20, duration: 0.6, stagger: 0.08, ease: "power2.out" })
  }, [])

  const handlePaste = async () => {
    const pasted = await navigator.clipboard.readText()
    setText(pasted)
  }

  // --- SUB-COMPONENTS ---
  const StatCard = ({ label, value, icon: Icon, desc }) => (
    <div className="animate-reveal p-6 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white/5 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
          <Icon size={18} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">{desc}</span>
      </div>
      <div>
        <div className="text-4xl font-black text-white tabular-nums mb-1">{value}</div>
        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{label}</div>
      </div>
    </div>
  )

  const ToolLink = ({ title, href, icon: Icon }) => (
    <a href={href} className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-white hover:text-black transition-all group">
      <div className="flex items-center gap-4">
        <Icon size={18} />
        <span className="font-black uppercase text-[10px] tracking-widest">{title}</span>
      </div>
      <ArrowUpRight size={16} />
    </a>
  )

  return (
    <ToolLayout>
      <div ref={containerRef} className="min-h-screen bg-black text-white py-16 px-4 selection:bg-white selection:text-black">
        <div className="max-w-6xl mx-auto">
          
          <header className="text-center mb-16 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={12} /> Pro Text Analysis
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Word Counter</h1>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto font-medium tracking-tight">Real-time metrics for writers and SEO experts. 100% Client-side privacy.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-reveal">
            <div className="lg:col-span-8 space-y-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing or paste content..."
                className="w-full h-[450px] bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 text-xl font-medium text-white outline-none focus:border-white transition-all placeholder:text-zinc-900 resize-none"
              />
              <div className="flex flex-wrap gap-3">
                <button onClick={handlePaste} className="flex-1 py-4 bg-white text-black rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                  <Clipboard size={14}/> Paste
                </button>
                <button onClick={() => setText("")} className="px-6 py-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-500 hover:text-red-500 transition-all">
                  <Trash2 size={18}/>
                </button>
                <button onClick={() => setText(text.toUpperCase())} className="px-6 py-4 bg-zinc-950 border border-white/5 rounded-2xl text-[10px] font-black text-zinc-400 hover:text-white">
                  UPPER
                </button>
                <button onClick={() => setText(text.toLowerCase())} className="px-6 py-4 bg-zinc-950 border border-white/5 rounded-2xl text-[10px] font-black text-zinc-400 hover:text-white">
                  LOWER
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 gap-4">
              <StatCard label="Words" value={stats.words} icon={AlignLeft} desc="Total" />
              <StatCard label="Characters" value={stats.chars} icon={Hash} desc="+ Spaces" />
              <StatCard label="Reading" value={`${stats.readingTime}m`} icon={Clock} desc="200 WPM" />
              <StatCard label="Speaking" value={`${stats.speakingTime}m`} icon={Languages} desc="130 WPM" />
            </div>
          </div>

          {/* BACKLINKS */}
          <section className="mt-24 animate-reveal">
            <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-10 text-center">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ToolLink title="GST Calc" href="/tools/gst-calculator" icon={Calculator} />
              <ToolLink title="Image Resize" href="/tools/image-resizer" icon={ImageIcon} />
              <ToolLink title="Passwords" href="/tools/password-generator" icon={ShieldCheck} />
              <ToolLink title="PDF Editor" href="/tools/pdf-editor" icon={FileText} />
            </div>
          </section>

          {/* SEO DATA */}
          <div className="mt-40 pt-32 border-t border-white/5 space-y-32 animate-reveal">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Content Limits.</h2>
                <p className="text-zinc-500 text-lg leading-relaxed">Stay within the technical constraints of social platforms and search engines. Our tool ensures your metadata and posts are never truncated.</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5 flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-zinc-400">Twitter (X)</span>
                    <span className="text-white font-mono">280 Chars</span>
                  </div>
                  <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5 flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-zinc-400">Google Meta</span>
                    <span className="text-white font-mono">155 Chars</span>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-white text-black rounded-[3rem]">
                <h3 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3"><CaseSensitive /> Writing Guide</h3>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                  <li className="flex justify-between border-b border-black/10 pb-2"><span>Average Sentence</span> <span>15-20 Words</span></li>
                  <li className="flex justify-between border-b border-black/10 pb-2"><span>SEO Blog Post</span> <span>1200+ Words</span></li>
                  <li className="flex justify-between border-b border-black/10 pb-2"><span>Email Subject</span> <span>40 Chars</span></li>
                </ul>
              </div>
            </section>
          </div>

        </div>
      </div>
    </ToolLayout>
  )
}