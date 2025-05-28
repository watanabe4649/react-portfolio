import { useEffect, useState } from 'react';

const UseEffectCheck = () => {
  // 現在時刻の同期をエフェクトで行う
  const [dateTime, setDateTime] = useState(() => new Date());

  // 現在時刻の同期はエフェクトとして実装する
  // 1000ミリ秒（1秒）ごとにコールバック関数を実行するように設定
  // setInterval(): タイマーを開始して、繰り返し実行する名前が固定されたJavaScriptの関数
  useEffect(() => {
    const seconds = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // ここがクリーンアップ関数
    // コンポーネントが画面から完全に消えるときだけ実行される関数（他の画面に切り替わる際実行される）
    return () => {
      // clearIntervalはタイマーを停止するという具体的な機能を持つ、名前が固定されたJavaScriptの関数
      clearInterval(seconds);
    };
  }, []);

  return (
    <div>
      <h1>UseEffectの動作確認(第二引数が空配列の場合)</h1>
      <div>{dateTime.toLocaleString()}</div>
    </div>
  );
};

export default UseEffectCheck;

// useEffect(() => {
//   // ここに副作用のコードを書く

//   return () => {
//     // ここがクリーンアップ関数
//   };
// });

// 第二引数に空配列を渡す場合
// 副作用は初回レンダリングが行われた時のみ実行されます。
