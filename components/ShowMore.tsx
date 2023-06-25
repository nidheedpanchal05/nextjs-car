"use client";
import { ShowMOreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";

// const ShowMore = ({ pageNumber, isNext }: ShowMOreProps) => {
const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMOreProps) => {
  // const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
    // const newPathName = updateSearchParams("limit", `${newLimit}`);
    // router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
