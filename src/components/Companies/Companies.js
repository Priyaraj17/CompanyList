import Company from "../Company/Company";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./Companies.css";

const Companies = ({ companies }) => {
  return (
    <div className="container">
      <Header Type={companies.Type} />
      <div className="list">
        <Navbar />
        <ol className="gradient-list">
          {companies.list.map(id => (
            <Company Name={id} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Companies;
