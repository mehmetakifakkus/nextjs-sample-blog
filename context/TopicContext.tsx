// create a context for topics
import { createContext, useState } from 'react';

const TopicContext = createContext({ selectedTopic: null, setSelectedTopic: null })

// create a provider for components to consume and subscribe to changes
export const TopicProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(null);

  const returnObj = { selectedTopic, setSelectedTopic };

  return (
    <TopicContext.Provider value={returnObj}>
      {children}
    </TopicContext.Provider>
  );
};

export default TopicContext;

