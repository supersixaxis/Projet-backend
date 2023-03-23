import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { set } from "mongoose";

export const apiContext = createContext();

function Api(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/post')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <apiContext.Provider value={{ ...data, setData }}>
      {props.children}
    </apiContext.Provider>
  );
}

export default Api;
