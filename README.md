# useReducerについて
srcの中にreducersというフォルダを作成  
## reducerについて
**基本的な書き方**  
	const hoge = (state, action) => {  
	switch (action.type) {  
	case 'CREATE_HOGE':  
	その時に実行される処理を記述~  
	defalt:  
	どれも当てはまらないときの処理  

### actionの中身
	action = {  
	type: ここでswitch文で利用するタイプを記述する必要がある  
	}  

