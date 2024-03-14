import { useLogin } from "./AuthContext";

function AuthButton() {
  const { isLogin, login, logout } = useLogin();
  return (
    <>
      <button onClick={isLogin ? logout : login}>
        {isLogin ? 'ログアウト' : 'ログイン'}
      </button>
    </>
  );
}

export default AuthButton;
