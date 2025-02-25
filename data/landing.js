import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "4.9/5",
      label: "User Rating",
    },
    // {
    //   value: "",
    //   label: "",
    // },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description:
        "Get detailed insights of Routes",
    },
    // {
    //   icon: <Receipt className="h-8 w-8 text-blue-600" />,
    //   title: "Smart Receipt Scanner",
    //   description:
    //     "Extract data automatically from receipts using advanced AI technology",
    // },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "Get the Latest Information",
      description: "Get Ai personalise routes",
    },
    // {
    //   icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    //   title: "Multi-Account Support",
    //   description: "Manage multiple accounts and credit cards in one place",
    // },
    // {
    //   icon: <Globe className="h-8 w-8 text-blue-600" />,
    //   title: "Multi-Routes",
    //   description: "Support for multiple routes",
    // },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Automated Insights",
      description: "Get insights about accidents",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Insights",
      description:
        "Track tarffic in real-time",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Get Insights",
      description:
        "Receive AI-powered insights and recommendations to save time",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
    },
  ];