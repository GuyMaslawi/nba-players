import { useCallback, useMemo } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { Container, Details } from "./List.style";
import { Player, Players } from "../../types";
import {
  addFavoritePlayer,
  removeFavoritePlayer,
} from "../../redux/playersSlice";

interface ListProps {
  data: Array<Players>;
  isFavorite?: boolean;
  BgColor?: string;
}

export const List = ({
  data,
  isFavorite = false,
  BgColor = "#fff",
}: ListProps) => {
  const dispatch = useDispatch();

  const icon = useMemo(() => {
    return isFavorite ? <DeleteOutlineIcon /> : <FavoriteBorderOutlinedIcon />;
  }, [isFavorite]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: Player) => {
      if (isFavorite) {
        dispatch(removeFavoritePlayer(item));
      } else {
        dispatch(addFavoritePlayer(item));
      }
    },
    [dispatch, isFavorite]
  );

  const renderData = () => {
    return data.length > 0
      ? (data ?? []).map((item: Player) => (
          <li key={item?.id} onClick={(e) => handleClick(e, item)}>
            <span>
              {item?.first_name} {item?.last_name}
            </span>
            <span>{icon}</span>
          </li>
        ))
      : !isFavorite && <div>no results</div>;
  };

  return (
    <Container BgColor={BgColor}>
      <Details>
        <ul>{renderData()}</ul>
      </Details>
    </Container>
  );
};

export default List;
