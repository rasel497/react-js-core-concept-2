import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );

}

function Counter() {
  const [count, setCount] = useState(55);
  // easy way
  const increaseCount = () => setCount(count + 1);
  const dcreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // console.log(abc);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={dcreaseCount}>Decrease</button>
    </div>
  )
}


export default App;


// function App() {
//   const products = [
//     { name: 'laptop', price: 150000 },
//     { name: 'phone', price: 690000 },
//     { name: 'watch', price: 3000 },
//     { name: 'phone', price: 60000 },
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Products name={product.name} price={product.price}></Products>)
//       }
//       {/* <Products name="laptop" price='150000'></Products>
//       <Products name="phone" price='35000'></Products>
//       <Products name="watch" price='4500'></Products> */}
//     </div>
//   );
// }


// function Products(props) {
//   return (
//     <div className="product">
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }