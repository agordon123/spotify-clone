"use client";


import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";


import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useAuthModal";




const Library = () => {
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  const { user } = useUser();
  const onClick = () => {
    console.log(user);
    if (!user) {
      console.log(!user);
      return authModal.onOpen();
    }
   return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>

        <div className="flex flex-col gap-y-2 mt-4 px-3">
          <AiOutlinePlus
            onClick={onClick}
            size={26}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Library;
