import React from "react";

const Home = React.memo(() => {
    console.log("Home rendereding...");
    return <div>
      <h1>Home</h1>
   
    </div>;
});

export default Home;

