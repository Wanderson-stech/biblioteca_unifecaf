import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Search, Download, Users, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Acervo Digital Completo",
    description: "Mais de 50.000 livros digitais em diversas áreas do conhecimento, sempre atualizados.",
  },
  {
    icon: Search,
    title: "Busca Avançada",
    description: "Sistema de busca inteligente por título, autor, assunto ou palavra-chave.",
  },
  {
    icon: Download,
    title: "Download Offline",
    description: "Baixe seus livros favoritos para ler offline em qualquer dispositivo.",
  },
  {
    icon: Users,
    title: "Comunidade Acadêmica",
    description: "Conecte-se com outros estudantes e compartilhe conhecimento.",
  },
  {
    icon: Clock,
    title: "Acesso 24/7",
    description: "Biblioteca sempre aberta, disponível a qualquer hora do dia ou da noite.",
  },
  {
    icon: Shield,
    title: "Conteúdo Confiável",
    description: "Todos os materiais são verificados e aprovados por nossa equipe acadêmica.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma experiência completa de biblioteca digital com recursos modernos e intuitivos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
