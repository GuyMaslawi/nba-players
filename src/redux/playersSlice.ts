import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaDetails, Player } from "../types/index";

interface SliceState {
  players: Array<Player>;
  favoritePlayers: Array<Player>;
  metaDetails: MetaDetails;
}

const initialState: SliceState = {
  players: [],
  favoritePlayers: [],
  metaDetails: {},
};

const filterPlayerById = (arr: Array<Player>, id: number) => {
  return arr?.filter((item) => {
    return item.id !== id;
  });
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setAllPlayers: (state, action) => {
      return {
        ...state,
        players: action.payload,
      };
    },
    addFavoritePlayer: (state, action: PayloadAction<Player>) => {
      state.favoritePlayers.unshift(action.payload);
      if (action.payload.id) {
        state.players = filterPlayerById(state.players, action.payload.id);
      }
    },
    removeFavoritePlayer: (state, action: PayloadAction<Player>) => {
      if (action.payload.id) {
        state.favoritePlayers = filterPlayerById(
          state.favoritePlayers,
          action.payload.id
        );
      }
      state.players.push(action.payload);
    },
    setMetaDetails: (state, action) => {
      return {
        ...state,
        metaDetails: action.payload,
      };
    },
  },
});

export const {
  setAllPlayers,
  addFavoritePlayer,
  removeFavoritePlayer,
  setMetaDetails,
} = playersSlice.actions;

export default playersSlice.reducer;
