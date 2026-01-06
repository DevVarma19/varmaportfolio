// Mock data for portfolio - will be replaced with backend integration later

export const personalInfo = {
  name: "Sudarsana Varma Mandapati",
  title: "Data Engineer",
  tagline: "Building scalable data pipelines and AI-powered solutions",
  headline:
    "AI-focused Data Engineer building cloud-native platforms, scalable data pipelines, and production-ready AI systems.",
  email: "mandapati@usf.edu",
  phone: "(470) 452-5472",
  linkedin: "https://www.linkedin.com/in/varmamvss",
  github: "https://github.com/DevVarma19",
  website: "https://test.com",
  resumeUrl:
    "https://drive.google.com/file/d/1BFUoaVXKD9xeo4Jgh49WvBbRj2JL4Dpa/view?usp=sharing",
};

export const about = {
  description:
    "I'm a Data Engineer with hands-on experience building production-scale data infrastructure at Amazon and expertise in cloud platforms (AWS, Azure). I focus on solving complex data problems through automation, optimization, and intelligent system design. My work spans ETL pipelines, data mesh architectures, and LLM-powered applications delivering measurable impact through reduced latency, lower costs, and improved data quality.",
};

export const skills = {
  "Languages & Frameworks": [
    "Python",
    "PySpark",
    "SQL",
    "JavaScript",
    "FastAPI",
  ],
  "Big Data & Cloud": [
    "Apache Iceberg",
    "AWS Glue",
    "S3",
    "Lambda",
    "Step Functions",
    "ECS Fargate",
    "Azure Data Factory",
    "Databricks",
    "Azure Fabric",
  ],
  Databases: [
    "Redshift",
    "DynamoDB",
    "MySQL",
    "MongoDB",
    "Snowflake",
    "Pinecone",
  ],
  "Visualization & Tools": [
    "Power BI",
    "QuickSight",
    "Docker",
    "Git",
    "Linux",
    "Postman",
  ],
  Concepts: [
    "Data Mesh",
    "ETL/ELT Design",
    "Data Warehousing",
    "GenAI",
    "RAG Pipelines",
    "LLM Integration",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Amazon",
    role: "Data Engineer Intern",
    duration: "May 2025 - Aug 2025",
    location: "Tempe, AZ",
    achievements: [
      "Automated metadata management pipeline in a large-scale AWS Glue Data Mesh using Step Functions, ECS Fargate, Lambda, and S3, reducing query latency by 30% across 1,000+ tables.",
      "Built orchestration workflows with Step Functions and ECS Fargate to refresh datasets, cutting 90% of manual data operations overhead for downstream engineering teams.",
      "Leveraged internal Amazon AI tools (Q, Cline, Cedric) to accelerate feature delivery by 25% and improve code quality, testing, and maintainability.",
      "Migrated 100+ Glue Catalog tables to Apache Iceberg to enable schema evolution, time-travel queries, and lower compute costs, while building validation scripts to ensure zero data loss.",
    ],
    featured: true,
  },
  {
    id: 2,
    company: "ACME (University of South Florida)",
    role: "Graduate Research Assistant",
    duration: "Nov 2024 - Present",
    location: "Tampa, FL",
    achievements: [
      "Designed data pipeline ingesting traffic data from external APIs into a centralized datastore, enabling advanced safety and mobility analysis on over 1+ million data points.",
      "Designed an LLM-powered RAG framework with embedding-based retrieval and prompt refinement, outperforming keyword-based search with 72% abstract relevance and 91% tag accuracy across mobility interoperability resources.",
    ],
    featured: true,
  },
  {
    id: 3,
    company: "MAQ Software",
    role: "Software Engineer",
    duration: "Jan 2024 - Jul 2024",
    location: "India",
    achievements: [
      "Orchestrated scalable data pipelines and ETL workflows with Azure Data Factory, Databricks, Spark, and Snowflake, accelerating data processing time by 15% and improving reporting refresh time.",
      "Enhanced Power BI dashboards, cutting load times by 25% and increasing adoption among business stakeholders.",
      "Optimized data lifecycle management in Azure Data Lake Gen2 and Blob Storage, 20% reduction in costs.",
    ],
    featured: false,
  },
  {
    id: 4,
    company: "Tikaj",
    role: "Full Stack Developer",
    duration: "Mar 2023 - Jan 2024",
    location: "India",
    achievements: [
      "Developed an External Attack Surface Management (EASM) platform aggregating 50+ cyber-threat data sources, focusing on data normalization, ingestion pipelines, and scalable APIs for security analytics.",
      "Built a reusable Vue.js component library, reducing code duplication by 30%, cutting development time by 25%.",
    ],
    featured: false,
  },
];

export const projects = [
  {
    id: 1,
    name: "LLM-Powered Mobility Research Framework",
    category: "Applied AI Research",
    problem:
      "Researchers struggled to find relevant interoperability resources across fragmented mobility datasets, relying on inefficient keyword search.",
    solution:
      "Designed a context-aware, LLM-driven retrieval framework with automated abstractive summarization, semantic metadata generation, and natural language search within a web-based architecture. Enhanced with prompt-refinement to improve performance in low-recall retrieval scenarios and enable more efficient access to mobility knowledge.",
    impact: [
      "72% abstract relevance score",
      "91% tag accuracy",
      "Published in MDPI journal",
    ],
    techStack: ["Python", "OpenAI API", "RAG", "FastAPI", "Vector Embeddings"],
    featured: true,
    publication: {
      title:
        "Optimizing Access to Interoperability Resources in Mobility Through Context-Aware LLMs",
      venue: "MDPI",
      date: "Dec 2025",
    },
    links: {
      github: null,
      demo: null,
      publication: "https://www.mdpi.com/2079-9292/15/1/152",
    },
  },
  {
    id: 2,
    name: "DocBot - RAG-Powered Document Search",
    category: "GenAI Application",
    problem:
      "Manual document lookup across unstructured PDFs was time-consuming and error-prone, lacking context-aware search capabilities.",
    solution:
      "Designed and implemented a retrieval-augmented generation (RAG) chatbot for unstructured document search by ingesting PDFs, generating embeddings, and indexing vectors in Pinecone for semantic retrieval.",
    impact: [
      "Reduced manual document lookup time by 70%",
      "Improved answer verifiability and user trust",
      "Enabled context-aware, citation-backed Q&A",
    ],
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "LlamaIndex",
      "OpenAI API",
      "Pinecone",
    ],
    featured: true,
    links: {
      github: "https://github.com/DevVarma19/docbot",
      demo: null,
    },
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: "aws",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/01bcbcaedd574d22b128507ecd987ba8",
  },
  {
    id: 2,
    name: "Azure Fabric Analytics Engineer - Associate",
    issuer: "Microsoft",
    date: "2024",
    icon: "azure",
    link: "https://learn.microsoft.com/en-us/users/mandapativarma/credentials/79fa7744283c6d62",
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "University of South Florida",
    duration: "Aug 2024 - May 2026",
    gpa: "3.8/4.0",
    coursework: [
      "Generative AI",
      "Agentic AI",
      "NLP",
      "Machine Learning",
      "Operating Systems",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    school: "Lovely Professional University",
    duration: "Aug 2018 - May 2022",
    gpa: "3.3/4.0",
    coursework: [
      "Data Structures",
      "DBMS",
      "Python Programming",
      "Data Science",
    ],
  },
];

export const events = [
  {
    id: 1,
    title: "Day one at Amazon",
    date: "Aug 2025",
    location: "Tempe, AZ",
    image: "/events/amazon-day-one.jpeg",
  },
  {
    id: 2,
    title: "CUTR 2025 Annual Meeting",
    date: "Oct 2025",
    location: "Tampa, FL",
    image: "/events/cutr-2025.JPG",
  },
  {
    id: 3,
    title: "CUTR 2025 Poster Competition",
    date: "Oct 2025",
    location: "Tampa, FL",
    image: "/events/poster-win.jpg",
  },
];
