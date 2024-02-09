import React, { useState } from "react";
import AddContact from "./AddContact";
import List from "./List";

const App = () => {
  const [kontakti, setKontakti] = useState([]);
  const dodajFunkc = (noviKontakt) => {
    setKontakti([...kontakti, noviKontakt]);
  };

  const zaBrisanje = (index) => {
    const minusKontakt = [...kontakti];
    minusKontakt.splice(index, 1);
    setKontakti(minusKontakt);
  };
  return (
    <div>
      <h1>aplikacija za unos kontakata i pregled unesenih</h1>
      <AddContact dodajKontakt={dodajFunkc} />
      <List kontakti={kontakti} obrisiKontakt={zaBrisanje} />
    </div>
  );
};

export default App;
