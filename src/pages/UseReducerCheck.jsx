import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const UseReducerCheck = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>UseReducerの動作確認</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <div className="counter-count">{count}</div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default UseReducerCheck;

// const [状態, dispatch] = useReducer(
//   状態更新関数,
//   初期状態,
//   初期化関数
// );

// function 状態更新関数(
//   現在の状態,
//   アクション
// ) {
//   switch (アクション.type) {
//     case "アクションの種類":
//       // アクションの種類に応じた状態更新の処理
//       return 新しい状態;
//     default:
//       return 現在の状態;
//   }
// }

// dispatch(/* ここに変更内容を書く */);
