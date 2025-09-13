import { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  Action?: ReactNode;
}

function SectionTitle({ title, Action }: SectionTitleProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-xl font-semibold text-[#272727]">
        {title}
      </h1>

      {Action && Action}
    </div>
  )
}

export default SectionTitle;
