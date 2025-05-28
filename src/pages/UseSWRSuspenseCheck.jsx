import useSWR from 'swr';
import { Suspense, useState, useEffect } from 'react';

function getWeather(key) {
    // keyはuseSWR()の第１引数で渡されたURL
    return fetch(key).then((res) => {
        if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });
}

function UseSWRSuspenseCheck() {
  const [shouldError, setShouldError] = useState(false);

  // SWRでデータをフェッチ
  const { data, error, isLoading } = useSWR(
    'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json',
    getWeather,
    { suspense: true } // ここがポイント！
  );

  // shouldErrorがtrueになったらエラーをスロー
  // useEffectを使うことで、レンダー中に直接throwするのを避ける
  useEffect(() => {
    if (shouldError) {
      throw new Error('ボタンクリックによる意図的なエラー！');
    }
  }, [shouldError]);


  const handleClick = () => {
    setShouldError(true); // ボタンがクリックされたらエラー状態をセット
  };

  return (
    <div>
      <ul>
        {data.targetArea}
        <p>発表時刻: {new Date(data.reportDatetime).toLocaleString()}</p>
        <p>天気概況: {data.text}</p>
        <button onClick={handleClick}>エラーを発生させる</button>
      </ul>
    </div>
  );
}

export default UseSWRSuspenseCheck;