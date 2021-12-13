import "./styles.css";

export default function App() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let result = arr.map((elem) => {
    console.log(elem);
  });
  return <div className="App">{result}</div>;
}
