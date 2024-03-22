import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [conins, setCoins] = useState([]);
    const [budget, setBudget] = useState();
    const onChange = (event) => {
        setBudget(event.target.value);
    };
    const reset = () => setBudget(0);

    //api 가져오기 위해 useEffect 사용
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    // 방법1
    /* return (
        <div>
            <h1>The Coins! ({conins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {conins.map((coin) => (
                    <li>
                        {coin.name} ({coin.symbol}):{" "}
                        <span style={{ color: "blue" }}>
                            ${coin.quotes.USD.price}
                        </span>{" "}
                        USD
                    </li>
                ))}
            </ul>
        </div>
    ); */

    // 방법2
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${conins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select>
                    {conins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}): $
                            {coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
            <label htmlFor="budget">Budget</label>
            <input type="number" placeholder="Enter your budget💲" />
        </div>
    );
}

export default App;
