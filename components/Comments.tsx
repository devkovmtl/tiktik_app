import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

import useAuthStore from "../store/authStore";
import NoResult from "./NoResult";

const Comments = () => {
  const [isPostingComment, setIsPostingComment] = useState(false);
  const { userProfile }: any = useAuthStore();
  const comments = [];

  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 b-[100px]">
      <div className="overflow-scroll lg:h-[475px]">
        {Comments.length ? (
          <div>videos</div>
        ) : (
          <NoResult text="No comments yet!" />
        )}
      </div>
      {userProfile && (
        <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form className="flex gap-4" onSubmit={() => {}}>
            <input
              value=""
              onChange={() => {}}
              className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
              placeholder="Add comment.."
            />
            <button className="text-md text-gray-400">
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;
