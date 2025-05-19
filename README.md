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
