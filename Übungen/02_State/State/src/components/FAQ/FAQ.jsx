import "./FAQ.css";
import { useState } from "react";

const FAQ = () => {
  const [appearence, setAppearence] = useState("false");

  return (
    <div className="all_wrapper">
      <section className="faq">
        <div className="wrapper">
          <h3>Why is React great?</h3>{" "}
          <div
            onClick={() => setAppearence((appearence) => !appearence)}
            className="grey_square"
          >
            <p>-</p>
          </div>
        </div>
        <div className={appearence ? "appear" : ""}>
          <p>Fast Learning Curve</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
