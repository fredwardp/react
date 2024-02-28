import "./Stars.css";

const Stars = (props) => {
  return (
    <div className="stars_div">
      <img
        src={props.rating >= 1 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 2 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 3 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 4 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 5 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 6 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 7 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 8 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating >= 9 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
      <img
        src={props.rating == 10 ? "./img/star.svg" : "./img/star-outline.svg"}
        alt=""
      />
    </div>
  );
};

export default Stars;
