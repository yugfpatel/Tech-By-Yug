export const pricingData = {
  mainPackages: [
    {
      name: 'Starter',
      price: '₹7,999+ maintenance',
      description: 'For small businesses getting started digitally.',
      features: [
        '3–5 page responsive website',
        'Custom UI',
        'Mobile optimization',
        'Contact/enquiry form',
        'WhatsApp integration',
        'Google Maps integration',
        'Basic SEO',
        'Social media integration',
        'Deployment',
        '7 days post-launch support'
      ],
      ctaText: 'Get Started'
    },
    {
      name: 'Growth',
      price: '₹29,999+ maintenance',
      description: 'For businesses ready for a complete digital system.',
      isPopular: true,
      features: [
        'Everything in Starter',
        '6–12 pages',
        'Custom design system',
        'Database integration',
        'Admin/content management',
        'Lead capture',
        'Booking/enquiry system',
        'Basic dashboard',
        'API integrations',
        'Email/WhatsApp notifications',
        'Analytics',
        'Basic automation',
        '30 days support'
      ],
      ctaText: 'Build With Us'
    },
    {
      name: 'Custom',
      price: '₹59,999+ maintenance',
      description: 'For businesses and startups that need custom software, AI or complex technology solutions.',
      features: [
        'Custom web applications',
        'Mobile applications',
        'Custom backend',
        'APIs',
        'Database architecture',
        'Authentication & user roles',
        'Payment integration',
        'AI integration',
        'Business automation',
        'Cloud deployment',
        'Advanced integrations',
        'Custom dashboards'
      ],
      ctaText: 'Discuss Your Project',
      note: 'Final scope and pricing are determined after requirements discovery.'
    }
  ],
  aiServices: [
    {
      name: 'AI Integration',
      price: '₹9,999+ maintenance',
      description: 'Connect AI capabilities to an existing website, application or workflow.'
    },
    {
      name: 'AI Automation',
      price: '₹19,999+ maintenance',
      description: 'Automate repetitive business workflows using AI, APIs and integrations.'
    },
    {
      name: 'Custom AI Solution',
      price: '₹49,999+ maintenance',
      description: 'Custom AI systems designed around a specific business requirement.'
    }
  ],
  mobile: {
    title: 'Mobile App Development',
    price: 'Starting at ₹49,999+ maintenance',
    description: 'Custom Android, iOS or cross-platform applications built around your requirements.',
    note: 'Complex applications are quoted separately based on features, integrations and platform requirements.'
  },
  maintenance: [
    {
      name: 'Care',
      price: '₹1,999/month',
      features: [
        'Bug fixes',
        'Minor updates',
        'Basic monitoring',
        'Basic technical support'
      ]
    },
    {
      name: 'Business',
      price: '₹4,999/month',
      features: [
        'Everything in Care',
        'Content updates',
        'Performance monitoring',
        'Backups',
        'Small feature changes',
        'Priority support'
      ]
    },
    {
      name: 'Dedicated',
      price: '₹9,999+/month',
      features: [
        'Everything in Business',
        'Continuous improvements',
        'Advanced technical support',
        'Infrastructure monitoring',
        'Priority response'
      ]
    }
  ],
  process: [
    { step: '01', name: 'Discuss', desc: 'Understand your requirement' },
    { step: '02', name: 'Scope', desc: 'Define features and timeline' },
    { step: '03', name: 'Quote', desc: 'Receive a transparent proposal' },
    { step: '04', name: 'Build', desc: 'Development and testing' }
  ],
  thirdPartyNotIncluded: [
    'Domain registration',
    'Hosting',
    'Cloud infrastructure',
    'AI API usage',
    'WhatsApp/SMS charges',
    'Payment gateway fees',
    'Paid plugins',
    'Premium software/services',
    'Third-party APIs'
  ]
};
