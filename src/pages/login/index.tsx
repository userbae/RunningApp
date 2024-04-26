import { signInWithGoogle } from "fbase";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div
      className="
    flex justify-center items-center min-h-dvh flex-col gap-7 text-xl"
    >
      <div className="text-3xl">Running App</div>
      <button
        onClick={signInWithGoogle}
        className="flex items-center rounded-md gap-2 p-6 border-2 hover:bg-gray-200 hover:border-white"
      >
        <FcGoogle />
        Google로 로그인
      </button>
    </div>
  );
}
