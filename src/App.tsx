import { Container } from "./App.style";
import FavoritePlayers from "./components/favorite-players/FavoritePlayers";
import Players from "./components/players/Players";

const App = () => {
  return (
    <Container>
      <Players />
      <FavoritePlayers />
    </Container>
  );
};

export default App;
