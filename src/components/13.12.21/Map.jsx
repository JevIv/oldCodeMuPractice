export default function Map() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let result = arr.map((elem) => {
    console.log(elem);
    return elem.map((num) => {
      return num * num;
    });
  });

  return <div>{result}</div>;
}
