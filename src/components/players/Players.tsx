import Pagination from "@mui/material/Pagination";
import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPlayers, setMetaDetails } from "../../redux/playersSlice";
import { RootState } from "../../redux/store";
import { fetchPlayers, searchPlayer } from "../api/requests";
import { useDebounce } from "../hooks";
import List from "../list/List";
import SearchBar from "../search-bar/SearchBar";
import { Wrapper } from "./Players.style";

const Players = () => {
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const debouncedValue = useDebounce(value, 1000);
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.players.players);
  const metaDetails = useSelector(
    (state: RootState) => state.players.metaDetails
  );

  const fetchData = useCallback(async () => {
    let results;
    let perPage = metaDetails.per_page ?? 25;

    if (debouncedValue) {
      results = await searchPlayer(page, perPage, debouncedValue);
    } else {
      results = await fetchPlayers(page, perPage);
    }
    dispatch(setAllPlayers(results.data.data));
    dispatch(setMetaDetails(results.data.meta));
  }, [debouncedValue, dispatch, metaDetails.per_page, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <SearchBar value={value} onChange={handleSearchValueChange} />
      <List data={players} />
      <Pagination
        count={metaDetails.total_pages}
        color="primary"
        page={page}
        onChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Players;
