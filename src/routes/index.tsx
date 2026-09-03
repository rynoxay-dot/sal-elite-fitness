import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Dumbbell,
  Instagram,
  MapPin,
  Menu,
  MoveRight,
  Ruler,
} from "lucide-react";

import athleteAsset from "../assets/athlete.png.asset.json";
import coachAsset from "../assets/coach-flexing.png.asset.json";
import groupAsset from "../assets/group-training.jpg.asset.json";
import benchAsset from "../assets/gym-athlete-bench.png.asset.json";
import floorAsset from "../assets/gym-floor.png.asset.json";
import logoAsset from "../assets/sh-fitness-logo.png.asset.json";

const whatsappUrl = "https://wa.me/212702406402";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Imm+N%C2%B0+12%2C+Lotissement+Al-Ansar%2C+Rte+de+Rabat%2C+Sal%C3%A9";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SH.FITNESS Club | Salle haut de gamme à Salé" },
      {
        name: "description",
        content:
          "SH.FITNESS, club haut de gamme à Salé : 800 m², équipements nouvelle génération et espace ouvert 7j/7.",
      },
      { property: "og:title", content: "SH.FITNESS Club | Salé" },
      {
        property: "og:description",
        content: "800 m² d'espace et des équipements nouvelle génération à Salé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gallery = [
  {
    src: floorAsset.url,
    alt: "Plateau de musculation SH.FITNESS avec équipements nouvelle génération",
    className: "gallery-wide",
  },
  {
    src: coachAsset.url,
    alt: "Coach SH.FITNESS dans la salle de Salé",
    className: "gallery-tall",
  },
  {
    src: groupAsset.url,
    alt: "Athlètes après leur entraînement chez SH.FITNESS",
    className: "gallery-square",
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="SH.FITNESS Club"
      className={compact ? "h-10 w-auto" : "h-12 w-auto sm:h-14"}
    />
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#accueil" aria-label="SH.FITNESS — Accueil">
            <Logo compact />
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex" aria-label="Navigation principale">
            <a className="nav-link" href="#club">Le club</a>
            <a className="nav-link" href="#coachs">Coachs</a>
            <a className="nav-link" href="#galerie">Galerie</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <a className="button-gold hidden sm:inline-flex" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <details className="mobile-menu relative md:hidden">
            <summary className="icon-control" aria-label="Ouvrir le menu"><Menu size={22} /></summary>
            <nav className="absolute right-0 top-12 grid w-52 gap-1 border border-border bg-card p-3 shadow-2xl" aria-label="Navigation mobile">
              <a href="#club">Le club</a><a href="#coachs">Coachs</a><a href="#galerie">Galerie</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="accueil" className="hero-section relative flex min-h-[760px] items-end pt-24 lg:min-h-[820px]">
        <div className="hero-grid-lines absolute inset-0" aria-hidden="true" />
        <div className="hero-word absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">UNLEASH</div>
        <div className="page-shell relative z-10 grid w-full items-end gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="pb-14 pt-20 lg:pb-24">
            <div className="mb-9 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-12 bg-primary" /> Salé · Maroc
            </div>
            <h1 className="max-w-3xl font-display text-[clamp(4rem,10vw,9rem)] font-bold uppercase leading-[.78]">
              <span className="block">Forge</span>
              <span className="text-outline block">ta force.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Un club haut de gamme pensé pour celles et ceux qui refusent les limites. Plus d'espace, plus de précision, plus d'intensité.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a className="button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Rejoindre le club <MoveRight size={18} aria-hidden="true" />
              </a>
              <a className="button-ghost" href="#club">Découvrir <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-athlete-wrap relative min-h-[500px] lg:min-h-[720px]">
            <div className="hero-halo absolute inset-x-[12%] bottom-[8%] aspect-square rounded-full border border-primary/30" aria-hidden="true" />
            <img src={athleteAsset.url} alt="Athlète SH.FITNESS" className="hero-athlete absolute bottom-0 left-1/2 h-full max-w-none -translate-x-1/2 object-contain object-bottom" />
            <div className="stat-stamp absolute bottom-10 right-0 lg:bottom-24">
              <span className="font-display text-4xl font-bold text-primary">800</span>
              <span className="text-xs font-bold uppercase tracking-wider">m² d'espace</span>
            </div>
          </div>
        </div>
        <div className="ticker absolute inset-x-0 bottom-0 z-20 overflow-hidden border-y border-primary/30 bg-primary py-3 text-primary-foreground">
          <div className="ticker-track font-display text-sm font-bold uppercase tracking-[0.16em]">
            SH.FITNESS · CLUB HAUT DE GAMME · ÉQUIPEMENTS NOUVELLE GÉNÉRATION · OUVERT 7J/7 · SH.FITNESS · CLUB HAUT DE GAMME · ÉQUIPEMENTS NOUVELLE GÉNÉRATION · OUVERT 7J/7 ·
          </div>
        </div>
      </section>

      <section id="club" className="section-pad bg-forest">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">01 · L'espace</span>
            <h2>Pas une salle.<br /><span className="text-primary">Un terrain de conquête.</span></h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
            <div className="image-frame group relative min-h-[470px] overflow-hidden">
              <img src={floorAsset.url} alt="Intérieur spacieux du club SH.FITNESS à Salé" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="image-shade absolute inset-0" />
              <div className="absolute bottom-0 left-0 p-7 sm:p-10">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">L'espace</span>
                <p className="max-w-md font-display text-3xl font-bold uppercase sm:text-5xl">800 m² conçus pour performer.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article className="feature-tile"><Ruler className="text-primary" /><strong>800 m²</strong><span>D'espace pour s'entraîner sans compromis.</span></article>
              <article className="feature-tile"><Dumbbell className="text-primary" /><strong>Nouvelle génération</strong><span>Des équipements sélectionnés pour chaque répétition.</span></article>
              <article className="feature-tile"><Clock3 className="text-primary" /><strong>Ouvert 7j/7</strong><span>Votre discipline ne prend jamais de pause.</span></article>
            </div>
          </div>
        </div>
      </section>

      <section id="coachs" className="section-pad bg-background">
        <div className="page-shell">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div className="section-heading"><span className="eyebrow">02 · L'équipe</span><h2>Encadré par<br /><span className="text-primary">l'exigence.</span></h2></div>
            <p className="max-w-lg pb-2 text-base leading-7 text-muted-foreground lg:justify-self-end">Deux coachs. Une même vision : transformer la discipline en résultats durables, dans un cadre où chaque détail compte.</p>
          </div>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            <a className="coach-card group" href="https://www.instagram.com/coach_ghost_saidi_/" target="_blank" rel="noreferrer">
              <div className="coach-visual"><img src={coachAsset.url} alt="Coach Ghost Saidi chez SH.FITNESS" /><span className="coach-number">01</span></div>
              <div className="flex items-center justify-between p-6 sm:p-8"><div><span className="eyebrow">Coach</span><h3>@coach_ghost_saidi_</h3></div><Instagram className="text-primary transition-transform group-hover:rotate-12" /></div>
            </a>
            <a className="coach-card group" href="https://www.instagram.com/merooyazgui/" target="_blank" rel="noreferrer">
              <div className="coach-visual"><img src={benchAsset.url} alt="Coach Mero Oyazgui chez SH.FITNESS" /><span className="coach-number">02</span></div>
              <div className="flex items-center justify-between p-6 sm:p-8"><div><span className="eyebrow">Coach</span><h3>@merooyazgui</h3></div><Instagram className="text-primary transition-transform group-hover:rotate-12" /></div>
            </a>
          </div>
        </div>
      </section>

      <section id="galerie" className="section-pad bg-forest">
        <div className="page-shell">
          <div className="section-heading flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><span className="eyebrow">03 · Immersion</span><h2>Dans l'arène.</h2></div><span className="hidden text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground sm:block">Salé · 34.0531° N</span></div>
          <div className="gallery-grid mt-14">
            {gallery.map((image, index) => (
              <figure className={`gallery-item ${image.className}`} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>0{index + 1} / SH.FITNESS</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad relative">
        <div className="contact-lines absolute inset-0" aria-hidden="true" />
        <div className="page-shell relative z-10">
          <span className="eyebrow">04 · Nous trouver</span>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[.84]">Ta prochaine<br /><span className="text-primary">répétition</span><br />commence ici.</h2>
              <a className="button-gold mt-10" href={whatsappUrl} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={18} /></a>
            </div>
            <div className="contact-details self-end">
              <div className="contact-row"><MapPin className="text-primary" /><div><span>Adresse</span><p>Imm N° 12, Lotissement Al-Ansar<br />Route de Rabat, Salé</p><a href={mapsUrl} target="_blank" rel="noreferrer">Voir la localisation <ArrowUpRight size={14} /></a></div></div>
              <div className="contact-row"><Clock3 className="text-primary" /><div><span>Horaires</span><p>Lundi — Samedi : 08h — 22h<br />Dimanche : 08h — 18h</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10 bg-background py-10">
        <div className="page-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <div className="flex items-center gap-5 text-sm font-semibold">
            <a className="nav-link" href="https://www.instagram.com/shfitness.ma/?hl=fr" target="_blank" rel="noreferrer">Instagram</a>
            <a className="nav-link" href="https://web.facebook.com/profile.php?id=61577087640786" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">© 2026 SH.FITNESS · Salé</p>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter SH.FITNESS sur WhatsApp">WA</a>
    </main>
  );
}