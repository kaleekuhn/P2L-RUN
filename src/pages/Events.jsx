import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Video, 
  Globe,
  Sparkles,
  Heart,
  Share2,
  Bell
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockEvents } from '../data/mockData';
import { format } from 'date-fns';

const eventTypes = ['All', 'Networking', 'Career Development', 'Business', 'Social'];
const eventFormats = ['All', 'In-person', 'Virtual', 'Hybrid'];

export default function Events() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [registeredEvents, setRegisteredEvents] = useState([1]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = mockEvents.filter(event => {
    const matchesType = selectedType === 'All' || event.category === selectedType;
    const matchesFormat = selectedFormat === 'All' || event.type === selectedFormat;
    return matchesType && matchesFormat;
  });

  const toggleRegistration = (eventId) => {
    setRegisteredEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getEventIcon = (type) => {
    switch(type) {
      case 'In-person': return MapPin;
      case 'Virtual': return Video;
      case 'Hybrid': return Globe;
      default: return Calendar;
    }
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
          Events & Networking
          <Heart className="w-8 h-8 text-red-500 ml-3 animate-pulse" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Connect, learn, and grow with your community
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card gradient hover={false} className="mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Your Event Impact</h2>
              <div className="grid grid-cols-4 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-brand-primary">24</div>
                  <p className="text-sm text-dark-muted">Events Attended</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500">156</div>
                  <p className="text-sm text-dark-muted">Connections Made</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-yellow-500">8</div>
                  <p className="text-sm text-dark-muted">Events Hosted</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-500">4.8</div>
                  <p className="text-sm text-dark-muted">Avg Rating</p>
                </motion.div>
              </div>
            </div>
          </Card>

          <div className="mb-6 space-y-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {eventTypes.map((type, index) => (
                <motion.button
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                      : 'bg-dark-card text-dark-muted hover:text-white'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              {eventFormats.map((format, index) => (
                <motion.button
                  key={format}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedFormat(format)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedFormat === format
                      ? 'bg-dark-bg text-white'
                      : 'text-dark-muted hover:text-white'
                  }`}
                >
                  {format}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <AnimatePresence>
              {filteredEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.type);
                const isRegistered = registeredEvents.includes(event.id);
                const isFull = event.attendees >= event.maxAttendees;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      hover 
                      glow={isRegistered}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${
                                isRegistered ? 'from-green-500 to-emerald-500' : 'from-brand-primary/20 to-brand-secondary/20'
                              }`}>
                                <EventIcon className={`w-6 h-6 ${isRegistered ? 'text-white' : 'text-brand-primary'}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold">{event.title}</h3>
                                <p className="text-sm text-dark-muted">Hosted by {event.host}</p>
                              </div>
                              {isRegistered && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex items-center space-x-1 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm"
                                >
                                  <Sparkles className="w-4 h-4" />
                                  <span>Registered</span>
                                </motion.div>
                              )}
                            </div>

                            <p className="text-dark-text mb-4">{event.description}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <div className="flex items-center text-dark-muted">
                                <Calendar className="w-4 h-4 mr-1" />
                                {format(new Date(event.date), 'MMM d, yyyy')}
                              </div>
                              <div className="flex items-center text-dark-muted">
                                <Clock className="w-4 h-4 mr-1" />
                                {event.time}
                              </div>
                              <div className="flex items-center text-dark-muted">
                                <EventIcon className="w-4 h-4 mr-1" />
                                {event.type}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex -space-x-2">
                              {[...Array(Math.min(4, event.attendees))].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                  className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full border-2 border-dark-card flex items-center justify-center text-xs font-medium text-white"
                                >
                                  {String.fromCharCode(65 + i)}
                                </motion.div>
                              ))}
                            </div>
                            <span className="text-sm text-dark-muted">
                              {event.attendees} / {event.maxAttendees} attending
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 hover:bg-dark-bg rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Share2 className="w-5 h-5 text-dark-muted" />
                            </motion.button>
                            <Button
                              size="sm"
                              variant={isRegistered ? 'success' : isFull ? 'secondary' : 'primary'}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isFull) toggleRegistration(event.id);
                              }}
                              disabled={isFull && !isRegistered}
                            >
                              {isRegistered ? 'Registered' : isFull ? 'Full' : 'Register'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <Card className="mb-6" glow>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                Event Streak
                <Sparkles className="w-5 h-5 text-yellow-500 ml-2" />
              </h3>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-brand-primary mb-2">7</div>
                <p className="text-sm text-dark-muted">Days in a row</p>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`h-8 rounded ${i < 7 ? 'bg-gradient-to-br from-brand-primary to-brand-secondary' : 'bg-dark-bg'}`}
                  />
                ))}
              </div>
              <p className="text-xs text-dark-muted text-center">
                Keep attending events to maintain your streak!
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Create Your Event</h3>
              <p className="text-sm text-dark-muted mb-4">
                Have an idea for bringing the community together? Host your own event!
              </p>
              <Button variant="secondary" fullWidth icon={Calendar}>
                Create Event
              </Button>
            </div>
          </Card>

          <Card className="mt-6">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                Event Reminders
                <Bell className="w-5 h-5 text-brand-primary ml-2" />
              </h3>
              <div className="space-y-3">
                {registeredEvents.map(eventId => {
                  const event = mockEvents.find(e => e.id === eventId);
                  if (!event) return null;
                  
                  return (
                    <motion.div
                      key={eventId}
                      whileHover={{ x: 4 }}
                      className="p-3 bg-dark-bg rounded-lg cursor-pointer"
                    >
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      <p className="text-xs text-dark-muted mt-1">
                        {format(new Date(event.date), 'MMM d')} at {event.time}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}