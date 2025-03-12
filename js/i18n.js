// 多语言支持
(function() {
  // 默认语言
  let currentLang = 'zh';
  
  // 语言数据
  const translations = {
    zh: {
      // 通用
      app_name: "38种笑容训练",
      
      // 导航
      nav_features: "功能",
      nav_screenshots: "截图",
      nav_testimonials: "用户评价",
      nav_pricing: "订阅",
      
      // 英雄区
      hero_title: "掌握38种笑容，成为社交场合的魔法师",
      hero_subtitle: "通过专业的笑容训练，轻松应对各种社交场景，让你的魅力倍增！",
      cta_download: "立即下载",
      cta_try_demo: "体验示例",
      
      // 社会认同
      social_users: "活跃用户",
      social_rating: "用户评分",
      social_featured: "荣登推荐榜单：",
      
      // 功能特点
      features_title: "强大功能，让笑容训练变得简单有趣",
      feature1_title: "38种专业笑容训练",
      feature1_desc: "详细的视频教程和图文指导，手把手教你掌握38种适用于不同场合的专业笑容。",
      feature2_title: "AI笑容分析",
      feature2_desc: "使用前置摄像头，AI实时分析你的笑容，给出专业评分和改进建议。",
      feature3_title: "进度追踪",
      feature3_desc: "详细记录你的练习情况，可视化展示进步轨迹，激励持续练习。",
      feature4_title: "社区互动",
      feature4_desc: "与其他学习者交流心得，分享成果，互相鼓励，共同进步。",
      feature5_title: "情境模拟",
      feature5_desc: "模拟各种社交场景，练习在真实情境中运用不同笑容，提升应用能力。",
      feature6_title: "专家指导",
      feature6_desc: "顶级微笑教练和心理学家提供的专业课程和个性化咨询服务。",
      
      // 痛点
      pain_title: "笑容，比你想象的更重要",
      pain1_title: "社交尴尬",
      pain1_desc: "不知道何时该笑、如何笑，导致社交场合频频出现尴尬瞬间？",
      pain2_title: "表达困难",
      pain2_desc: "想表达友好但笑容僵硬，想表达自信但笑容显得做作？",
      pain3_title: "误解困扰",
      pain3_desc: "笑容不当导致被误解，甚至影响人际关系和职业发展？",
      solution_title: "不必再烦恼！",
      solution_desc: "38种笑容训练带你掌握各种场合的完美笑容表达，从此告别社交尴尬。",
      solution_cta: "开始你的笑容训练",
      
      // 截图
      screenshots_title: "App截图展示",
      screenshots_subtitle: "精心设计的界面，让笑容训练更直观、更有趣",
      screen1_title: "首页界面",
      screen1_desc: "个性化的笑容推荐和练习进度一目了然",
      screen2_title: "新手引导",
      screen2_desc: "简单直观的引导流程，快速了解App的核心功能",
      screen3_title: "笑容练习",
      screen3_desc: "图文并茂的练习指导，让你轻松掌握每种笑容",
      screen4_title: "AI分析",
      screen4_desc: "智能分析你的笑容，给出专业评分和建议",
      screen5_title: "社区",
      screen5_desc: "与志同道合的学习者交流，分享你的进步",
      screen6_title: "订阅界面",
      screen6_desc: "灵活的订阅选项，满足你的不同需求",
      demo_cta: "体验完整App演示",
      
      // 用户评价
      testimonials_title: "用户的真实反馈",
      testimonial1_text: ""以前参加社交活动总是紧张，不知道该怎么笑。使用这个App一个月后，我现在能自如地应对各种社交场合，同事们都说我更有魅力了！"",
      testimonial1_name: "李小明",
      testimonial1_title: "市场营销经理",
      testimonial2_text: ""作为一名销售，笑容是我的职业武器。这个App帮我掌握了各种笑容技巧，客户满意度提高了40%，业绩也跟着上升！值得每一分钱！"",
      testimonial2_name: "张晓华",
      testimonial2_title: "资深销售顾问",
      testimonial3_text: ""我是一名教师，通过这个App学习了如何用笑容更好地与学生沟通。课堂气氛变得更活跃，学生们也更愿意与我交流了。非常推荐！"",
      testimonial3_name: "王老师",
      testimonial3_title: "高中英语教师",
      
      // 如何使用
      how_title: "如何使用38种笑容训练",
      step1_title: "下载安装",
      step1_desc: "从App Store或Google Play免费下载并安装应用",
      step2_title: "完成评估",
      step2_desc: "进行笑容评估，了解你的笑容现状和提升空间",
      step3_title: "制定计划",
      step3_desc: "根据评估结果，获取个性化的笑容训练计划",
      step4_title: "每日练习",
      step4_desc: "每天花10分钟按照指导进行笑容练习，持续提升",
      
      // 价格
      pricing_title: "选择适合你的订阅计划",
      pricing_subtitle: "所有计划均可使用全部功能，随时可取消",
      plan_popular: "最受欢迎",
      plan1_title: "月度计划",
      plan2_title: "年度计划",
      plan3_title: "终身计划",
      plan_monthly: "/月",
      plan_yearly: "/年",
      plan_lifetime: "一次性付款",
      plan2_save: "省36%",
      plan_feature1: "38种专业笑容训练",
      plan_feature2: "AI笑容分析与反馈",
      plan_feature3: "进度跟踪与统计",
      plan_feature4: "社区交流功能",
      plan_feature5: "情境模拟训练",
      plan_feature6: "专家一对一咨询(2次)",
      plan_feature7: "未来所有功能更新",
      plan_cta: "开始订阅",
      pricing_guarantee: "100%满意保证：如果你在使用7天内不满意，我们将全额退款，无需任何理由。",
      
      // 下载
      download_title: "立即下载，开启你的笑容魔法之旅",
      download_subtitle: "支持iOS和Android平台，随时随地练习",
      download_on: "下载自",
      countdown_title: "限时优惠：首月订阅50%折扣",
      timer_days: "天",
      timer_hours: "时",
      timer_minutes: "分",
      timer_seconds: "秒",
      
      // FAQ
      faq_title: "常见问题",
      faq1_question: "我需要多长时间才能看到效果？",
      faq1_answer: "大多数用户在坚持练习2-3周后就能看到明显效果。每天只需10分钟的练习，就能逐步掌握不同的笑容技巧。当然，效果因人而异，持续练习是关键。",
      faq2_question: "我可以在多个设备上使用同一个账号吗？",
      faq2_answer: "是的，你可以在不同设备上使用同一个账号登录，你的练习记录和进度会自动同步。",
      faq3_question: "如何取消订阅？",
      faq3_answer: "你可以随时在App内的"设置">"订阅管理"中取消订阅，或者通过App Store/Google Play的订阅管理页面取消。取消后，你仍可以使用服务直到当前订阅期结束。",
      faq4_question: "App支持哪些语言？",
      faq4_answer: "目前支持中文和英文，我们正在努力增加更多语言支持。",
      faq5_question: "练习需要特殊设备吗？",
      faq5_answer: "不需要，只要你的设备有前置摄像头即可。我们建议在光线充足的环境中练习，以获得更准确的AI反馈。",
      
      // 页脚
      footer_company: "公司",
      footer_about: "关于我们",
      footer_careers: "加入我们",
      footer_press: "媒体报道",
      footer_contact: "联系我们",
      footer_resources: "资源",
      footer_blog: "笑容博客",
      footer_experts: "专家团队",
      footer_research: "研究报告",
      footer_help: "帮助中心",
      footer_legal: "法律",
      footer_terms: "使用条款",
      footer_privacy: "隐私政策",
      footer_cookies: "Cookie政策",
      footer_gdpr: "GDPR合规",
      footer_app: "应用",
      footer_ios: "iOS版本",
      footer_android: "Android版本",
      footer_updates: "更新日志",
      footer_feedback: "反馈建议",
      footer_copyright: "© 2023 38种笑容训练 保留所有权利",
      
      // Cookie提示
      cookie_notice: "我们使用Cookie来改善您的体验。继续浏览即表示您同意我们的Cookie政策。",
      cookie_settings: "设置",
      cookie_accept: "接受"
    },
    en: {
      // General
      app_name: "38 Smiles Training",
      
      // Navigation
      nav_features: "Features",
      nav_screenshots: "Screenshots",
      nav_testimonials: "Testimonials",
      nav_pricing: "Pricing",
      
      // Hero Section
      hero_title: "Master 38 Smiles, Become a Social Wizard",
      hero_subtitle: "Professional smile training to handle any social situation with ease and boost your charisma!",
      cta_download: "Download Now",
      cta_try_demo: "Try Demo",
      
      // Social Proof
      social_users: "Active Users",
      social_rating: "User Rating",
      social_featured: "Featured On:",
      
      // Features
      features_title: "Powerful Features Making Smile Training Simple and Fun",
      feature1_title: "38 Professional Smile Techniques",
      feature1_desc: "Detailed video tutorials and guides teaching you 38 professional smiles for different situations.",
      feature2_title: "AI Smile Analysis",
      feature2_desc: "Using your front camera, AI analyzes your smile in real-time and provides professional feedback.",
      feature3_title: "Progress Tracking",
      feature3_desc: "Record your practice sessions with visual progress charts to stay motivated.",
      feature4_title: "Community Interaction",
      feature4_desc: "Connect with other learners, share experiences, and encourage each other.",
      feature5_title: "Scenario Simulation",
      feature5_desc: "Practice using different smiles in simulated social scenarios to improve application.",
      feature6_title: "Expert Guidance",
      feature6_desc: "Professional courses and personalized consultations from top smile coaches and psychologists.",
      
      // Pain Points
      pain_title: "Smiles Are More Important Than You Think",
      pain1_title: "Social Awkwardness",
      pain1_desc: "Not knowing when or how to smile, leading to awkward moments in social situations?",
      pain2_title: "Expression Difficulty",
      pain2_desc: "Want to appear friendly but your smile seems stiff, or confident but look artificial?",
      pain3_title: "Misunderstandings",
      pain3_desc: "Inappropriate smiles causing misunderstandings, affecting relationships and career?",
      solution_title: "No More Worries!",
      solution_desc: "38 Smiles Training helps you master perfect smiles for any occasion, saying goodbye to social awkwardness.",
      solution_cta: "Start Your Smile Training",
      
      // Screenshots
      screenshots_title: "App Screenshots",
      screenshots_subtitle: "Beautifully designed interface making smile training intuitive and fun",
      screen1_title: "Home Screen",
      screen1_desc: "Personalized smile recommendations and progress at a glance",
      screen2_title: "Onboarding",
      screen2_desc: "Simple and intuitive guide to quickly understand core app features",
      screen3_title: "Smile Practice",
      screen3_desc: "Illustrated practice guides making it easy to master each smile",
      screen4_title: "AI Analysis",
      screen4_desc: "Intelligent analysis of your smile with professional ratings and suggestions",
      screen5_title: "Community",
      screen5_desc: "Connect with like-minded learners and share your progress",
      screen6_title: "Subscription",
      screen6_desc: "Flexible subscription options to meet your different needs",
      demo_cta: "Experience Full App Demo",
      
      // Testimonials
      testimonials_title: "Real User Feedback",
      testimonial1_text: ""I used to be nervous at social events, not knowing how to smile. After using this app for a month, I can now handle various social situations with ease. My colleagues say I'm more charismatic!"",
      testimonial1_name: "Mike Lee",
      testimonial1_title: "Marketing Manager",
      testimonial2_text: ""As a salesperson, my smile is my professional weapon. This app helped me master various smile techniques, increasing customer satisfaction by 40% and boosting my performance! Worth every penny!"",
      testimonial2_name: "Sarah Zhang",
      testimonial2_title: "Senior Sales Consultant",
      testimonial3_text: ""I'm a teacher who learned how to better communicate with students through smiles with this app. The classroom atmosphere is more lively, and students are more willing to interact with me. Highly recommended!"",
      testimonial3_name: "Ms. Wang",
      testimonial3_title: "High School English Teacher",
      
      // How It Works
      how_title: "How to Use 38 Smiles Training",
      step1_title: "Download & Install",
      step1_desc: "Download and install the app for free from App Store or Google Play",
      step2_title: "Complete Assessment",
      step2_desc: "Take a smile assessment to understand your current state and room for improvement",
      step3_title: "Create a Plan",
      step3_desc: "Get a personalized smile training plan based on your assessment results",
      step4_title: "Daily Practice",
      step4_desc: "Spend 10 minutes daily following the guides to continuously improve",
      
      // Pricing
      pricing_title: "Choose Your Subscription Plan",
      pricing_subtitle: "All plans include full access to features, cancel anytime",
      plan_popular: "MOST POPULAR",
      plan1_title: "Monthly Plan",
      plan2_title: "Annual Plan",
      plan3_title: "Lifetime Plan",
      plan_monthly: "/month",
      plan_yearly: "/year",
      plan_lifetime: "one-time payment",
      plan2_save: "Save 36%",
      plan_feature1: "38 Professional Smile Techniques",
      plan_feature2: "AI Smile Analysis & Feedback",
      plan_feature3: "Progress Tracking & Statistics",
      plan_feature4: "Community Access",
      plan_feature5: "Scenario Simulation Training",
      plan_feature6: "Expert 1-on-1 Consultation (2 sessions)",
      plan_feature7: "All Future Updates",
      plan_cta: "Start Subscription",
      pricing_guarantee: "100% Satisfaction Guarantee: If you're not satisfied within 7 days of use, we'll provide a full refund, no questions asked.",
      
      // Download
      download_title: "Download Now and Begin Your Smile Magic Journey",
      download_subtitle: "Available on iOS and Android platforms, practice anywhere anytime",
      download_on: "Download on",
      countdown_title: "Limited Time Offer: 50% Off First Month Subscription",
      timer_days: "days",
      timer_hours: "hrs",
      timer_minutes: "mins",
      timer_seconds: "secs",
      
      // FAQ
      faq_title: "Frequently Asked Questions",
      faq1_question: "How long does it take to see results?",
      faq1_answer: "Most users see noticeable results after 2-3 weeks of consistent practice. Just 10 minutes daily will help you gradually master different smile techniques. Of course, results vary by individual, and consistent practice is key.",
      faq2_question: "Can I use the same account on multiple devices?",
      faq2_answer: "Yes, you can log in with the same account on different devices, and your practice records and progress will automatically sync.",
      faq3_question: "How do I cancel my subscription?",
      faq3_answer: "You can cancel your subscription at any time in the app under 'Settings' > 'Subscription Management' or through the App Store/Google Play subscription management page. After cancellation, you can still use the service until the end of your current subscription period.",
      faq4_question: "What languages does the app support?",
      faq4_answer: "Currently, we support English and Chinese. We're working hard to add support for more languages.",
      faq5_question: "Do I need special equipment for practice?",
      faq5_answer: "No, all you need is a device with a front camera. We recommend practicing in a well-lit environment for more accurate AI feedback.",
      
      // Footer
      footer_company: "Company",
      footer_about: "About Us",
      footer_careers: "Careers",
      footer_press: "Press",
      footer_contact: "Contact Us",
      footer_resources: "Resources",
      footer_blog: "Smile Blog",
      footer_experts: "Expert Team",
      footer_research: "Research Reports",
      footer_help: "Help Center",
      footer_legal: "Legal",
      footer_terms: "Terms of Use",
      footer_privacy: "Privacy Policy",
      footer_cookies: "Cookie Policy",
      footer_gdpr: "GDPR Compliance",
      footer_app: "App",
      footer_ios: "iOS Version",
      footer_android: "Android Version",
      footer_updates: "Update Log",
      footer_feedback: "Feedback",
      footer_copyright: "© 2023 38 Smiles Training. All rights reserved.",
      
      // Cookie Notice
      cookie_notice: "We use cookies to improve your experience. By continuing to browse, you agree to our Cookie Policy.",
      cookie_settings: "Settings",
      cookie_accept: "Accept"
    }
  };
  
  // 加载语言
  function loadLanguage(lang) {
    currentLang = lang;
    
    // 保存用户选择的语言
    localStorage.setItem('selectedLanguage', lang);
    
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // 更新语言选择器
    const languageSelect = document.getElementById('language-select');
    const footerLanguageSelect = document.getElementById('footer-language-select');
    
    if (languageSelect) {
      languageSelect.value = lang;
    }
    
    if (footerLanguageSelect) {
      footerLanguageSelect.value = lang;
    }
  }
  
  // 初始化
  document.addEventListener('DOMContentLoaded', function() {
    // 检查用户之前是否已选择语言
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      loadLanguage(savedLanguage);
    } else {
      // 使用默认语言
      loadLanguage(currentLang);
    }
    
    // 语言切换事件监听
    const languageSelect = document.getElementById('language-select');
    const footerLanguageSelect = document.getElementById('footer-language-select');
    
    if (languageSelect) {
      languageSelect.addEventListener('change', function() {
        loadLanguage(this.value);
      });
    }
    
    if (footerLanguageSelect) {
      footerLanguageSelect.addEventListener('change', function() {
        loadLanguage(this.value);
      });
    }
  });
})();

