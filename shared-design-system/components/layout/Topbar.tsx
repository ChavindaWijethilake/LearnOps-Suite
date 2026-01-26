'use client';

import React, { useState } from 'react';
import { Menu, Bell, LogOut, User, Settings } from 'lucide-react';

interface TopbarProps {
  portalName: string;
  userName: string;
  onMenuClick: () => void;
}

export default function Topbar({
  portalName,
  userName,
  onMenuClick,
}: TopbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">{portalName}</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search - Optional */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-colors w-64"
          />

          {/* Notification Bell */}
          <button
            className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-900">
                {userName}
              </span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">User Account</p>
                </div>
                <nav className="py-2">
                  <a
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                </nav>
                <div className="border-t border-gray-200 p-2">
                  <button
                    onClick={() => {
                      // Call logout handler
                      window.location.href = '/logout';
                    }}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full transition-colors rounded"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
