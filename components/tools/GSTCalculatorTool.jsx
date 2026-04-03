"use client"

import React, { useState, useMemo, useEffect } from "react"
import ToolLayout from "@/components/ToolLayout"
import { 
  Calculator, 
  CircleHelp, 
  CircleCheckBig, 
  ArrowRight, 
  ReceiptText, 
  Landmark, 
  ChevronDown, 
  Percent, 
  Hash, 
  TriangleAlert, 
  Sparkles, 
  Globe,
  ArrowUpRight, 
  Image as ImageIcon, 
  Type, 
  ShieldCheck,
  FileText, 
  ShieldAlert
} from "lucide-react"
import gsap from "gsap"

export default function GSTCalculatorTool() {
  const [amount, setAmount] = useState("")
  const [gstRate, setGstRate] = useState("18")
  const [customRate, setCustomRate] = useState("")
  const [mode, setMode] = useState("exclude") 
  const [isInterState, setIsInterState] = useState(false)

  // Sub-components moved inside to prevent HMR Factory errors
  const ResultRow = ({ label, value, isBold = false }) => (
    <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
      <span className="text-zinc-500 text-sm font-bold uppercase tracking-tight">{label}</span>
      <span className={`font-mono ${isBold ? 'text-white font-black text-xl' : 'text-zinc-200 font-medium'}`}>
        ₹{value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </div>
  )

  const FAQItem = ({ q, a }) => (
    <div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/20 transition-all group">
      <h4 className="text-white font-black mb-3 flex items-center gap-3">
        <p size={20} className="text-white" > {q} </p>
      </h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{a}</p>
    </div>
  )

  const ToolBacklink = ({ title, href, icon: Icon }) => (
    <a href={href} className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-white hover:text-black transition-all group">
      <div className="flex items-center gap-4">
        <Icon size={20} className="group-hover:text-black" />
        <span className="font-black uppercase text-xs tracking-widest">{title}</span>
      </div>
      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  )

  const results = useMemo(() => {
    const num = parseFloat(amount) || 0
    const activeRate = gstRate === "custom" ? (parseFloat(customRate) || 0) : parseFloat(gstRate)
    let base, gst, total;
    if (mode === "exclude") {
      base = num; gst = (num * activeRate) / 100; total = num + gst;
    } else {
      base = num / (1 + activeRate / 100); gst = num - base; total = num;
    }
    return {
      baseAmount: base, gstAmount: gst, totalAmount: total,
      cgst: isInterState ? 0 : gst / 2, sgst: isInterState ? 0 : gst / 2,
      igst: isInterState ? gst : 0, rate: activeRate
    }
  }, [amount, gstRate, customRate, mode, isInterState])

  useEffect(() => {
    gsap.from(".animate-reveal", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power2.out" })
  }, [])

  return (
    <ToolLayout>
      <div className="min-h-screen bg-black text-white py-20 px-4 selection:bg-white selection:text-black">
        <div className="max-w-6xl mx-auto">
          
          <header className="text-center mb-20 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Sparkles size={12} /> Indian Compliance 2024
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">GST Tool</h1>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto font-medium tracking-tight">Professional-grade taxation calculator. High precision CGST, SGST, and IGST breakdowns.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[3rem] overflow-hidden border border-white/10 bg-black animate-reveal shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]">
            
            <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10 space-y-12">
              <div className="flex p-1.5 bg-zinc-900 rounded-2xl border border-white/5">
                <button onClick={() => setMode("exclude")} className={`flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${mode === "exclude" ? "bg-white text-black" : "text-zinc-500 hover:text-white"}`}>+ Add GST</button>
                <button onClick={() => setMode("include")} className={`flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${mode === "include" ? "bg-white text-black" : "text-zinc-500 hover:text-white"}`}>- Remove GST</button>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] flex items-center gap-2"><Hash size={14} /> Amount (INR)</label>
                <div className="relative"><span className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-700 text-4xl font-black">₹</span>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-transparent border-b-2 border-white/10 py-8 pl-10 text-5xl font-black text-white outline-none focus:border-white transition-all placeholder:text-zinc-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] flex items-center gap-2"><Percent size={14} /> Slab</label>
                  <div className="relative">
                    <select value={gstRate} onChange={(e) => setGstRate(e.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-5 text-white font-black appearance-none outline-none cursor-pointer focus:border-white">
                      <option value="5">5% GST</option><option value="12">12% GST</option><option value="18">18% GST</option><option value="28">28% GST</option><option value="custom">CUSTOM</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
                  </div>
                </div>
                {gstRate === "custom" && (
                  <div className="space-y-4 animate-reveal"><label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Rate %</label>
                    <input type="number" value={customRate} onChange={(e) => setCustomRate(e.target.value)} placeholder="0" className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-5 text-white font-black outline-none" />
                  </div>
                )}
              </div>

              <div onClick={() => setIsInterState(!isInterState)} className="flex items-center justify-between p-8 bg-zinc-950 border border-white/5 rounded-[2rem] cursor-pointer hover:border-white/30 transition-all">
                <div className="flex items-center gap-4"><Globe size={24} /><div><p className="text-xs font-black text-white uppercase tracking-widest">Inter-state (IGST)</p></div></div>
                <div className={`w-12 h-6 rounded-full transition-all relative ${isInterState ? 'bg-white' : 'bg-zinc-800'}`}><div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${isInterState ? 'left-7 bg-black' : 'left-1 bg-zinc-500'}`} /></div>
              </div>
            </div>

            <div className="lg:col-span-7 p-10 md:p-14 bg-zinc-950/50">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-12"><h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700">Financial Summary</h3><Landmark size={20} className="text-zinc-800" /></div>
                <div className="space-y-2">
                  <ResultRow label="Net Base Price" value={results.baseAmount} />
                  {!isInterState ? (
                    <><ResultRow label="CGST (Central)" value={results.cgst} /><ResultRow label="SGST (State)" value={results.sgst} /></>
                  ) : (
                    <ResultRow label="IGST (Integrated)" value={results.igst} />
                  )}
                  <div className="py-12">
                    <div className="flex justify-between items-center p-8 bg-white text-black rounded-[2.5rem]">
                      <span className="font-black text-xs uppercase tracking-widest">Tax Component</span>
                      <span className="text-4xl font-mono font-black">+₹{results.gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-10 border-t border-dashed border-white/10 text-center">
                  <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-4">Total Amount Payable</p>
                  <div className="text-7xl md:text-9xl font-black text-white tabular-nums tracking-tighter">₹{results.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                </div>
              </div>
            </div>
          </div>

          {/* BACKLINKS SECTION */}
          <section className="mt-32 animate-reveal">
            <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-12 text-center">Internal Ecosystem</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ToolBacklink title="Word Count" href="/tools/word-counter" icon={Type} />
              <ToolBacklink title="Image Resize" href="/tools/image-resizer" icon={ImageIcon} />
              <ToolBacklink title="Vault Gen" href="/tools/password-generator" icon={ShieldCheck} />
              <ToolBacklink title="Loan Tool" href="/tools/loan-calculator" icon={Calculator} />
            </div>
          </section>

          {/* SEO DATA SECTION */}
          <div className="mt-40 pt-32 border-t border-white/5 space-y-40 animate-reveal">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-10">
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">GST Compliance.</h2>
                <p className="text-zinc-500 text-lg leading-relaxed">Calculating Indian Goods and Services Tax requires 100% accuracy. Our system uses the latest statutory formulas to split tax into Central and State components automatically.</p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
                    <CircleCheckBig className="text-white" size={24} /><p className="text-sm font-bold uppercase tracking-widest text-zinc-300 underline decoration-white/20 underline-offset-4">HSN Ready Logic</p>
                  </div>
                  <div className="flex gap-4 items-center p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
                    <CircleCheckBig className="text-white" size={24} /><p className="text-sm font-bold uppercase tracking-widest text-zinc-300 underline decoration-white/20 underline-offset-4">GSTR-1 Compatible</p>
                  </div>
                </div>
              </div>
              <div className="p-12 bg-white text-black rounded-[3rem] shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <h3 className="text-2xl font-black mb-10 flex items-center gap-3 tracking-tighter uppercase italic"><FileText /> Formulas</h3>
                <div className="space-y-12 font-mono">
                  <div><p className="text-[10px] font-black uppercase mb-2 opacity-50">Inclusive Reverse Math</p><p className="text-xl font-bold italic">Base = Total / [1 + (Rate/100)]</p></div>
                  <div><p className="text-[10px] font-black uppercase mb-2 opacity-50">Exclusive Addition</p><p className="text-xl font-bold italic">GST = (Base * Rate) / 100</p></div>
                </div>
              </div>
            </section>

            <section className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Tax Slabs 2024</h2>
                <p className="text-zinc-500 max-w-xl mx-auto">Correct slab selection is vital for legal HSN reporting.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { r: "5%", d: "Necessities, Spices" },
                  { r: "12%", d: "Computers, Mobiles" },
                  { r: "18%", d: "IT, Soap, Furniture" },
                  { r: "28%", d: "Luxury, Cars, Cement" }
                ].map(s => (
                  <div key={s.r} className="p-10 border border-white/5 rounded-[2rem] text-center bg-zinc-950 hover:bg-white hover:text-black transition-all">
                    <p className="text-4xl font-black mb-2">{s.r}</p><p className="text-[10px] font-bold uppercase tracking-widest opacity-60">{s.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-20 pb-40">
              <h2 className="text-5xl font-black text-white text-center italic tracking-tighter uppercase">Support / FAQ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FAQItem q="CGST + SGST vs IGST?" a="CGST/SGST is for sales inside your state (50/50 split). IGST is for sales to another state (100% Central collection)." />
                <FAQItem q="Inclusive Pricing?" a="MRP often includes GST. Our tool removes the tax to show you the actual cost price (Base amount)." />
                <FAQItem q="HSN Requirement?" a="HSN codes define the GST slab. Once you know your product's slab, enter it here for exact tax split." />
                <FAQItem q="Security?" a="Calculations run on your CPU locally. We do not store financial data or invoices." />
              </div>
            </section>
          </div>

        </div>
      </div>
    </ToolLayout>
  )
}