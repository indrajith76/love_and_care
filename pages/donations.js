import Donations from "../Components/Donations/Donations";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header/Header";

const donations = () => {
    return (
        <>
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