'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  WalletIcon, 
  UserGroupIcon, 
  BoltIcon,
  ArrowRightIcon,
  IdentificationIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  CurrencyRupeeIcon,
  QrCodeIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  GiftIcon,
  StarIcon,
  CheckBadgeIcon,
  FireIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  TvIcon,
  WifiIcon,
  LightBulbIcon,
  FilmIcon,
  BanknotesIcon,
  ServerStackIcon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  TruckIcon,
  ShoppingCartIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  PlayIcon,
  SignalIcon,
  HomeIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  HeartIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from './components/ui/LoadingSpinner';
import React from 'react';
import Link from "next/link";

const features = [
  {
    title: 'Zero Investment',
    description: 'Start earning with your regular monthly services.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Daily Services',
    description: 'Use your existing bills and recharges.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Instant Earnings',
    description: 'Get cashback on every transaction.',
    icon: ChartBarIcon,
  },
  {
    title: 'Trusted Platform',
    description: 'Secure and reliable service provider.',
    icon: ShieldCheckIcon,
  }
];

const serviceCategories = [
  {
    id: 'recharge',
    name: 'Recharge & Bills',
    services: [
      { title: 'Mobile Recharge', cashback: '2%' },
      { title: 'DTH & Cable', cashback: '3%' },
      { title: 'Electricity', cashback: '2.5%' }
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    services: [
      { title: 'OTT Subscriptions', cashback: '5%' },
      { title: 'Gaming Recharge', cashback: '4%' }
    ]
  },
  {
    id: 'shopping',
    name: 'Shopping',
    services: [
      { title: 'Food Delivery', cashback: '6%' },
      { title: 'Online Shopping', cashback: '8%' }
    ]
  }
];

const ranks = [
  {
    name: '🥇 Rank 1',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-violet-400 to-violet-600',
    requirements: '1000 Points',
    benefits: [
      '30% Team Commission',
      'Instant Activation',
      'Team Bonus Start',
      'Referral Lock',
      'Executive Support Team',
      'Direct API Access',
      'Daily Payout',
      'Team Size: 20+',
      'Revenue Share Program',
      'Priority Service Access'
    ]
  },
  {
    name: '🥈 Rank 2',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    requirements: '2000 Points',
    benefits: [
      '20% Team Commission',
      '₹500 Bonus',
      'Team Analysis Access',
      'Certificate',
      'Dedicated Account Manager',
      'Advanced API Access',
      'Daily Payout',
      'Team Size: 11-20',
      'Priority Service Access',
      'Custom Dashboard'
    ]
  },
  {
    name: '🥉 Rank 3',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    requirements: '4000 Points',
    benefits: [
      '15% Team Commission',
      '₹1000 Bonus',
      'Advanced Dashboard',
      'Neo Coins',
      '24/7 VIP Support',
      'Premium Analytics',
      'Weekly Payout',
      'Team Size: 6-10',
      'Team Management Tools',
      'Performance Reports'
    ]
  },
  {
    name: '🏅 Rank 4',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    requirements: '8000 Points',
    benefits: [
      '10% Team Commission',
      '₹1500 Bonus',
      'Neo Pro Badge',
      'Franchise Discount',
      'Priority Support',
      'Advanced Analytics',
      'Weekly Payout',
      'Team Size: 2-5',
      'Service Access',
      'Basic Dashboard'
    ]
  },
  {
    name: '🥈 Rank 5',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-amber-600 to-amber-800',
    requirements: '16,000 Points',
    benefits: [
      '8% Team Commission',
      '₹2000 Bonus',
      'Personal Assistant Access',
      'Standard Support',
      'Basic Analytics',
      'Monthly Payout',
      'Service Access',
      'Basic Dashboard',
      'Transaction Reports',
      'Training Materials'
    ]
  },
  {
    name: '👑 Rank 6',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-amber-600 to-amber-800',
    requirements: '32,000 Points',
    benefits: [
      '8% Team Commission',
      '₹3000 Bonus',
      'National Leader Status',
      'Standard Support',
      'Basic Analytics',
      'Monthly Payout',
      'Service Access',
      'Basic Dashboard',
      'Transaction Reports',
      'Training Materials'
    ]
  },
  {
    name: '🌐 Rank 7',
    icon: TrophyIcon,
    color: 'bg-gradient-to-br from-amber-600 to-amber-800',
    requirements: '64,000 Points',
    benefits: [
      '9% Team Commission',
      '₹5000 Bonus',
      'Global Neo Partner Recognition',
      'Standard Support',
      'Basic Analytics',
      'Monthly Payout',
      'Service Access',
      'Basic Dashboard',
      'Transaction Reports',
      'Training Materials'
    ]
  }
];

const commonBenefits = [
  { icon: ShieldCheckIcon, label: 'Customer Support' },
  { icon: AcademicCapIcon, label: 'Learning Resources' },
  { icon: CurrencyRupeeIcon, label: 'Secure Payouts' },
  { icon: DevicePhoneMobileIcon, label: 'Mobile Access' },
  { icon: CheckBadgeIcon, label: 'Trusted Platform' },
];

const rankTiers = [
  {
    name: 'Rank 1: Starter',
    color: 'from-blue-500 to-blue-800',
    icon: TrophyIcon,
    requirements: 'Activate account, complete learning session',
    highlights: [
      '<b>Account activation</b> enables earning',
      '<b>Learning session & video tutorials</b> (how to earn)',
      '<b>Pass learning</b> to unlock Refer option',
      '<b>Refer up to 20 people</b> (each can refer 20)',
    ],
    badge: 'Entry',
  },
  {
    name: 'Rank 2: Builder',
    color: 'from-purple-500 to-purple-800',
    icon: StarIcon,
    requirements: 'Refer 20, all complete learning',
    highlights: [
      '<b>Income starts</b> (earnings begin)',
      '<b>₹500 bonus</b> on upgrade',
      '<b>Full service access</b>',
      '<b>Team chat</b> enabled',
    ],
    badge: 'Bonus',
  },
  {
    name: 'Rank 3: Achiever',
    color: 'from-amber-400 to-yellow-600',
    icon: FireIcon,
    requirements: 'Each of your 20 referrals refer 20',
    highlights: [
      '<b>All features unlocked</b>',
      '<b>Earn thousands monthly</b> (team usage)',
      '<b>Host team meetings</b>',
      '<b>Stable income</b> opportunity',
    ],
    badge: 'Stable Income',
  },
  {
    name: 'Rank 4: Leader',
    color: 'from-green-400 to-green-700',
    icon: RocketLaunchIcon,
    requirements: '20 direct referrals reach Rank 3',
    highlights: [
      '<b>Extra income</b> opportunities',
      '<b>Award functions</b> & recognition',
      '<b>iPhone spin wheel</b> (win prizes)',
    ],
    badge: 'Awards',
  },
  {
    name: 'Rank 5: Director',
    color: 'from-pink-500 to-pink-800',
    icon: GiftIcon,
    requirements: '20 direct referrals reach Rank 4',
    highlights: [
      '<b>Team trips & meetings</b>',
      '<b>Franchise opportunity</b>',
      '<b>Earn in lakhs</b>',
    ],
    badge: 'Franchise',
  },
  {
    name: 'Rank 6: Champion',
    color: 'from-yellow-500 to-yellow-800',
    icon: TruckIcon,
    requirements: '20 direct referrals reach Rank 5',
    highlights: [
      '<b>Bike gift opportunity</b>',
      '<b>Top earner</b> status',
    ],
    badge: 'Bike Gift',
  },
  {
    name: 'Rank 7: Legend',
    color: 'from-red-500 to-yellow-700',
    icon: SparklesIcon,
    requirements: '20 direct referrals reach Rank 6',
    highlights: [
      '<b>Car & sports car gifts</b>',
      '<b>Earn in crores</b>',
      '<b>Big achiever awards</b>',
      '<b>Foreign trip (all paid)</b>',
      '<b>Global recognition</b>',
    ],
    badge: 'Legend',
  },
];

// Updated team growth and commission split logic
const commissionSplits = [30, 20, 15, 10, 8, 8, 9];
const teamGrowth = [
  { rank: 'Rank 1', team: 20 },
  { rank: 'Rank 2', team: 400 },
  { rank: 'Rank 3', team: 8000 },
  { rank: 'Rank 4', team: 160000 },
  { rank: 'Rank 5', team: 3200000 },
  { rank: 'Rank 6', team: 64000000 },
  { rank: 'Rank 7', team: 1280000000 },
];
const rechargeAmount = 399;
const totalCommissionPercent = 3;

const teamGrowthWithIncome = teamGrowth.map((row, idx) => {
  const commissionPercent = commissionSplits[idx];
  const totalCommission = row.team * rechargeAmount * (totalCommissionPercent / 100);
  const income = totalCommission * (commissionPercent / 100);
  return {
    ...row,
    commissionPercent,
    income: income,
  };
});

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [rankIndex, setRankIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('recharge');

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push('/register');
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Welcome to</h2>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Neo Legend
                </h1>
              </motion.div>
              
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  Transform Your Bills
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-blue-400"
                >
                  Into Smart Income
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-gray-400 mt-4"
                >
                  No Extra Investment • Zero Risk • Instant Earnings
                </motion.p>
              </div>
            </motion.div>

            {/* Power Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <SparklesIcon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Smart Earnings</h3>
                </div>
                <p className="text-gray-400">Transform your regular payments into a smart income stream</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <RocketLaunchIcon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Instant Growth</h3>
                </div>
                <p className="text-gray-400">Watch your earnings grow with every service you use</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CurrencyDollarIcon className="w-6 h-6 text-pink-400" />
                  <h3 className="text-xl font-bold text-white">Zero Risk</h3>
                </div>
                <p className="text-gray-400">Earn while using services you already pay for</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2">
                    <span>Start Earning Now</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Earn While You Pay</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-[#181C23] rounded-xl p-6 shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{category.name}</h3>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div key={service.title} className="flex justify-between items-center bg-[#232A36] p-3 rounded-lg hover:bg-[#263040] transition-colors">
                      <span className="text-white font-medium">{service.title}</span>
                      <span className="text-blue-400 font-bold text-lg">{service.cashback}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <div className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors">
                View All Services
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rank System Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Rank System</h2>
            <p className="text-lg text-gray-300">Progress through ranks by building your team and unlocking powerful rewards. Each rank brings new opportunities, bonuses, and recognition. Start as a Starter and become a Legend!</p>
          </div>
          {/* Common Benefits Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {commonBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-gray-700 shadow-sm text-white text-base font-medium min-w-[160px] justify-center">
                <benefit.icon className="w-6 h-6 text-blue-400" />
                <span>{benefit.label}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col gap-2 px-5 py-5 rounded-xl bg-yellow-400/10 border border-yellow-400 text-yellow-200 font-semibold text-base shadow">
              <div className="flex items-center gap-2 mb-1">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-300" />
                <span className="text-yellow-100 font-bold">Important:</span>
              </div>
              <ul className="list-disc list-inside text-yellow-100 text-sm pl-2 space-y-1">
                <li>You and your team must <span className="font-bold">actually use services</span> (recharge, bill pay, shopping, etc.) to earn income.</li>
                <li>Income is generated <span className="font-bold">only when real transactions happen</span> in your team.</li>
                <li><span className="font-bold">Only active users earn income.</span> If a user does not recharge or use any service for 60 days, their account becomes inactive and income stops. The account/reactivation happens automatically when they use any service again.</li>
                <li>This is a <span className="font-bold">service-based income system</span>. You should never force or pressure anyone to join. Only those who are genuinely interested should join, and you must not make any misleading promises or claims.</li>
              </ul>
              <div className="text-yellow-200 text-xs mt-3 font-semibold">For more details and all compliance/legal information, please see the <span className="underline">About</span> section.</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rankTiers.map((rank, i) => (
              <div
                key={rank.name}
                className={
                  `relative rounded-2xl p-8 border border-gray-800 bg-[#181C23]/90 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col items-start group` +
                  ` ${i === 0 ? 'border-blue-500' : i === 1 ? 'border-purple-500' : i === 2 ? 'border-yellow-500' : i === 3 ? 'border-green-500' : i === 4 ? 'border-pink-500' : i === 5 ? 'border-yellow-400' : i === 6 ? 'border-red-500' : ''}`
                }
              >
                <div className="absolute top-0 right-0 m-5 px-4 py-1 rounded-full text-xs font-bold text-white bg-white/10 border border-gray-700 shadow-sm tracking-wide group-hover:scale-105 transition-transform">
                  {rank.badge}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-gray-700 shadow group-hover:scale-110 transition-transform">
                    <rank.icon className="w-8 h-8 text-white" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-lg tracking-tight">{rank.name}</h3>
                </div>
                <div className="mb-4 w-full">
                  <span className="inline-block px-4 py-1 rounded bg-blue-900/70 text-blue-200 text-xs font-semibold mb-2">Requirement</span>
                  <div className="text-white font-medium text-base mt-2 mb-2">{rank.requirements}</div>
                </div>
                <ul className="space-y-3 mb-2 w-full">
                  {rank.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90 text-base font-medium">
                      <CheckBadgeIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="leading-snug" dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Team Growth & Income Example</h2>
            <p className="text-gray-300 text-base">If each person in your team does a ₹399 recharge, see how your income grows at each rank. (3% commission split by rank)</p>
          </div>
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center gap-5 px-8 py-6 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl relative overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-xl text-white mb-1">Example: ₹399 Recharge</div>
                <div className="text-blue-100 text-base mb-2">For every ₹399 recharge done by you or your team, <span className="font-semibold text-blue-200">3% commission</span> is generated and split by rank as shown below. This is the basis for the income example.</div>
                <div className="inline-block px-3 py-1 rounded-full bg-yellow-300/20 border border-yellow-400 text-yellow-200 text-xs font-bold mt-1">This calculation is only for recharge. If you and your team use more services (like bill payment, shopping, etc.), your total commission and income can be even higher.</div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col gap-2 px-5 py-5 rounded-xl bg-blue-900/20 border-2 border-blue-400 text-blue-100 font-semibold text-base shadow">
              <div className="flex items-center gap-2 mb-1">
                <ExclamationTriangleIcon className="w-6 h-6 text-blue-300" />
                <span className="text-blue-100 font-bold">Important:</span>
              </div>
              <ul className="list-disc list-inside text-blue-100 text-sm pl-2 space-y-1">
                <li><span className="font-bold text-white">This is a 100% legal, service-based income model.</span></li>
                <li><span className="font-bold text-white">Not MLM. Not a Ponzi scheme.</span> No joining fees, no product purchase requirements.</li>
                <li>You earn <span className="font-bold text-white">only when you and your team use real services</span> (like recharge, bill pay, shopping, etc.).</li>
                <li><span className="font-bold text-white">No income for just referring or adding people</span>—income is always based on real usage.</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            {teamGrowthWithIncome.map((row, idx) => (
              <div
                key={row.rank}
                className="relative rounded-3xl bg-gradient-to-br from-blue-900/40 to-purple-900/30 border-2 border-blue-700/30 shadow-2xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300 group overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl opacity-60 pointer-events-none" />
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg mb-2">
                  <ArrowTrendingUpIcon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-1">Rank</div>
                <div className="text-2xl font-extrabold text-white mb-2 drop-shadow">{row.rank}</div>
                <div className="flex flex-col gap-2 w-full mt-2">
                  <div className="flex justify-between w-full">
                    <span className="text-blue-200 font-medium">Team Size</span>
                    <span className="text-blue-100 font-bold">{row.team.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="text-purple-300 font-medium">Commission %</span>
                    <span className="text-purple-200 font-bold">{row.commissionPercent}%</span>
                  </div>
                  <div className="flex justify-between w-full mt-2 border-t border-gray-700 pt-2 items-center">
                    <span className="text-green-300 font-semibold">Potential Income</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-400 text-green-200 font-extrabold text-lg shadow">₹{Math.round(row.income).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-white mb-8 flex items-center gap-2">
            <FireIcon className="w-7 h-7 text-red-400" />
            Why We're Different
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-6 border border-blue-700/30">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">No Hidden Charges, No Surprises</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Zero joining fees</li>
                    <li>• No monthly charges</li>
                    <li>• No hidden costs</li>
                    <li>• Clear commission structure</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• High joining fees</li>
                    <li>• Monthly charges</li>
                    <li>• Hidden costs</li>
                    <li>• Unclear commission</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-700/30">
              <div className="flex items-center gap-3 mb-4">
                <CurrencyRupeeIcon className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Real Income, Real Growth</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Earn from real service usage</li>
                    <li>• Instant payouts</li>
                    <li>• Multiple income sources</li>
                    <li>• Transparent tracking</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Fake promises</li>
                    <li>• Delayed payments</li>
                    <li>• Single income source</li>
                    <li>• Unclear earnings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-900/40 to-red-900/40 rounded-2xl p-6 border border-pink-700/30">
              <div className="flex items-center gap-3 mb-4">
                <UserGroupIcon className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Team Growth & Support</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Rank never decreases</li>
                    <li>• 24/7 support</li>
                    <li>• Training resources</li>
                    <li>• Team analytics</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Rank can decrease</li>
                    <li>• Limited support</li>
                    <li>• No training</li>
                    <li>• Basic analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-6 border border-red-700/30">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Security & Compliance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Strong KYC verification</li>
                    <li>• Legal compliance</li>
                    <li>• Secure transactions</li>
                    <li>• One account per user</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Weak verification</li>
                    <li>• Legal issues</li>
                    <li>• Security risks</li>
                    <li>• Multiple accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-white mb-8 flex items-center gap-2">
            <FireIcon className="w-7 h-7 text-red-400" />
            Why Smart People Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 rounded-2xl p-6 border border-indigo-700/30">
              <div className="flex items-center gap-3 mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Why Smart People Choose Us</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Start earning from Day 1</li>
                    <li>• No pressure to refer</li>
                    <li>• Use your regular bills</li>
                    <li>• Keep your existing job</li>
                    <li>• Work at your pace</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Wait months for income</li>
                    <li>• Force referrals</li>
                    <li>• Buy products first</li>
                    <li>• Quit your job</li>
                    <li>• Strict targets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-2xl p-6 border border-emerald-700/30">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">What Makes Us Special</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• No monthly targets</li>
                    <li>• No minimum orders</li>
                    <li>• No product inventory</li>
                    <li>• No team pressure</li>
                    <li>• No false promises</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Strict monthly targets</li>
                    <li>• Minimum order pressure</li>
                    <li>• Buy inventory first</li>
                    <li>• Team pressure</li>
                    <li>• Fake success stories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-6 border border-amber-700/30">
              <div className="flex items-center gap-3 mb-4">
                <GiftIcon className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Extra Benefits You Get</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Free training videos</li>
                    <li>• Daily support calls</li>
                    <li>• Team chat groups</li>
                    <li>• Success stories</li>
                    <li>• Regular updates</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Paid training</li>
                    <li>• No support</li>
                    <li>• No team help</li>
                    <li>• Fake testimonials</li>
                    <li>• Outdated systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-2xl p-6 border border-rose-700/30">
              <div className="flex items-center gap-3 mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-rose-400" />
                <h3 className="text-xl font-bold text-white">Company Benefits</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-white">Our Platform</span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Registered company</li>
                    <li>• Legal compliance</li>
                    <li>• Tax benefits</li>
                    <li>• Bank partnerships</li>
                    <li>• Government approved</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-200">Others</span>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Unregistered</li>
                    <li>• Legal issues</li>
                    <li>• Tax problems</li>
                    <li>• No bank support</li>
                    <li>• Government warnings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-t border-gray-800 mb-8" />
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-950/80 via-purple-950/70 to-gray-900/80 p-8 shadow-2xl overflow-hidden">
            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <InformationCircleIcon className="w-7 h-7 text-blue-400" />
              Important Facts & Legal Points
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-900/30">
                <ShieldCheckIcon className="w-6 h-6 text-blue-400 mt-1" />
                <span><span className="font-bold text-white">100% legal, service-based income.</span> No investment, no MLM, no Ponzi.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-green-900/30">
                <CurrencyRupeeIcon className="w-6 h-6 text-green-400 mt-1" />
                <span>You earn <span className="font-bold text-green-200">only when you and your team use real services</span>.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-pink-900/30">
                <UserGroupIcon className="w-6 h-6 text-pink-300 mt-1" />
                <span><span className="font-bold text-pink-200">No income for just referring or adding people</span>—real usage = real income.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-900/30">
                <CheckBadgeIcon className="w-6 h-6 text-yellow-300 mt-1" />
                <span>All <span className="font-bold text-yellow-200">KYC and security checks</span> are mandatory.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-900/30">
                <IdentificationIcon className="w-6 h-6 text-blue-300 mt-1" />
                <span>Only <span className="font-bold text-blue-200">one account per Aadhaar and phone number</span>.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-green-900/30">
                <TrophyIcon className="w-6 h-6 text-green-300 mt-1" />
                <span>Your <span className="font-bold text-green-200">rank never goes down</span> once achieved.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-pink-900/30">
                <BoltIcon className="w-6 h-6 text-pink-300 mt-1" />
                <span>Inactive users (no service for 60 days) <span className="font-bold text-pink-200">stop earning</span> until they use a service again.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-900/30">
                <DocumentTextIcon className="w-6 h-6 text-yellow-300 mt-1" />
                <span>All <span className="font-bold text-yellow-200">trademarks and service marks</span> belong to their respective owners.</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-900/30">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-300 mt-1" />
                <span>For support or questions, <span className="font-bold text-blue-200">contact our compliance team</span>.</span>
              </div>
            </div>
            <div className="mt-8 text-center text-blue-200 text-sm font-semibold">
              Want to know more? See the <span className="underline">About</span> section or <span className="underline">contact us</span>.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}