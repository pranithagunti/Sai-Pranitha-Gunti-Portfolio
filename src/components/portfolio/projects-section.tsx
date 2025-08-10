import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Plus } from "lucide-react"

export function ProjectsSection() {
  const [projects] = useState([
    {
      id: 1,
      title: "Codevault",
      description: "CodeVault is a secure web app for storing, organizing,Categorizing and managing code snippets efficiently, built with React, TypeScript, and Tailwind CSS.",
      image: "codelogo.png",
      technologies: ["React", "Node.js", "MongoDB","Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/pranithagunti/CodeVault",
      liveUrl: "https://code-vault-one-sigma.vercel.app/",
      featured: false
    },
    {
      id: 2,
      title: "Echoes Of Us",
      description: "Echoes of Us is an interactive online slam book that lets friends share memories, answer fun questions, and preserve moments in a personalized digital format.",
      image: "echologo.webp",
      technologies: ["React", "TypeScript", "Vite","Tailwind CSS"],
      githubUrl: "https://github.com/pranithagunti/echoes-of-us-online",
      liveUrl: "https://echoes-of-us-online.vercel.app/",
      featured: false
    },
    {
      id: 3,
      title: "Cyber Risk Analzer",
      description: "A smart  tool that analyzes user habits and online behavior, categorizes them into low, medium, or high risk levels, and provides actionable insights to improve safety.",
      image: "risklogo.webp",
      technologies: ["Python", "Streamlit", "joblib", "sklearn","HTML","CSS"],
      githubUrl: "https://github.com/pranithagunti/Cyber-Risk-Predictor",
      liveUrl: "https://cyber-risk-predictor-kjiao2cpxbgolhk3jizq3b.streamlit.app",
      featured: false
    },
    {
      id: 4,
      title: "Adavance Personal Finance Tracker And Analysis Platform",
      description: "A web application for tracking personal expenses, budgeting, and financial goal setting with data visualization.",
      image: "finlogo.jpeg",
      technologies: ["supabase", "nextjs", "gemini", "clerk","inngest","Tailwind CSS"],
      githubUrl: "https://github.com/pranithagunti/FinTrack",
      featured: false
    },
    {
      id: 5,
      title: "Potato Leaf Disease Detection System",
      description: "Potato leaf disease detection system using CNN for accurate image-based identification, enabling early diagnosis and prevention of crop damage.",
      image: "potatologo.jpeg",
      technologies: ["Python", "CNN", "streamlit", "tensorflow","keras"],
      githubUrl: "https://github.com/pranithagunti/Potato-Leaf-Disease-Detection-System",
      featured: false
    },
  ])

  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and learning journey. Each project represents a step forward in my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`border-muted/20 bg-card/50 backdrop-blur-sm hover:bg-card-hover transition-smooth group ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 gap-2">
  <Button
    variant="outline"
    size="sm"
    className="flex-1"
    asChild
  >
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <Github className="h-4 w-4 mr-2" />
      Code
    </a>
  </Button>

  {project.liveUrl && project.id !== 4 && project.id !== 5 && (
    <Button
      size="sm"
      className="flex-1"
      asChild
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-4 w-4 mr-2" />
        Live Demo
      </a>
    </Button>
  )}
</CardFooter>

            </Card>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-muted/20 bg-card/50 backdrop-blur-sm hover:bg-card-hover"
            >
              {showAll ? (
                <>Show Less</>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Show More Projects ({projects.length - 4} more)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}