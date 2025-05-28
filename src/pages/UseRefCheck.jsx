import { useState, useRef } from 'react';

const UseRefCheck = () => {
  const [text, setText] = useState('');
  const inputEl = useRef(null);

  const handleClick = () => {
    setText(inputEl.current.value);
  };

  return (
    <div>
      <h1>UseRefの動作確認</h1>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>set text</button>
      <p>テキスト : {text}</p>
    </div>
  );
};

export default UseRefCheck;

// useRef書き方
// const 変数 = useRef(初期値);
// useRefは、レンダリングのたびに値を保持したい場合に利用されます。
