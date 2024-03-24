import { ReactNode, useState } from 'react';

interface Props {
  tabs: TabContentType[];
  className?: string;
}

export interface TabContentType {
  label: string;
  children: ReactNode;
  id: string;
}

export function Tabs({ tabs, className }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabs = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.children;

  return (
    <>
      <div
        className={`${className} border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 `}
      >
        <ul className="-mb-px flex flex-wrap">
          {tabs.map(tab => {
            return (
              <li
                className="me-2 cursor-pointer"
                key={tab.id}
                onClick={() => handleTabs(tab.id)}
              >
                <p
                  className={
                    activeTab === tab.id
                      ? TABS_VARIANTS['active']
                      : TABS_VARIANTS['inactive']
                  }
                >
                  {tab.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-2">{activeTabContent}</div>
    </>
  );
}

const TABS_VARIANTS = {
  active:
    'inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500',
  inactive:
    'inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
};
