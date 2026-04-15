// Affiliate configuration - easy to update affiliate links
export const affiliateLinks: Record<string, string> = {
  jasper: "https://jasper.ai/?via=aitoolshub",
  copyai: "https://copy.ai/?via=aitoolshub",
  writesonic: "https://writesonic.com/?via=aitoolshub",
  rytr: "https://rytr.me/?via=aitoolshub",
  notion: "https://notion.so/product/ai?via=aitoolshub",
  midjourney: "https://midjourney.com/",
  dalle: "https://openai.com/dall-e-3",
  github_copilot: "https://github.com/features/copilot",
  cursor: "https://cursor.sh/",
  descript: "https://descript.com/",
  elevenlabs: "https://elevenlabs.io/",
};

// Helper to add affiliate tracking
export function getAffiliateLink(tool: string, fallback?: string): string {
  const key = tool.toLowerCase().replace(/[\s-]/g, '_').replace(/[^a-z0-9_]/g, '');
  return affiliateLinks[key] || fallback || '#';
}
