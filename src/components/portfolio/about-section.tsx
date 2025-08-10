import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Laptop, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: BookOpen,
      title: "AI & Software Engineering Excellence",
      description: "Blending strong computer science foundations with hands-on experience in building intelligent, AI-powered solutions."
    },
    {
      icon: Code,
      title: "Project-Driven Learning",
      description: "Building real-world applications to solve problems and gain hands-on experience."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Active in study groups, hackathons, and open-source communities."
    },
    {
      icon: Laptop,
      title: "Tech Enthusiast",
      description: "Always exploring new technologies, frameworks, and development methodologies."
    }
  ]

  const interests = [
    "Full-Stack Development",
    "Machine Learning",
    "Software Development",
    "Cloud Computing",
    "Data Structures",
    "Artificial Intelligence",
  ]

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated computer science student with a passion for technology and innovation. 
             I'm focused on building a strong foundation in software development 
            while working on exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-muted/20 bg-card/50 backdrop-blur-sm hover:bg-card-hover transition-smooth">
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((interest, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}