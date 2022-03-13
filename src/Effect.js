import { useState, useEffect } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []); //react가 지켜볼게 아무것도 없으니까 처음 한 번만 실행, watching nobody
  //   console.log('Search for', keyword);
  useEffect(() => {
    //console.log("SEARCH FOR", keyword);
    if(keyword !== '' && keyword.length > 5){
        console.log("I ren when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
        console.log("I ren when 'Counter' changes.");
  }, [counter]);
  useEffect(() => {
        console.log("I ren when k&c changes.");
  }, [keyword , counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default Effect;
