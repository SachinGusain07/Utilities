import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatNumber = (num :any) => {
  return new Intl.NumberFormat().format(num)
}

export const copyToClipboard = async (text :any) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error("Copy failed:", err)
    return false
  }
}

export const downloadFile = (content :any, filename :any, type = "text/plain") => {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}


export const generateMetaTags = (title :any , description :any, keywords :any) => {
  return {
    title: `${title} | Utilities - Free Online Tools`,
    description,
    keywords: `${keywords}, free tools, online utilities, Utilities`,
  }
}
