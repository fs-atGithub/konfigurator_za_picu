# Assignment 4

Koristiti podatke iz `data.json` kako bi se popunile ponuđene vrijednosti u obrascima.

---

Prepoznati i izdvojiti elemente za unos u zasebne komponente.

Izdvojene komponente koristiti na odgovarajućim mjestima u obrascu.

---

Dodati stanje s kojim se prati unos vrijednosti u obrazac.

"Size", "Crust", "Sauce" se svaki pohranjuju kao jedan string (jednostruki izbor). Vrijednost stringa odgovara vrijednosti `"value"` atributa za odabranu opciju.

"Vegetables", "Meats", "Spices" se svaki pohranjuju kao niz stringova (višestruki izbor). Vrijednosti stringova u nizu odgovaraju vrijednosti `"value"` atributa za odabrane opcije.

"Note" se pohranjuje kao string.

---

Onemogućiti dugme "ORDER NOW" za vrijeme popunjavanja obrasca.

Dugme "ORDER NOW" treba biti omogućeno onog trenutka kada se popune vrijednosti: "Size", "Crust", "Sauce".

---

Na polju "Toppings" prikazati ukupan broj opcija odabranih pod "Vegetables", "Meats", "Spices" na sljedeći način:

"(X out of 6 selected)"

... gdje je X ukupan broj odabranih opcija.

---

Odabrane opcije u obrascu prikazati na odgovarajućem mjestu u sažetku narudžbe ("Order summary").

Opcije bez odabrane vrijednosti trebaju za vrijednost prikazati `&mdash;`.

---

Kod polja "Toppings" onemogućiti izbor novih opcija ukoliko se odabralo 6 opcija ukupno.

Izbor novih opcija onemogućiti tako da se doda `disabled` atribut na sve elemente unosa, osim elemenata unosa koji su već označeni (`checked`) kako bi se isti moglo odznačiti.
