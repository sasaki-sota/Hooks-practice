# useReducerについて
srcの中にreducersというフォルダを作成  
**useReducerを使用するファイルで`import reducer from './reducer/~'`と記述しておきインポートしておく**  
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
	})  

## reducerについて
##### 基本的な書き方  
	const hoge = (state, action) => {  
	switch (action.type) {  
	case'CREATE_HOGE':  
	その時に実行される処理を記述~  
	default: どれケースにも当てはまらないときの処理  
	}}
### actionの中身
	action = {  
	type: ここでswitch文で利用するタイプを記述する必要がある  
	}  

## mapメソッド
	state.map((event, index) => (
        	                <tr key={index}>
                	            <td>{event.id}</td>
                        	    <td>{event.title}</td>
                         	   <td>{event.body}</td>
                           	 <td><button type='button' className='btn btn-danger'>削除</button></td>
                      	  </tr>
                  	  ))  
とあったときにindexは**配列要素の数値インデックス**とユニークな数値となる

## filterメソッド
	var manyHoge = ['souta','sasaki','overlade','very','cool','beautiful]  
	const result  = manyHoge.filter(hoge => hoge.length > 6)  
	上記のように配列の文字が6文字以上のものに絞る  
	console.log(result)  
**配列の中身を限定できるようになる。** 
#### disablead属性
この属性を設定するとボタンの反応が無効化される  
**真偽値を設定すること入力していないでクリックするのを防ぐことができるようになる**  
`const unCreatable = title === '' || body === ''`  
タイトルかボディーどちらかがからである  

#### comfirm属性の応用
`const result = window.confirm('注意書き')`  
と記述することで削除の前にワンクッション作れる(**めっちゃ便利**)  

#### App.jsからstate={state}のように渡すときはcomponet側でもpropsの部分で{}でくくることが必要
