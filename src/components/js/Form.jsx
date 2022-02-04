import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/form.css";
const Form = () => {
  //   title
  const [Title, setTitle] = useState("");
  // body
  const [Body, setBody] = useState("");
  // username
  const [username, setUsername] = useState([]);
  // newdata
  const [allentry, setAllentry] = useState([]);
  const [Id, setId] = useState([]);
  // onclick on submit
  const submit = (e) => {
    // removing auto refresh on submit
    e.preventDefault();
    // console.log(e);
    const Newentry = { id: Id, title: Title, body: Body };
    setAllentry([...allentry, Newentry]);
    post();

  };

  const post=()=>{
    allentry.map((val)=>(
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      userId:val.id,
      title:val.title,
      body:val.body
    }).then((result)=>{
      console.log(result.data)
    })
    ))



  }
  // getting info from below link
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // passing url data to usestate
      setUsername(
        request.data.map((users) => ({ name: users.name, id: users.id }))
      );
      return request;
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <form onSubmit={submit}>
          <div className="select">
            <label>Please select a username:-</label>
            <select name="" onChange={(e) => setId(e.target.value)}>
              {username?.map((val) => (
                <option value={val.id}>{val.name}</option>
              ))}
            </select>
          </div>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              autoComplete="off"
              name="title"
            />
          </div>
          <div className="body">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              onChange={(e) => setBody(e.target.value)}
              id="body"
              autoComplete="off"
              name="body"
            />
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
