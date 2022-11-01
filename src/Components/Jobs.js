import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="jobscontainer">
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
        className="red"
      />
      <Job
        title="Agent de Sécurité"
        contractType="CDI"
        country="France"
        city="Pantin"
        className="yellow"
      />
      <Job
        title="Responsable d'atelier (H/F)"
        contractType="CDI"
        country="France"
        city="Paris"
        className="blue"
      />
      <Job
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
        className="green"
      />
      <Job
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
        className="pink"
      />
      <Job
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
        className="red"
      />
      <Job
        title="Vendeur/se-Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
        className="yellow"
      />
      <Job
        title="CRM & Date Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
        className="blue"
      />
      <Job
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
        className="green"
      />
    </div>
  );
};
export default Jobs;
