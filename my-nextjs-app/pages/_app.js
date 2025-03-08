import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Navigation items
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Business', href: '/business' },
    { name: 'Stories', href: '/stories' },
    { name: 'News', href: '/news' },
    { name: 'Festival', href: '/festival' },
    { name: 'University', href: '/university' },
    { name: 'Cultural', href: '/cultural' },
    { name: 'Polls', href: '/polls' }
  ];

  return (
    <>
      <Head>
        <title>Whisper Heritage</title>
        <meta name="description" content="Celebrate and preserve cultural heritage" />
        <link rel="icon" href="/favicon.ico" />
        {/* Include Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
        {/* Include Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* Logo */}
                <Link 
                  href="/"
                  className="flex items-center px-2 text-xl font-bold text-gray-900"
                >
                  🏺 Whisper Heritage
                </Link>

                {/* Navigation Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        router.pathname === item.href
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* User Menu */}
              <div className="flex items-center">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <i className="fas fa-bell"></i>
                </button>
                <button className="ml-3 p-2 text-gray-600 hover:text-gray-900">
                  <i className="fas fa-user-circle text-2xl"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="bg-white shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">
                © 2024 Whisper Heritage. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
