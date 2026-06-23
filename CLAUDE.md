@AGENTS.md

# Top Auto — kontekst projekta

## O biznisu
Top Auto je servis za uvoz polovnih automobila iz Evrope u Srbiju (Beograd). Auta se ne traže po običnim oglasima — nalaze se preko zatvorenih evropskih licitacija (Nemačka, Holandija, Belgija, Francuska, Španija, Italija), gde se prodaju auta lizing firmi, ovlašćenih dilera i kompanija sa kompletnom, neulepšanom istorijom.

**Ključna razlika u odnosu na konkurenciju:** svaki auto se VIN-proverava u zvaničnim registrima PRE kupovine (servisna istorija, kilometraža, havarije, broj vlasnika). Ako nešto ne valja, ne kupuju ga.

**Cenovni model:** fiksna cena od početka — uključuje auto, transport, carinu, PDV, AMSS, špediciju, uslugu. Bez skrivenih troškova na pola puta.

**Proces (4 koraka, sa sajta):** Razgovor → Pretraga sa licitacija (2-3 ponude sa izveštajem i VIN proverom) → Klijent bira, Top Auto licitira/kupuje/vodi papirologiju (EUR1, COC, faktura, carinjenje, homologacija, registracija) → Preuzimanje u Beogradu sa kompletnom dokumentacijom. Ceo proces do ~60 dana (stvarni primeri: 28-44 dana).

**Statistika (prikazana na sajtu):** 50+ dovezenih auta, 0 reklamacija, 3 godine bez ijedne reklamacije.

**Kontakt:** podrska@topautouvoz.com · Beograd, Srbija. Domen: topautouvoz.com (registrovan na Namecheap, koristi i Namecheap Private Email).

## Tech stack
- Next.js 16.2.6 (App Router), React 19.2.4, TypeScript, Tailwind CSS v4
- **VAŽNO:** Next.js 16 ima breaking changes u odnosu na trening podatke — pre pisanja koda provери `node_modules/next/dist/docs/` (vidi AGENTS.md)
- Jednostrana sajt (sve u `app/page.tsx`), `app/layout.tsx` za metadata/fontove

## Struktura sajta (`app/page.tsx`)
Sve sekcije su u jednom fajlu, redom: Navbar → Hero (sa statistikom) → Usluge (#usluge, 6 kartica) → Prednosti (#prednosti) → Proces (#proces, 4 koraka) → Testimoniali (3 klijenta) → CTA banner → Kontakt (#kontakt, forma + info) → Footer.

Stil: crna pozadina, gold akcenat (#C9A84C), font-display = Bebas Neue (naslovi), font-body = Inter (tekst). Ton komunikacije na sajtu: direktan, "ti" obraćanje, bez fraza, naglašava transparentnost i da klijent ne ide na šaltere.

**Ostali fajlovi u rootu (ne deo live sajta):**
- `app/page copy.tsx` — backup/starija verzija page.tsx, nije aktivna ruta
- `info-dokument.html` — štampani vodič/PDF dokument za klijente (A4 stranice, isti gold/dark brend stil kao sajt)
- `Info fajl/` — referentne WhatsApp slike (verovatno auta/dokumentacija za sadržaj)

## Kontakt forma — status
Forma u sekciji #kontakt (`page.tsx`) trenutno **ne šalje email** — `handleSubmit` samo radi `setSent(true)` lokalno (page.tsx:9-12). Mejl ne stiže nigde.

**U toku je povezivanje sa Resend-om:**
- Resend nalog kreiran, API key generisan
- Domen `topautouvoz.com` dodat u Resend, region Ireland (eu-west-1)
- DNS recordovi (DKIM, SPF za `send` host, DMARC za `_dmarc`) dodati na Namecheap i potvrđeni
- **Sledeći korak:** napraviti Next.js API rutu (route handler) koja prima formData i šalje email preko Resend SDK na podrska@topautouvoz.com, zatim povezati `handleSubmit` u page.tsx da je pozove umesto samo `setSent(true)`. API ključ čuvati u `.env.local`, ne u kodu.

## Marketing / društvene mreže
Radimo na Instagram bio i Reels skriptama za konkretne uvezene/u-procesu automobile (npr. Škoda Kodiaq Sportline 2022, BMW 740d xDrive 2024).

**Ton koji funkcioniše za Reels skripte:**
- Priča kroz konkretan auto i klijenta, ne kroz nabrajanje usluga firme
- Firma se provlači spontano kroz priču (npr. "klijent se javio, tražili smo 3 nedelje, stigao za 28-30 dana") — ne nabrajati naše prednosti direktno
- Fokus na auto i njegove specifikacije/karakteristike — to zanima gledaoca, ne nas
- Bez korišćenja tick/checkmark simbola (✅☑️) — Instagram ih tretira kao spam signal, smanjuje reach
- Kratke skripte za do 1 minut (~110-130 reči) rade bolje od dugih
- Dobar zatvarač: pitanje gledaocu ili kratka poenta o "pravom autu" umesto klasičnog CTA niza
