'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  RocketLaunchIcon, 
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
  KeyIcon
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              About Neo Legend
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming the way people earn through innovative service-based solutions
            </p>
          </motion.div>

          {/* Founder Section */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
                      PE
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Premkumar E</h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 mb-4">
                    <AcademicCapIcon className="w-5 h-5" />
                    <span className="text-sm md:text-base">B.Tech in Artificial Intelligence and Data Science</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Founder and CEO of Neo Legend, bringing innovative solutions to transform everyday services into income opportunities.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                      <RocketLaunchIcon className="w-5 h-5" />
                      <span>Innovator</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                      <LightBulbIcon className="w-5 h-5" />
                      <span>Visionary</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                      <UserGroupIcon className="w-5 h-5" />
                      <span>Leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services & Features Section */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Our Services & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Service cards with improved mobile spacing */}
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <CurrencyDollarIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Direct Selling Services</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Mobile recharge</li>
                    <li>DTH recharge</li>
                    <li>OTT subscriptions</li>
                    <li>Bill payments</li>
                  </ul>
                </div>

                {/* Digital Platform */}
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <ComputerDesktopIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Digital Platform</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Integrated platform featuring wallet system, franchise dashboard, investor view, and co-branded solutions for seamless service delivery.
                  </p>
                </div>

                {/* Matrix Income Model */}
                <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <ChartBarIcon className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Matrix Income Model</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Legal-compliant income distribution through referrals, loyalty programs, seasonal offers, and performance rewards.
                  </p>
                </div>

                {/* AI Tools */}
                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <SparklesIcon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">AI Tools & Features</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Advanced AI tools including NeoBot virtual assistant, gamified dashboard, leaderboard, and white-label solutions.
                  </p>
                </div>

                {/* Franchise Setup */}
                <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <BuildingStorefrontIcon className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Franchise & Smart Stores</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    API-integrated smart stores with live confirmation for recharge and bill payment services.
                  </p>
                </div>

                {/* Security & Compliance */}
                <div className="bg-gradient-to-br from-yellow-900/40 to-green-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <ShieldCheckIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Security & Compliance</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Comprehensive security with Aadhaar validation, OTP authentication, and full legal compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision Section */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <LightBulbIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  To create a world where everyone can earn through their regular service usage, making financial growth accessible to all.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <ChartBarIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  To empower individuals with innovative solutions that transform their everyday services into sustainable income streams.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Value cards with improved mobile spacing */}
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <UserGroupIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Constantly pushing boundaries to create better solutions for our users.
                  </p>
                </div>

                {/* Accessibility */}
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <GlobeAltIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Accessibility</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Making financial growth accessible to everyone through simple solutions.
                  </p>
                </div>

                {/* Growth */}
                <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-3 md:mb-4">
                    <RocketLaunchIcon className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Growth</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Empowering individuals to achieve their financial goals through our platform.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* User Terms & Policies Section */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">User Terms & Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Policy cards with improved mobile spacing */}
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">User Eligibility</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Must be 18 years or older</li>
                    <li>Must be a resident Indian citizen</li>
                    <li>Valid Aadhaar and PAN required</li>
                  </ul>
                </div>

                {/* KYC & Registration */}
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">KYC & Registration</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>KYC documents required: Aadhaar, PAN, Bank Details.</li>
                    <li>One Aadhaar and PAN can be used only for one user ID.</li>
                    <li>Fake/duplicate KYC will result in account termination.</li>
                  </ul>
                </div>

                {/* Subscription & Wallet Terms */}
                <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Subscription & Wallet Terms</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Activate account by purchasing service credits.</li>
                    <li>No direct registration fee; only service purchase required.</li>
                    <li>No refund policy once service credits are purchased.</li>
                  </ul>
                </div>

                {/* Income and Commission Policy */}
                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Income and Commission Policy</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Income earned only through legal service usage (recharge, DTH, OTT, etc.).</li>
                    <li>Income based on self-service, team usage, and rank-based rewards.</li>
                    <li>Commission payouts weekly/monthly to verified bank accounts.</li>
                    <li>GST and TDS deducted and paid to government.</li>
                    <li>Auto-lock/release for commission if user/service inactive.</li>
                  </ul>
                </div>

                {/* Rank and Performance Policy */}
                <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Rank and Performance Policy</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Ranks based on service usage points (₹1 = 1 point).</li>
                    <li>No compulsory referral needed to earn or rank up.</li>
                    <li>Inactive users (60+ days) marked inactive; Auto Shift Policy applies.</li>
                  </ul>
                </div>

                {/* Fair Usage & Anti-Fraud Policy */}
                <div className="bg-gradient-to-br from-yellow-900/40 to-green-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Fair Usage & Anti-Fraud Policy</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>No fake recharges, team pushing, or ID manipulation allowed.</li>
                    <li>OTP & API verification ensures service authenticity.</li>
                    <li>One device login per user; multi-login/device-sharing blocked.</li>
                    <li>AI-based fraud detection and strict monitoring.</li>
                  </ul>
                </div>

                {/* User Dashboard Features */}
                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">User Dashboard Features</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Real-time income, rank, and usage tracking.</li>
                    <li>Weekly reports via WhatsApp/email.</li>
                    <li>Income simulation tools, digital business card generator.</li>
                    <li>Face/OTP-based login system.</li>
                  </ul>
                </div>

                {/* Karma Wallet & Donations Policy */}
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Karma Wallet & Donations Policy</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>All donations are optional and trackable with proof and badge.</li>
                    <li>No commission/benefit earned through donation money.</li>
                    <li>NGO/Ashram partners are verified before onboarding.</li>
                  </ul>
                </div>

                {/* Privacy and Data Security */}
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Privacy and Data Security</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>All personal data is encrypted.</li>
                    <li>No sharing/selling of user data to third parties.</li>
                    <li>Users can raise support tickets or request account deletion anytime.</li>
                  </ul>
                </div>

                {/* White Label Licensing */}
                <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">White Label Licensing (If Applicable)</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Partners must follow SOP, branding, and compliance guidelines.</li>
                    <li>Separate agreement will be signed.</li>
                  </ul>
                </div>

                {/* Code of Conduct for All Users */}
                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Code of Conduct for All Users</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Maintain professionalism and ethical behavior.</li>
                    <li>No spamming, mis-selling, or fake promises allowed.</li>
                    <li>Violations lead to suspension/termination.</li>
                  </ul>
                </div>

                {/* Legal & Compliance */}
                <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Legal & Compliance</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Operates under Direct Selling Rules 2021, Consumer Protection Act, Income Tax Act, and IT Act.</li>
                    <li>Not a money circulation scheme, Ponzi, or lottery model.</li>
                    <li>Independent legal compliance audit is done periodically.</li>
                  </ul>
                </div>

                {/* Modification of Terms */}
                <div className="bg-gradient-to-br from-yellow-900/40 to-green-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Modification of Terms</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Company may update T&C at any time with notice via app/email.</li>
                    <li>Users are responsible for reviewing terms periodically.</li>
                  </ul>
                </div>

                {/* Contact & Grievance Redressal */}
                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Contact & Grievance Redressal</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Email: support@neolegendsystem.com</li>
                    <li>Grievance Officer: [Name & Contact]</li>
                    <li>Support Hours: Mon–Sat, 10 AM – 6 PM</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 