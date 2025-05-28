import useSWR from 'swr';

function getWeather(key) {
  // keyはuseSWR()の第１引数で渡されたURL
  return fetch(key).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });
}

function UseSWRCheck() {
  const { data, error, isLoading } = useSWR(
    'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json',
    getWeather
  );

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data.targetArea}
        <p>発表時刻: {new Date(data.reportDatetime).toLocaleString()}</p>
        <p>天気概況: {data.text}</p>
      </ul>
    </div>
  );
}

export default UseSWRCheck;

// fetchとは
// fetchはサーバーに情報を送ったり逆にサーバーから情報を取得する際に便利な関数

// thenとは
// 成功した時に次に何をするかを指定するためのメソッドが.thenです。

// catchとは
// .catch()を使うと、失敗した時の処理を指定できます

// useSWR基本的な書き方
// const { data, error } = useSWR(
//   キー,
//   データ取得関数,
//   オプション
// );

// data : 取得したデータが入る変数。
// error : エラーがあった場合にその内容が入る変数。
// キー : データを特定するためのもの。
// データ取得関数 : そのキーを使ってサーバーからデータを取得する関数。
// オプション : おまけ。データの保管方法やいつ新しい情報を取りに行くかなど設定できる。
