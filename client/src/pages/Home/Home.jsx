import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { StoreContext } from "../../Context/StoreContext";

function Home() {
  const { food_list } = useContext(StoreContext);

  return (
    <div >
      <Header />
      <h1 className="text-7xl font-extralight text-center relative top-12">WHAT'S ON YOUR MIND</h1>
      
      <Menu dishes={food_list} />
      <Footer />
    </div>
  );
}

export default Home;
