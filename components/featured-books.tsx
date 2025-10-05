import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Eye } from "lucide-react"

const featuredBooks = [
  {
    id: 1,
    title: "Fundamentos de Programação",
    author: "Maria Silva Santos",
    category: "Tecnologia",
    rating: 4.8,
    downloads: 1250,
    views: 5420,
    cover: "/programming-book-cover-blue.jpg",
  },
  {
    id: 2,
    title: "História do Brasil Contemporâneo",
    author: "João Carlos Oliveira",
    category: "História",
    rating: 4.6,
    downloads: 890,
    views: 3210,
    cover: "/history-book-cover-green.jpg",
  },
  {
    id: 3,
    title: "Matemática Aplicada",
    author: "Ana Paula Costa",
    category: "Matemática",
    rating: 4.9,
    downloads: 2100,
    views: 7850,
    cover: "/mathematics-book-cover-orange.jpg",
  },
  {
    id: 4,
    title: "Psicologia Organizacional",
    author: "Roberto Lima",
    category: "Psicologia",
    rating: 4.7,
    downloads: 1580,
    views: 4320,
    cover: "/psychology-book-cover-purple.jpg",
  },
  {
    id: 5,
    title: "Direito Constitucional",
    author: "Fernanda Rodrigues",
    category: "Direito",
    rating: 4.5,
    downloads: 950,
    views: 2890,
    cover: "/law-book-cover-red.jpg",
  },
  {
    id: 6,
    title: "Administração Estratégica",
    author: "Carlos Eduardo",
    category: "Administração",
    rating: 4.8,
    downloads: 1750,
    views: 6120,
    cover: "/business-book-cover-navy.jpg",
  },
]

export function FeaturedBooks() {
  return (
    <section id="acervo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Livros em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubra os livros mais populares e bem avaliados do nosso acervo digital
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="book-card-hover border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Book Cover */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {book.category}
                    </Badge>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{book.title}</h3>
                  <p className="text-muted-foreground mb-4">por {book.author}</p>

                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{book.rating}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{book.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{book.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      Ler Online
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Ver Todo o Acervo
          </Button>
        </div>
      </div>
    </section>
  )
}
