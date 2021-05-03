import React, { useState } from "react";

import { TabsWrapper, Tab } from "./OrderStyles";

export const OrderTabs = (props: { tabs: string[] }) => {
  const [tabs, setTabs] = useState(props.tabs);
  const [activeTab, setActiveTab] = useState(tabs[2]);
  const handleTabClick = (e: any) => {
    setActiveTab(e.target?.id);
  };
  return (
    <TabsWrapper>
      {tabs.map((name, index) => (
        <Tab
          key={index}
          active={name === activeTab}
          id={name}
          onClick={handleTabClick}
        >
          {name.toUpperCase()}
        </Tab>
      ))}
    </TabsWrapper>
  );
};
