"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        bg-violet-700 
        text-white 
        rounded-3xl
        px-4 
        py-2 
        w-16 
        h-7
        flex 
        items-center 
        justify-center 
        cursor-pointer
        hover:bg-violet-800
        transition
      "
    >
      Back
    </button>
  );
};

export default BackButton;
