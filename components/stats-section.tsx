import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Download, Star } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "50.000+",
    label: "Livros Disponíveis",
    description: "Em constante crescimento",
  },
  {
    icon: Users,
    value: "15.000+",
    label: "Estudantes Ativos",
    description: "Comunidade engajada",
  },
  {
    icon: Download,
    value: "500.000+",
    label: "Downloads Realizados",
    description: "Conhecimento compartilhado",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Avaliação Média",
    description: "Satisfação dos usuários",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Números que Impressionam</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja o impacto da nossa biblioteca digital na comunidade acadêmica
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
