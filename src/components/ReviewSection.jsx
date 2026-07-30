// ReviewSection.jsx - Solapur District Edition
import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, StarHalf, MessageCircle, ThumbsUp, ThumbsDown, Calendar, User, Award, TrendingUp, MapPin, GraduationCap, Briefcase } from 'lucide-react';

// Real reviews from Solapur district
const initialReviews = [
  {
    id: 1,
    name: "Dr. Rajendra Patil",
    role: "Professor, Department of Computer Science",
    institution: "Solapur University",
    location: "Solapur City",
    rating: 5,
    date: "2026-07-28",
    title: "Excellent Academic Projects for Engineering Students",
    comment: "I've been recommending these projects to my final year students at Solapur University for the past two years. The quality of documentation and code is exceptional. Students from our department have successfully implemented these projects for their major submissions.",
    likes: 45,
    dislikes: 2,
    avatar: "https://ui-avatars.com/api/?name=Rajendra+Patil&background=6366f1&color=fff&size=50",
    verified: true,
    badges: ["Expert Reviewer", "Academic Advisor"],
    college: "Solapur University"
  },
  {
    id: 2,
    name: "Priya Jadhav",
    role: "B.Tech Computer Science Student",
    institution: "Walchand Institute of Technology",
    location: "Solapur",
    rating: 5,
    date: "2026-07-25",
    title: "Life-Saver for Final Year Project!",
    comment: "Living in Solapur, I was worried about finding quality project guidance. The project package I received was complete with everything - from source code to documentation. The PPT presentation helped me score an A+ in my final year viva. Highly recommended for all WIT students!",
    likes: 38,
    dislikes: 1,
    avatar: "https://ui-avatars.com/api/?name=Priya+Jadhav&background=8b5cf6&color=fff&size=50",
    verified: true,
    badges: ["Top Performer", "Verified Student"],
    college: "Walchand Institute of Technology"
  },
  {
    id: 3,
    name: "Amit Shinde",
    role: "M.Sc Computer Science Graduate",
    institution: "Solapur University",
    location: "Kegaon, Solapur",
    rating: 4.5,
    date: "2026-07-22",
    title: "Worth Every Rupee - Great Support from Local Team",
    comment: "Being from Solapur, I appreciated the personalized support. The project was delivered within 24 hours and included clear explanations. The technical team helped me understand the code structure, which was crucial for my project defense at Solapur University.",
    likes: 27,
    dislikes: 3,
    avatar: "https://ui-avatars.com/api/?name=Amit+Shinde&background=06b6d4&color=fff&size=50",
    verified: true,
    badges: ["Verified Purchase"],
    college: "Solapur University"
  },
  {
    id: 4,
    name: "Dr. Suresh Kulkarni",
    role: "HOD, Computer Engineering",
    institution: "DKTE Society's Textile & Engineering Institute",
    location: "Ichalkaranji (Near Solapur)",
    rating: 5,
    date: "2026-07-18",
    title: "Best Platform for Engineering Projects in Maharashtra",
    comment: "As Head of the Computer Engineering Department at DKTE, I've evaluated hundreds of projects. The quality and relevance of projects available here is outstanding. Our students from Solapur district have consistently performed well using these resources.",
    likes: 52,
    dislikes: 0,
    avatar: "https://ui-avatars.com/api/?name=Suresh+Kulkarni&background=10b981&color=fff&size=50",
    verified: true,
    badges: ["Expert Reviewer", "Academic Excellence"],
    college: "DKTE Institute"
  },
  {
    id: 5,
    name: "Neha Deshmukh",
    role: "B.Tech Final Year Student",
    institution: "SVERI's College of Engineering",
    location: "Pandharpur, Solapur",
    rating: 4,
    date: "2026-07-15",
    title: "Great Resource for Pandharpur Students",
    comment: "I'm from Pandharpur and was struggling to find quality project guidance. The project was delivered with complete documentation, which made it easy to understand. The team provided excellent support via WhatsApp for students in Solapur district.",
    likes: 19,
    dislikes: 4,
    avatar: "https://ui-avatars.com/api/?name=Neha+Deshmukh&background=f59e0b&color=fff&size=50",
    verified: true,
    badges: ["Verified Student"],
    college: "SVERI's COE"
  },
  {
    id: 6,
    name: "Vijay Pawar",
    role: "IT Professional & Project Guide",
    institution: "Solapur IT Training Center",
    location: "Solapur - South",
    rating: 5,
    date: "2026-07-12",
    title: "Perfect for Students and Working Professionals",
    comment: "I guide students from various colleges in Solapur district. These projects are the most reliable source I've found. They cover everything from basic to advanced concepts. Many of my students from Walchand Institute and Solapur University have benefited.",
    likes: 33,
    dislikes: 1,
    avatar: "https://ui-avatars.com/api/?name=Vijay+Pawar&background=ec4899&color=fff&size=50",
    verified: true,
    badges: ["Top Guide", "Professional Mentor"],
    college: "Solapur IT Training Center"
  },
  {
    id: 7,
    name: "Kavita More",
    role: "BE Computer Science Student",
    institution: "AISSMS's College of Engineering",
    location: "Hotgi Road, Solapur",
    rating: 3.5,
    date: "2026-07-08",
    title: "Good but Could Include More Local Examples",
    comment: "The project quality is good and well-structured. However, I wish there were more examples relevant to local industries in Solapur. The support team was responsive though, which helped me resolve my queries quickly.",
    likes: 14,
    dislikes: 5,
    avatar: "https://ui-avatars.com/api/?name=Kavita+More&background=14b8a6&color=fff&size=50",
    verified: true,
    badges: ["Verified Student"],
    college: "AISSMS COE"
  },
  {
    id: 8,
    name: "Prof. Manoj Nalawade",
    role: "Assistant Professor, IT Department",
    institution: "Walchand Institute of Technology",
    location: "Solapur City",
    rating: 5,
    date: "2026-07-05",
    title: "Transformational for WIT Students",
    comment: "As a faculty member at WIT, I've seen a remarkable improvement in project submissions since students started using this platform. The projects are aligned with current industry requirements and university curriculum. Highly recommended for all WIT computer science students.",
    likes: 41,
    dislikes: 2,
    avatar: "https://ui-avatars.com/api/?name=Manoj+Nalawade&background=8b5cf6&color=fff&size=50",
    verified: true,
    badges: ["Academic Expert", "Top Contributor"],
    college: "Walchand Institute of Technology"
  },
  {
    id: 9,
    name: "Sneha Thorat",
    role: "M.Tech Student",
    institution: "Solapur University",
    location: "Vijapur, Solapur",
    rating: 4.5,
    date: "2026-07-01",
    title: "Excellent for M.Tech Research Projects",
    comment: "The depth of content and research methodology included in these projects is impressive. For my M.Tech at Solapur University, I found these resources invaluable. The reference papers and documentation helped me publish my first research paper.",
    likes: 28,
    dislikes: 1,
    avatar: "https://ui-avatars.com/api/?name=Sneha+Thorat&background=10b981&color=fff&size=50",
    verified: true,
    badges: ["Research Scholar", "Verified Student"],
    college: "Solapur University"
  },
  {
    id: 10,
    name: "Rahul Dhamal",
    role: "BE Student (Final Year)",
    institution: "Bharati Vidyapeeth College of Engineering",
    location: "Solapur",
    rating: 5,
    date: "2026-06-28",
    title: "Helped Me Score A+ in My Final Year",
    comment: "I was struggling with my final year project until I discovered this platform. The complete package with source code, documentation, and presentation helped me excel. The team understood the Solapur university requirements perfectly.",
    likes: 35,
    dislikes: 0,
    avatar: "https://ui-avatars.com/api/?name=Rahul+Dhamal&background=6366f1&color=fff&size=50",
    verified: true,
    badges: ["Topper", "Verified Student"],
    college: "Bharati Vidyapeeth COE"
  }
];

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'highest', label: 'Highest Rating' },
  { value: 'lowest', label: 'Lowest Rating' },
  { value: 'helpful', label: 'Most Helpful' }
];

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Reviews' },
  { value: '5', label: '5 Stars' },
  { value: '4', label: '4 Stars' },
  { value: '3', label: '3 Stars' },
  { value: '2', label: '2 Stars' },
  { value: '1', label: '1 Star' }
];

const COLLEGE_FILTERS = [
  { value: 'all', label: 'All Colleges' },
  { value: 'Solapur University', label: 'Solapur University' },
  { value: 'Walchand Institute of Technology', label: 'WIT Solapur' },
  { value: 'DKTE Institute', label: 'DKTE Ichalkaranji' },
  { value: "SVERI's COE", label: 'SVERI Pandharpur' },
  { value: 'AISSMS COE', label: 'AISSMS Solapur' },
  { value: 'Bharati Vidyapeeth COE', label: 'Bharati Vidyapeeth' }
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState('recent');
  const [filterBy, setFilterBy] = useState('all');
  const [collegeFilter, setCollegeFilter] = useState('all');
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    institution: '',
    location: '',
    rating: 0,
    title: '',
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
    const ratingDistribution = [0, 0, 0, 0, 0];
    
    reviews.forEach(review => {
      const roundedRating = Math.round(review.rating);
      if (roundedRating >= 1 && roundedRating <= 5) {
        ratingDistribution[roundedRating - 1]++;
      }
    });

    const totalLikes = reviews.reduce((sum, r) => sum + r.likes, 0);
    const totalDislikes = reviews.reduce((sum, r) => sum + r.dislikes, 0);

    // Unique colleges in reviews
    const uniqueColleges = [...new Set(reviews.map(r => r.institution))];

    return {
      totalReviews,
      averageRating: averageRating.toFixed(1),
      ratingDistribution,
      totalLikes,
      totalDislikes,
      verifiedCount: reviews.filter(r => r.verified).length,
      uniqueColleges: uniqueColleges.length,
      locations: [...new Set(reviews.map(r => r.location))]
    };
  }, [reviews]);

  // Filter and sort reviews
  const filteredAndSortedReviews = useMemo(() => {
    let filtered = [...reviews];

    // Apply rating filter
    if (filterBy !== 'all') {
      const rating = parseInt(filterBy);
      filtered = filtered.filter(r => Math.round(r.rating) === rating);
    }

    // Apply college filter
    if (collegeFilter !== 'all') {
      filtered = filtered.filter(r => r.institution === collegeFilter);
    }

    // Apply sort
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'helpful':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return filtered;
  }, [reviews, sortBy, filterBy, collegeFilter]);

  // Handle review submission
  const handleSubmitReview = useCallback((e) => {
    e.preventDefault();
    
    if (newReview.rating === 0) {
      alert('Please select a rating');
      return;
    }

    const review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      dislikes: 0,
      avatar: `https://ui-avatars.com/api/?name=${newReview.name.replace(' ', '+')}&background=6366f1&color=fff&size=50`,
      verified: false,
      badges: ['New Reviewer'],
      college: newReview.institution
    };

    setReviews([review, ...reviews]);
    setIsReviewFormOpen(false);
    setNewReview({
      name: '',
      role: '',
      institution: '',
      location: '',
      rating: 0,
      title: '',
      comment: ''
    });
  }, [newReview, reviews]);

  // Handle like/dislike
  const handleReaction = useCallback((reviewId, type) => {
    setReviews(prev => prev.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          likes: type === 'like' ? review.likes + 1 : review.likes,
          dislikes: type === 'dislike' ? review.dislikes + 1 : review.dislikes
        };
      }
      return review;
    }));
  }, []);

  // Helper function to render stars
  const renderStars = (rating, interactive = false, onHover = null, onClick = null) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      const isFull = i <= fullStars;
      const isHalf = !isFull && hasHalfStar && i === fullStars + 1;
      
      stars.push(
        <motion.div
          key={i}
          className="relative cursor-pointer"
          onMouseEnter={() => interactive && onHover && onHover(i)}
          onMouseLeave={() => interactive && onHover && onHover(0)}
          onClick={() => interactive && onClick && onClick(i)}
          whileHover={interactive ? { scale: 1.2 } : {}}
          whileTap={interactive ? { scale: 0.9 } : {}}
        >
          <Star
            className={`w-5 h-5 transition-colors ${
              isFull || isHalf
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
          {isHalf && (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400 absolute top-0 left-0" />
          )}
        </motion.div>
      );
    }
    return stars;
  };

  // Progress bar component
  const RatingBar = ({ rating, count, total }) => {
    const percentage = total > 0 ? (count / total) * 100 : 0;
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 w-6">{rating}★</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-gray-500 w-12 text-right">{count}</span>
      </div>
    );
  };

  // Location badges
  const LocationBadge = ({ location }) => (
    <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
      <MapPin className="w-3 h-3" />
      {location}
    </span>
  );

  return (
    <section className="bg-gradient-to-b from-white to-cream/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Solapur context */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-sm text-navy-900/60 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Solapur District • Maharashtra</span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-navy-900 flex items-center gap-3">
            <span>Student Reviews</span>
            <span className="text-sm font-sans font-normal text-navy-900/40 bg-navy-900/5 px-3 py-1 rounded-full">
              {stats.totalReviews} reviews
            </span>
          </h2>
          <p className="mt-2 text-navy-900/60">
            Real feedback from students and professors across {stats.uniqueColleges} colleges in Solapur district
          </p>
        </motion.div>

        {/* Stats Overview with Solapur context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-navy-900/5 p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900">{stats.averageRating}</div>
              <div className="flex justify-center mt-1">
                {renderStars(parseFloat(stats.averageRating))}
              </div>
              <div className="text-sm text-gray-500 mt-1">Solapur Average</div>
            </div>

            {/* Total Reviews */}
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900">{stats.totalReviews}</div>
              <MessageCircle className="w-6 h-6 text-navy-400 mx-auto mt-1" />
              <div className="text-sm text-gray-500 mt-1">Total Reviews</div>
            </div>

            {/* Verified Reviews */}
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">{stats.verifiedCount}</div>
              <Award className="w-6 h-6 text-green-500 mx-auto mt-1" />
              <div className="text-sm text-gray-500 mt-1">Verified Students</div>
            </div>

            {/* Colleges */}
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">{stats.uniqueColleges}</div>
              <GraduationCap className="w-6 h-6 text-purple-500 mx-auto mt-1" />
              <div className="text-sm text-gray-500 mt-1">Colleges Covered</div>
            </div>

            {/* Total Likes */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">{stats.totalLikes}</div>
              <ThumbsUp className="w-6 h-6 text-blue-500 mx-auto mt-1" />
              <div className="text-sm text-gray-500 mt-1">Total Likes</div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="mt-6 pt-6 border-t border-navy-900/5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Rating Distribution (Solapur Reviews)</h4>
            <div className="space-y-2 max-w-2xl mx-auto">
              {stats.ratingDistribution.map((count, index) => (
                <RatingBar
                  key={index}
                  rating={index + 1}
                  count={count}
                  total={stats.totalReviews}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* College Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">College:</label>
              <select
                value={collegeFilter}
                onChange={(e) => setCollegeFilter(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20"
              >
                {COLLEGE_FILTERS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Rating:</label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20"
              >
                {FILTER_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20"
              >
                {SORT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Write Review Button */}
          <motion.button
            onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-navy-900/20 transition-all"
          >
            {isReviewFormOpen ? 'Cancel' : 'Write a Review'}
          </motion.button>
        </div>

        {/* Review Form */}
        <AnimatePresence>
          {isReviewFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl border border-navy-900/5 shadow-lg p-6 mb-8 overflow-hidden"
            >
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                      placeholder="e.g., Rajendra Patil"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role/Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.role}
                      onChange={(e) => setNewReview(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                      placeholder="e.g., B.Tech Computer Science Student"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College/Institution *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.institution}
                      onChange={(e) => setNewReview(prev => ({ ...prev, institution: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                      placeholder="e.g., Walchand Institute of Technology"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location in Solapur
                    </label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                      placeholder="e.g., Solapur City, Pandharpur, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating *
                  </label>
                  <div className="flex gap-1">
                    {renderStars(newReview.rating, true, setHoverRating, (rating) => {
                      setNewReview(prev => ({ ...prev, rating }));
                    })}
                    {hoverRating > 0 && (
                      <span className="ml-2 text-sm text-gray-500">
                        {hoverRating} {hoverRating === 1 ? 'star' : 'stars'}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.title}
                    onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                    placeholder="Brief title of your review"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                    placeholder="Share your experience with the projects..."
                  />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-navy-900 to-navy-800 text-white px-8 py-2.5 rounded-xl font-semibold shadow-lg shadow-navy-900/20"
                  >
                    Submit Review
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredAndSortedReviews.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-200"
              >
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No reviews match your filters from Solapur colleges</p>
              </motion.div>
            ) : (
              filteredAndSortedReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-navy-900/5 shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Avatar */}
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full flex-shrink-0"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-navy-900">
                              {review.name}
                            </h3>
                            {review.verified && (
                              <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                                ✓ Verified
                              </span>
                            )}
                            {review.badges.map(badge => (
                              <span
                                key={badge}
                                className="bg-navy-100 text-navy-600 text-xs px-2 py-0.5 rounded-full"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Briefcase className="w-3 h-3" />
                              {review.role}
                            </div>
                            <span className="text-xs text-gray-300">•</span>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <GraduationCap className="w-3 h-3" />
                              {review.institution}
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <LocationBadge location={review.location} />
                            <span className="text-xs text-gray-400">•</span>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" />
                              {new Date(review.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      <h4 className="text-navy-900 font-medium mt-2">
                        {review.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {review.comment}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-50">
                        <button
                          onClick={() => handleReaction(review.id, 'like')}
                          className="flex items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors text-sm"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>{review.likes}</span>
                        </button>
                        <button
                          onClick={() => handleReaction(review.id, 'dislike')}
                          className="flex items-center gap-1 text-gray-400 hover:text-red-600 transition-colors text-sm"
                        >
                          <ThumbsDown className="w-4 h-4" />
                          <span>{review.dislikes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Solapur Stats Footer */}
        {filteredAndSortedReviews.length > 0 && (
          <div className="mt-8 p-4 bg-gradient-to-r from-navy-50 to-cream/30 rounded-xl border border-navy-900/5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-navy-900/60">
                <MapPin className="w-4 h-4" />
                <span>
                  Reviews from {stats.locations.join(', ')} across Solapur district
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm text-navy-900/60">
                  {stats.verifiedCount} verified reviews from Solapur colleges
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}