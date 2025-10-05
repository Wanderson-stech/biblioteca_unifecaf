import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                <BookOpen className="h-6 w-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">UniFECAF</span>
                <span className="text-xs text-background/70">Biblioteca Virtual</span>
              </div>
            </div>
            <p className="text-background/80 mb-6 text-pretty leading-relaxed">
              Democratizando o acesso ao conhecimento através da tecnologia e inovação educacional.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#acervo" className="text-background/80 hover:text-background transition-colors">
                  Acervo Digital
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/80 hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Como Usar
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">biblioteca@unifecaf.edu.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">São Paulo, SP</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">© 2024 UniFECAF. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
