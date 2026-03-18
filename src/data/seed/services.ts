export type LaunchService = {
  name: string;
  slug: string;
  typeCode: 'ai_official' | 'overseas_account';
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
  audience: string;
  keyRequirement: string;
  plans: Array<{
    name: string;
    billingType: 'monthly' | 'yearly' | 'payg' | 'one_time';
    currency: string;
    price: string;
    priceUnit: string;
    paymentMethodsText: string;
  }>;
  registration: {
    requiresEmail: boolean;
    requiresPhone: boolean;
    requiresPaymentMethod: boolean;
    requiresSpecificRegion: boolean;
    regionNotes: string;
    deviceRequirements: string;
    otherRequirements: string;
  };
  regions: Array<{
    regionCode: string;
    availabilityType: 'supported' | 'restricted' | 'unknown';
    notes: string;
  }>;
  sourceUrls: string[];
};

export const launchServices: LaunchService[] = [
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    typeCode: 'ai_official',
    summary: '适合多数用户先了解的主流通用 AI 服务，重点看订阅门槛、支付方式与规则变化。',
    riskLevel: 'medium',
    audience: '适合希望先比较主流 AI 服务的个人用户与新手。',
    keyRequirement: '通常需要可用账号体系与支付方式。',
    plans: [{ name: 'Plus', billingType: 'monthly', currency: 'USD', price: '20', priceUnit: 'month', paymentMethodsText: '国际支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '需结合地区和支付规则判断。', deviceRequirements: '常规浏览器环境即可。', otherRequirements: '以最新官方规则为准。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例支持地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注规则和可用性变化。' }],
    sourceUrls: ['https://chatgpt.com']
  },
  {
    name: 'Claude',
    slug: 'claude',
    typeCode: 'ai_official',
    summary: '高关注度主流 AI 服务，常被拿来与 ChatGPT 对比，适合做横向选择参考。',
    riskLevel: 'medium',
    audience: '适合已经明确要在主流 AI 服务中做横向比较的用户。',
    keyRequirement: '重点关注订阅入口、支付门槛和规则变化。',
    plans: [{ name: 'Pro', billingType: 'monthly', currency: 'USD', price: '20', priceUnit: 'month', paymentMethodsText: '国际支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '需结合账户和地区要求查看。', deviceRequirements: '浏览器或应用环境。', otherRequirements: '规则调整频率需持续关注。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例支持地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注可用性风险。' }],
    sourceUrls: ['https://claude.ai']
  },
  {
    name: 'Gemini',
    slug: 'gemini',
    typeCode: 'ai_official',
    summary: '与 Google 生态关联较强的 AI 服务，适合重点关注账号体系、支付和地区要求。',
    riskLevel: 'medium',
    audience: '适合已在 Google 生态中或需要理解生态差异的用户。',
    keyRequirement: 'Google 账号体系与地区规则是主要门槛。',
    plans: [{ name: 'Advanced', billingType: 'monthly', currency: 'USD', price: '19.99', priceUnit: 'month', paymentMethodsText: 'Google Play 或支持的支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '与 Google 账号和地区设置相关。', deviceRequirements: 'Google 生态相关环境更常见。', otherRequirements: '需留意服务区域和支付区域。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例支持地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注地区限制。' }],
    sourceUrls: ['https://gemini.google.com']
  },
  {
    name: 'Grok',
    slug: 'grok',
    typeCode: 'ai_official',
    summary: '热点讨论度较高的 AI 服务，适合关注社交平台生态与订阅入口差异的用户。',
    riskLevel: 'medium',
    audience: '适合关注社交平台生态和热点产品的用户。',
    keyRequirement: '需关注账户依赖与订阅入口。',
    plans: [{ name: 'Premium Access', billingType: 'monthly', currency: 'USD', price: '16', priceUnit: 'month', paymentMethodsText: '平台支持的支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: false, regionNotes: '需结合平台规则判断。', deviceRequirements: '网页或应用环境。', otherRequirements: '平台订阅体系可能变化。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注访问和订阅规则。' }],
    sourceUrls: ['https://x.ai']
  },
  {
    name: 'Perplexity',
    slug: 'perplexity',
    typeCode: 'ai_official',
    summary: '偏搜索与检索场景的 AI 服务，适合和通用聊天型产品做定位差异比较。',
    riskLevel: 'medium',
    audience: '适合重视检索、资料整理与搜索型体验的用户。',
    keyRequirement: '主要看订阅方式、支付门槛和使用场景。',
    plans: [{ name: 'Pro', billingType: 'monthly', currency: 'USD', price: '20', priceUnit: 'month', paymentMethodsText: '国际支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: false, regionNotes: '需结合最新支付要求查看。', deviceRequirements: '常规浏览器环境即可。', otherRequirements: '以官方页面说明为准。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例支持地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需进一步确认可用性。' }],
    sourceUrls: ['https://www.perplexity.ai']
  },
  {
    name: 'Midjourney',
    slug: 'midjourney',
    typeCode: 'ai_official',
    summary: '图像生成代表服务，适合重点说明使用入口、订阅方式和账号依赖。',
    riskLevel: 'medium',
    audience: '适合关注图像生成和创作场景的用户。',
    keyRequirement: '需重点看订阅方式、入口和账号依赖。',
    plans: [{ name: 'Basic', billingType: 'monthly', currency: 'USD', price: '10', priceUnit: 'month', paymentMethodsText: '国际支付方式' }],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: false, regionNotes: '以官方订阅页说明为准。', deviceRequirements: '常见入口依赖社区平台或网页。', otherRequirements: '规则可能随入口变化。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例支持地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需关注入口和规则。' }],
    sourceUrls: ['https://www.midjourney.com']
  },
  {
    name: 'Gmail',
    slug: 'gmail',
    typeCode: 'overseas_account',
    summary: '高频基础海外账号，常作为多个海外服务的前置账户，重点看验证和风控要求。',
    riskLevel: 'medium',
    audience: '适合需要基础海外账号体系的用户。',
    keyRequirement: '重点看验证方式、手机号要求和风控点。',
    plans: [],
    registration: { requiresEmail: false, requiresPhone: true, requiresPaymentMethod: false, requiresSpecificRegion: false, regionNotes: '地区和验证策略可能变化。', deviceRequirements: '常规浏览器或移动端环境。', otherRequirements: '资料一致性很重要。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需关注注册验证策略。' }],
    sourceUrls: ['https://accounts.google.com']
  },
  {
    name: 'Google Play',
    slug: 'google-play',
    typeCode: 'overseas_account',
    summary: 'Android 生态关键账号入口，重点关注地区设置、支付要求和账号前提。',
    riskLevel: 'medium',
    audience: '适合 Android 生态用户或需要应用商店能力的用户。',
    keyRequirement: '重点看地区设置、支付方式和账号前提。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '与商店区域和支付区域密切相关。', deviceRequirements: 'Android 或 Google 生态环境更常见。', otherRequirements: '账号区域设置会影响结果。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注区域和支付限制。' }],
    sourceUrls: ['https://play.google.com']
  },
  {
    name: 'Apple ID',
    slug: 'apple-id',
    typeCode: 'overseas_account',
    summary: '苹果生态核心账号，适合从地区、支付和使用限制三个维度判断门槛。',
    riskLevel: 'medium',
    audience: '适合使用苹果生态设备和应用商店的用户。',
    keyRequirement: '重点看地区设置、支付绑定和使用限制。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '账号区域与支付区域关系紧密。', deviceRequirements: '苹果设备或网页环境。', otherRequirements: '资料一致性和区域选择很关键。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注商店区域限制。' }],
    sourceUrls: ['https://appleid.apple.com']
  },
  {
    name: 'X',
    slug: 'x',
    typeCode: 'overseas_account',
    summary: '高讨论度社交平台账号，重点关注注册验证、账号限制和平台规则变化。',
    riskLevel: 'high',
    audience: '适合关注国际社交平台信息流和账号规则的用户。',
    keyRequirement: '重点看注册验证、账号限制和平台规则变化。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: true, requiresPaymentMethod: false, requiresSpecificRegion: false, regionNotes: '不同地区验证策略可能不同。', deviceRequirements: '网页或移动端应用。', otherRequirements: '账号风险和限制变化需持续关注。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注平台规则和可用性风险。' }],
    sourceUrls: ['https://x.com']
  },
  {
    name: 'Amazon',
    slug: 'amazon',
    typeCode: 'overseas_account',
    summary: '海外电商代表账号，重点看支付一致性、风控点和申诉处理成本。',
    riskLevel: 'high',
    audience: '适合关注海外电商、支付和订单生态的用户。',
    keyRequirement: '重点看支付一致性、风控点和申诉难度。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: true, requiresPaymentMethod: true, requiresSpecificRegion: true, regionNotes: '站点区域和支付工具需匹配。', deviceRequirements: '网页或应用环境。', otherRequirements: '资料与支付方式不一致会提高风控概率。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例站点。' }, { regionCode: 'CN', availabilityType: 'restricted', notes: '需关注站点和支付限制。' }],
    sourceUrls: ['https://www.amazon.com']
  },
  {
    name: 'Discord',
    slug: 'discord',
    typeCode: 'overseas_account',
    summary: '社区型账号代表，适合说明验证方式、社区门槛和 AI 生态关联价值。',
    riskLevel: 'medium',
    audience: '适合需要社区、群组和项目协作场景的用户。',
    keyRequirement: '重点看验证方式、社区规范和使用门槛。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: false, requiresSpecificRegion: false, regionNotes: '以平台最新验证策略为准。', deviceRequirements: '网页或应用环境。', otherRequirements: '社区规则会影响账号使用稳定性。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需关注验证和使用规则。' }],
    sourceUrls: ['https://discord.com']
  },
  {
    name: 'Reddit',
    slug: 'reddit',
    typeCode: 'overseas_account',
    summary: '讨论型社区账号，适合从社区内容环境、注册条件和使用限制角度判断。',
    riskLevel: 'medium',
    audience: '适合希望获取社区讨论和经验内容的用户。',
    keyRequirement: '重点看注册条件、社区限制和内容环境。',
    plans: [],
    registration: { requiresEmail: true, requiresPhone: false, requiresPaymentMethod: false, requiresSpecificRegion: false, regionNotes: '以平台当前注册流程为准。', deviceRequirements: '网页或应用环境。', otherRequirements: '社区规则和账号限制需重点关注。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需关注平台策略变化。' }],
    sourceUrls: ['https://www.reddit.com']
  },
  {
    name: 'Google Account',
    slug: 'google-account',
    typeCode: 'overseas_account',
    summary: 'Google 生态上层账号体系，重点作用是帮助用户理解 Gmail 与 Google Play 的关系。',
    riskLevel: 'medium',
    audience: '适合想先理解 Google 生态账号体系的用户。',
    keyRequirement: '重点是理解账号边界、验证要求和生态依赖。',
    plans: [],
    registration: { requiresEmail: false, requiresPhone: true, requiresPaymentMethod: false, requiresSpecificRegion: false, regionNotes: '与生态服务结合时可能受地区限制。', deviceRequirements: '网页或移动端环境。', otherRequirements: '理解与 Gmail、Google Play 的关系比单纯注册更重要。' },
    regions: [{ regionCode: 'US', availabilityType: 'supported', notes: '示例地区。' }, { regionCode: 'CN', availabilityType: 'unknown', notes: '需关注注册验证策略。' }],
    sourceUrls: ['https://accounts.google.com']
  }
];
