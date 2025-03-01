import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import "./index.css";
import CartContainer from "./Components/CartContainer/CartContainer";
import Footer from "./Components/Footer/Footer";
import Available from "./Components/Available/Available";
import Selected from "./Components/Selected/Selected";
import { toast } from "react-toastify";
function App() {
  const [coins, setCoins] = useState(0);
  const [actives, setActives] = useState({
    available: true,
    status: "available",
  });

  const [selected, setSelected] = useState([]);

  const handleChoosePlayer = (player) => {
    const select = selected.find((p) => p.id == player.id);
    if (selected.length > 5) {
      return toast.error("6 players Added Already!");
    } else if (select) {
      return toast.error("Player already selected", { position: "top-center" });
    } else if (coins === 0) {
      return toast.error(
        `Not enough money to buy this player.Claim some Credit`,
        { position: "top-center" }
      );
    } else if (player.price > coins) {
      return toast.error("Not enough money to buy this player", {
        position: "top-center",
      });
    } else {
      toast.success(`Cognates!! ${player.name} is now in your squad`, {
        position: "top-center",
      });
      setSelected([...selected, player]);
      setCoins(coins - player.price);
    }
  };

  const handleActivesButton = (status) => {
    if (status == "available") {
      setActives({
        available: true,
        status: "available",
      });
    } else {
      setActives({
        available: false,
        status: "selected",
      });
    }
  };

  const handleCliamCoin = (coin) => {
    toast.success(`Credit Addedt to your Account ${coin}`, {
      position: "top-center",
    });
    setCoins(coins + coin);
  };
  return (
    <>
      <Header coins={coins} />
      <Banner handleCliamCoin={handleCliamCoin} />
      <div>
        <CartContainer
          selected={selected}
          actives={actives}
          handleActivesButton={handleActivesButton}
        />
      </div>
      {actives.available ? (
        <Available handleChoosePlayer={handleChoosePlayer} />
      ) : (
        <Selected
          setActives={setActives}
          setSelected={setSelected}
          selected={selected}
        />
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
