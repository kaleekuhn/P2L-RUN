import { Bell, Search, User, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { mockNotifications } from '../../data/mockData';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-card/80 backdrop-blur-lg border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Refuge Alumni Network
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-dark-bg rounded-full px-4 py-2 hover:ring-2 hover:ring-brand-primary/30 transition-all">
              <Search className="w-4 h-4 text-dark-muted mr-2" />
              <input
                type="text"
                placeholder="Search for opportunities..."
                className="bg-transparent text-sm outline-none w-64 placeholder-dark-muted"
              />
            </div>

            <button className="relative p-2 hover:bg-dark-bg rounded-lg transition-all group">
              <MessageCircle className="w-5 h-5 text-dark-muted group-hover:text-brand-primary transition-colors" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-dark-bg rounded-lg transition-all group"
              >
                <Bell className="w-5 h-5 text-dark-muted group-hover:text-brand-primary transition-colors" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-accent text-xs text-white rounded-full flex items-center justify-center animate-bounce">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-dark-card rounded-xl shadow-2xl border border-dark-border overflow-hidden animate-slide-up">
                  <div className="p-4 border-b border-dark-border">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 hover:bg-dark-bg transition-colors cursor-pointer ${
                          !notification.read ? 'border-l-4 border-brand-primary' : ''
                        }`}
                      >
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-dark-muted mt-1">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 p-2 hover:bg-dark-bg rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">TU</span>
                </div>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-dark-card rounded-xl shadow-2xl border border-dark-border overflow-hidden animate-slide-up">
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                        <span className="text-lg font-medium text-white">TU</span>
                      </div>
                      <div>
                        <p className="font-semibold">Test User</p>
                        <p className="text-sm text-dark-muted">Alumni Member</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-dark-bg transition-colors text-sm">
                        My Profile
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-dark-bg transition-colors text-sm">
                        Settings
                      </button>
                      <hr className="border-dark-border" />
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-dark-bg transition-colors text-sm text-red-400">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}