"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ ime: "", telefon: "", poruka: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .gold { color: #C9A84C; }
        .gold-bg { background-color: #C9A84C; }
        .gold-border { border-color: #C9A84C; }
        .hero-overlay {
          background: linear-gradient(to right, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.3) 100%),
                      linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: #C9A84C;
        }
        .btn-gold {
          background: linear-gradient(135deg, #C9A84C, #e8c96d);
          transition: all 0.3s ease;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201,168,76,0.4);
        }
        .divider {
          width: 60px; height: 3px;
          background: linear-gradient(to right, #C9A84C, transparent);
        }
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.8s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.8s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.8s 0.6s ease both; }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-2xl tracking-widest">
            TOP<span className="gold">AUTO</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-body text-white/70 tracking-wider uppercase">
            <a href="#usluge" className="hover:text-white transition-colors">Usluge</a>
            <a href="#prednosti" className="hover:text-white transition-colors">Prednosti</a>
            <a href="#proces" className="hover:text-white transition-colors">Proces</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <a href="#kontakt" className="hidden md:block btn-gold text-black text-sm font-semibold px-6 py-2.5 rounded font-body tracking-wider uppercase">
            Zakaži razgovor
          </a>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm font-body text-white/70 tracking-wider uppercase border-t border-white/5 pt-4">
            <a href="#usluge" onClick={() => setMenuOpen(false)}>Usluge</a>
            <a href="#prednosti" onClick={() => setMenuOpen(false)}>Prednosti</a>
            <a href="#proces" onClick={() => setMenuOpen(false)}>Proces</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 hero-overlay z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center noise"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <p className="fade-up font-body text-xs tracking-[0.3em] uppercase gold mb-6">Zatvorene evropske licitacije</p>
          <h1 className="fade-up-2 font-display text-5xl md:text-7xl leading-tight max-w-3xl mb-6">
            UVOZ PROVERENIH AUTOMOBILA IZ EVROPE.
          </h1>
          <p className="fade-up-3 font-body text-white/60 text-base max-w-xl mb-10 leading-relaxed">
            Automobili sa proverenim kilometražama od prvog vlasnika, sa zatvorenih licitacija u Nemačkoj, Holandiji, Belgiji, Francuskoj, Španiji i Italiji. 10-15% jeftinije od domaćeg placa.
          </p>
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="btn-gold text-black font-semibold px-8 py-4 rounded font-body tracking-wider uppercase text-sm text-center">
              Zakaži razgovor →
            </a>
            <a href="#proces" className="border border-white/20 text-white px-8 py-4 rounded font-body tracking-wider uppercase text-sm hover:border-white/50 transition-colors text-center">
              Kako radimo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { broj: "50+", label: "Dovezenih auta" },
              { broj: "0", label: "Reklamacija" },
              { broj: "3 god.", label: "Bez ijedne reklamacije" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl gold">{s.broj}</p>
                <p className="font-body text-white/40 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section id="usluge" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase gold mb-4">Šta nudimo</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-6xl md:text-7xl mb-20">NAŠE USLUGE</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Pronalaženje vozila",
                opis: "Ne tražimo po oglasima. Tražimo po zatvorenim licitacijama u celoj Evropi, tamo gde se prodaju auta lizing firmi, ovlašćenih dilera i kompanija. Tamo su auta sa kompletnom istorijom, pre nego što dođu na javni plac sa doteranom kilometražom.",
              },
              {
                icon: "📋",
                title: "Sva papirologija na nama",
                opis: "EUR1, COC, faktura, carinjenje, homologacija, registracija. Ti ne ideš na šaltere. Ti dobiješ ključeve i saobraćajnu na svoje ime.",
              },
              {
                icon: "🚗",
                title: "Transport i preuzimanje u Beogradu",
                opis: "Auto dovozimo do Beograda. Bez putovanja u Evropu, bez nedelje izgubljenog vremena, bez troškova hotela i goriva. Ti dolaziš po auto kad je sve spremno i preuzimaš ga sa kompletnom dokumentacijom.",
              },
              {
                icon: "🔧",
                title: "Provera istorije pre kupovine",
                opis: "Pre nego što licitiramo ili kupimo bilo koji auto za tebe, proveravamo VIN broj u zvaničnim registrima. Servisna istorija, kilometraža, havarije, broj vlasnika. Ako bilo šta ne valja, ne kupujemo. Ti vidiš izveštaj pre nego što daš odluku.",
              },
              {
                icon: "💰",
                title: "Jedna cena. Bez iznenađenja.",
                opis: "Cena koju ti damo na početku je cena koju plaćaš na kraju. Sve uračunato: auto, transport, carina, PDV, AMSS, špedicija, naša usluga. Bez skrivenih taksi na pola puta.",
              },
              {
                icon: "🤝",
                title: "Tu smo i posle preuzimanja",
                opis: "Ne nestajemo kad daš pare. Za sva pitanja oko dokumentacije, registracije ili saveta, javiš se i mi smo tu. Radimo na preporuku, zato nam je svaki klijent važan i posle posla.",
              },
            ].map((u) => (
              <div key={u.title} className="card-hover border border-white/10 rounded-lg p-8 bg-[#111]">
                <div className="text-4xl mb-6">{u.icon}</div>
                <h3 className="font-display text-2xl mb-4 tracking-wide">{u.title}</h3>
                <p className="font-body text-white/50 leading-relaxed text-sm">{u.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREDNOSTI */}
      <section id="prednosti" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1400] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase gold mb-4">Zašto Top Auto</p>
              <div className="divider mb-8" />
              <h2 className="font-display text-6xl md:text-7xl mb-10">VAŠA PREDNOST</h2>
              <div className="space-y-6">
                {[
                  "Pristup zatvorenim licitacijama koje običan kupac ne može da dobije. Tamo su auta sa kompletnim tragom.",
                  "Ušteda 10-15% u odnosu na isti taj auto na domaćem placu, bez rizika koji ide uz domaći plac.",
                  "Proveravamo VIN broj svakog auta u zvaničnim registrima. Kupujemo samo auta sa proverenom istorijom, originalnom kilometražom i bez havarija.",
                  "Kompletan proces do 60 dana, od prvog razgovora do ključeva u tvojoj ruci.",
                  "Razgovor i savet pre svake odluke. Bez obaveze, ali bez ulepšavanja.",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full gold-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-body text-white/70 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
                alt="Luksuzni automobil"
                className="rounded-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 rounded-lg p-6">
                <p className="font-display text-4xl gold">10-15%</p>
                <p className="font-body text-white/50 text-xs uppercase tracking-widest mt-1">Manje nego na domaćem placu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section id="proces" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase gold mb-4">Kako radimo</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-6xl md:text-7xl mb-20">PROCES U 4 KORAKA</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { br: "01", title: "Razgovor", opis: "Kažeš nam šta tražiš, koji budžet, koje su ti potrebe. Mi ti odmah kažemo šta je realno za tu cifru. Besplatno, bez ulepšavanja." },
              { br: "02", title: "Pretraga sa licitacija", opis: "Tražimo po zatvorenim licitacijama u celoj Evropi dok ne nađemo 2-3 auta koja zadovoljavaju sve tvoje uslove i našu proveru istorije. Šaljemo ti detaljan izveštaj o svakom: sa VIN proverom, fotografijama, servisnim tragom." },
              { br: "03", title: "Tvoj izbor, naša odgovornost", opis: "Ti biraš auto. Mi licitiramo, kupujemo, šaljemo papirologiju, organizujemo transport, prolazimo carinu i homologaciju. Ti ne ideš na šalter ni jednom." },
              { br: "04", title: "Preuzimanje u Beogradu", opis: "Kad je auto prošao carinu i kompletnu papirologiju, javljamo ti se da dođeš po njega u Beograd. Predajemo ti auto sa svom dokumentacijom: servisna istorija u koverti, sve spremno. Plaćaš onu istu cenu dogovorenu na početku." },
            ].map((k) => (
              <div key={k.br} className="relative">
                <p className="font-display text-8xl gold opacity-20 leading-none mb-4">{k.br}</p>
                <h3 className="font-display text-2xl mb-4 tracking-wide">{k.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{k.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALI */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase gold mb-4">Iskustva klijenata</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-6xl md:text-7xl mb-20">ŠTA KAŽU KLIJENTI</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Mesecima sam gledao aute po oglasima i skoro kupio dva sa vraćenom kilometražom, srećom na vreme otkrio. Kad sam čuo za zatvorene licitacije, bio sam skeptičan. Na kraju smo dovezli Golf za manje nego što su tražili za slabije primerke ovde. Sve kao što su rekli od prvog razgovora.",
                ime: "Nikola J.",
                detalj: "Beograd · VW Golf 7 GTI, 2023.",
              },
              {
                quote: "Mislio sam da će negde iskočiti neki trošak koji nisu pomenuli. Nije. Cena sa početka bila je cena na kraju. Auto je stigao za 44 dana, papiri u redu, bez gužve na šalteru. Kad me pitaju, preporučujem.",
                ime: "Aleksandar M.",
                detalj: "Novi Sad · BMW 320d, 2022.",
              },
              {
                quote: "I muž i ja smo bili skeptični. Pitali smo sve što nam je padalo na pamet pre nego što smo dali bilo kakav novac. Odgovorili su na sve, bez nerviranja. Auto je u garaži, dokumentacija uredna, kilometraža proverena. Nema šta da zamerimo.",
                ime: "Jelena K.",
                detalj: "Kragujevac · Audi A3, 2024.",
              },
            ].map((t) => (
              <div key={t.ime} className="card-hover border border-white/10 rounded-lg p-8 bg-[#111] flex flex-col justify-between">
                <p className="font-body text-white/60 leading-relaxed text-sm mb-8">"{t.quote}"</p>
                <div>
                  <p className="font-body text-white font-semibold text-sm">{t.ime}</p>
                  <p className="font-body text-white/30 text-xs mt-1">{t.detalj}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            SPREMAN DA UVEZEŠ AUTO KAKO TREBA?
          </h2>
          <p className="font-body text-white/50 mb-10 text-base max-w-2xl mx-auto">Javi se i provešćemo te kroz ceo proces: kako biramo auto, kako proveravamo istoriju, šta je uključeno u cenu i koliko traje. Bez obaveze, ali ozbiljno: radimo sa ljudima koji stvarno planiraju kupovinu u narednih par meseci.</p>
          <a href="#kontakt" className="btn-gold text-black font-semibold px-10 py-5 rounded font-body tracking-wider uppercase text-sm inline-block">
            Zakaži razgovor →
          </a>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase gold mb-4">Stupi u kontakt</p>
              <div className="divider mb-8" />
              <h2 className="font-display text-6xl md:text-7xl mb-8">JAVI SE</h2>
              <p className="font-body text-white/50 leading-relaxed mb-10">
                Imaš pitanje ili si spreman da kreneš, piši nam. Provešćemo te kroz ceo proces i odgovoriti na sve pre nego što doneseš bilo kakvu odluku. Odgovaramo u roku od nekoliko sati, ne nekoliko dana.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Telefon", value: "+381 60 000 0000" },
                  { label: "Email", value: "info@topauto.rs" },
                  { label: "Lokacija", value: "Beograd, Srbija" },
                ].map((c) => (
                  <div key={c.label}>
                    <p className="font-body text-xs uppercase tracking-widest text-white/30 mb-1">{c.label}</p>
                    <p className="font-body text-white">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="border border-[#C9A84C]/30 rounded-lg p-12 text-center bg-[#111]">
                  <p className="text-5xl mb-4">✓</p>
                  <h3 className="font-display text-3xl gold mb-2">Poruka poslata!</h3>
                  <p className="font-body text-white/50">Kontaktiraćemo te u roku od 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "ime", label: "Tvoje ime", type: "text", placeholder: "Marko Marković" },
                    { name: "telefon", label: "Telefon", type: "tel", placeholder: "+381 60 000 0000" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-[#111] border border-white/10 rounded px-4 py-3.5 font-body text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors"
                        onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">Šta tražiš?</label>
                    <textarea
                      rows={4}
                      placeholder="Šta tražiš? (Marka, model, godište, budžet — i kada planiraš kupovinu)"
                      required
                      className="w-full bg-[#111] border border-white/10 rounded px-4 py-3.5 font-body text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                      onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full text-black font-semibold py-4 rounded font-body tracking-wider uppercase text-sm">
                    Pošalji upit →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl tracking-widest">TOP<span className="gold">AUTO</span></div>
          <p className="font-body text-white/20 text-xs">© 2025 Top Auto. Sva prava zadržana.</p>
          <p className="font-body text-white/20 text-xs">Beograd, Srbija</p>
        </div>
      </footer>
    </main>
  );
}
