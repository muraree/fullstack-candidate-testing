import React from 'react';

export default function Header() {
  return (
    <nav className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">HEALTH EXPLORE</div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">

                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">PROFILE</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">JOB</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PROFESSIONAL NETWORK</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOUNGE</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SALARY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}