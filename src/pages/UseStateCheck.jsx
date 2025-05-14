import { useState } from 'react';

const UseStateCheck = () => {
  // const { count, setCount } = props;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseStateの動作確認</h1>
      <p>{`${count}回クリックされました`}</p>
      <button onClick={() => setCount(count + 1)} type="button">
        {/* <button
        onClick={() => {
          setCount;
        }}
        type="button"
      > */}
        ボタン
      </button>
    </div>
  );
};

export default UseStateCheck;
