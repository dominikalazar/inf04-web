# Galeria Podróży

Projekt galerii zdjęć stworzony w React. Aplikacja pozwala przeglądać zdjęcia z różnych miejsc, sortować je według kategorii oraz dodawać własne fotografie. Każde zdjęcie posiada również osobną stronę ze szczegółami.

## Możliwości aplikacji

- Wyświetlanie zdjęć z podziałem na kategorie: Góry, Morze i Miasto
- Filtrowanie zdjęć według wybranej kategorii
- Wyświetlanie szczegółów zdjęcia po przejściu na `/zdjecie/:id`
- Formularz umożliwiający dodawanie zdjęć (`/dodaj`)
- Możliwość usuwania zdjęć oraz oznaczania ich jako ulubione
- Informacja o ładowaniu danych i obsługa ewentualnych błędów
- Sekcja „Zdjęcie dnia”, w której wyświetlane jest losowe zdjęcie pobierane z API picsum.photos
- Obsługa nieprawidłowych adresów za pomocą strony 404

## Jak uruchomić projekt?

Po pobraniu projektu należy zainstalować potrzebne zależności, a następnie uruchomić aplikację.

```bash
npm install
npm run dev
```

Po uruchomieniu strona będzie dostępna pod adresem:

`http://localhost:5173`

## Organizacja plików

Kod aplikacji został podzielony na kilka folderów:

- `src/components/` – komponenty wykorzystywane w aplikacji, np. PhotoCard, Gallery, CategoryBar, Layout, Footer i ZdjecieDnia
- `src/pages/` – poszczególne widoki aplikacji: GaleriaPage, ZdjeciePage, DodajPage oraz NotFoundPage
- `src/services/` – pliki odpowiedzialne za pobieranie i obsługę danych (`zdjecia.js`)
- `src/hooks/` – własny hook `useZdjecia` do zarządzania stanem zdjęć
- `public/photos.json` – plik zawierający początkową listę zdjęć

## Wykorzystane technologie

Do wykonania projektu wykorzystano **React** oraz **Vite**. Za przechodzenie między podstronami odpowiada **React Router**, natomiast do wyglądu i stylowania elementów użyto **Bootstrap**.
