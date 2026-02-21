"""
Structured resume data for Soumaditya Pal.
This module provides the AI chat engine with accurate, comprehensive context
about Soumaditya's background, skills, projects, and experience.
"""

RESUME_DATA = {
    "personal": {
        "name": "Soumaditya Pal",
        "title": "Full Stack Developer",
        "tagline": "Building resilient systems and high-performance interfaces for the modern web.",
        "location": "Kolkata, West Bengal, India",
        "timezone": "GMT +5:30",
        "email": "soumaditya.pal23@gmail.com",
        "website": "https://soumadityapal.in",
        "philosophy": "Clean code, zero drama. I don't just write code; I architect digital ecosystems. My work operates at the intersection of high-performance logic and intuitive design.",
    },
    "social": {
        "github": "https://github.com/PalSoumaditya",
        "linkedin": "https://www.linkedin.com/in/soumaditya-pal-109029309/",
        "twitter": "https://x.com/soumadityapal",
    },
    "education": [
        {
            "institution": "NSHM Knowledge Campus, Durgapur",
            "degree": "B.Tech in Computer Science & Engineering",
            "status": "Currently pursuing",
            "description": "Studying Computer Science with focus on software engineering, data structures, algorithms, and modern web technologies.",
        }
    ],
    "experience": [
        {
            "company": "Legal Care",
            "role": "Full Stack Developer Intern",
            "type": "Remote",
            "duration": "Jun 2025 — Sep 2025",
            "highlights": [
                "Architected high-performance UIs with React.js, focusing on complex workflows.",
                "Developed and optimized Node.js/Express APIs for platform utility.",
                "Executed performance tuning and debugging to improve load times.",
                "Enforced clean code standards through rigorous peer reviews.",
            ],
        },
        {
            "company": "Freelance",
            "role": "Website Developer & Full Stack Developer",
            "type": "Remote",
            "duration": "Ongoing",
            "highlights": [
                "Design and develop custom websites and web applications for clients.",
                "Specialize in modern React/Next.js frontends with scalable backend architectures.",
                "Focus on performance, reliability, and scale — building systems that thrive under pressure.",
            ],
        },
    ],
    "projects": [
        {
            "name": "Lyner",
            "description": "A comprehensive link management tool designed to streamline your digital presence. Create, manage, and track your links with ease.",
            "live_url": "https://lyner.soumadityapal.in/",
            "github_url": "https://github.com/palsoumaditya/Lyner.git",
            "status": "Live",
            "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        },
        {
            "name": "FocusKaro",
            "description": "A production-grade Focus Tracking Application built for high-performance time management. Using the Pomodoro technique, the system prioritizes data integrity and session persistence to prevent data loss. It offers precise, real-time minute tracking and detailed reports to help users optimize productivity.",
            "live_url": "https://focuskaro.soumadityapal.in/",
            "github_url": "https://github.com/palsoumaditya/Focuskaro.git",
            "status": "Live",
            "technologies": [
                "Next.js", "React", "TypeScript", "Tailwind CSS", "Clerk",
                "TanStack Query", "Radix UI", "Framer Motion", "Node.js",
                "Express", "PostgreSQL", "Prisma", "Redis", "Zod",
            ],
        },
    ],
    "skills": {
        "frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Framer Motion"],
        "backend": ["Node.js", "Express.js", "REST API", "Go Lang"],
        "databases": ["MongoDB", "PostgreSQL", "Prisma", "Redis"],
        "languages": ["JavaScript", "TypeScript", "Go", "C++"],
        "devops_cloud": ["AWS", "Nginx", "Vercel", "GitHub"],
        "tools": ["Git", "GitHub", "VS Code", "Postman"],
    },
    "areas_of_expertise": [
        "Frontend Architecture",
        "Scalable Backends",
        "Distributed Systems",
        "Full-Cycle Engineering",
        "Performance Optimization",
        "API Design",
    ],
}


def get_resume_context() -> str:
    """Format the resume data into a comprehensive text context for the AI model."""
    d = RESUME_DATA
    p = d["personal"]

    lines = [
        f"=== RESUME OF {p['name'].upper()} ===",
        f"Title: {p['title']}",
        f"Location: {p['location']} ({p['timezone']})",
        f"Email: {p['email']}",
        f"Website: {p['website']}",
        f"Philosophy: {p['philosophy']}",
        "",
        "--- SOCIAL LINKS ---",
    ]
    for platform, url in d["social"].items():
        lines.append(f"  {platform.capitalize()}: {url}")

    lines.append("\n--- EDUCATION ---")
    for edu in d["education"]:
        lines.append(f"  {edu['degree']} at {edu['institution']}")
        lines.append(f"  Status: {edu['status']}")
        lines.append(f"  {edu['description']}")

    lines.append("\n--- PROFESSIONAL EXPERIENCE ---")
    for exp in d["experience"]:
        lines.append(f"  {exp['role']} at {exp['company']} ({exp['type']})")
        lines.append(f"  Duration: {exp['duration']}")
        for h in exp["highlights"]:
            lines.append(f"    • {h}")
        lines.append("")

    lines.append("--- PROJECTS ---")
    for proj in d["projects"]:
        lines.append(f"  {proj['name']} [{proj['status']}]")
        lines.append(f"  {proj['description']}")
        lines.append(f"  Live: {proj['live_url']}")
        lines.append(f"  GitHub: {proj['github_url']}")
        lines.append(f"  Tech: {', '.join(proj['technologies'])}")
        lines.append("")

    lines.append("--- TECHNICAL SKILLS ---")
    for category, skills in d["skills"].items():
        label = category.replace("_", " ").title()
        lines.append(f"  {label}: {', '.join(skills)}")

    lines.append("\n--- AREAS OF EXPERTISE ---")
    for area in d["areas_of_expertise"]:
        lines.append(f"  • {area}")

    return "\n".join(lines)
