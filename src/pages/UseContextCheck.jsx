import React, { createContext, useState } from 'react';
import LightBulb from './LightBulb';
import LightContext from './LightContext';

const UseContextCheck = () => {
  // 1. 電気の状態を入れる「箱」を作る

  // 2. スイッチの状態と、状態を切り替える関数を作る
  const [isOn, setIsOn] = useState(false);
  const toggleLight = () => setIsOn(!isOn);
  return (
    <div>
      <h1>UseContextの動作確認</h1>
      {/* 3. スイッチの状態を「箱」に入れて、下のコンポーネントに共有する */}
      <LightContext.Provider value={isOn}>
        <button onClick={toggleLight}>電気を {isOn ? '消す' : 'つける'}</button>
        <LightBulb /> {/* 電気スタンド */}
      </LightContext.Provider>
    </div>
  );
};

export default UseContextCheck;
