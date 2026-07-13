import React,{useEffect} from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState([]);
  console.log(data);
  
  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
   
    setData(res.data);
    
  }
 
  useEffect(() => {
    getData();
  }, []);

  
  

  return (
    <div>
      
    <h1>Context API</h1>
    </div>
  );
};

export default App;
