import axios from "axios";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
const Form = () => {
  // passing data from useeffect to setList usestate
  const [list, setList] = useState({});
  //   title
  const [title, setTitle] = useState("");
  // body
  const [body, setBody] = useState("");
  // user
  const [user, setUser] = useState({});

  // onclick on submit
  const submit = () => {};
  //
  const showList = () => {};
  // getting info from below link
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((respones) => {
      setList(respones.data.map((data) => ({ id: data.id, name: data.name })));
    });
  }, []);

  console.log(list);
  return (
    <>
      <div>
        <select name="list" id="" onChange={showList} options={list}>
            
        </select>
        <form>
          <input
            type="text"
            value={title}
            onChange={(userdata) => setTitle(userdata)}
          />
          <input
            type="text"
            value={body}
            onChange={(userdata) => setBody(userdata)}
          />
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
