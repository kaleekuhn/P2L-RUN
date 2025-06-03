import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Heart, 
  MessageCircle, 
  Eye, 
  Pin,
  TrendingUp,
  Users,
  Award,
  Flame,
  Plus
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { mockForumPosts } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

const categories = ['All', 'Career Advice', 'Study Groups', 'Success Stories', 'General Discussion', 'Resources'];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedPosts, setLikedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = mockForumPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const toggleLike = (postId) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.posted) - new Date(a.posted);
  });

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
          Community Forum
          <Users className="w-8 h-8 text-purple-500 ml-3" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Share experiences, ask questions, and celebrate together
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card gradient hover={false} className="mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Community Impact</h2>
              <div className="grid grid-cols-4 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-dark-muted">Day Streak</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-sm text-dark-muted">Posts Liked</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-sm text-dark-muted">Replies</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-sm text-dark-muted">Best Answers</p>
                </motion.div>
              </div>
            </div>
          </Card>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 flex-1">
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
            <Button variant="primary" icon={Plus} className="ml-4">
              New Post
            </Button>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    hover 
                    glow={likedPosts.includes(post.id)}
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                          >
                            {post.avatar}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-bold">{post.author}</h3>
                              <span className="text-xs text-dark-muted">
                                • {formatDistanceToNow(new Date(post.posted), { addSuffix: true })}
                              </span>
                              {post.pinned && (
                                <div className="flex items-center space-x-1 text-yellow-500">
                                  <Pin className="w-4 h-4" />
                                  <span className="text-xs">Pinned</span>
                                </div>
                              )}
                            </div>
                            <h4 className="text-lg font-semibold mb-2 hover:text-brand-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-dark-muted mb-4">{post.content}</p>
                            
                            <div className="flex items-center space-x-6 text-sm">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleLike(post.id);
                                }}
                                className={`flex items-center space-x-1 ${
                                  likedPosts.includes(post.id) ? 'text-red-500' : 'text-dark-muted hover:text-red-500'
                                } transition-colors`}
                              >
                                <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                                <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                              </motion.button>
                              
                              <div className="flex items-center space-x-1 text-dark-muted">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.replies}</span>
                              </div>
                              
                              <div className="flex items-center space-x-1 text-dark-muted">
                                <Eye className="w-4 h-4" />
                                <span>{post.views}</span>
                              </div>
                              
                              <span className="px-3 py-1 bg-dark-bg rounded-full text-xs">
                                {post.category}
                              </span>
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
                Trending Topics
                <TrendingUp className="w-5 h-5 text-green-500 ml-2" />
              </h3>
              <div className="space-y-3">
                {['Job Interview Tips', 'Remote Work', 'Language Learning', 'Networking'].map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3 bg-dark-bg rounded-lg cursor-pointer"
                  >
                    <span className="text-sm font-medium">{topic}</span>
                    <span className="text-xs text-dark-muted">{Math.floor(Math.random() * 50 + 10)} posts</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-dark-muted">
                <div className="flex items-start">
                  <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Be kind and supportive to all members</p>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Share authentic experiences and advice</p>
                </div>
                <div className="flex items-start">
                  <Users className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Respect diverse perspectives and backgrounds</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-6">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {['Sarah Ahmed', 'Mohammed Ali', 'Fatima Noor'].map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{name}</p>
                      <p className="text-xs text-dark-muted">{150 - index * 20} contributions</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}