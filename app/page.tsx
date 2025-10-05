import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBooks } from "@/components/featured-books"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="acervo">
          <FeaturedBooks />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <StatsSection />
        <section id="sobre">
          <AboutSection />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
