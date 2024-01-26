import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/action";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <Filters>
        <Cards
          allCountries={allCountries}
          currentPage={currentPage}
          setPage={setPage}
        />
      </Filters>
    </>
  );
}
