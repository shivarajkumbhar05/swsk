// src/data/userData.js
export const mockProjects = [
  {
    id: 1,
    name: "E-Learning Platform",
    category: "Web Development",
    tech: "React, Node.js, MongoDB",
    price: 2999,
    status: "Completed",
    purchasedDate: "2026-07-15",
    deliveryDate: "2026-07-20",
    rating: 4.5,
    progress: 100
  },
  {
    id: 2,
    name: "AI Chatbot System",
    category: "Machine Learning",
    tech: "Python, TensorFlow, Flask",
    price: 4499,
    status: "In Progress",
    purchasedDate: "2026-07-25",
    deliveryDate: "2026-08-10",
    rating: null,
    progress: 65
  },
  {
    id: 3,
    name: "E-Commerce Mobile App",
    category: "Mobile Development",
    tech: "Flutter, Firebase",
    price: 3999,
    status: "Pending",
    purchasedDate: "2026-07-28",
    deliveryDate: "2026-08-15",
    rating: null,
    progress: 30
  }
];

export const mockPayments = [
  {
    id: 1,
    projectId: 1,
    projectName: "E-Learning Platform",
    amount: 2999,
    date: "2026-07-15",
    status: "Completed",
    method: "UPI",
    transactionId: "TXN123456789"
  },
  {
    id: 2,
    projectId: 2,
    projectName: "AI Chatbot System",
    amount: 4499,
    date: "2026-07-25",
    status: "Completed",
    method: "Credit Card",
    transactionId: "TXN987654321"
  },
  {
    id: 3,
    projectId: 3,
    projectName: "E-Commerce Mobile App",
    amount: 3999,
    date: "2026-07-28",
    status: "Pending",
    method: "Net Banking",
    transactionId: "TXN456789123"
  }
];

export const mockUserStats = {
  totalProjects: 3,
  completedProjects: 1,
  inProgressProjects: 1,
  pendingProjects: 1,
  totalSpent: 11497,
  averageRating: 4.5,
  reviewsGiven: 2,
  supportTickets: 0
};