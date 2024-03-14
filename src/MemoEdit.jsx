import { useState } from "react";
import { useLogin } from "./AuthContext";

function MemoEdit({ onMemoEdit, onMemoDelete, memo }) {
  const [memoContent, setMemoContent] = useState(memo.content);
  const { isLogin } = useLogin();

  function handleEditMemo() {
    onMemoEdit({ ...memo, content: memoContent })
  }

  return (
    <>
      <textarea
        value={memoContent}
        onChange={(e) => setMemoContent(e.target.value)}
        readOnly={!isLogin}
      />
      {isLogin && (
        <div>
          <button onClick={handleEditMemo}>編集</button>
          <button onClick={() => onMemoDelete(memo)}>削除</button>
        </div>
      )}
    </>
  )
}

export default MemoEdit;
