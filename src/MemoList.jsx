function MemoList({memos, onMemoSelect}) {
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onMemoSelect(memo)}>{memo.content}</li>
        ))}
      </ul>
    </>
  );
}

export default MemoList;
