import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Danielle Ejiogu</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className="px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/projects" className="px-3 py-2 text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/blog" className="px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}