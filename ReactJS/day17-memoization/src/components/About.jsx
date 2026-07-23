import React from "react";

const About = ({ greet }) => {
    greet();
    console.log("About rendereding...");
  return <div>About</div>;
};

export default React.memo(About);

