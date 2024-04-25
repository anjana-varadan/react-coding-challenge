import React, { createContext, useState } from 'react';

const PageContext = createContext({ page: 0, setPage: ((_: number) => {}) });

// Create a provider component
export const PageProvider = ({ children }:any) => {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

// Custom hook to consume the context
export const usePageContext = () => {
  return React.useContext(PageContext);
};

export default PageContext;
