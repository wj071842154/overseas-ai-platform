export type LaunchService = {
  name: string;
  slug: string;
  typeCode: 'ai_official' | 'overseas_account';
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
};

export const launchServices: LaunchService[] = [
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    typeCode: 'ai_official',
    summary: '适合多数用户先了解的主流通用 AI 服务，重点看订阅门槛、支付方式与规则变化。',
    riskLevel: 'medium'
  },
  {
    name: 'Claude',
    slug: 'claude',
    typeCode: 'ai_official',
    summary: '高关注度主流 AI 服务，常被拿来与 ChatGPT 对比，适合做横向选择参考。',
    riskLevel: 'medium'
  },
  {
    name: 'Gemini',
    slug: 'gemini',
    typeCode: 'ai_official',
    summary: '与 Google 生态关联较强的 AI 服务，适合重点关注账号体系、支付和地区要求。',
    riskLevel: 'medium'
  },
  {
    name: 'Grok',
    slug: 'grok',
    typeCode: 'ai_official',
    summary: '热点讨论度较高的 AI 服务，适合关注社交平台生态与订阅入口差异的用户。',
    riskLevel: 'medium'
  },
  {
    name: 'Perplexity',
    slug: 'perplexity',
    typeCode: 'ai_official',
    summary: '偏搜索与检索场景的 AI 服务，适合和通用聊天型产品做定位差异比较。',
    riskLevel: 'medium'
  },
  {
    name: 'Midjourney',
    slug: 'midjourney',
    typeCode: 'ai_official',
    summary: '图像生成代表服务，适合重点说明使用入口、订阅方式和账号依赖。',
    riskLevel: 'medium'
  },
  {
    name: 'Gmail',
    slug: 'gmail',
    typeCode: 'overseas_account',
    summary: '高频基础海外账号，常作为多个海外服务的前置账户，重点看验证和风控要求。',
    riskLevel: 'medium'
  },
  {
    name: 'Google Play',
    slug: 'google-play',
    typeCode: 'overseas_account',
    summary: 'Android 生态关键账号入口，重点关注地区设置、支付要求和账号前提。',
    riskLevel: 'medium'
  },
  {
    name: 'Apple ID',
    slug: 'apple-id',
    typeCode: 'overseas_account',
    summary: '苹果生态核心账号，适合从地区、支付和使用限制三个维度判断门槛。',
    riskLevel: 'medium'
  },
  {
    name: 'X',
    slug: 'x',
    typeCode: 'overseas_account',
    summary: '高讨论度社交平台账号，重点关注注册验证、账号限制和平台规则变化。',
    riskLevel: 'high'
  },
  {
    name: 'Amazon',
    slug: 'amazon',
    typeCode: 'overseas_account',
    summary: '海外电商代表账号，重点看支付一致性、风控点和申诉处理成本。',
    riskLevel: 'high'
  },
  {
    name: 'Discord',
    slug: 'discord',
    typeCode: 'overseas_account',
    summary: '社区型账号代表，适合说明验证方式、社区门槛和 AI 生态关联价值。',
    riskLevel: 'medium'
  },
  {
    name: 'Reddit',
    slug: 'reddit',
    typeCode: 'overseas_account',
    summary: '讨论型社区账号，适合从社区内容环境、注册条件和使用限制角度判断。',
    riskLevel: 'medium'
  },
  {
    name: 'Google Account',
    slug: 'google-account',
    typeCode: 'overseas_account',
    summary: 'Google 生态上层账号体系，重点作用是帮助用户理解 Gmail 与 Google Play 的关系。',
    riskLevel: 'medium'
  }
];
