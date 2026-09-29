export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Absolutely. All rights reserved.</p>
        <p className="text-sm text-gray-400">Crafted scene by scene.</p>
      </div>
    </footer>
  )
}