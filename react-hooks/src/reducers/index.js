import React from 'react';

// []は未定義だった場合に適用
const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = {title: action.title, body: action.body};
            const length = state.length
            // 配列の中身が空かどうか
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case 'DELETE_EVENT':
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}

export default events;