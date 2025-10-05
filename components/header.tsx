"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, BookOpen, User, Bell } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Fechar menu mobile após clique
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">UniFECAF</span>
              <span className="text-xs text-muted-foreground">Biblioteca Virtual</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("acervo")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Acervo
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          )}

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Buscar livros, autores, assuntos..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Desktop Actions */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
                Entrar
              </Button>
              <Button size="sm">Cadastrar</Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar..." className="pl-10" />
                </div>
              </div>

              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("acervo")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Acervo
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Contato
              </button>

              {/* Mobile Actions */}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
                <Button className="w-full">Cadastrar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
