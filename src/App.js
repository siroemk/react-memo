import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemoId, setSelectedMemoId] = useState(null);
  const [memoContent, setMemoContent] = useState('');

  function handleMemoAdd() {
    const newMemos = [...memos, { id: uuidv4(), content: '新規メモ' }];
    setSelectedMemoId(newMemos[newMemos.length - 1].id);
    setMemoContent(newMemos[newMemos.length - 1].content);
    setMemos(newMemos);
  }

  function handleMemoEdit(id, content) {
    const newMemos = [...memos];
    const updateMemo = newMemos.find((memo) => memo.id === id);
    updateMemo.content = content;
    setMemos(newMemos);
  }

  function handleMemoDelete(id) {
    const newMemos = [...memos];
    const updateMemos = newMemos.filter((memo) => memo.id !== id)
    setMemos(updateMemos);
    setSelectedMemoId(null);
  }

  function handleMemoSelect(id) {
    const selectedMemo = memos.find((memo) => memo.id === id);
    setMemoContent(selectedMemo.content);
    setSelectedMemoId(id);
  }

  return (
    <>   
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => handleMemoSelect(memo.id)}>{memo.content}</li>
        ))}
      </ul>
      <button onClick={handleMemoAdd}>+</button>

      { selectedMemoId !== null&&(
        <>
          <textarea value={memoContent} onChange={(e) => setMemoContent(e.target.value)}  />
          <div>
            <button onClick={() => handleMemoEdit(selectedMemoId, memoContent)}>編集</button>
            <button onClick={() => handleMemoDelete(selectedMemoId)}>削除</button>
          </div>
        </>
        )
      }
    </> 
  );
}

export default App;
