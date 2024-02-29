import "./Day-Night.css";
import { useState } from "react";

const DayNight = () => {
  const [changer, setChanger] = useState(true);

  return (
    <section className="day_night_section">
      <article className={changer ? "night" : ""}>
        <h1>{changer ? "Night" : "Day"}</h1>
        <button onClick={() => setChanger((changer) => !changer)}>
          {changer ? "Change to Day" : "Change to Night"}
        </button>
      </article>
    </section>
  );
};

export default DayNight;
