export const mockJobs = [
  {
    id: 1,
    title: "Community Development Officer",
    company: "UNHCR",
    location: "Geneva, Switzerland",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Lead community engagement initiatives for refugee integration programs.",
    requirements: ["Bachelor's degree in Social Work or related field", "3+ years experience in community development", "Fluency in English and French"],
    posted: "2024-01-15",
    category: "Social Work"
  },
  {
    id: 2,
    title: "Arabic Translator",
    company: "International Rescue Committee",
    location: "Remote",
    type: "Contract",
    salary: "$40/hour",
    description: "Provide translation services for refugee documentation and communications.",
    requirements: ["Native Arabic speaker", "Professional English proficiency", "Translation certification preferred"],
    posted: "2024-01-18",
    category: "Translation"
  },
  {
    id: 3,
    title: "Youth Program Coordinator",
    company: "Red Cross",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "$55,000 - $65,000",
    description: "Develop and manage educational programs for refugee youth.",
    requirements: ["Experience in youth programming", "Cross-cultural communication skills", "Valid driver's license"],
    posted: "2024-01-20",
    category: "Education"
  }
];

export const mockCourses = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    provider: "Google Digital Garage",
    duration: "40 hours",
    level: "Beginner",
    price: "Free",
    category: "Marketing",
    rating: 4.7,
    students: 1250,
    description: "Learn the basics of digital marketing including SEO, social media, and analytics.",
    skills: ["SEO", "Social Media Marketing", "Google Analytics"]
  },
  {
    id: 2,
    title: "Introduction to Data Analysis",
    provider: "Coursera",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$49/month",
    category: "Technology",
    rating: 4.8,
    students: 890,
    description: "Master data analysis using Python and Excel for business insights.",
    skills: ["Python", "Excel", "Data Visualization"]
  },
  {
    id: 3,
    title: "English for Professional Communication",
    provider: "P2L Academy",
    duration: "8 weeks",
    level: "All levels",
    price: "Free for alumni",
    category: "Language",
    rating: 4.9,
    students: 2100,
    description: "Improve your business English for workplace success.",
    skills: ["Business Writing", "Presentation Skills", "Email Communication"]
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "P2L Alumni Networking Night",
    date: "2024-02-15",
    time: "18:00 - 21:00",
    location: "Toronto Convention Centre",
    type: "In-person",
    category: "Networking",
    attendees: 145,
    maxAttendees: 200,
    description: "Connect with fellow alumni, share experiences, and expand your professional network.",
    host: "P2L Toronto Chapter"
  },
  {
    id: 2,
    title: "Tech Career Workshop",
    date: "2024-02-20",
    time: "14:00 - 16:00",
    location: "Online",
    type: "Virtual",
    category: "Career Development",
    attendees: 78,
    maxAttendees: 100,
    description: "Learn about career opportunities in tech and how to prepare for technical interviews.",
    host: "P2L Tech Committee"
  },
  {
    id: 3,
    title: "Entrepreneurship Bootcamp",
    date: "2024-03-01",
    time: "09:00 - 17:00",
    location: "P2L Innovation Hub, Montreal",
    type: "Hybrid",
    category: "Business",
    attendees: 45,
    maxAttendees: 60,
    description: "Intensive workshop on starting and scaling your own business.",
    host: "P2L Business Network"
  }
];

export const mockForumPosts = [
  {
    id: 1,
    title: "Tips for Canadian Job Interviews",
    author: "Sarah Ahmed",
    avatar: "SA",
    category: "Career Advice",
    content: "Just had my first successful interview! Here are some tips that helped me...",
    likes: 45,
    replies: 12,
    views: 234,
    posted: "2024-01-22T10:30:00",
    pinned: true
  },
  {
    id: 2,
    title: "Looking for Study Partners - PMP Certification",
    author: "Mohammed Ali",
    avatar: "MA",
    category: "Study Groups",
    content: "Planning to take the PMP exam in March. Anyone interested in forming a study group?",
    likes: 23,
    replies: 8,
    views: 156,
    posted: "2024-01-21T14:45:00",
    pinned: false
  },
  {
    id: 3,
    title: "Success Story: From P2L to Tech Lead",
    author: "Fatima Noor",
    avatar: "FN",
    category: "Success Stories",
    content: "Three years ago, I arrived as a refugee. Today, I'm leading a development team...",
    likes: 89,
    replies: 24,
    views: 567,
    posted: "2024-01-20T09:15:00",
    pinned: true
  }
];

export const mockMentors = [
  {
    id: 1,
    name: "Dr. Ahmad Hassan",
    title: "Senior Software Engineer",
    company: "Microsoft",
    expertise: ["Software Development", "Career Transition", "Technical Leadership"],
    languages: ["English", "Arabic", "French"],
    experience: "15 years",
    rating: 4.9,
    sessions: 87,
    availability: "Evenings EST",
    bio: "Former refugee from Syria, now helping others navigate tech careers.",
    mentees: 12
  },
  {
    id: 2,
    name: "Mariam Tekle",
    title: "HR Director",
    company: "TD Bank",
    expertise: ["Resume Writing", "Interview Preparation", "Canadian Workplace Culture"],
    languages: ["English", "Tigrinya", "Arabic"],
    experience: "12 years",
    rating: 4.8,
    sessions: 124,
    availability: "Weekends",
    bio: "Passionate about helping newcomers succeed in Canadian corporate environment.",
    mentees: 8
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    title: "Business Development Manager",
    company: "Shopify",
    expertise: ["Entrepreneurship", "Sales", "Business Strategy"],
    languages: ["English", "Spanish", "Portuguese"],
    experience: "10 years",
    rating: 4.7,
    sessions: 65,
    availability: "Flexible",
    bio: "Started my own business before joining Shopify. Love helping entrepreneurs.",
    mentees: 6
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "Test User",
    email: "user@p2l.org",
    avatar: "TU",
    role: "Alumni",
    joinedDate: "2023-06-15",
    location: "Toronto, Canada",
    bio: "P2L graduate passionate about community development.",
    skills: ["Project Management", "Community Outreach", "Arabic Translation"],
    interests: ["Networking", "Career Development", "Mentoring"]
  }
];

export const mockNotifications = [
  {
    id: 1,
    type: "event",
    title: "Reminder: Networking Night Tomorrow",
    message: "Don't forget about the P2L Alumni Networking Night tomorrow at 6 PM.",
    timestamp: "2024-01-24T10:00:00",
    read: false
  },
  {
    id: 2,
    type: "message",
    title: "New message from your mentor",
    message: "Dr. Ahmad Hassan sent you a message about your career goals.",
    timestamp: "2024-01-23T15:30:00",
    read: false
  },
  {
    id: 3,
    type: "forum",
    title: "Someone replied to your post",
    message: "Mohammed Ali replied to your post about study groups.",
    timestamp: "2024-01-22T12:15:00",
    read: true
  }
];

export const mockStats = {
  totalAlumni: 3456,
  jobPlacements: 1892,
  mentorshipPairs: 567,
  coursesCompleted: 8934,
  eventsThisMonth: 12,
  activeForumUsers: 892
};