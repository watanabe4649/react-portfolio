import { useEffect, useState } from 'react';

const UseEffectCheck = () => {
  // Good: 現在時刻の同期をエフェクトで行う
  const [dateTime, setDateTime] = useState(() => new Date());

  // 現在時刻の同期はエフェクトとして実装する
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // クリーンアップ
    return () => {
      clearInterval(id);
    };
  }, []);
  // const { count, setCount } = props;
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseEffectの動作確認</h1>
      <div>{dateTime.toLocaleString()}</div>
    </div>
  );
};

export default UseEffectCheck;
