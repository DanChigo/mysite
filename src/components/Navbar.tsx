import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono">
      <div className="flex items-center">
        <Link to="/" className="font-bold mr-4">DanielleOS v1.0</Link>
        
        {/* Desktop menu */}
        <div className="hidden sm:flex">
          <Link to="/" className="mx-2 cursor-pointer hover:bg-gray-300 px-2">Home</Link>
          <Link to="/about" className="mx-2 cursor-pointer hover:bg-gray-300 px-2">About</Link>
          <Link to="/projects" className="mx-2 cursor-pointer hover:bg-gray-300 px-2">Projects</Link>
          <Link to="/blog" className="mx-2 cursor-pointer hover:bg-gray-300 px-2">Blog</Link>
        </div>
      </div>
      
      {/* Time and mobile menu button */}
      <div className="flex items-center">
        <div className="text-xs mr-4 hidden sm:block">
          {new Date().toLocaleTimeString()}
        </div>
        
        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-gray-600">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50">
          <div className="py-1">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-300" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" className="block px-4 py-2 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Blog</Link>

          </div>
        </div>
      )}
    </nav>
  )
}