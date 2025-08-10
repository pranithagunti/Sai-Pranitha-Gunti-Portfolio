import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript/TypeScript", "Python", "Java", "C", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["React/Next.js", "HTML/CSS", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "AWS"]
    },
    {
      title:"AI/ML",
      skills:["Machine Learning","Artificial Intelligence","Deep Learning","Neural Networks","Computer Vision"]
    }
  ]

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've been learning and working with during my studies and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-muted/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}