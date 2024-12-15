import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import AboutPageForm from "../components/aboutPage/AboutPageForm";

const AboutPageSettings = () => {
  return (
    <>
      <MetaData title={"Homepage Settings"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Create AboutPage</div>
            <AboutPageForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default AboutPageSettings;
