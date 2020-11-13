import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
        <h1>
          hi {props.name} aka {props.aka} so my class is {props.myclass}
        </h1>
        {props.children}

    </div>

  );
};

export default Greet;
