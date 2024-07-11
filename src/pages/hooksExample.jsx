import { Fragment } from "react";

const hooksExample = () => {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);
  // console.log(inputRef);
  useEffect(() => {
    return () => {
      console.log("CleanUp: ", counter);
    };
  });

  return{
  <Fragment>
    <div>
      <button onClick={() => setCounter((prevCounter) => (prevCounter += 1))}>
        +
      </button>
      {counter}
      <button onClick={() => setCounter((prevCounter) => (prevCounter -= 1))}>
        -
      </button>
    </div>
    <input ref={inputRef} />
    <button
      onClick={() =>
        (inputRef.current.value = inputRef.current.value == "" ? "clicked" : "")
      }
    >
      click
    </button>
  </Fragment>;
}};
