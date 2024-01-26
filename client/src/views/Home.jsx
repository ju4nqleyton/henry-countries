import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/action";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const allCountriesCopy = useSelector((state) => state.allCountriesCopy);
  const resetCards = useSelector((state) => state.resetCards);

  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    if (resetCards === "off") {
      dispatch(getAllCountries());
    }
    setPage(1);
  }, [dispatch, resetCards]);

  return (
    <>
      <SearchBar />
      <Filters>
        {resetCards === "off" ? (
          <Cards
            allCountries={allCountries}
            currentPage={currentPage}
            setPage={setPage}
            resetCards={resetCards}
          />
        ) : (
          <Cards
            allCountries={allCountriesCopy}
            currentPage={currentPage}
            setPage={setPage}
            resetCards={resetCards}
          />
        )}
      </Filters>
    </>
  );
}
