export const PROFILE = {
  name: "John Doe",
  title: "AI/ML Engineer",
  email: "john.doe@example.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  bio: "Passionate AI/ML engineer specializing in deep learning, computer vision, and natural language processing. Experienced in developing and deploying production-ready machine learning models using PyTorch and TensorFlow."
};

export const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Education", path: "/education" },
  { label: "Projects", path: "/projects" },
  { label: "Certifications", path: "/certifications" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" }
];

export const STOCK_IMAGES = {
  profile: "https://images.unsplash.com/photo-1597733336794-12d05021d510", // AI researcher image
  workspace: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", // AI workspace with multiple monitors
  projects: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995", // Neural network visualization
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", // Data visualization
    "https://images.unsplash.com/photo-1501159599894-155982264a55", // Computer vision
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c"  // Robot arm
  ]
};

export const EDUCATION = [
  {
    institution: "University of Technology",
    degree: "Master of Science in Artificial Intelligence",
    dates: "2018 - 2020",
    achievements: [
      "Published research on Deep Reinforcement Learning",
      "Best Thesis Award in AI Applications"
    ],
    coursework: [
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning"
    ]
  },
  {
    institution: "Tech College",
    degree: "Bachelor of Computer Science",
    dates: "2014 - 2018",
    achievements: [
      "AI/ML Research Assistant",
      "Published paper on Neural Networks"
    ],
    coursework: [
      "Machine Learning Fundamentals",
      "Statistical Learning",
      "Python for Data Science",
      "Mathematics for ML"
    ]
  }
];

export const SKILLS = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Deep Learning", proficiency: 95 },
      { name: "Neural Networks", proficiency: 90 },
      { name: "Computer Vision", proficiency: 85 },
      { name: "NLP", proficiency: 88 }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "PyTorch", proficiency: 92 },
      { name: "TensorFlow", proficiency: 88 },
      { name: "scikit-learn", proficiency: 95 },
      { name: "Keras", proficiency: 85 }
    ]
  },
  {
    category: "MLOps",
    skills: [
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 80 },
      { name: "CI/CD", proficiency: 82 },
      { name: "Model Monitoring", proficiency: 88 }
    ]
  },
  {
    category: "Data Processing",
    skills: [
      { name: "Pandas", proficiency: 95 },
      { name: "NumPy", proficiency: 92 },
      { name: "PySpark", proficiency: 85 },
      { name: "SQL", proficiency: 90 }
    ]
  }
];