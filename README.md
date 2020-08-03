# useStateについて
**基本的な記述の仕方**  
`const [名前, set名前] = useState(初期の値)`  
↑例として  
`const [hoge, setHoge] = useState(0)`  
**動きとして**  
`hoge = 0`  
`setHoge = 関数(function)`  
となる。

## 使用例
**1足したいとき**  
`const increment = () => setHoge(hoge + 1)`  
と記述するのが一般的である(クラスコンポーネントのsetstateのような書き方)。  
また中に関数を記述することも可能  
`const increment = () => setHoge(previousHoge => previousHoge + 1)`  
と表す。

### stateのみでの書き方
**setStateを書きたいとき**  
`const [state, setState] = useState(props)`  
props = オブジェクトで入っている  
`const {name, price} = state`  
と記述することで  
**{state.name} => {name}に短縮することができるようになる**

# useEffectについて
**jsxのレンダリングの後に呼び出される**  
##### 基本的な記述の仕方
	useEffect(() => {  
	        console.log('This is like componentDidMount')  
	    }, []);  
となる。
##### 名前の場合のみ起動させたいとき
	useEffect(() => {  
	        console.log('This callback is name only')  
	    }, [name]);  
と**第二引数を設定することで実行することができるようになる**
