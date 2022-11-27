import Input from "../../UI/Atoms/Input";
import Navbar from "../../UI/Organisms/navbar";
import SearchHero from "../../UI/Organisms/searchHero";
import "./index.css";

const HomeTemplate = ({ data }) => {
  return (
    <div className="homeTemplate-container">
      <Navbar />
      <SearchHero data={data} />
      <Input />
    </div>
  );
};

export default HomeTemplate;
