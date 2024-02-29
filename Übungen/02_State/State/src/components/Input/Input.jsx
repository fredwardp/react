import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section>
      <form action="">
        <input
          onChange={(event) => setVorname(event.target.value)}
          value={vorname}
          type="text"
        />
        <input
          onChange={(event) => setNachname(event.target.value)}
          value={nachname}
          type="text"
        />
        <input onChange={(event) => setEmail(event.target.value)} type="text" />
        <p>Vorname:{vorname}</p>
        <p>Nachname:{nachname}</p>
        <p>Email:{email}</p>
      </form>
    </section>
  );
};

export default Input;
