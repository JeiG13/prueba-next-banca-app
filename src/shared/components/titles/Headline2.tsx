import { ReactNode } from "react";

type Headline2Props = {
  title: string;
  Action?: ReactNode;
}

function Headline2({ title, Action }: Headline2Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-xl font-semibold text-[#272727]">
        {title}
      </h1>

      {Action && Action}
    </div>
  )
}

export default Headline2;
