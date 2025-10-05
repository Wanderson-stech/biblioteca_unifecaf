import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Biblioteca Virtual
                <span className="block text-white/90">UniFECAF</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 text-pretty leading-relaxed">
                Acesse milhares de livros digitais, artigos acadêmicos e recursos educacionais. Sua jornada do
                conhecimento começa aqui.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto lg:mx-0 mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar no acervo..."
                    className="pl-12 pr-4 h-12 text-base bg-white/95 border-0"
                  />
                  <Button className="absolute right-1 top-1 bottom-1 px-6">Buscar</Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Explorar Acervo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Como Funciona
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <div className="text-3xl font-bold mb-2">50.000+</div>
                <div className="text-white/80">Livros Digitais</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <Users className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <div className="text-3xl font-bold mb-2">15.000+</div>
                <div className="text-white/80">Estudantes Ativos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white sm:col-span-2">
                <Award className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Acesso Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
