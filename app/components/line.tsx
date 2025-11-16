import React from "react";

interface LineProps {
  text?: string | null;
}

const Line: React.FC<LineProps> = ({ text }) => {
  return (
    <div className="relative flex h-[30px] items-center">
      <div className="relative h-[1px] w-full bg-black"></div>

      {text && (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-10 text-center text-2xl font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

export default Line;
