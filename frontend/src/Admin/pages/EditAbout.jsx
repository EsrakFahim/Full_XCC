import EditAboutPageForm from "../components/aboutPage/EditAboutForm";
import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";

const EditAbout = () => {
  return (
    <>
      <MetaData title={"Homepage Settings"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Edit AboutPage</div>
            <EditAboutPageForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default EditAbout;
