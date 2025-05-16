import React, { useState, useCallback } from 'react';

const UseCallbackCheck = () => {
  const [countNoDep, setCountNoDep] = useState(0);
  const [countWithDep, setCountWithDep] = useState(0);
  const [step, setStep] = useState(1);

  const incrementNoDep = useCallback(() => {
    setCountNoDep((c) => c + 1); //c = countNoDep
  }, []);

  const incrementWithDep = useCallback(() => {
    setCountWithDep((c) => c + step); //c = countWithDep
  }, [step]);

  return (
    <div>
      <h1>UseCallbackの動作確認</h1>
      <div>
        <p>カウント (依存なし): {countNoDep}</p>
        <button onClick={incrementNoDep}>+1 (依存なし)</button>
      </div>

      <div>
        <p>
          カウント (依存あり, step: {step}): {countWithDep}
        </p>
        <button onClick={incrementWithDep}>+{step} (依存あり)</button>
      </div>

      <div>
        <button onClick={() => setStep(1)}>ステップ 1</button>
        <button onClick={() => setStep(5)}>ステップ 5</button>
      </div>
    </div>
  );
};

export default UseCallbackCheck;
