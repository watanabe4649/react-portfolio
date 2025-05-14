import { useMemo, useState } from 'react';

const UseMemoCheck = () => {
  const [price, setPrice] = useState(1000);
  const [taxRate, setTaxRate] = useState(0.1);

  // 税込価格を計算する関数
  const calculateTotalPrice = (price, taxRate) => {
    console.log('税込価格を計算中...');
    return price * (1 + taxRate);
  };

  // useMemoで税込価格をメモ化
  const totalPrice = useMemo(
    () => calculateTotalPrice(price, taxRate),
    // useMemo が監視する変数price, taxRate。値が変わると再度計算される
    [price, taxRate]
  );

  return (
    <div>
      <h1>UseMemoの動作確認</h1>
      <p>
        商品の値段: {price}円{' '}
        <button onClick={() => setPrice(price + 100)}>値段を上げる</button>
      </p>
      <p>
        税率: {taxRate * 100}%{' '}
        <button onClick={() => setTaxRate(taxRate + 0.01)}>税率を上げる</button>
      </p>
      <p>税込価格: {totalPrice}円</p>
    </div>
  );
};

export default UseMemoCheck;
