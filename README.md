# useReducerについて
srcの中にreducersというフォルダを作成 
**useReducerを使用するファイルで`import reducer from './reducer/~'と記述しておきインポートしておく`**  
###記述方法
`const [state, dispatch] = useReducer(reducer, initialArg, init);`  
第一引数にreducerを渡す  
第二引数にデフォルトの状態をどうしたいのか？  
第三引数に初期化時に必要なもの  
**inputタグにはvalueを与えることが多い**  
`<input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />`  
**引数.target.value**を記述することで状態変化をすることができるようになる  
##### dispatchを記述することでreducer側のactionに引数を渡す
	dispatch({  
	type: CREATE_HOGE,  
	title,  
	body  
	});  

## reducerについて
**基本的な書き方**  
	`const hoge = (state, action) => {`  
	`switch (action.type) {`  
	`case'CREATE_HOGE':`  
	`その時に実行される処理を記述~`  
	`default: どれケースにも当てはまらないときの処理`  
	`}}`
### actionの中身
	action = {  
	type: ここでswitch文で利用するタイプを記述する必要がある  
	}  

