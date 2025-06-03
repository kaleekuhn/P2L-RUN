import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Award,
  Play,
  TrendingUp,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockCourses } from '../data/mockData';

const skillCategories = ['All', 'Technology', 'Marketing', 'Language', 'Business', 'Design'];

const learningPaths = [
  {
    title: 'Digital Professional',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    courses: 4,
    duration: '3 months',
    progress: 45
  },
  {
    title: 'Business Leader',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    courses: 6,
    duration: '4 months',
    progress: 20
  }
];

export default function LearningHub() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [enrolledCourses, setEnrolledCourses] = useState([1]);

  const filteredCourses = mockCourses.filter(course => 
    selectedCategory === 'All' || course.category === selectedCategory
  );

  const toggleEnrollment = (courseId) => {
    setEnrolledCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

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
          className="text-4xl font-bold mb-2 flex items-center"
        >
          Learning Hub
          <Award className="w-8 h-8 text-yellow-500 ml-3" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Unlock your potential with courses designed for your success
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card gradient hover={false} className="mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                Your Learning Journey
                <TrendingUp className="w-5 h-5 text-green-500 ml-2" />
              </h2>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-brand-primary">12</div>
                  <p className="text-sm text-dark-muted">Courses Completed</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500">48</div>
                  <p className="text-sm text-dark-muted">Skills Gained</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-yellow-500">3</div>
                  <p className="text-sm text-dark-muted">Certificates Earned</p>
                </motion.div>
              </div>

              <div className="space-y-4">
                {learningPaths.map((path, index) => (
                  <motion.div
                    key={path.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-bg rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${path.color}`}>
                          <path.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{path.title}</h3>
                          <p className="text-xs text-dark-muted">
                            {path.courses} courses • {path.duration}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-brand-primary">
                        {path.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${path.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${path.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          <div className="mb-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                      : 'bg-dark-card text-dark-muted hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover glow>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-dark-muted text-sm mb-3">{course.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center text-dark-muted">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-dark-muted">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students.toLocaleString()} students
                          </div>
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {course.rating}
                          </div>
                          <div className="text-brand-primary font-semibold">
                            {course.price}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-dark-bg rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <Button
                          variant={enrolledCourses.includes(course.id) ? 'success' : 'primary'}
                          icon={enrolledCourses.includes(course.id) ? CheckCircle : Play}
                          onClick={() => toggleEnrollment(course.id)}
                        >
                          {enrolledCourses.includes(course.id) ? 'Continue' : 'Enroll'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <Card className="mb-6" glow>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                Weekly Challenge
                <Zap className="w-5 h-5 text-yellow-500 ml-2" />
              </h3>
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl p-4 mb-4">
                <p className="text-sm mb-3">Complete 3 courses this week</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-dark-muted">Progress</span>
                  <span className="text-xs font-bold">1/3</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-primary to-brand-accent" style={{ width: '33%' }} />
                </div>
              </div>
              <Button variant="secondary" fullWidth size="sm">
                View All Challenges
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Recommended for You</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Python for Beginners</h4>
                    <p className="text-xs text-dark-muted">Start your coding journey</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Leadership Skills</h4>
                    <p className="text-xs text-dark-muted">Become a better leader</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}