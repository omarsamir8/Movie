import React, { useEffect, useState } from "react";
import { MovieDataType, moviesData } from "../../Assets/data";
import tvseriesimg from "../../Assets/icons/icon-nav-tv-series.svg";
import bookmarkimg from "../../Assets/icons/icon-nav-bookmark.svg";
import { useSearch } from "../../SearchContext";
import { useBookmark } from "../../MarkbookContext";

const MovieComponent: React.FC = () => {
  const [Moviedata, setMoviedata] = useState<MovieDataType[]>([]);
  const { searchValue } = useSearch();
  const { bookmarkData, setBookmarkData } = useBookmark();
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // ✅ حالة للتحكم بالتنبيه

  useEffect(() => {
    const filteredMovies = moviesData.filter(
      (movie) =>
        movie.category === "Movie" &&
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMoviedata(filteredMovies);
  }, [searchValue]);

  const handleBookmark = (itemId: string) => {
    const selectedItem = Moviedata.find((data) => data.id === itemId);

    if (selectedItem) {
      if (bookmarkData.some((movie) => movie.id === itemId)) {
        setAlertMessage("⚠️ هذا الفيلم مضاف بالفعل إلى الإشارات المرجعية!");
      } else {
        setBookmarkData([...bookmarkData, selectedItem]);
        setAlertMessage("✅ تم إضافة الفيلم إلى الإشارات المرجعية بنجاح!");
      }

      // ✅ إخفاء التنبيه بعد 3 ثوانٍ
      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
    }
  };

  return (
    <div className="moviesconaineer">
      <h2 style={{ color: "white", fontWeight: "bold", marginTop: "20px" }}>
        Movies
      </h2>

      {/* ✅ تنبيه عند الإضافة أو التكرار */}
      {alertMessage && <div className="alert-box">{alertMessage}</div>}

      <div className="trendscontainer">
        {Moviedata.map((movie) => (
          <div key={movie.id} className="trend">
            <img
              src={movie.thumbnail.trending?.large || movie.thumbnail.regular.large}
              alt={movie.title}
            />
            <div className="bookimage">
              <img onClick={() => handleBookmark(movie.id)} src={bookmarkimg} alt="bookmarkimage" />
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

export default MovieComponent;
