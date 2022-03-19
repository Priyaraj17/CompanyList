import Heading from "../components/Heading/Heading";
import CompanyType from "../components/CompanyType/CompanyType";

const Home = ({ types }) => {
  return (
    <>
      <Heading />
      <CompanyType types={types} />
    </>
  );
};

export default Home;
