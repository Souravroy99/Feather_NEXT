import { Suspense } from "react";
import LoginClient from "../../../../components/LoginClient/LoginClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginClient />
    </Suspense>
  );
}
