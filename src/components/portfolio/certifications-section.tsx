import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Microsoft Azure Certified Cloud Computing",
      issuer: "Microsoft",
      date: "2024",
      status: "Completed",
      link: "https://learn.microsoft.com/en-gb/users/pranitha-3540/achievements/w7h4xden"
    },
    {
      title: "Machine Learning With Python",
      issuer: "Udemy",
      date: "2024",
      status: "Completed",
      credentialId: "GA-2023-456",
      link: "https://drive.google.com/file/d/1YKDKkp5kne6DNUzA0GW3e05CnJi0kGN3/view?usp=drivesdk"
    },
    {
      title: "Programming With JAVA",
      issuer: "NPTEL",
      date: "2024",
      status: "Completed",
      credentialId: "NPTEL24CS105S550207046",
      link: "https://drive.google.com/file/d/1Rwg57p_6vdQRW0ME0BY1DHDIeM_Gz_iv/view?usp=drivesdk"
    },
    {
      title: "Generative AI  ",
      issuer: "LinkedIn Learning",
      date: "2024",
      status: "Completed",
      credentialId: "ad89a74c13d850b67b83ab8761fdd812b0e71",
      link: "https://drive.google.com/file/d/1tUScrA-hKzkv8_Rajoi9MxkQMc0pZb75/view?usp=drivesdk"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and courses that validate my technical skills and knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <Card key={index} className="group hover:shadow-card-hover transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-smooth">
                    {cert.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
                <Badge 
                  variant={cert.status === "Completed" ? "default" : "secondary"}
                  className="ml-2"
                >
                  {cert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-1">
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>
              {cert.link && cert.status === "Completed" && (
                <a 
                  href={cert.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Certificate
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}