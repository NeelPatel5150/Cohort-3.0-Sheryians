import React, { useState } from "react";

const Form = () => {
  const [formdata, formData] = useState({name:""});

  let handleChange = (e) => {
    let { name, value } = e.target;
    formData({ ...formdata, [name]: value });
  }

  console.log(formdata);

  return (
    <div>
      <form className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <input
          type="text"
            name="name"
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-4 py-2 mb-4"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded px-4 py-2 mb-4"
          onChange={handleChange}
        />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
