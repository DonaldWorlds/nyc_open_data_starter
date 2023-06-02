import React from "react";

export default function Test() {
  const [count, setCount] = React.useState(1);  // at the beginning defualt variable is 1
  const [title, setTitle] = React.useState("");

  React.useEffect(() => { //at the end 
    console.log(process.env.REACT_APP_KEY);
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      .then((json) => setTitle(json.title));
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h4
        style={{
          marginTop: "1rem",
        }}
      >
        {title}
      </h4>
    </div>
  );
}

/** 
 * we useState to set it useEffect to get it put it in json to use it and then place 
 * 
*/
