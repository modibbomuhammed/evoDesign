import React from "react";

import { TabsWrapper, Tab } from "./OrderStyles";

export const OrderTabs = (props: {
  tabs: string[];
  active: string;
  handleChange: (name: string) => void;
}) => {
  const { tabs, active } = props;

  const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as Element;
    props.handleChange(target.id);
  };

  return (
    <TabsWrapper>
      {tabs.map((name = "", index) => (
        <Tab
          key={index}
          active={name === active}
          id={name}
          onClick={handleTabClick}
        >
          {name.toUpperCase().replaceAll("_", " ")}
        </Tab>
      ))}
    </TabsWrapper>
  );
};
