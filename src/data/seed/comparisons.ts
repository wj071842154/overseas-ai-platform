export const coreComparisons = [
  {
    title: 'ChatGPT vs Claude',
    slug: 'chatgpt-vs-claude',
    category: 'comparison',
    summary: '对比两类主流 AI 服务的门槛与风险。',
    content:
      '这组对比最适合已经确认自己要订阅主流 AI 服务，但还没有决定具体选哪一个的用户。比较时建议优先看价格、支付门槛、账号体系要求和规则稳定性，而不是只看单点能力评价。对多数新手来说，先看门槛与风险，再看偏好，会比先看模型讨论更有效。',
    relatedServiceSlugs: ['chatgpt', 'claude']
  },
  {
    title: 'ChatGPT vs Gemini',
    slug: 'chatgpt-vs-gemini',
    category: 'comparison',
    summary: '对比 OpenAI 与 Google 生态差异。',
    content:
      '这组对比更适合已经在 Google 生态中，或希望理解不同账号体系差异的用户。除了价格外，还要特别关注账号依赖、支付条件、地区限制和生态整合方式。对很多用户来说，这不是单纯的模型选择，而是使用路径和门槛选择。',
    relatedServiceSlugs: ['chatgpt', 'gemini']
  },
  {
    title: 'Apple ID vs Google Play 账户',
    slug: 'apple-id-vs-google-play',
    category: 'comparison',
    summary: '对比应用商店生态、支付和地区要求。',
    content:
      '这组对比主要帮助用户理解 iOS 和 Android 两套应用分发体系在地区、支付和使用限制上的差异。Apple ID 更偏苹果生态内部规则，Google Play 则更强调 Google 账号体系和区域设置。真正的差异不在“哪个更好”，而在“哪个更适合你当前的设备和用途”。',
    relatedServiceSlugs: ['apple-id', 'google-play']
  },
  {
    title: 'Gmail vs Google Account',
    slug: 'gmail-vs-google-account',
    category: 'comparison',
    summary: '澄清 Gmail 与 Google Account 的关系。',
    content:
      '这组内容重点不是对抗性比较，而是概念澄清。很多用户会把 Gmail 直接等同于 Google Account，但实际上 Gmail 更像一个常见入口，而 Google Account 是更上层的账号体系。理解这层关系后，再去看 Google Play 或 Gemini 的门槛，会清晰很多。',
    relatedServiceSlugs: ['gmail', 'google-account']
  }
] as const;
