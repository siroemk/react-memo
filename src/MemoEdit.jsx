import { useState } from "react";

function MemoEdit({ onMemoEdit, onMemoDelete, memo }) {
  const [memoContent, setMemoContent] = useState(memo.content);

  function handleEditMemo() {
    onMemoEdit({ ...memo, content: memoContent })
  }

  return (
    <>
      <textarea value={memoContent} onChange={(e) => setMemoContent(e.target.value)}  />
      <div>
        <button onClick={handleEditMemo}>編集</button>
        <button onClick={() => onMemoDelete(memo)}>削除</button>
      </div>
    </>
  )
}

export default MemoEdit;
