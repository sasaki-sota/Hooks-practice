import React, { useEffect, useState } from 'react';

const App = (props) => {
    const [state, setState] = useState(props)
    const reset = () => setState(props)
    const {name, price} = state

    useEffect(() => {
        console.log('This is like componentDidMount or componentDidUpdate')
    });

    useEffect(() => {
        console.log('This is like componentDidMount')
    }, []);

    useEffect(() => {
        console.log('This callback is name only')
    }, [name]);

    return (
        <React.Fragment>
            <p>現在の{name}は、{price}円です。</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price - 1})}>-1</button>
            <button onClick={reset}>reset</button>
            {/*target.value = onChangeが発動するときのinputの文字*/}
            <input type="text" value={name} onChange={event => setState({...state, name: event.target.value})}/>
        </React.Fragment>
    )
};

// Appのpropsの値
App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
