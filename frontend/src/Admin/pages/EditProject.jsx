import { useParams } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import EditProjectForm from "../components/projects/EditProjectForm";

const EditProject = () => {
    const { projectId } = useParams();

  return (
    <>
      <MetaData title={"Edit Project"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Edit Project</div>
            <EditProjectForm projectId={projectId} />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default EditProject;
