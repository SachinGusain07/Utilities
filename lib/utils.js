export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error("Copy failed:", err)
    return false
  }
}

export const downloadFile = (content, filename, type = "text/plain") => {
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

export const generateMetaTags = (title, description, keywords) => {
  return {
    title: `${title} | Utilities - Free Online Tools`,
    description,
    keywords: `${keywords}, free tools, online utilities, Utilities`,
  }
}
