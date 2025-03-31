import { Github, Linkedin, Mail } from 'lucide-react'

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Hi, I'm Danielle
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Software Engineer passionate about building innovative solutions
        </p>
        <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <Linkedin size={24} />
          </a>
          <a href="mailto:example@email.com" className="text-gray-400 hover:text-gray-500">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}