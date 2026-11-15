let zdjecia = null;

/**
 * Pobiera listę zdjęć z pliku JSON.
 * Jeśli dane zostały już pobrane, zwraca zapisaną listę.
 * @returns {Promise<Array>} Lista zdjęć.
 */
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia;
  const odpowiedz = await fetch("/photos.json");
  if (!odpowiedz.ok) throw new Error("Błąd serwera: " + odpowiedz.status);
  zdjecia = await odpowiedz.json();
  return zdjecia;
}

/**
 * Wyszukuje zdjęcie na podstawie jego ID.
 * @param {number|string} id - ID szukanego zdjęcia.
 * @returns {Promise<Object|null>} Znalezione zdjęcie lub null.
 */
export async function pobierzZdjecie(id) {
  const lista = await pobierzZdjecia();
  return lista.find((z) => z.id === Number(id)) ?? null;
}

/**
 * Usuwa zdjęcie z listy na podstawie jego ID.
 * @param {number} id - ID zdjęcia do usunięcia.
 * @returns {Array} Lista zdjęć po usunięciu.
 */
export function usunZdjecie(id) {
  zdjecia = zdjecia.filter((z) => z.id !== id);
  return zdjecia;
}

/**
 * Zmienia status ulubionego zdjęcia na przeciwny.
 * @param {number} id - ID wybranego zdjęcia.
 * @returns {Array} Zaktualizowana lista zdjęć.
 */
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map((z) =>
    z.id === id ? { ...z, favorite: !z.favorite } : z,
  );
  return zdjecia;
}

/**
 * Dodaje nowe zdjęcie do galerii.
 * Automatycznie nadaje mu ID i ustawia favorite na false.
 * @param {Object} nowe - Dane nowego zdjęcia.
 * @returns {Array} Lista zdjęć z dodanym zdjęciem.
 */
export function dodajZdjecie(nowe) {
  const noweId = Math.max(...zdjecia.map((z) => z.id)) + 1;
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }];
  return zdjecia;
}
