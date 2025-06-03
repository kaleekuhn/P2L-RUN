import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  BookOpen, 
  Calendar, 
  Users, 
  UserCheck, 
  Bot,
  Trophy,
  Sparkles
} from 'lucide-react';

const navItems = [
  { 
    path: '/', 
    icon: Home, 
    label: 'Dashboard',
    color: 'from-purple-500 to-pink-500',
    description: 'Your journey starts here'
  },
  { 
    path: '/jobs', 
    icon: Briefcase, 
    label: 'Job Board',
    color: 'from-blue-500 to-cyan-500',
    description: 'Find your dream career'
  },
  { 
    path: '/learning', 
    icon: BookOpen, 
    label: 'Learning Hub',
    color: 'from-green-500 to-emerald-500',
    description: 'Grow your skills'
  },
  { 
    path: '/events', 
    icon: Calendar, 
    label: 'Events',
    color: 'from-orange-500 to-red-500',
    description: 'Connect & celebrate'
  },
  { 
    path: '/community', 
    icon: Users, 
    label: 'Community',
    color: 'from-indigo-500 to-purple-500',
    description: 'Share your story'
  },
  { 
    path: '/mentorship', 
    icon: UserCheck, 
    label: 'Mentorship',
    color: 'from-pink-500 to-rose-500',
    description: 'Guide & be guided'
  },
  { 
    path: '/ai-support', 
    icon: Bot, 
    label: 'AI Support',
    color: 'from-cyan-500 to-blue-500',
    description: 'Get instant help'
  }
];

export default function Navigation({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Navigation sidebar */}
      <nav className={`
        fixed left-0 top-16 h-full w-64 bg-dark-card border-r border-dark-border p-4 overflow-y-auto z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4 px-3">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">Your Progress</span>
        </div>
        <div className="bg-dark-bg rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-dark-muted">Level 3 Explorer</span>
            <span className="text-xs font-bold text-brand-primary">320 XP</span>
          </div>
          <div className="w-full bg-dark-border rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-1000 ease-out"
              style={{ width: '65%' }}
            />
          </div>
          <p className="text-xs text-dark-muted mt-2">80 XP to next level</p>
        </div>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `group flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-dark-bg ring-2 ring-brand-primary/30'
                  : 'hover:bg-dark-bg/50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} ${
                  isActive ? 'shadow-lg' : 'opacity-80 group-hover:opacity-100'
                } transition-all`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`font-medium text-sm ${
                    isActive ? 'text-white' : 'text-dark-text'
                  }`}>
                    {item.label}
                  </p>
                  <p className="text-xs text-dark-muted group-hover:text-dark-text/70 transition-colors">
                    {item.description}
                  </p>
                </div>
                {isActive && (
                  <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl border border-brand-primary/20">
        <h3 className="font-semibold text-sm mb-2">Welcome back! 🌟</h3>
        <p className="text-xs text-dark-muted mb-3">
          You've helped 3 community members this week. Keep spreading the positivity!
        </p>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {['MA', 'FN', 'SA'].map((initials, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-[10px] font-medium text-white border-2 border-dark-card"
              >
                {initials}
              </div>
            ))}
          </div>
          <span className="text-xs text-dark-muted">+12 others</span>
        </div>
      </div>
    </nav>
    </>
  );
}