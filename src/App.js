import { useEffect, useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((prev) => prev + 1);
    console.log("I run all the time");
    const iRunOnlyOnce = () => {
        console.log("I run only once!");
    };
    useEffect(iRunOnlyOnce, []);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
