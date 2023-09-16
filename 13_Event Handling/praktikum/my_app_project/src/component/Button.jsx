import React from "react";

function Button({onClick}) {
  //   const [state, setState] = useState(0);

  // const randomNumber = () => {
    // console.log(Math.random());
  // };
  return (
    <div>
      <button type="button" onClick={onClick}>
        translate
      </button>

    </div>
  );
}

export default Button;
