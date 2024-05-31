import "./styles.css";
import Image from "./todo-skeleton.png";
import Coin from "./github.svg";
import ClickCounter from "./ClickCounter";

export const App = () => {

  return (
    
    <>
      <h1>
        Edited- Hello Vishwa- {process.env.NODE_ENV}</h1>
      <h1>Env variable name {process.env.name}</h1>
      <img src={Image} alt="todo-items" width={'300px'} height={'200px'}/>
      <img src={Coin} alt="Coin-icon" width="200" height={'200px'} />
      <ClickCounter />
    </>
  );
};
