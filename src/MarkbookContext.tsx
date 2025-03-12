import React, { createContext, useContext, useState, useEffect } from "react";
import { MovieDataType } from "../src/Assets/data";

// ✅ تعريف نوع الـ Context ليكون مصفوفة
type BookmarkContextType = {
  bookmarkData: MovieDataType[];
  setBookmarkData: React.Dispatch<React.SetStateAction<MovieDataType[]>>;
};

// ✅ إنشاء الـ Context
const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ✅ جلب البيانات من `localStorage` عند تشغيل التطبيق
  const [bookmarkData, setBookmarkData] = useState<MovieDataType[]>(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  // ✅ حفظ البيانات في `localStorage` عند كل تغيير
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkData));
  }, [bookmarkData]);

  return (
    <BookmarkContext.Provider value={{ bookmarkData, setBookmarkData }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// ✅ Hook لاستخدام `BookmarkContext`
export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmark must be used within a BookmarkProvider");
  }
  return context;
};
