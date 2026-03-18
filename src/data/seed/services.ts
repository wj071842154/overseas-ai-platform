export type LaunchService = {
  name: string;
  slug: string;
  typeCode: 'ai_official' | 'overseas_account';
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
};

export const launchServices: LaunchService[] = [
  { name: 'ChatGPT', slug: 'chatgpt', typeCode: 'ai_official', summary: '主流通用 AI 服务。', riskLevel: 'medium' },
  { name: 'Claude', slug: 'claude', typeCode: 'ai_official', summary: '高关注度主流 AI 服务。', riskLevel: 'medium' },
  { name: 'Gemini', slug: 'gemini', typeCode: 'ai_official', summary: 'Google 生态相关 AI 服务。', riskLevel: 'medium' },
  { name: 'Grok', slug: 'grok', typeCode: 'ai_official', summary: '热点关注型 AI 服务。', riskLevel: 'medium' },
  { name: 'Perplexity', slug: 'perplexity', typeCode: 'ai_official', summary: '偏搜索场景的 AI 服务。', riskLevel: 'medium' },
  { name: 'Midjourney', slug: 'midjourney', typeCode: 'ai_official', summary: '图像生成代表服务。', riskLevel: 'medium' },
  { name: 'Gmail', slug: 'gmail', typeCode: 'overseas_account', summary: '高频基础海外账号。', riskLevel: 'medium' },
  { name: 'Google Play', slug: 'google-play', typeCode: 'overseas_account', summary: 'Android 生态关键账号入口。', riskLevel: 'medium' },
  { name: 'Apple ID', slug: 'apple-id', typeCode: 'overseas_account', summary: '苹果生态核心账号。', riskLevel: 'medium' },
  { name: 'X', slug: 'x', typeCode: 'overseas_account', summary: '高讨论度社交平台账号。', riskLevel: 'high' },
  { name: 'Amazon', slug: 'amazon', typeCode: 'overseas_account', summary: '海外电商代表账号。', riskLevel: 'high' },
  { name: 'Discord', slug: 'discord', typeCode: 'overseas_account', summary: '社区型账号代表。', riskLevel: 'medium' },
  { name: 'Reddit', slug: 'reddit', typeCode: 'overseas_account', summary: '讨论型社区账号。', riskLevel: 'medium' },
  { name: 'Google Account', slug: 'google-account', typeCode: 'overseas_account', summary: 'Google 生态上层账号体系。', riskLevel: 'medium' }
];
