import { useEffect, useState } from 'react';

const UseEffectCheck2 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newMessage =
      count === 1
        ? '1回目です'
        : count === 2
        ? '2回目です'
        : count === 3
        ? '3回目です'
        : `${count}回目`;
    setMessage(newMessage);
  }, [count]); // [count] と書くと、count が変わったときだけ動く！

  const handleClick = () => {
    // ボタンが押されたら count を1増やす
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>UseEffect2の動作確認(第二引数に配列を渡した場合)</h1>
      <p>現在の数字: {count}</p>
      <p>メッセージ: {message}</p>
      <button onClick={handleClick}>数字を増やす！</button>
    </div>
  );
};

export default UseEffectCheck2;

// useEffect(() => {
//   // ここに副作用のコードを書く
// }, [依存する値]);

// 第二引数に配列を渡した場合
// 第二引数の配列内の要素に変更があった場合に副作用が実行されます。
