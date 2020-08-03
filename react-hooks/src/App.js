import React, { useState } from 'react';

const App = (props) => {

    const [state, setState] = useState(props)

    const reset = () => setState(props)

    return (
        <React.Fragment>
            <p>現在の{state.name}は、{state.price}円です。</p>
            <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
            <button onClick={reset}>reset</button>
            {/*target.value = onChangeが発動するときのinputの文字*/}
            <input type="text" value={state.name} onChange={event => setState({...state, name: event.target.value})}/>
        </React.Fragment>
    )
};

// Appのpropsの値
App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
