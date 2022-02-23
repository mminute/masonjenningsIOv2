import { useState } from 'react';

function TabbedDataController({ children, selections }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentSelection = selections[activeTabIndex];

  const handleChangeTab = ({ activeTabIndex, event }) => {
    event.preventDefault();
    window.scrollTo(0,0);
    setActiveTabIndex(activeTabIndex);
  };

  return children({ activeTabIndex, currentSelection, handleChangeTab });
}

export default TabbedDataController;
