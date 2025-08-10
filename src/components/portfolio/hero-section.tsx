import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-glow opacity-20 animate-pulse"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hi, I'm Sai Pranitha Gunti
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              AI & Full-Stack Development Enthusiast
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Passionate about creating innovative solutions and building impactful projects. 
              Currently exploring full-stack development, AI, and open-source contributions.
            </p>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <a
                href="https://github.com/pranithagunti"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="hover:bg-card-hover">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/sai-pranitha-gunti-4486772b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button variant="ghost" size="icon" className="hover:bg-card-hover">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>

        <a href="mailto:pranitha.gunti1609@gmail.com">
          <Button variant="ghost" size="icon" className="hover:bg-card-hover">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </a>
      </div>

        </div>
      </div>
    </section>
  )
}