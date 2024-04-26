import { auth } from "fbase";

const user = auth.currentUser;

export default function PreMy() {
  return (
    <>
      <>{user?.displayName}</>
    </>
  );
}
