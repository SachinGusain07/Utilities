export default function sitemap() {
  const baseUrl = "https://utilities-vnhk.vercel.app"

  const tools = [
    "word-counter",
    "html-formatter",
    "markdown-to-html",
    "css-minifier",
    "base64-encoder",
    "url-encoder",
    "uuid-generator",
    "hash-generator",
    "password-generator",
    "regex-tester",
    "url-shortener",
    "gst-calculator",
    "sip-calculator",
    "loan-calculator",
    "salary-calculator",
    "cover-letter-generator",
    "resume-keyword-checker",
    "interview-question-generator",
    "qr-code",
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ]
}
