import Title from "./Title";
import ContractType from "./ContractType";
import Country from "./Country";
import City from "./City";

const BoxJob = (props) => {
  return (
    <div className={props.borderColor}>
      <div className="block-top">
        <Title jobTitle={""} />
      </div>
      <div className="block-bottom">
        <ContractType contract={"CDI -"} />
        <Country countryName={"Australie -"} />
        <City cityName={"Sydney"} />
      </div>
    </div>
  );
};

export default BoxJob;
