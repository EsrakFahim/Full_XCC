import DashboardLayout from "../components/layout/DashboardLayout";
import HomePageForm from "../components/HomePage/HomepageForm";
import MetaData from "../components/layout/MetaData";

const HomeSettings = () => {
  return (
    <>
      <MetaData title={"Homepage Settings"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Homepage Settings</div>
            <HomePageForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default HomeSettings;
