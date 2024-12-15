import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import CreateServicesForm from "../components/Services/ServiceForm";

const CreateService = () => {
  return (
    <>
      <MetaData title={"Create Service"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Create New Project</div>
            <CreateServicesForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default CreateService;
