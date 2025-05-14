import { produce } from 'immer';
import { useImmer } from 'use-immer';
import { useState } from 'react';

const UseImmerCheck = () => {
  const [person, setPerson] = useImmer({
    name: 'Yamada',
    work: {
      company: 'NTT',
    },
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingCompanyName, setIsEditingCompanyName] = useState(false);
  const [nameInput, setNameInput] = useState(person.name); // 入力フィールドの値を管理
  const [companyNameInput, setCompanyNameInput] = useState(person.name); // 入力フィールドの値を管理

  const handleChangeNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleChangeCompanyNameInput = (event) => {
    setCompanyNameInput(event.target.value);
  };

  const handleSaveName = () => {
    setIsEditingName(false);
    setPerson((draft) => {
      draft.name = nameInput;
    });
  };

  const handleSaveCompanyName = () => {
    setIsEditingCompanyName(false);
    setPerson((draft) => {
      draft.work.company = companyNameInput;
    });
  };

  const handleEditName = () => {
    setIsEditingName(true);
    setNameInput(person.name); // 編集開始時に現在の名前を入力フィールドに設定
  };

  const handleEditCompanyName = () => {
    setIsEditingCompanyName(true);
    setCompanyNameInput(person.work.company); // 編集開始時に現在の名前を入力フィールドに設定
  };

  return (
    <>
      <div>
        <h1>UseImmerの動作確認</h1>
        {isEditingName ? (
          <div>
            <input
              type="text"
              value={nameInput}
              onChange={handleChangeNameInput}
            />
            <button onClick={handleSaveName}>保存</button>
          </div>
        ) : (
          <p>名前: {person.name}</p>
        )}
        {isEditingCompanyName ? (
          <div>
            <input
              type="text"
              value={companyNameInput}
              onChange={handleChangeCompanyNameInput}
            />
            <button onClick={handleSaveCompanyName}>保存</button>
          </div>
        ) : (
          <p>会社: {person.work.company}</p>
        )}
        {!isEditingName && <button onClick={handleEditName}>名前を変更</button>}
        <button onClick={handleEditCompanyName}>会社名を変更</button>
      </div>
    </>
  );
};

export default UseImmerCheck;
