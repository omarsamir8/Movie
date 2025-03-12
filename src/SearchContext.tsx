import React, { createContext, useContext, useState } from "react";

// تحديد النوع الخاص بالقيم المخزنة في `context`
interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

// إنشاء `context`
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// مزود `SearchProvider` لتغليف التطبيق وتوفير القيم
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

// هوك مخصص لاستهلاك `context`
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
