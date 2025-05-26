import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Your Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/pricing" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div>
            <Link href="/apply" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 