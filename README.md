# Final exam - Multimediadesign, spring 2025 

## Projektbeskrivelse

Dette projekt er udviklet som en afsluttende opgave på Multimediadesignuddannelsen. Opgaven lød på at designe og udvikle en brugervenlig og sikker login-løsning med "Min side"-funktionalitet til en fiktiv online elektronikforretning. Løsningen skulle være teknisk kompatibel med Novicells Umbraco-setup og kunne integreres i deres Foundation-projekt.

## Teknologier og stack

- Nuxt 3 (Vue 3)
- Pinia (state management)
- Tailwind CSS (styling)
- Umbraco backend API
- JSON Web Token (JWT) til autentifikation
- Cookies til sessionshåndtering
- LocalStorage (midlertidigt brugt til data uden endpoints)

## Funktioner

- Login og opret konto
- JWT token håndtering via cookies
- "Min Side" med:
  - Redigering af profil (brug af localStorage)
  - Ændring af adgangskode
  - Adresseoplysninger (brug af localStorage)
  - Mulighed for at slette konto (UI-flow med alert)
- Favoritprodukter (gemt i localStorage)
- Gated content (sider kun tilgængelige efter login)
- GDPR-foranstaltninger:
  - Generiske fejlbeskeder
  - Ingen eksponering af brugerdata i frontend

## Struktur og arkitektur

Projektet er bygget op med en komponentbaseret og modulær struktur. Alle funktioner er opdelt i:

/components
/pages
/stores
/middleware



API-kald er centraliseret med `$fetch` og bruger cookies for at opretholde sessionsstatus. `middleware/protected.ts` bruges til at beskytte sider bag login.

##  API-integration

Projektet anvender følgende endpoints fra Umbracos backend:

- `POST /api/member-profile/log-in`
- `POST /api/member-profile/log-out`
- `GET /api/member-profile/is-logged-in`
- `POST /api/members` (til opretning)
- `PATCH /api/member-profile/password` (ændring af adgangskode)

## Sådan implementeres løsningen i Novicell Foundation

Dette projekt fungerer som en selvstændig Nuxt 3 frontend-applikation, der fungerer client-side og kommunikerer med Umbraco backend via API. For at integrere denne løsning i Novicells Foundation-setup anbefaler vi følgende:

1. **Integrér komponenterne** fra vores løsning direkte i Foundation-projektet.
2. **Kopier følgende filer og mapper**:
   - `stores/auth.ts`
   - `middleware/protected.ts`
   - `components/partial/LoginForm.vue`
   - `components/partial/CreateForm.vue`
   - `pages/konto/*.vue` (Min side + undersektioner)
3. **Opsæt nødvendige cookies** og `$fetch`-kald til API-endpoints.
4. **Tilpas styling** så det matcher Foundation-designet (brug Tailwind classes).

## Filstruktur 


src/
├── components/
│ └── partial/
│ ├── LoginForm.vue
│ └── CreateForm.vue
├── pages/
│ └── konto/
│ ├── index.vue
│ ├── profile.vue
│ ├── favoritter.vue
│ └── ordrehistorik.vue
├── stores/
│ └── auth.ts
├── middleware/
│ └── protected.ts


##  Demo



##  Udviklere

- Omar Gaal
- Hani Zaghmout 

##  Licens

Projektet er lavet til undervisningsbrug og må ikke genbruges kommercielt uden tilladelse.