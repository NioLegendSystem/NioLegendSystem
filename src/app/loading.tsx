export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 