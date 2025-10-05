import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Target, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Sobre a Biblioteca Virtual UniFECAF
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              A Biblioteca Virtual da UniFECAF representa nosso compromisso com a democratização do conhecimento e a
              inovação educacional. Desenvolvida especialmente para nossa comunidade acadêmica, oferecemos acesso
              irrestrito a um vasto acervo digital.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Excelência Acadêmica</h3>
                  <p className="text-muted-foreground text-pretty">
                    Curadoria especializada de conteúdo acadêmico de alta qualidade, alinhado com os currículos dos
                    nossos cursos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Foco no Estudante</h3>
                  <p className="text-muted-foreground text-pretty">
                    Interface intuitiva e recursos pensados para facilitar o aprendizado e a pesquisa acadêmica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compromisso Social</h3>
                  <p className="text-muted-foreground text-pretty">
                    Acreditamos que o conhecimento deve ser acessível a todos, contribuindo para uma sociedade mais
                    justa e educada.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="px-8">
              Conheça Nossa História
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/modern-university-library.png"
                  alt="Estudantes na biblioteca da UniFECAF"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-balance">Transformando Vidas Através da Educação</h3>
                  <p className="text-white/90 text-pretty">
                    Há mais de uma década formando profissionais qualificados e cidadãos conscientes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
