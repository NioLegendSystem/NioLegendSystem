"use client";
import { useState, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  TvIcon,
  WifiIcon,
  LightBulbIcon,
  GlobeAltIcon,
  FireIcon,
  FilmIcon,
  BanknotesIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ServerStackIcon,
  BuildingStorefrontIcon,
  GiftIcon,
  ChartBarIcon,
  SparklesIcon,
  TrophyIcon,
  BoltIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  EyeIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  UsersIcon,
  HeartIcon,
  ArrowLeftIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PaperAirplaneIcon,
  SignalIcon,
  TruckIcon,
  PlayIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const services = [
  {
    title: "Mobile Recharge",
    description: "Recharge for all major telecom networks (Airtel, Jio, Vi, BSNL). Fast & instant.",
    icon: DevicePhoneMobileIcon,
    top: true,
    features: ["Instant recharge", "Cashback up to 5%", "All networks supported", "Auto-recharge option"],
    commission: "2-5%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "DTH Recharge",
    description: "Recharge Tata Sky, Airtel Digital TV, Dish TV, Videocon & more with cashback.",
    icon: TvIcon,
    top: true,
    features: ["All DTH providers", "Cashback up to 4%", "Channel pack selection", "Bill history"],
    commission: "2-4%",
    popularity: "High",
    processingTime: "2-5 mins"
  },
  {
    title: "Broadband & Fiber Bills",
    description: "Pay Airtel Xstream, JioFiber, ACT Fibernet, BSNL broadband bills with ease.",
    icon: WifiIcon,
    features: ["All major providers", "Cashback up to 3%", "Bill reminders", "Usage tracking"],
    commission: "1.5-3%",
    popularity: "Medium",
    processingTime: "5-10 mins"
  },
  {
    title: "Electricity Bill Payment",
    description: "All state boards included. Auto-reminder + Bill history tracking.",
    icon: LightBulbIcon,
    features: ["All state boards", "Cashback up to 2%", "Bill history", "Auto-pay option"],
    commission: "1-2%",
    popularity: "High",
    processingTime: "5-15 mins"
  },
  {
    title: "Water Bill Payment",
    description: "Pay metro water & municipal water bills online securely.",
    icon: GlobeAltIcon,
    features: ["All municipalities", "Cashback up to 2%", "Bill tracking", "Payment history"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "5-15 mins"
  },
  {
    title: "Gas Booking & Cylinder Payment",
    description: "Book HP, Indane, Bharat Gas cylinders easily.",
    icon: FireIcon,
    features: ["All gas providers", "Cashback up to 2%", "Delivery tracking", "Auto-booking"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "10-20 mins"
  },
  {
    title: "OTT Subscriptions",
    description: "Recharge Netflix, Amazon Prime, Hotstar, Zee5 & more — combo plans available!",
    icon: FilmIcon,
    features: ["All major platforms", "Cashback up to 5%", "Combo plans", "Auto-renewal"],
    commission: "3-5%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Loan EMI Payments",
    description: "Pay EMIs for NBFCs, banks & private loan providers — track your dues.",
    icon: BanknotesIcon,
    features: ["All major banks", "Cashback up to 1%", "Due date alerts", "Payment history"],
    commission: "0.5-1%",
    popularity: "Medium",
    processingTime: "5-10 mins"
  },
  {
    title: "Credit Card Bill Payment",
    description: "Secure and fast bill pay for all major credit cards with alerts.",
    icon: CreditCardIcon,
    features: ["All major banks", "Cashback up to 1%", "Due date alerts", "Payment history"],
    commission: "0.5-1%",
    popularity: "High",
    processingTime: "5-10 mins"
  },
  {
    title: "Insurance Premium Payments",
    description: "Pay LIC, SBI Life, ICICI Prudential and general insurance premiums.",
    icon: DocumentTextIcon,
    features: ["All major insurers", "Cashback up to 2%", "Policy tracking", "Auto-renewal"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "5-15 mins"
  },
  {
    title: "Recharge API Reseller Service",
    description: "Start your own recharge business via white-label portal.",
    icon: ServerStackIcon,
    features: ["White-label solution", "Custom branding", "API access", "24/7 support"],
    commission: "5-10%",
    popularity: "Low",
    processingTime: "1-2 days"
  },
  {
    title: "Neo Franchise Support Services",
    description: "Open a digital store, get local support and branding help.",
    icon: BuildingStorefrontIcon,
    features: ["Store setup", "Local support", "Branding kit", "Training"],
    commission: "10-15%",
    popularity: "Low",
    processingTime: "2-3 days"
  },
  {
    title: "Seasonal Offer Center",
    description: "Festive deals, bonus points, cashback & promo codes.",
    icon: GiftIcon,
    features: ["Festive offers", "Bonus points", "Special cashback", "Limited deals"],
    commission: "5-20%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Usage Analytics Dashboard",
    description: "Track your service usage, income, and referral impact visually.",
    icon: ChartBarIcon,
    features: ["Real-time analytics", "Income tracking", "Referral stats", "Custom reports"],
    commission: "N/A",
    popularity: "Medium",
    processingTime: "Real-time"
  },
  {
    title: "NeoBot – AI Assistant",
    description: "24/7 support + Income tracking + Rank prediction via AI chatbot.",
    icon: SparklesIcon,
    features: ["24/7 support", "Income tracking", "Rank prediction", "Smart suggestions"],
    commission: "N/A",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Team Rank & Rewards Tracking",
    description: "View your team performance, rank progress and rewards earned.",
    icon: TrophyIcon,
    features: ["Team stats", "Rank tracking", "Rewards history", "Performance metrics"],
    commission: "N/A",
    popularity: "Medium",
    processingTime: "Real-time"
  },
  {
    title: "Food Delivery Services",
    description: "Order from Zomato, Swiggy, Blinkit & more with exclusive cashback.",
    icon: ShoppingBagIcon,
    features: ["All major platforms", "Cashback up to 5%", "Quick delivery", "Order tracking"],
    commission: "3-5%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Online Shopping",
    description: "Shop on Amazon, Flipkart, Myntra & more with special discounts.",
    icon: ShoppingCartIcon,
    features: ["All major platforms", "Cashback up to 4%", "Price comparison", "Deal alerts"],
    commission: "2-4%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Travel Bookings",
    description: "Book flights, trains, buses & hotels with instant cashback.",
    icon: PaperAirplaneIcon,
    features: ["All major platforms", "Cashback up to 3%", "Price alerts", "Booking history"],
    commission: "2-3%",
    popularity: "High",
    processingTime: "5-10 mins"
  },
  {
    title: "Cable TV Recharge",
    description: "Recharge local cable operators & digital TV services.",
    icon: SignalIcon,
    features: ["All providers", "Cashback up to 2%", "Channel selection", "Bill history"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "2-5 mins"
  },
  {
    title: "Fastag Recharge",
    description: "Recharge Fastag for all banks with instant activation.",
    icon: TruckIcon,
    features: ["All banks", "Cashback up to 2%", "Usage tracking", "Auto-recharge"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "Instant"
  },
  {
    title: "Gaming Recharge",
    description: "Recharge PUBG, Free Fire, Ludo & other gaming platforms.",
    icon: PlayIcon,
    features: ["All platforms", "Cashback up to 3%", "Instant delivery", "Gift cards"],
    commission: "2-3%",
    popularity: "High",
    processingTime: "Instant"
  },
  {
    title: "Education Fee Payment",
    description: "Pay school, college & course fees with instant confirmation.",
    icon: AcademicCapIcon,
    features: ["All institutions", "Cashback up to 2%", "Fee reminders", "Receipt tracking"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "5-15 mins"
  },
  {
    title: "Municipal Tax Payment",
    description: "Pay property tax, water tax & other municipal charges.",
    icon: BuildingOfficeIcon,
    features: ["All municipalities", "Cashback up to 2%", "Tax history", "Auto-pay"],
    commission: "1-2%",
    popularity: "Medium",
    processingTime: "5-10 mins"
  },
  {
    title: "Digital Gift Cards",
    description: "Buy & send gift cards for Amazon, Flipkart & more.",
    icon: GiftIcon,
    features: ["All platforms", "Cashback up to 3%", "Instant delivery", "Custom messages"],
    commission: "2-3%",
    popularity: "Medium",
    processingTime: "Instant"
  }
];

const heroGrid = [
  {
    icon: DevicePhoneMobileIcon,
    label: "Mobile Recharge",
    desc: "Instant top-up for all networks.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: TvIcon,
    label: "DTH Recharge",
    desc: "Recharge Tata Sky, Airtel, more.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: WifiIcon,
    label: "Broadband Bills",
    desc: "Pay JioFiber, Airtel, ACT, BSNL.",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: LightBulbIcon,
    label: "Electricity Bill",
    desc: "All state boards, reminders.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: GlobeAltIcon,
    label: "Water Bill",
    desc: "Metro & municipal water bills.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: FireIcon,
    label: "Gas Booking",
    desc: "Book HP, Indane, Bharat Gas.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: FilmIcon,
    label: "OTT Subscriptions",
    desc: "Netflix, Prime, Hotstar, Zee5.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: BanknotesIcon,
    label: "Loan EMI",
    desc: "Pay EMIs, track your dues.",
    gradient: "from-green-500 to-lime-400",
  },
  {
    icon: CreditCardIcon,
    label: "Credit Card Bill",
    desc: "Fast, secure bill payments.",
    gradient: "from-pink-400 to-blue-400",
  },
  {
    icon: DocumentTextIcon,
    label: "Insurance Premium",
    desc: "LIC, SBI, ICICI & more.",
    gradient: "from-blue-400 to-yellow-400",
  },
  {
    icon: ServerStackIcon,
    label: "API Reseller",
    desc: "Start your own recharge business.",
    gradient: "from-gray-500 to-blue-500",
  },
  {
    icon: BuildingStorefrontIcon,
    label: "Franchise Support",
    desc: "Open a digital store, get help.",
    gradient: "from-pink-500 to-yellow-400",
  },
  {
    icon: GiftIcon,
    label: "Seasonal Offers",
    desc: "Festive deals, cashback, promos.",
    gradient: "from-yellow-400 to-pink-500",
  },
  {
    icon: ChartBarIcon,
    label: "Analytics Dashboard",
    desc: "Track usage, income, referrals.",
    gradient: "from-blue-500 to-green-400",
  },
  {
    icon: SparklesIcon,
    label: "NeoBot AI",
    desc: "24/7 support, income tracking.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: TrophyIcon,
    label: "Team Rank & Rewards",
    desc: "View team, rank, rewards.",
    gradient: "from-yellow-400 to-purple-500",
  },
  {
    icon: ShoppingBagIcon,
    label: "Food Delivery",
    desc: "Order from Zomato, Swiggy & more.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: ShoppingCartIcon,
    label: "Online Shopping",
    desc: "Shop on Amazon, Flipkart & more.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: PaperAirplaneIcon,
    label: "Travel Bookings",
    desc: "Book flights, trains & hotels.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: SignalIcon,
    label: "Cable TV",
    desc: "Recharge local cable services.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TruckIcon,
    label: "Fastag",
    desc: "Recharge for all banks.",
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: PlayIcon,
    label: "Gaming",
    desc: "Recharge PUBG, Free Fire & more.",
    gradient: "from-pink-500 to-purple-500",
  }
];

const whyChoose = [
  {
    icon: ChartBarIcon,
    title: 'Earn on Every Transaction',
    desc: 'Get instant cashback and commission for every service you use or share.'
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Passive Income',
    desc: 'Earn continuously from your network\'s real usage.'
  },
  {
    icon: EyeIcon,
    title: '100% Legal & Transparent',
    desc: 'All earnings and services are fully legal and trackable.'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Earn from Real Services',
    desc: 'Income comes from genuine digital payments and utilities.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Fair Rank System (No Pressure)',
    desc: 'Progress at your own pace—no monthly targets or stress.'
  },
  {
    icon: SparklesIcon,
    title: 'Advanced Features',
    desc: 'AI assistant, analytics, and more for your growth.'
  },
  {
    icon: HeartIcon,
    title: 'Social Impact',
    desc: 'Support local communities and digital inclusion.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Rock-Solid Security',
    desc: 'Bank-level encryption and privacy for all users.'
  },
  {
    icon: UsersIcon,
    title: '24/7 AI Support',
    desc: 'NeoBot is always available to help and guide you.'
  },
  {
    icon: BoltIcon,
    title: 'Instant Digital Payments',
    desc: 'Fast, secure, and seamless payments for all your needs.'
  },
];

// Add navigation sections
const navigationSections = [
  { id: "all-services", label: "All Services", icon: SparklesIcon },
  { id: "recharge", label: "Recharge & Bills", icon: DevicePhoneMobileIcon },
  { id: "utilities", label: "Utilities", icon: LightBulbIcon },
  { id: "entertainment", label: "Entertainment", icon: FilmIcon },
  { id: "shopping", label: "Shopping & Food", icon: ShoppingBagIcon },
  { id: "travel", label: "Travel & Hotels", icon: PaperAirplaneIcon },
  { id: "business", label: "Business", icon: BuildingStorefrontIcon },
  { id: "features", label: "Features", icon: ChartBarIcon },
  { id: "why-choose", label: "Why Choose Us", icon: TrophyIcon },
];

// Add new animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

// Simplified ServiceCard component with better spacing
function ServiceCard({ 
  icon: Icon, 
  label, 
  desc, 
  features, 
  commission, 
  popularity, 
  processingTime,
  isHovered 
}: { 
  icon: any, 
  label: string, 
  desc: string,
  features: string[],
  commission: string,
  popularity: string,
  processingTime: string,
  isHovered: boolean
}) {
  return (
    <motion.div
      variants={hoverVariants}
      className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5"
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-5 h-5 text-blue-400" />
        </motion.div>
        <div>
          <h3 className="text-sm font-medium text-white mb-2">
            {label}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Update key benefits section
const keyBenefits = [
  {
    icon: ShieldCheckIcon,
    title: "Zero Investment",
    desc: "No extra money needed - use what you already pay for monthly"
  },
  {
    icon: CurrencyRupeeIcon,
    title: "Earn on Regular Bills",
    desc: "Get cashback on your existing mobile, DTH, electricity payments"
  },
  {
    icon: ChartBarIcon,
    title: "Same Services",
    desc: "Continue using your trusted service providers - just pay here"
  },
  {
    icon: HeartIcon,
    title: "Your Monthly Bills",
    desc: "All your regular payments in one place - mobile, DTH, electricity, gas"
  }
];

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("all-services");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Add useEffect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "recharge", label: "Recharge & Bills" },
    { id: "utilities", label: "Utilities" },
    { id: "entertainment", label: "Entertainment" },
    { id: "shopping", label: "Shopping & Food" },
    { id: "travel", label: "Travel & Hotels" },
    { id: "business", label: "Business" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase()) ||
                         service.description.toLowerCase().includes(search.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (selectedCategory === "all") return true;
    if (selectedCategory === "recharge") {
      return ["Mobile Recharge", "DTH Recharge", "Broadband & Fiber Bills", "Cable TV Recharge", "Fastag Recharge", "Gaming Recharge"].includes(service.title);
    }
    if (selectedCategory === "utilities") {
      return ["Electricity Bill Payment", "Water Bill Payment", "Gas Booking & Cylinder Payment", "Municipal Tax Payment", "Education Fee Payment"].includes(service.title);
    }
    if (selectedCategory === "entertainment") {
      return ["OTT Subscriptions", "Gaming Recharge"].includes(service.title);
    }
    if (selectedCategory === "shopping") {
      return ["Food Delivery Services", "Online Shopping", "Digital Gift Cards"].includes(service.title);
    }
    if (selectedCategory === "travel") {
      return ["Travel Bookings"].includes(service.title);
    }
    if (selectedCategory === "business") {
      return ["Recharge API Reseller Service", "Neo Franchise Support Services"].includes(service.title);
    }
    return true;
  });

  // Improved scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Add debounced search
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Simplified category filter styles
  const getCategoryStyle = (categoryId: string) => {
    const isActive = selectedCategory === categoryId;
    return `px-3 py-1.5 rounded-lg text-sm ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-gray-300 hover:bg-white/5"
    }`;
  };

  // Add new state for hover effects
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Clean Navigation with Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Link href="/" className="mr-6">
              <motion.div 
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Back to Home</span>
              </motion.div>
            </Link>
            
            <div className="h-4 w-px bg-white/10 mr-6"></div>
            
            <div className="flex-1 flex items-center gap-3 overflow-x-auto">
              {navigationSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeSection === section.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Zero Investment Focus */}
      <section id="all-services" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-white">
              Zero Investment, <span className="text-blue-400">Maximum Benefits</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Use your regular monthly services through our platform and earn while you pay your existing bills
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <benefit.icon className="w-4 h-4 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Clean Search */}
            <div className="max-w-lg mx-auto mb-8">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  placeholder="Search your regular services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
                <SparklesIcon className="w-5 h-5 text-blue-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </motion.div>
            </div>

            {/* Organized Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={getCategoryStyle(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Zero Investment Badge */}
      <section id="services-grid" className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Zero Investment Required - Use Your Regular Payments</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pay your regular monthly bills through our platform and get additional benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredCard(service.title)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <ServiceCard
                  icon={service.icon}
                  label={service.title}
                  desc={service.description}
                  features={service.features}
                  commission={service.commission}
                  popularity={service.popularity}
                  processingTime={service.processingTime}
                  isHovered={hoveredCard === service.title}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Clean No Results */}
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SparklesIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-gray-400">No services found</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us with Trust Focus */}
      <section id="why-choose" className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              Why Use Your <span className="text-blue-400">Regular Services</span> Here?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Get more value from the services you already use every month
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-4 rounded-xl bg-white/5 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-medium text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust-focused CTA */}
      <section id="cta" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              Start Using Your <span className="text-blue-400">Regular Services</span> Here
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Get additional benefits on the services you already use every month
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/apply"
                className="inline-block px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 