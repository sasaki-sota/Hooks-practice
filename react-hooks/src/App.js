import React, { useState } from 'react';

const App = (props) => {

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const reset = () => {
        setPrice(props.price)
        setName(props.name)
    }

    return (
        <React.Fragment>
            <p>現在の{name}は、{price}円です。</p>
            <button onClick={() => setPrice(price + 1)}>+1</button>
            <button onClick={() => setPrice(price - 1)}>-1</button>
            <button onClick={reset}>reset</button>

            {/*target.value = onChangeが発動するときのinputの文字*/}
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
        </React.Fragment>
    )
};

// Appのpropsの値
App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
