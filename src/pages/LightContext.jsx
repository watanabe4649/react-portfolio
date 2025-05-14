import { createContext } from 'react';

// 1. 電気の状態を入れる「箱」を作る
const LightContext = createContext(false); // 初期値は必要に応じて設定

export default LightContext;
