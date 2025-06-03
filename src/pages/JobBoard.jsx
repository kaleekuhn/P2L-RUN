import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign,
  Bookmark,
  Share2,
  ChevronRight,
  Sparkles,
  Building
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockJobs } from '../data/mockData';

const categories = ['All', 'Social Work', 'Technology', 'Education', 'Healthcare', 'Translation'];
const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];

export default function JobBoard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = mockJobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-8 overflow-y-auto"
      >
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2 flex items-center"
          >
            Find Your Dream Career
            <Sparkles className="w-8 h-8 text-brand-primary ml-3 animate-pulse" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dark-muted text-lg"
          >
            Discover opportunities that match your skills and aspirations
          </motion.p>
        </div>

        <div className="mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-muted" />
            <input
              type="text"
              placeholder="Search for jobs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-card rounded-xl border border-dark-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
            />
            <Button
              variant="primary"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              icon={Filter}
            >
              Filters
            </Button>
          </motion.div>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
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
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  hover 
                  glow={selectedJob?.id === job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`${selectedJob?.id === job.id ? 'ring-2 ring-brand-primary' : ''}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-xl flex items-center justify-center">
                            <Building className="w-6 h-6 text-brand-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold hover:text-brand-primary transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-dark-muted">{job.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSaveJob(job.id);
                          }}
                          className="p-2 hover:bg-dark-bg rounded-lg transition-colors"
                        >
                          <Bookmark 
                            className={`w-5 h-5 ${
                              savedJobs.includes(job.id) 
                                ? 'text-brand-primary fill-brand-primary' 
                                : 'text-dark-muted'
                            }`} 
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-dark-bg rounded-lg transition-colors"
                        >
                          <Share2 className="w-5 h-5 text-dark-muted" />
                        </motion.button>
                      </div>
                    </div>

                    <p className="text-dark-text mb-4 line-clamp-2">{job.description}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center text-dark-muted">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-dark-muted">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-green-400">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs text-dark-muted">
                          Posted {new Date(job.posted).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-96 bg-dark-card border-l border-dark-border p-6 overflow-y-auto"
          >
            <div className="mb-6">
              <button
                onClick={() => setSelectedJob(null)}
                className="mb-4 text-dark-muted hover:text-white transition-colors"
              >
                ← Back to listings
              </button>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-brand-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                <p className="text-lg text-dark-muted">{selectedJob.company}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-dark-muted">
                  <MapPin className="w-5 h-5 mr-2" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center text-dark-muted">
                  <Clock className="w-5 h-5 mr-2" />
                  {selectedJob.type}
                </div>
                <div className="flex items-center text-green-400">
                  <DollarSign className="w-5 h-5 mr-2" />
                  {selectedJob.salary}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Job Description</h3>
                <p className="text-dark-muted leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-dark-muted text-sm">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button variant="primary" fullWidth icon={ChevronRight}>
                  Apply Now
                </Button>
                <Button 
                  variant="secondary" 
                  fullWidth 
                  icon={Bookmark}
                  onClick={() => toggleSaveJob(selectedJob.id)}
                >
                  {savedJobs.includes(selectedJob.id) ? 'Saved' : 'Save for Later'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}