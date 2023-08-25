import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";

export function Syllabus() {
  if (!useVerifyUser()) return <Auth />;
  return <div className="grid place-items-center h-[80dvh] text-5xl">Syllabus</div>;
}
