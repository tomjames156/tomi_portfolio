import { WorkExperience, ProjectSlide, ProjectTile, ContactMedium  } from './definitions'

export const workExperiences: WorkExperience[] = [
    {
        exp_id: 0,
        organisation: "Nile University",
        role: "Software Engineering Student",
        duration: "Sept. 2022 - June 2026",
        experiences: [
            "Developed the official website for NACOS Nile University Chapter using NextJS, TailwindCSS, Framer Motion, and SheetsDB.",
            "Managed executive meetings, assigned operational tasks, and coordinated major in-person communications with faculty 	and university leadership as the provost of NACOS Nile Chapter.",
            "Organized, and delivered student-led technical workshops and tech movie nights to foster both learning and leisure."
        ]

    },
    {
        exp_id: 1,
        organisation: "Fam Global Tech",
        role: "Software Engineer Intern",
        duration: "July 2025 - Oct 2025",
        experiences: [
            "Automated recurring data analysis processes on the delivery and reception of targeted advertisements by MTN Nigeria enabling customer retries.",
            "Built the full-stack web application MVP for Pholta covering UI design, frontend and backend development, and database architecture using Visily AI, React JS, TailwindCSS, Firebase, and FastAPI.",
            "Developed and hosted the backend API for efficient data retrieval and processing using FastAPI, Docker, and GCP.",
            "Designed the end-to-end system architecture for Pholta leveraging cloud-based services like Twilio SendGrid, Google Cloud, and Firebase."
        ]
    },
    {
        exp_id: 2,
        organisation: "ChitHub",
        role: "Backend / AI Engineer Intern",
        duration: "July 2024 - Oct 2024",
        experiences: [
            "Developed and containerized a data-intensive API using FastAPI and Docker to provide summary visualizations of election results in the INEC ERMS application.",
            "Leveraged Ollama and Python to deploy a local AI model for generating electoral division metadata, reducing manual research time by 80%.",
            "Built web scrapers with Python and BeautifulSoup to extract geopolitical descriptions from Wikipedia, enriching the INEC ERMS frontend.",
            "Engineered automated data seeding for election datasets using Python scripts to accelerate testing efficiency and data analysis."
        ]

    },
    {
        exp_id: 3,
        organisation: "Medbolt",
        role: "Frontend Engineer",
        duration: "Dec 2022 - Dec 2023",
        experiences: [
            "Developed the landing page for the Futuristic AI solutions' flagship product, Medbolt, an AI-powered healthcare solution.",
            "Collaborated with the lead product designer in implementing the user interface of the Medbolt web application MVP using React.js and SCSS."
        ]

    }
]

export const projectsSlides: ProjectSlide[] = [
    {
        proj_id: 0,
        proj_img: "/power-reach.png",
        proj_name: 'PowerReach',
        proj_descr: "PowerReach is a centralized web-based platform bridging the gap between Nigerian electricity consumers and DisCos.",
        tech_used: ["FastAPI", "ReactJS", "Gemini API", "PostgreSQL"],
        live_site: "https://powerreach-stay-connected.vercel.app/"
    },
    {
        proj_id: 1,
        proj_img: "/skillskulpt.png",
        proj_name: 'SkillSkulpt',
        proj_descr: "An AI-powered personalized art learning platform that helps artists improve their skills through adaptive exercises, real-time feedback, and progress tracking.",
        tech_used: ["AWS Lambda", "Claude", "Dynamo DB", "React JS"],
        live_site: "https://main.d3dipkd8a1thf9.amplifyapp.com/"
    },
    {
        proj_id: 2,
        proj_img: "/nacos.png",
        proj_name: 'NACOS Nile Website',
        proj_descr: "The official website for the computing students association at Nile University, NACOS Nile University Chapter.",
        tech_used: ["NextJS", "Typescript", "TailwindCSS", "SheetsDB"],
        live_site: "https://nacos-nile-website.vercel.app/"
    },
    {
        proj_id: 3,
        proj_img: "/habstrack.png",
        proj_name: 'HabStrack',
        proj_descr: "A web-based habit tracker application supercharged with AI for habit stacking and progression insights over time.",
        tech_used: ["ReactJS", "AWS Lambda", "Claude", "Dynamo DB"],
        github_link: "https://github.com/tomjames156/HabStrack",
        live_site: "https://main.d19maocf46nn2u.amplifyapp.com/"
    }
]

export const projectTiles: ProjectTile[] = [
    {
        proj_id: 0,
        proj_name: 'Global Rate Limiter',
        proj_descr: "A highly available global rate limiter as a service that uses the sliding window counter rate limiting algorithm.",
        tech_used: ["Python", "Redis", "Docker", "FastAPI"],
        live_site: "https://github.com/tomjames156/Global-Rate-Limiter.git"
    },
    {
        proj_id: 1,
        proj_name: 'Tourify',
        proj_descr: "A web application that helps tourists discover exciting locations within Abuja.",
        tech_used: ["ReactJS", "Firebase", "SCSS"],
        github_link: "https://github.com/tomjames156/Tourify",
        live_site: "https://tourify-iota.vercel.app/"
    },
    {
        proj_id: 2,
        proj_name: 'Medbolt',
        proj_descr: "The landing page website for a Nigerian AI assisted healthcare tech startup.",
        tech_used: ["ReactJS", "SCSS"],
        live_site: "https://medbolt-website.vercel.app/"
    },
    {
        proj_id: 3,
        proj_name: "Sticky Notes Clone",
        proj_descr: "A fullstack web application clone of the Windows Sticky Notes app.",
        tech_used: ["Python (Django)", "SASS", "TinyMCE"],
        github_link: "https://github.com/tomjames156/Sticky-Notes",
    }
]

export const contactMediums: ContactMedium[] = [
    {
        contact_medium: 'WhatsApp',
        main_text: 'Send a chat on WhatsApp',
        sub_text: 'Fastest reply, typically within hours',
        link:  'https://wa.me/+234708293037'
    },
    {
        contact_medium: 'Send an Email',
        main_text: 'tomjames156@gmail.com',
        sub_text: 'Great for detailed inquiries, project briefs, or formal proposals.',
        link:  'mailto://tomjames156@gmail.com'
    }
]