import { createContext, useState } from "react";

// consumer
const MyContext = createContext();

//provider
const MyProvider = ({ children }) => {
    // console.log("provider rendering...")
  const [count, setCount] = useState(0);

    return <MyContext.Provider value={{ count, setCount }} >{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };