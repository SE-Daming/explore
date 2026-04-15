// Tool data schema and utilities
export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
  rating: number;
  pricing: string;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  website: string;
  logo?: string;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  toolCount: number;
}

// Sample tool data
export const tools: Tool[] = [
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    description: "The leading AI writing assistant for marketing teams. Create high-quality content 10x faster with AI-powered writing.",
    category: "ai-writing",
    rating: 4.8,
    pricing: "From $49/mo",
    features: ["Long-form content", "Brand voice", "Team collaboration", "SEO mode", "50+ templates"],
    pros: ["High quality output", "Excellent for marketing content", "Strong brand voice feature"],
    cons: ["Higher price point", "Learning curve", "AI word limits"],
    affiliateUrl: "https://jasper.ai/?via=aitoolshub",
    website: "https://jasper.ai"
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    description: "Generate marketing copy, blog posts, and social media content in seconds with AI.",
    category: "ai-writing",
    rating: 4.5,
    pricing: "Free plan available",
    features: ["Templates", "Workflows", "API access", "Chat interface", "Team features"],
    pros: ["Generous free plan", "Easy to use", "Good for short content"],
    cons: ["Long-form could be better", "Limited customization"],
    affiliateUrl: "https://copy.ai/?via=aitoolshub",
    website: "https://copy.ai"
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    description: "Create stunning AI-generated art and images from text prompts. Perfect for designers and creators.",
    category: "ai-image",
    rating: 4.9,
    pricing: "From $10/mo",
    features: ["High quality output", "Style control", "Variations", "Upscaling", "Pan/Zoom"],
    pros: ["Best image quality", "Strong artistic style", "Active community"],
    cons: ["Discord-only interface", "No API", "Usage limits"],
    affiliateUrl: "https://midjourney.com/",
    website: "https://midjourney.com"
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "AI pair programmer that helps you write better code faster. Suggests whole lines or entire functions.",
    category: "ai-code",
    rating: 4.7,
    pricing: "From $10/mo",
    features: ["Code completion", "Multi-language support", "IDE integration", "Context awareness", "Chat"],
    pros: ["Seamless IDE integration", "Multi-language", "Improves over time"],
    cons: ["Can suggest incorrect code", "Requires review", "Subscription cost"],
    affiliateUrl: "https://github.com/features/copilot",
    website: "https://github.com/features/copilot"
  },
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor with intelligent code generation and context-aware suggestions.",
    category: "ai-code",
    rating: 4.8,
    pricing: "From $20/mo",
    features: ["AI chat", "Codebase context", "Multi-file editing", "Code explanation", "Refactoring"],
    pros: ["Excellent code understanding", "Full codebase context", "Great UX"],
    cons: ["Newer product", "VS Code fork", "Learning curve"],
    affiliateUrl: "https://cursor.sh/",
    website: "https://cursor.sh"
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    description: "AI-powered workspace that helps you write, brainstorm, and organize your work more efficiently.",
    category: "productivity",
    rating: 4.6,
    pricing: "From $10/mo",
    features: ["Writing assistant", "Summarization", "Q&A", "Translation", "Action items"],
    pros: ["Integrated with Notion", "Easy to use", "Good summarization"],
    cons: ["Limited outside Notion", "Basic features", "Add-on cost"],
    affiliateUrl: "https://notion.so/product/ai?via=aitoolshub",
    website: "https://notion.so"
  },
  {
    name: "Descript",
    slug: "descript",
    description: "AI-powered video and podcast editing. Edit media like a doc with automatic transcription.",
    category: "ai-video",
    rating: 4.5,
    pricing: "Free plan available",
    features: ["Transcription", "Overdub", "Screen recording", "Filler word removal", "Templates"],
    pros: ["Unique text-based editing", "Great transcription", "All-in-one tool"],
    cons: ["Resource intensive", "Learning curve", "Limited effects"],
    affiliateUrl: "https://descript.com/",
    website: "https://descript.com"
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    description: "Generate realistic AI voices for any content. Clone voices or use pre-made AI voices.",
    category: "ai-audio",
    rating: 4.7,
    pricing: "Free plan available",
    features: ["Voice cloning", "Multi-language", "API", "Voice library", "Speech-to-speech"],
    pros: ["Most realistic voices", "Easy voice cloning", "Good free tier"],
    cons: ["Clone quality varies", "Character limits", "Pricing tiers"],
    affiliateUrl: "https://elevenlabs.io/",
    website: "https://elevenlabs.io"
  }
];

export const categories: Category[] = [
  { name: "AI Writing", slug: "ai-writing", icon: "✍️", description: "AI-powered writing tools for content creators", toolCount: 45 },
  { name: "AI Image", slug: "ai-image", icon: "🎨", description: "Generate stunning images with AI", toolCount: 32 },
  { name: "AI Code", slug: "ai-code", icon: "💻", description: "AI coding assistants", toolCount: 28 },
  { name: "AI Video", slug: "ai-video", icon: "🎬", description: "Create and edit videos with AI", toolCount: 18 },
  { name: "AI Audio", slug: "ai-audio", icon: "🎵", description: "Generate voices and audio with AI", toolCount: 15 },
  { name: "Productivity", slug: "productivity", icon: "⚡", description: "AI tools to boost productivity", toolCount: 24 },
];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter(tool => tool.category === categorySlug);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}
