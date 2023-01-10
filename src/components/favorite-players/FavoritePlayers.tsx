import { useState } from "react";
import { IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import List from "../list/List";
import { Top, Wrapper } from "./FavoritePlayers.style";

const getRandomColor = () => {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
};

const FavoritePlayers = () => {
  const [BgColor, setBgColor] = useState("#fff");
  const favoritePlayers = useSelector(
    (state: RootState) => state.players.favoritePlayers
  );

  const handleRandomColor = () => {
    setBgColor(getRandomColor());
  };

  return (
    <Wrapper>
      <Top>
        <h2>Favorite Players</h2>
        {favoritePlayers.length > 0 && (
          <IconButton size="large" onClick={handleRandomColor}>
            <ColorLensIcon />
          </IconButton>
        )}
      </Top>
      {favoritePlayers.length > 0 && (
        <List data={favoritePlayers} isFavorite BgColor={BgColor} />
      )}
    </Wrapper>
  );
};

export default FavoritePlayers;
