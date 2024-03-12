import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MemoList from './MemoList';
import AddButton from './AddButton';
import MemoEdit from './MemoEdit';

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  function handleMemoAdd() {
    const newMemos = [...memos, { id: uuidv4(), content: '新規メモ' }];
    setMemos(newMemos);
    setSelectedMemo(newMemos[newMemos.length - 1]);
  }

  function handleMemoEdit(SaveMemo) {
    const newMemos = [...memos];
    selectedMemo.content = SaveMemo.content;
    setMemos(newMemos);
    setSelectedMemo(null);
  }

  function handleMemoDelete(DeleteMemo) {
    const newMemos = [...memos];
    const updateMemos = newMemos.filter((memo) => memo.id !== DeleteMemo.id)
    setMemos(updateMemos);
    setSelectedMemo(null);
  }

  function handleMemoSelect(memo) {
    setSelectedMemo(memo);
  }

  return (
    <>
      <MemoList memos={memos} onMemoSelect={handleMemoSelect} />
      <AddButton onMemoAdd={handleMemoAdd} />
      {  selectedMemo !== null &&(
        <MemoEdit
          onMemoEdit={handleMemoEdit}
          onMemoDelete={handleMemoDelete}
          memo={selectedMemo}
        />
        )
      }
    </> 
  );
}

export default App;
