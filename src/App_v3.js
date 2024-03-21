import { useEffect, useState } from "react";

/* function Hello() {
    useEffect(() => {
        console.log("created :)");
        return () => console.log("destroyed :(");
    }, []);
    return <h1>Hello</h1>;
} */

/* function Hello() {
    function byeFn() {
        console.log("destroyed :(");
    }
    function hiFn() {
        console.log("created :)");
        return byeFn;
    }
    useEffect((hiFn), []);
    return <h1>Hello</h1>;
} */

function Hello() {
  // 익명 함수를 주로 사용함
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    /* useEffect(function () {
        console.log("hi :)");
        return function () {
            console.log("bye :(");
        };
    }); */
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
