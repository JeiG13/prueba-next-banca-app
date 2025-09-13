import { ReactNode } from "react";

type MountedTabProps = {
  children: ReactNode;
  value: number;
  index: number;
};

function MountedTabPanel({ children, value, index }: MountedTabProps) {
  return (
    <div className={value === index ? "flex w-full" : "hidden"}>
      <div className="flex w-full justify-center">{children}</div>
    </div>
  )
}

export default MountedTabPanel;
