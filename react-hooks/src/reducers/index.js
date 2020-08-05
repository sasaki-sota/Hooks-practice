// []は未定義だった場合に適用
const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = {title: action.title, body: action.body};
            const length = state.length
            // 配列の中身が空の場合idの１から始まる
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case 'DELETE_EVENT':
            //アクションで押されたものを指定しているので残って欲しくないものに絞る
            return state.filter(event => event.id !== action.id)
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}

export default events;