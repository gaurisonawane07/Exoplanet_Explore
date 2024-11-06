import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-slate-900 bg-opacity-90 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p className="mb-4">&copy; {new Date().getFullYear()} Exoplanet Explorer. All rights reserved.</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/about" className="hover:text-white transition duration-300">About</a>
          <a href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</a>
          <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
        </div>

        <div className="flex justify-center space-x-6">
          {/* Placeholder for social media icons */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.52 8.52 0 01-2.71 1.04 4.28 4.28 0 00-7.3 3.9A12.16 12.16 0 013 4.54 4.28 4.28 0 004.28 9.7a4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.96A8.6 8.6 0 012 19.46 12.12 12.12 0 007.29 21c8.09 0 12.51-6.7 12.51-12.5v-.57A9.02 9.02 0 0022.46 6z" />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.207 11.387.6.112.793-.26.793-.577v-2.16c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.73.083-.73 1.205.083 1.838 1.235 1.838 1.235 1.07 1.834 2.81 1.303 3.495.997.108-.775.42-1.304.763-1.603-2.665-.308-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.308-.536-1.548.116-3.23 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.007-.404 11.45 11.45 0 013.007.404c2.29-1.552 3.298-1.23 3.298-1.23.653 1.682.24 2.923.118 3.23.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.62-5.475 5.92.431.372.815 1.1.815 2.22v3.293c0 .318.192.693.8.576C20.565 22.092 24 17.598 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
