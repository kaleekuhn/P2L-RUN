import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Calendar,
  Heart,
  Sparkles,
  Trophy,
  Target
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockStats, mockEvents, mockJobs } from '../data/mockData';

const statsCards = [
  {
    label: 'Alumni Connected',
    value: mockStats.totalAlumni.toLocaleString(),
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    trend: '+123 this month'
  },
  {
    label: 'Jobs Filled',
    value: mockStats.jobPlacements.toLocaleString(),
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    trend: '+45 this week'
  },
  {
    label: 'Courses Completed',
    value: mockStats.coursesCompleted.toLocaleString(),
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    trend: '+892 this month'
  },
  {
    label: 'Active Mentorships',
    value: mockStats.mentorshipPairs,
    icon: Heart,
    color: 'from-red-500 to-rose-500',
    trend: '+28 new pairs'
  }
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2"
        >
          Welcome back, Test User! 
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block ml-2"
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Your journey of growth continues. Here's what's happening in your community.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <Card key={stat.label} delay={index * 0.1} hover glow>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-dark-muted text-sm">{stat.label}</p>
              <p className="text-green-400 text-xs mt-2 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.trend}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card gradient hover={false}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Impact Story</h2>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-bg rounded-xl p-4 text-center cursor-pointer"
                >
                  <Target className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-sm text-dark-muted">Goals Achieved</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-bg rounded-xl p-4 text-center cursor-pointer"
                >
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="font-bold text-2xl">12</p>
                  <p className="text-sm text-dark-muted">People Helped</p>
                </motion.div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Community Engagement</span>
                  <span className="text-sm font-bold">85%</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Latest Opportunities</h2>
              <div className="space-y-4">
                {mockJobs.slice(0, 2).map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-4 bg-dark-bg rounded-lg cursor-pointer"
                  >
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-dark-muted">{job.company} • {job.location}</p>
                    </div>
                    <Button size="sm">Apply</Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {mockEvents.slice(0, 3).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-dark-bg rounded-lg"
                  >
                    <h3 className="font-semibold text-sm">{event.title}</h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="w-3 h-3 text-dark-muted" />
                      <span className="text-xs text-dark-muted">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full border-2 border-dark-bg"
                          />
                        ))}
                        <span className="text-xs text-dark-muted ml-2">
                          +{event.attendees - 3}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost">Join</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="mt-6" glow>
            <div className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Daily Inspiration</h3>
              <p className="text-dark-muted text-sm italic">
                "Every expert was once a beginner. Your journey matters, and your story inspires others."
              </p>
              <div className="mt-4">
                <Button size="sm" variant="secondary" fullWidth>
                  Share Your Story
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}