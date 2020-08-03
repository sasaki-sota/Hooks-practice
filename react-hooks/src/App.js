import React, { useState } from 'react';

const App =() => {

    //0が初期値となる
    const [count, setCount] = useState(0)

    // countで0 setCountで関数が返ってくる
    // console.log({count});
    // console.log({setCount});

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const increment2 = () => setCount(previousCount => previousCount + 1)
    const decrement2 = () => setCount(previousCount => previousCount - 1)
    const reset = () => setCount(0);

    const double = () => setCount(count * 2);
    const half3 = () => setCount(previousCount => {
        return previousCount % 3 === 0 ? previousCount / 3 : previousCount
    });

  return (
      <React.Fragment>
          <div>count: {count}</div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          <div>
              <button onClick={increment2}>+1</button>
              <button onClick={decrement2}>-1</button>
          </div>
          <div>
              <button onClick={reset}>reset</button>
          </div>
          <div>
              <button onClick={double}>x2</button>
              <button onClick={half3}>3のときだけ割る</button>
          </div>
      </React.Fragment>
  );
}

export default App;
