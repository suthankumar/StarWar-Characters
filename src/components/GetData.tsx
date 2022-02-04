import React, { useState, useEffect } from "react";
import axios from "axios";

interface PropType {
  url: string;
  keyName: string;
}

function GetData({ url, keyName }: PropType) {
  const [text, setText] = useState("");

  //Run onces to get the specific data
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setText(data[keyName]);
    };
    fetchData();
  }, []);

  return <div> {text} </div>;
}

export default GetData;
