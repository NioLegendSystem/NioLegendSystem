'use client';

import { motion } from 'framer-motion';
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  GiftIcon,
  StarIcon,
  FireIcon,
  SparklesIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Start earning from your own monthly needs',
    features: [
      'Zero joining fee, zero risk',
      'Recharge, bills, shopping, food, etc.',
      'Earn cashback on your own usage',
      'No pressure, no targets, no tricks',
      'Basic support',
      'Team size: up to 20',
      'Daily payout, instant withdrawal',
    ],
    icon: StarIcon,
    color: 'from-blue-500 to-blue-700',
    badge: 'Best for Everyone',
  },
  {
    name: 'Pro',
    price: '0',
    description: 'Grow your team, boost your income',
    features: [
      'Zero joining fee, zero risk',
      'All Starter benefits',
      "Earn from your team's real usage",
      'Shopping, food, travel, OTT, more',
      'Priority support',
      'Team size: up to 400',
      'Daily payout, instant withdrawal',
      'Team analytics & growth tools',
      'Learning videos & resources',
    ],
    icon: FireIcon,
    color: 'from-purple-500 to-purple-700',
    badge: 'Team Builder',
  },
  {
    name: 'Elite',
    price: '0',
    priceDescription: 'No investment required',
    description: 'Maximize your earnings, lead your team',
    features: [
      'Zero joining fee, zero risk',
      'All Pro benefits',
      'Earn from shopping, travel, insurance, more',
      'VIP support & personal mentor',
      'Team size: 8000+',
      'Daily payout, instant withdrawal',
      'Advanced analytics',
      'Team meetings & success training',
      'No pressure, no targets, only growth',
    ],
    icon: SparklesIcon,
    color: 'from-pink-500 to-pink-700',
    badge: "Leader's Choice",
  },
];

const commonFeatures = [
  {
    title: '100% Legal & Secure',
    description: 'Government approved, fully compliant with Indian direct selling rules',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Zero Investment',
    description: 'No joining fees, no monthly charges, no hidden costs',
    icon: CurrencyRupeeIcon,
  },
  {
    title: 'Instant Earnings',
    description: "Get paid daily for your team's service usage",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Team Growth',
    description: 'Build your team and earn from their service usage',
    icon: UserGroupIcon,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4">
        {/* Zero Cost Info Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-green-400/40">
              <CurrencyRupeeIcon className="w-10 h-10 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Absolutely Zero Cost to Join & Earn</h2>
              <ul className="text-lg text-green-200 space-y-2 mb-2">
                <li>• <span className="font-semibold text-white">No joining fee, no investment, no extra payment—ever.</span></li>
                <li>• <span className="font-semibold text-white">You only pay for what you actually use:</span> recharge, bills, shopping, food, etc.</li>
                <li>• <span className="font-semibold text-white">Your income comes from your own and your team's real service usage.</span></li>
                <li>• <span className="font-semibold text-white">No hidden charges, no packages, no upgrades, no pressure.</span></li>
              </ul>
              <div className="text-gray-300 text-base">Example: If you recharge your mobile for ₹399, you pay only ₹399—no extra. If your team orders food, pays bills, or shops online, you earn a share from their real spending. That's it!</div>
            </div>
          </div>
        </div>

        {/* Strong Main Points Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 border border-blue-700/30 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Why This Is The Smartest, Safest Way To Earn</h2>
            <div className="flex justify-center mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-green-600/80 text-white font-bold text-lg shadow-lg">No risk, only gain</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-blue-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Use Only For Your Real Needs</div>
                  <div className="text-gray-300">Recharge, pay bills, shop, order food, book tickets—just like you do every month. No extra steps, no extra cost.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CurrencyRupeeIcon className="w-8 h-8 text-green-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">No Extra Payment, Only Real Earnings</div>
                  <div className="text-gray-300">You never pay more than your actual bill. Every rupee you spend is for your own use—and you earn cashback and commission on every order, every bill, every booking!</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">100% Legal & Transparent</div>
                  <div className="text-gray-300">Fully government approved, direct selling rules followed. <span className='text-green-300 font-semibold'>No tricks, no risk, no loss—only gain.</span></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckBadgeIcon className="w-8 h-8 text-yellow-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Your Commission Is Truly Yours</div>
                  <div className="text-gray-300">No one else takes your share. What you earn from your usage and your team's usage is 100% yours.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <GiftIcon className="w-8 h-8 text-pink-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">India's Top Brands, Real Value</div>
                  <div className="text-gray-300">Shop or order from <span className="font-semibold text-white">Flipkart, Amazon, Swiggy, Zomato, BigBasket, Myntra, BookMyShow, MakeMyTrip, Uber, Ola</span> and more—earn commission on what you already buy every month.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RocketLaunchIcon className="w-8 h-8 text-red-400 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">A Genuine Opportunity, No Pressure</div>
                  <div className="text-gray-300">No targets, no pressure, no selling. If you're already spending, why not earn too? Simple, safe, and smart.</div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-center text-xl font-bold text-green-300 mb-4">If you use these brands, you deserve to earn from them!</div>
              {/* Brand Logos Row */}
              <div className="flex flex-wrap justify-center gap-4 items-center">
                {/* Replace with actual brand logos if available, else use text badges */}
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Flipkart</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Amazon</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Swiggy</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Zomato</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">BigBasket</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Myntra</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">BookMyShow</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">MakeMyTrip</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Uber</span>
                <span className="bg-white/10 border border-gray-700 rounded-lg px-4 py-2 text-white font-semibold">Ola</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Choose Your Path to Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Start earning with your regular monthly services. No investment required, no hidden charges.
          </motion.p>
        </div>

        {/* Common Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commonFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 100% Free Opportunity Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-700/60 to-blue-700/60 border border-green-400/30 rounded-2xl p-10 shadow-xl flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <CurrencyRupeeIcon className="w-12 h-12 text-green-300" />
              <ShieldCheckIcon className="w-12 h-12 text-blue-300" />
              <UserGroupIcon className="w-12 h-12 text-purple-300" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">One Opportunity. 100% Free. For Everyone.</h2>
            <ul className="text-lg text-green-100 space-y-3 mb-6 max-w-2xl mx-auto">
              <li>• <span className="font-semibold text-white">No plans, no packages, no upgrades—everyone gets all benefits.</span></li>
              <li>• <span className="font-semibold text-white">You only use what you need:</span> recharge, shopping, food, travel, etc.—and earn from that.</li>
              <li>• <span className="font-semibold text-white">No hidden charges, no investment, no risk, no pressure.</span></li>
              <li>• <span className="font-semibold text-white">Open and equal for all—no "levels" or "tiers".</span></li>
              <li>• <span className="font-semibold text-white">Your opportunity, your way—100% free, always.</span></li>
            </ul>
            <div className="text-gray-300 text-base text-center">Register once, use for your real needs, and start earning—no extra payment, no tricks, no limits. <span className="text-green-300 font-bold">This is true freedom to earn, for everyone.</span></div>
          </motion.div>
        </div>

        {/* App Launch Waiting List Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-500/20 to-pink-500/20 border border-yellow-400/30 rounded-2xl p-10 shadow-xl flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-4 w-full justify-between">
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/80 text-white font-bold text-lg shadow-lg animate-pulse">NioPay Launch - Waiting List</span>
              <span className="inline-block px-3 py-1 rounded-full bg-green-600/80 text-white font-semibold text-sm shadow">Promise: No spam, no pressure, only real opportunity</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">We're Building NioPay For You</h2>
            <div className="text-yellow-100 text-base mb-6 text-center max-w-2xl">This isn't just another app launch. We want to build <span className='text-white font-bold'>NioPay</span> as a real, legal, service-based income movement—with only genuinely interested, positive people. No fake hype, no pressure, no empty promises. If you're here, you're already different.</div>
            <div className="bg-white/10 rounded-xl p-4 mb-6 w-full max-w-2xl">
              <div className="text-pink-300 font-bold mb-2 text-center">Why are we doing this?</div>
              <div className="text-yellow-100 text-center">We believe everyone deserves a fair, risk-free way to earn. We're not looking for everyone—we're looking for the right people: those who want to learn, grow, and earn honestly. With <span className='text-white font-bold'>NioPay</span>, you're not just a user—you're a founding member.</div>
            </div>
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-yellow-200 text-sm font-semibold">Target: 1000 registrations</span>
              <span className="text-yellow-200 text-sm">(Current: 600+)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-4 mb-4 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-pink-400 h-4 animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <div className="w-full mb-8">
              <h3 className="text-xl font-bold text-yellow-100 mb-4 text-center">Your Journey Starts Here</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <UserGroupIcon className="w-8 h-8 text-yellow-400 mb-1" />
                  <span className="text-yellow-100 text-sm font-semibold">1. Register</span>
                </div>
                <span className="text-yellow-200 text-2xl md:mx-2">→</span>
                <div className="flex flex-col items-center">
                  <ArrowRightIcon className="w-8 h-8 text-pink-400 mb-1" />
                  <span className="text-yellow-100 text-sm font-semibold">2. Refer Friends</span>
                </div>
                <span className="text-yellow-200 text-2xl md:mx-2">→</span>
                <div className="flex flex-col items-center">
                  <InformationCircleIcon className="w-8 h-8 text-blue-400 mb-1" />
                  <span className="text-yellow-100 text-sm font-semibold">3. Learn</span>
                </div>
                <span className="text-yellow-200 text-2xl md:mx-2">→</span>
                <div className="flex flex-col items-center">
                  <RocketLaunchIcon className="w-8 h-8 text-green-400 mb-1" />
                  <span className="text-yellow-100 text-sm font-semibold">4. Early Access</span>
                </div>
                <span className="text-yellow-200 text-2xl md:mx-2">→</span>
                <div className="flex flex-col items-center">
                  <CheckBadgeIcon className="w-8 h-8 text-purple-400 mb-1" />
                  <span className="text-yellow-100 text-sm font-semibold">5. Start Earning</span>
                </div>
              </div>
            </div>
            <div className="text-center text-base text-yellow-200 mb-4">What happens next? <span className="text-white font-semibold">Once we hit our target, you'll get early access, step-by-step guidance, and a chance to shape the future with your feedback.</span></div>
            <div className="text-center text-lg text-yellow-100 font-semibold mb-4 mt-2">Ready to join? Fill out the registration form and secure your spot as a founding member.</div>
            <Link href="/register">
              <div className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-extrabold text-xl shadow-lg hover:from-yellow-500 hover:to-pink-500 transition-colors duration-300 mt-2 border-2 border-yellow-200">
                <span>Become a Founding Member</span>
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </Link>
            <div className="text-center text-base text-yellow-100 mt-6">If you believe in this, share with your friends and help us reach the launch target. <span className="font-bold text-white">Let's build something great together!</span></div>
          </motion.div>
        </div>

        {/* Important Information - Strict Rules Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 border-l-8 border-red-500 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="w-7 h-7 text-red-400" />
              <span className="inline-block px-3 py-1 rounded-full bg-red-600/90 text-white font-bold text-sm shadow">Strict Rules – Please Read!</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Important Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <InformationCircleIcon className="w-6 h-6 text-blue-400 mt-1" />
                <span className="text-gray-200">Income is <span className="text-red-300 font-bold">ONLY</span> for real service usage. <span className="text-red-300 font-bold">No income</span> for just referring or adding people.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckBadgeIcon className="w-6 h-6 text-green-400 mt-1" />
                <span className="text-gray-200">Strict <span className="text-white font-bold">KYC</span>, one account per person, and all government rules must be followed.</span>
              </div>
              <div className="flex items-start gap-3">
                <UserGroupIcon className="w-6 h-6 text-blue-400 mt-1" />
                <span className="text-gray-200">No group income from inactive or dummy accounts. Only real, active users generate income.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-yellow-400 mt-1" />
                <span className="text-gray-200">No multiple accounts for yourself or your family. One account per person only.</span>
              </div>
              <div className="flex items-start gap-3">
                <FireIcon className="w-6 h-6 text-red-400 mt-1" />
                <span className="text-gray-200">No fake activity. Any attempt to manipulate the system = permanent ban.</span>
              </div>
              <div className="flex items-start gap-3">
                <InformationCircleIcon className="w-6 h-6 text-green-400 mt-1" />
                <span className="text-gray-200">You must complete the <span className='text-white font-bold'>NioPay knowledge test</span> before you can withdraw any earnings.</span>
              </div>
              <div className="flex items-start gap-3">
                <CurrencyRupeeIcon className="w-6 h-6 text-blue-400 mt-1" />
                <span className="text-gray-200">No cash circulation. This is not an investment or money-rotation scheme. Only real service payments are allowed.</span>
              </div>
              <div className="flex items-start gap-3">
                <ExclamationCircleIcon className="w-6 h-6 text-pink-400 mt-1" />
                <span className="text-gray-200">No false promises or misleading income claims. If found, your account will be suspended.</span>
              </div>
              <div className="flex items-start gap-3">
                <UserGroupIcon className="w-6 h-6 text-green-400 mt-1" />
                <span className="text-gray-200">Support and benefits are only for genuine users who follow all rules and use real services.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-red-400 mt-1" />
                <span className="text-gray-200">Any fraud or violation may result in <span className='text-white font-bold'>legal action</span> as per Indian law.</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRightIcon className="w-6 h-6 text-yellow-400 mt-1" />
                <span className="text-gray-200">No team pressure. Team growth is optional and only for those interested.</span>
              </div>
              <div className="flex items-start gap-3">
                <InformationCircleIcon className="w-6 h-6 text-blue-400 mt-1" />
                <span className="text-gray-200">Transparency: All commissions, rules, and processes are 100% visible in your <span className='text-white font-bold'>NioPay</span> dashboard.</span>
              </div>
            </div>
            <div className="text-red-200 text-sm mt-6 text-center font-semibold">Note: Only real, active service usage brings income. Adding people alone will never generate earnings. Follow all rules strictly to keep your account and earnings safe.</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-extrabold text-white text-center mb-2">Frequently Asked Questions</h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6"></div>
          <div className="text-center text-lg text-blue-200 mb-10">Got questions? We've got honest answers!</div>
          <div className="space-y-8">
            {[
              {
                question: "Is NioPay really 100% free? Will I ever be asked to pay anything?",
                answer: "Yes, NioPay is 100% free. You will never be asked to pay any joining fee, package, or investment. You only pay for the real services you use (like recharge, shopping, food, etc.)."
              },
              {
                question: "Can I earn money just by referring people, without using any services?",
                answer: "No. Income is only for real service usage. You do not earn anything for just referring or adding people. Only when you and your team use real services do you earn."
              },
              {
                question: "What happens if I don't use any service for a few months?",
                answer: "If you don't use any service for 60 days, your account becomes inactive and you will not earn until you use a service again."
              },
              {
                question: "Is this legal? How is NioPay different from MLM or Ponzi schemes?",
                answer: "NioPay is 100% legal, government-compliant, and service-based. There is no investment, no product purchase, and no money rotation. You earn only from real service usage, not from joining or referring."
              },
              {
                question: "How do I withdraw my earnings? Is there a minimum payout?",
                answer: "Your earnings are credited to your NioPay wallet. You can withdraw to your bank account daily. Minimum payout is ₹100."
              },
              {
                question: "Can I have more than one account (for family, etc.)?",
                answer: "No. Only one account per person (Aadhaar/phone) is allowed. Multiple accounts are strictly prohibited."
              },
              {
                question: "What services can I use to earn income?",
                answer: "You can use mobile recharge, DTH, electricity, shopping, food delivery, travel, OTT, and more. The more you use, the more you can earn."
              },
              {
                question: "Do I have to build a team to earn, or can I earn alone?",
                answer: "You can earn cashback on your own usage. Team income is optional and only for those who want to grow further. No pressure."
              },
              {
                question: "How is my income calculated? Is it fixed or does it depend on usage?",
                answer: "Your income depends on the real service usage by you and your team. The more you and your team use, the more you earn. There are no fixed or guaranteed amounts."
              },
              {
                question: "What if someone tries to cheat the system?",
                answer: "Any fake activity, multiple accounts, or system manipulation will result in permanent ban and possible legal action."
              },
              {
                question: "What is the NioPay knowledge test and why is it required?",
                answer: "The knowledge test ensures you understand the rules, compliance, and how to earn legally. You must pass it before withdrawing earnings."
              },
              {
                question: "How do I get support if I have a problem?",
                answer: "You can contact NioPay support through the app or website. Only genuine, rule-following users will get support."
              },
              {
                question: "Will my rank ever go down if I become inactive?",
                answer: "No, your rank never goes down once achieved. But you must follow all rules to keep your account active."
              },
              {
                question: "Is my data and money safe with NioPay?",
                answer: "Yes, NioPay uses strict KYC, security, and legal compliance to keep your data and money safe."
              },
              {
                question: "How do I know if I'm following all the rules?",
                answer: "All rules, commissions, and processes are clearly shown in your NioPay dashboard. Read the Important Information section and pass the knowledge test."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 rounded-xl p-5 hover:bg-white/10 hover:shadow-lg cursor-pointer"
              >
                <div className="text-xl font-bold text-white mb-2">{faq.question}</div>
                <div className="text-gray-200 text-lg leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-700/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8">Join thousands of successful earners today. No investment required, just start using your regular services.</p>
            <Link href="/register">
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
                <span>Get Started Now</span>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 
