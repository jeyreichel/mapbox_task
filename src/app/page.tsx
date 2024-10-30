import Header from "Sections/Header";
import Menu from "Sections/Menu";
import MainBoard from "Sections/Mainboard";

const TenementSearch = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full px-5">
        <Menu />
        <MainBoard />
      </div>
    </div>
  );
};

export default TenementSearch;
