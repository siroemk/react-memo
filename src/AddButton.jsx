import { useLogin } from "./AuthContext";

function AddButton({ onMemoAdd }) {
  const { isLogin } = useLogin();
  return (
    <>
      {isLogin && <button onClick={onMemoAdd}>+</button>}
    </>
  );
}

export default AddButton;
