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
    let isMounted = true;
    const fetchData = async () => {
      const { data } = await axios.get(url);
      if (isMounted) {
        setText(data[keyName]);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return <div> {text} </div>;
}

export default GetData;
