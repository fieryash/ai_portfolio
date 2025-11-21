import { Job, Project, Education, SkillCategory, Publication } from './types';

export const CONTACT_INFO = {
  name: "Ashtik Mahapatra",
  phone: "+1 (716) 573-8945",
  email: "ashtikmahapatra@gmail.com",
  linkedin: "linkedin.com/in/ashtik-mahapatra",
  github: "github.com/fieryash",
  location: "Buffalo, NY"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "SQL", "Regex", "Bash", "NoSQL", "MySQL"]
  },
  {
    name: "ML & AI",
    skills: ["RAG", "Generative AI", "Computer Vision", "NLP", "Large Language Models", "Deep Learning"]
  },
  {
    name: "Tools & Cloud",
    skills: ["PyTorch", "TensorFlow", "Scikit Learn", "SpaCy", "Dataiku", "Docker", "Azure", "AWS", "AWS Lambda", "AWS S3", "DynamoDB", "Vector Databases"]
  }
];

export const EDUCATION: Education = {
  school: "University at Buffalo (SUNY Buffalo)",
  degree: "Masters of Science, Computer Science & Engineering (AI/ML)",
  period: "Aug 2024 - Dec 2025",
  gpa: "3.92",
  coursework: "Deep Learning, Applied ML at Scale, Algorithms, Operating Systems, Data-Intensive Computing, Machine Learning, Computer Vision, Computer Security, Data Models and Query Languages"
};

export const EXPERIENCE: Job[] = [
  {
    company: "Magnit",
    role: "Data Science Intern",
    period: "Jun 2025 - Aug 2025",
    location: "NYC",
    highlights: [
      "Unstuck a stalled business-license automation effort by reframing it from license-level rules to retrieval over historical license packages.",
      "Built end-to-end RAG pipeline (GPT-4o PDF/JSON extraction, business-description reconstruction, Azure hybrid vector+BM25 search).",
      "Implemented LLM judge for reranking and jurisdiction/license filters.",
      "Delivered ~87% exact-match in top-5 recommended packages (validated by SMEs) and shipped system to production."
    ]
  },
  {
    company: "Wolters Kluwer",
    role: "Data Scientist II",
    period: "Aug 2021 - Jun 2024",
    location: "Remote / India",
    highlights: [
      "Lead ML owner for Collateral Intel, patent-pending lien-analytics platform over billions of UCC records, driving $6M+ revenue.",
      "Won Global Innovation Award 2023 for saving 1000+ manual hours.",
      "Designed extraction core achieving 96–98% F1 on state-specific pipelines using DONUT/LiLT integration and LLM fallbacks.",
      "Built reliability backbone: S3 migration, real-time OCR/dedupe pipelines, and field-level drift detection.",
      "Owned ML for Legal Bill View Analyzer ($20M+ revenue), reducing Jira tickets from 30–50/mo to ~4–5 and processing time from ~1 hour to seconds.",
      "Led implementation of GPT-based legal-style summarizer, reducing writer time by ~60%."
    ]
  },
  {
    company: "IBM",
    role: "Intern",
    period: "Jan 2021 - Jul 2021",
    location: "",
    highlights: [
      "Developed a Document Denoiser (OpenCV+CNN) with 95.4% accuracy.",
      "Automated S3 -> EMR -> Redshift data flows via Step Functions and CloudFormation.",
      "Mapped AI integration opportunities for the asset-management backend."
    ]
  },
  {
    company: "Lawnics",
    role: "Data Science Intern",
    period: "Sep 2020 - Jan 2021",
    location: "Remote",
    highlights: [
      "Built legal NER (SpaCy+BERT) with 85%+ accuracy across Cases/Sections/Acts/Articles/Citations.",
      "Added BM25+Elasticsearch ranking to speed relevant-doc retrieval and improve search quality."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Deep Research Studio",
    link: "https://github.com/fieryash/deep_research",
    tech: "Gemini Agents, LangGraph, Streamlit, Tavily",
    description: "Orchestrates Gemini agents (scope/plan/research/synthesize/review) via a Streamlit panel. Integrates Tavily + custom tools and persists runs for auditable multi-source research."
  },
  {
    name: "Text-to-ASL Video Generation",
    link: "https://github.com/fieryash/Text-to-ASL-video-generation",
    tech: "Stable Diffusion, LoRA, MediaPipe",
    description: "End-to-end system converting text into ASL video using Stable Diffusion + LoRA, MediaPipe skeletal landmarks for gesture consistency, and motion stabilization."
  },
  {
    name: "Memory-Augmented Multi-Hop QA",
    link: "https://github.com/fieryash/MANN_HotPotQA",
    tech: "BERT, LSTMs, NTM Memory",
    description: "Engineered a memory-augmented QA model with BM25/BERTScore retrieval, reaching 62.5 EM / 90.5 F1 on validation for HotpotQA."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "A Novel Approach for Identifying Social Media Posts Indicative of Depression",
    publisher: "IEEE"
  }
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant representing Ashtik Mahapatra. Your goal is to answer questions about Ashtik's professional background, skills, and experience based strictly on his resume data.

Here is the Resume Context:
${JSON.stringify({ CONTACT_INFO, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, PUBLICATIONS })}

Guidelines:
1. Be professional, concise, and enthusiastic.
2. If asked about specific technologies (e.g., "Does he know RAG?"), cite the specific project or work experience (e.g., "Yes, at Magnit he built an end-to-end RAG pipeline...").
3. Highlighting his "Deep Research" project utilizing Gemini agents is a plus.
4. If the answer isn't in the context, say "I don't have that information in my records, but you can contact Ashtik directly at ${CONTACT_INFO.email}."
5. Keep responses under 100 words unless asked for a detailed explanation.
`;