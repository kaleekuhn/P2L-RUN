import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  Star, 
  Globe, 
  Award, 
  MessageSquare,
  Calendar,
  Heart,
  Sparkles,
  Target,
  Clock
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockMentors } from '../data/mockData';

const expertiseAreas = ['All', 'Career Transition', 'Technical Skills', 'Leadership', 'Entrepreneurship', 'Language'];

export default function Mentorship() {
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const [savedMentors, setSavedMentors] = useState([1]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const filteredMentors = mockMentors.filter(mentor => 
    selectedExpertise === 'All' || 
    mentor.expertise.some(exp => exp.includes(selectedExpertise))
  );

  const toggleSaveMentor = (mentorId) => {
    setSavedMentors(prev =>
      prev.includes(mentorId)
        ? prev.filter(id => id !== mentorId)
        : [...prev, mentorId]
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
          Mentorship Matching
          <Heart className="w-8 h-8 text-red-500 ml-3 animate-pulse" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Connect with experienced professionals who understand your journey
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card gradient hover={false} className="mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Your Mentorship Journey</h2>
              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-sm text-dark-muted">Sessions Completed</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-dark-muted">Goals Achieved</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold">4.9</div>
                  <p className="text-sm text-dark-muted">Average Rating</p>
                </motion.div>
              </div>
            </div>
          </Card>

          <div className="mb-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {expertiseAreas.map((area, index) => (
                <motion.button
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExpertise(area)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedExpertise === area
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                      : 'bg-dark-card text-dark-muted hover:text-white'
                  }`}
                >
                  {area}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <AnimatePresence>
              {filteredMentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    hover 
                    glow={savedMentors.includes(mentor.id)}
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative"
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                              {mentor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            {mentor.rating >= 4.8 && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 text-white fill-white" />
                              </div>
                            )}
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                            <p className="text-dark-muted mb-3">{mentor.title} at {mentor.company}</p>
                            
                            <p className="text-sm text-dark-text mb-4 italic">"{mentor.bio}"</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {mentor.expertise.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-dark-bg rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                              {mentor.expertise.length > 3 && (
                                <span className="px-3 py-1 bg-dark-bg rounded-full text-xs text-dark-muted">
                                  +{mentor.expertise.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-dark-muted">
                                <div className="flex items-center">
                                  <Globe className="w-4 h-4 mr-1" />
                                  {mentor.languages.slice(0, 2).join(', ')}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {mentor.availability}
                                </div>
                                <div className="flex items-center">
                                  <UserCheck className="w-4 h-4 mr-1" />
                                  {mentor.mentees} mentees
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSaveMentor(mentor.id);
                                  }}
                                  className="text-red-500"
                                >
                                  <Heart className={`w-5 h-5 ${
                                    savedMentors.includes(mentor.id) ? 'fill-current' : ''
                                  }`} />
                                </motion.button>
                                <Button size="sm" variant="primary">
                                  Connect
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <Card className="mb-6" glow>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                Perfect Match
                <Sparkles className="w-5 h-5 text-yellow-500 ml-2" />
              </h3>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold">Dr. Ahmad Hassan</h4>
                <p className="text-sm text-dark-muted">95% compatibility</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Shared Background</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-brand-primary rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Expertise Match</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 ${i < 4 ? 'bg-brand-primary' : 'bg-dark-border'} rounded-full`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Availability</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 ${i < 5 ? 'bg-brand-primary' : 'bg-dark-border'} rounded-full`} />
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="primary" fullWidth size="sm">
                Request Introduction
              </Button>
            </div>
          </Card>

          <Card className="mb-6">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Become a Mentor</h3>
              <p className="text-sm text-dark-muted mb-4">
                Share your experience and help others on their journey to success.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Award className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Earn recognition points</p>
                </div>
                <div className="flex items-start">
                  <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Give back to community</p>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Develop leadership skills</p>
                </div>
              </div>
              <Button variant="secondary" fullWidth>
                Apply to Mentor
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Upcoming Sessions</h3>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="p-3 bg-dark-bg rounded-lg cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">Career Planning</h4>
                    <span className="text-xs text-green-500">Tomorrow</span>
                  </div>
                  <p className="text-xs text-dark-muted">with Dr. Ahmad Hassan</p>
                  <p className="text-xs text-dark-muted mt-1">3:00 PM EST</p>
                </motion.div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}