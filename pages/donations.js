import Head from "next/head";
import Donations from "../Components/Donations/Donations";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header/Header";

const donations = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo/favicon.png" />
        <title>Donations | Love&Care</title>
      </Head>
      <Header></Header>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 my-28">
        <Donations></Donations>
        <Donations></Donations>
        <Donations></Donations>
        <Donations></Donations>
        <Donations></Donations>
      </div>
      <Footer></Footer>
    </>
  );
};

export default donations;
