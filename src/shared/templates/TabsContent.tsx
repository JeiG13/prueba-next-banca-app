"use client";
import React, { useState, ReactNode } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export interface ITabItem {
  label: string;
  content: ReactNode;
}

interface TabsContentProps {
  tabs: ITabItem[];
}

function TabsContent({ tabs }: TabsContentProps) {
    const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex mb-4">
        <div className="flex space-x-1 bg-gray-100 rounded-full">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setSelectedTab(index)}
              className={`
                relative cursor-pointer text-sm font-medium px-6 py-3 rounded-sm transition
                ${selectedTab === index ? "text-[#3B8668] bg-[#EDF5F2]" : "text-[#8D918D]"}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div>{tabs[selectedTab].content}</div>
    </div>
  );
}

export default TabsContent;
