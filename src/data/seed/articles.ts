export const coreArticles = [
  {
    title: '新手如何选择适合自己的 AI 订阅服务',
    slug: 'how-to-choose-ai-subscription',
    category: 'guide',
    summary: '帮助新手理解主流 AI 服务的差异。',
    content:
      '如果你第一次接触海外 AI 服务，建议先从使用场景、价格门槛、支付条件和规则稳定性四个维度判断，而不是只看热度。ChatGPT、Claude、Gemini 分别代表了不同的生态和使用路径，Grok、Perplexity、Midjourney 则更适合在明确场景后再考虑。先做需求判断，再看门槛和风险，会比直接追热门更稳。',
    relatedServiceSlugs: ['chatgpt', 'claude', 'gemini']
  },
  {
    title: '海外账号注册前需要知道的 7 个问题',
    slug: 'overseas-account-checklist',
    category: 'guide',
    summary: '先理解门槛、风险和适用场景。',
    content:
      '在注册海外账号前，建议先确认你需要的是哪一类账号、是否有地区要求、是否涉及支付方式、是否需要手机号或额外验证、是否存在风控风险，以及后续是否真的会长期使用。Gmail、Apple ID、Google Play、X、Amazon 的门槛和用途并不一样，先理解规则，再决定是否继续操作，能明显减少后续成本。',
    relatedServiceSlugs: ['gmail', 'apple-id', 'google-play']
  },
  {
    title: 'AI 订阅前要先看哪些门槛',
    slug: 'ai-subscription-thresholds',
    category: 'guide',
    summary: '整理订阅、支付和地区门槛。',
    content:
      'AI 订阅前最值得先看的不是模型宣传，而是实际门槛：是否需要特定账号体系、是否需要支付工具、是否存在地区限制、规则是否经常变化、取消或退款规则是否清晰。对大多数用户来说，只要这五个问题里有两个以上不确定，就不适合直接下判断。',
    relatedServiceSlugs: ['chatgpt', 'claude', 'gemini', 'midjourney']
  },
  {
    title: '为什么价格、规则、门槛会经常变化',
    slug: 'why-pricing-and-rules-change',
    category: 'risk',
    summary: '解释为什么必须看更新时间与来源。',
    content:
      '海外服务的价格、订阅层级、地区要求和账号门槛都可能随着平台策略、支付体系、风险控制或政策环境变化而调整。因此，任何判断都必须结合最近审核时间和公开来源来理解，而不是把历史经验当成长期稳定规则。站内展示的信息应被理解为决策参考，而不是保证结果。',
    relatedServiceSlugs: ['chatgpt', 'gmail']
  }
] as const;
