import React from "react";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
}

export function BackgroundCard({ title, children }: BackgroundCardProps) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-[#33A7BF] rounded-xl">
      <div>
        <h2 className="text-center text-white text-2xl font-bold">
          {title}
        </h2>
        <p className="my-2 text-base w-full text-center text-white font-normal">
          {children}
        </p>
      </div>
    </div>
  );
}

export default BackgroundCard;
