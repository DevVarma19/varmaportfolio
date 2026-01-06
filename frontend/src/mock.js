// Mock data for portfolio - will be replaced with backend integration later

export const personalInfo = {
  name: "Sudarsana Varma Mandapati",
  title: "Data Engineer",
  tagline: "Building scalable data pipelines and AI-powered solutions",
  headline: "Data Engineer specializing in cloud-native architectures, ETL optimization, and ML/AI systems. Reduced query latency by 30% across 1,000+ tables at Amazon.",
  email: "mandapati@usf.edu",
  phone: "(470) 452-5472",
  linkedin: "https://www.linkedin.com/in/varmamvss",
  github: "https://github.com/DevVarma19",
  website: "https://yourwebsite.com",
  resumeUrl: "/resume.pdf"
};

export const about = {
  description: "I'm a Data Engineer with hands-on experience building production-scale data infrastructure at Amazon and expertise in cloud platforms (AWS, Azure). I focus on solving complex data problems through automation, optimization, and intelligent system design. My work spans ETL pipelines, data mesh architectures, and LLM-powered analytics—consistently delivering measurable impact through reduced latency, lower costs, and improved data quality."
};

export const skills = {
  "Languages & Frameworks": ["Python", "PySpark", "SQL", "JavaScript", "FastAPI"],
  "Big Data & Cloud": ["Apache Iceberg", "AWS Glue", "S3", "Lambda", "Step Functions", "ECS Fargate", "Azure Data Factory", "Databricks", "Azure Fabric"],
  "Databases": ["Redshift", "DynamoDB", "MySQL", "MongoDB", "Snowflake", "Pinecone"],
  "Visualization & Tools": ["Power BI", "QuickSight", "Docker", "Git", "Linux", "Postman"],
  "Concepts": ["Data Mesh", "ETL/ELT Design", "Data Warehousing", "GenAI", "RAG Pipelines", "LLM Integration"]
};

export const experience = [
  {
    id: 1,
    company: "Amazon",
    role: "Data Engineer Intern",
    duration: "May 2025 - Aug 2025",
    location: "Seattle, WA",
    achievements: [
      "Reduced query latency by 30% across 1,000+ tables by migrating 100+ Glue Catalog tables to Apache Iceberg",
      "Cut 90% of manual data operations overhead by automating metadata management pipeline using Step Functions, ECS Fargate, Lambda, and S3",
      "Accelerated feature delivery by 25% leveraging internal Amazon AI tools (Q, Cline, Cedric) for code quality and testing",
      "Enabled schema evolution and time-travel queries while ensuring zero data loss through comprehensive validation scripts"
    ],
    featured: true
  },
  {
    id: 2,
    company: "ACME (University of South Florida)",
    role: "Graduate Research Assistant",
    duration: "Nov 2024 - Present",
    location: "Tampa, FL",
    achievements: [
      "Built data pipeline ingesting traffic data from external APIs into centralized datastore, enabling analysis on 1M+ data points",
      "Designed LLM-powered RAG framework achieving 72% abstract relevance and 91% tag accuracy across mobility resources",
      "Outperformed traditional keyword-based search through embedding-based retrieval and prompt refinement"
    ],
    featured: true
  },
  {
    id: 3,
    company: "MAQ Software",
    role: "Software Engineer",
    duration: "Jan 2024 - Jul 2024",
    location: "India",
    achievements: [
      "Accelerated data processing by 15% through optimized ETL workflows with Azure Data Factory, Databricks, and Spark",
      "Cut Power BI dashboard load times by 25%, increasing adoption among business stakeholders",
      "Reduced Azure storage costs by 20% through optimized data lifecycle management in Data Lake Gen2"
    ],
    featured: false
  },
  {
    id: 4,
    company: "Tikaj",
    role: "Full Stack Developer",
    duration: "Mar 2023 - Jan 2024",
    location: "India",
    achievements: [
      "Developed EASM platform aggregating 50+ cyber-threat data sources for security analytics",
      "Reduced code duplication by 30% through reusable Vue.js component library",
      "Built scalable APIs and data normalization pipelines for threat intelligence"
    ],
    featured: false
  }
];

export const projects = [
  {
    id: 1,
    name: "LLM-Powered Mobility Research Framework",
    category: "Applied AI Research",
    problem: "Researchers struggled to find relevant interoperability resources across fragmented mobility datasets, relying on inefficient keyword search.",
    solution: "Designed RAG framework with embedding-based retrieval and prompt refinement. Built ingestion pipeline for 1M+ traffic data points from external APIs.",
    impact: [
      "72% abstract relevance score",
      "91% tag accuracy",
      "Published in MDPI journal"
    ],
    techStack: ["Python", "OpenAI API", "RAG", "FastAPI", "Vector Embeddings"],
    featured: true,
    publication: {
      title: "Optimizing Access to Interoperability Resources in Mobility Through Context-Aware LLMs",
      venue: "MDPI",
      date: "Dec 2025"
    },
    links: {
      github: null,
      demo: null,
      publication: "#"
    }
  },
  {
    id: 2,
    name: "DocBot - RAG-Powered Document Search",
    category: "GenAI Application",
    problem: "Manual document lookup across unstructured PDFs was time-consuming and error-prone, lacking context-aware search capabilities.",
    solution: "Built RAG chatbot with PDF ingestion, vector embeddings in Pinecone, and semantic retrieval. Implemented evaluation mechanisms to reduce LLM hallucinations.",
    impact: [
      "70% reduction in manual lookup time",
      "Improved answer verifiability",
      "Citation-backed responses"
    ],
    techStack: ["React", "FastAPI", "LlamaIndex", "OpenAI API", "Pinecone", "Python"],
    featured: true,
    links: {
      github: "https://github.com/yourprofile/docbot",
      demo: null
    }
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: "aws"
  },
  {
    id: 2,
    name: "Azure Fabric Analytics Engineer - Associate",
    issuer: "Microsoft",
    date: "2024",
    icon: "azure"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "University of South Florida",
    duration: "Aug 2024 - May 2026",
    gpa: "3.8/4.0",
    coursework: ["Generative AI", "Agentic AI", "NLP", "Machine Learning", "Operating Systems"]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    school: "Lovely Professional University",
    duration: "Aug 2018 - May 2022",
    gpa: "3.3/4.0",
    coursework: ["Data Structures", "DBMS", "Python Programming", "Data Science"]
  }
];
