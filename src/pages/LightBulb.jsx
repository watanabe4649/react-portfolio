import { useContext } from 'react';
import LightContext from './LightContext';

function LightBulb() {
  // 4. 「箱」の中の電気の状態を見る
  const isLightOn = useContext(LightContext);

  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: isLightOn ? 'yellow' : 'gray',
        border: '1px solid black',
        marginTop: 10,
      }}
    ></div>
  );
}

export default LightBulb;
