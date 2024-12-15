import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import ProjectForm from "../components/projects/ProjectForm";

const CreateNewProject = () => {
  return (
    <>
      <MetaData title={"Create New Project"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Create New Project</div>
            <ProjectForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default CreateNewProject;
