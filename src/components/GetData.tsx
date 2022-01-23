import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface PropType {
    url:string
    keyName:string
}

function GetData({url, keyName} : PropType) {
    const [text, setText] = useState('');
    useEffect(() => {
        // const res = await axios.get('/posts');
        //     const posts = res.data;
        axios.get(url)
            .then((res:any) => {
            const {data} = res;
            setText(data[keyName]);
        })
      },[]);

  return (
    <div>
            {text}
    </div>
  );
}

export default GetData;
