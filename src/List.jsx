import React from "react";

const List = ({ kontakti, obrisiKontakt }) => {
  return (
    <div>
      <h2>Lista kontakta</h2>
      <ul>
        {kontakti.map((item, index) => (
          <li key={index}>
            Ime: {item.ime}, Broj telefona: {item.broj}{" "}
            <button onClick={() => obrisiKontakt(index)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
