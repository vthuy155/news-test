import React from "react";
import Banner from "../components/client/Banner";
import CateClient from "../components/client/CateClient";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-white">
      <Banner />
      <CateClient/>
    </div>
  );
};

export default Home;
