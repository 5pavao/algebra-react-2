import React, { useState } from "react";

const AddContact = ({ dodajKontakt }) => {
  const [ime, setIme] = useState("");
  const [broj, setBroj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dodajKontakt({ ime, broj });
    setIme("");
    setBroj("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="ime">Ime</label>
        <input
          type="text"
          id="ime"
          required
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <label for="broj">Broj telefona</label>
        <input
          type="number"
          id="broj"
          required
          value={broj}
          onChange={(e) => setBroj(e.target.value)}
        />
        <button>Unesi kontakt</button>
      </form>
    </div>
  );
};

export default AddContact;
