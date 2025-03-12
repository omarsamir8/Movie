import React, { useState } from "react";
import { useSearch } from "../../SearchContext";
import { useBookmark } from "../../MarkbookContext";
import tvseriesimg from "../../Assets/icons/icon-nav-tv-series.svg";
import bookmarkimg from "../../Assets/icons/icon-nav-bookmark.svg";

const BookmarkContainer: React.FC = () => {
  const { searchValue } = useSearch();
  const { bookmarkData, setBookmarkData } = useBookmark();
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // ✅ حالة للتنبيه

  // ✅ تصفية القائمة حسب البحث
  const filteredMovies = bookmarkData.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // ✅ دالة لحذف العنصر من الإشارات المرجعية مع إظهار تنبيه
  const handleRemoveBookmark = (itemId: string) => {
    const updatedBookmarks = bookmarkData.filter((movie) => movie.id !== itemId);
    setBookmarkData(updatedBookmarks);
    setAlertMessage("❌ تم حذف العنصر من الإشارات المرجعية!");

    // ✅ إخفاء التنبيه بعد 3 ثوانٍ
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  return (
    <div className="Bookmarkcontainer">
      <h2 style={{ color: "white", fontWeight: "bold", marginTop: "20px" }}>BookMark</h2>

      {/* ✅ تنبيه عند حذف العنصر */}
      {alertMessage && <div className="alert-box">{alertMessage}</div>}

      <div className="trendscontainer">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="trend">
            <img
              src={movie.thumbnail.trending?.large || movie.thumbnail.regular.large}
              alt={movie.title}
            />
            <div className="bookimage">
              <img
                onClick={() => handleRemoveBookmark(movie.id)}
                src={bookmarkimg}
                alt="bookmarkimage"
              />
            </div>
            <div className="tenddetails">
              <ul>
                <li>{movie.year}</li>
                <li>
                  <img src={tvseriesimg} alt="" /> {movie.category}
                </li>
                <li>{movie.rating}</li>
              </ul>
              <h5>{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkContainer;
