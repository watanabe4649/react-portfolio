import { useEffect, useState } from 'react';

const UseEffectCheck3 = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  // 依存配列なしの useEffect
  // コンポーネントがレンダーされるたびに実行される
  useEffect(() => {
    console.log('--- コンポーネントが再レンダーされました ---');
    console.log(`現在のカウント: ${count}`);
    console.log(`現在のテキスト: "${inputText}"`);

    // クリーンアップ関数は、次回のレンダー前に実行される
    return () => {
      console.log('前回のレンダーのクリーンアップを実行中...');
      // ここで何かクリーンアップが必要な場合は記述
      // 例: 外部リスナーの解除など（ただし、この例では不要）
    };
  }); // 第二引数がないため、すべてのレンダーで実行

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleChangeText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h1>UseEffectの動作確認(第二引数を指定しない場合)</h1>
      <p>ボタン押した回数:{count}</p>
      <p>入力した内容:{inputText}</p>
      <p>
        <input
          type="text"
          value={inputText}
          onChange={handleChangeText}
          placeholder="何か入力してください"
        />
      </p>
      <button onClick={handleClick}>ボタン</button>
    </div>
  );
};

export default UseEffectCheck3;

// 第二引数を指定しない場合
// 副作用は全てのレンダリングが終わった後に実行されます。
// useEffect(() => {
//   // 副作用
// });
