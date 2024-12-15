import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import ProjectTable from "../components/projects/ProjectTable";

export const AllProjects = () => {
  return (
    <>
      <MetaData
        title={"All Projects"}
      />
      <DashboardLayout>
        <div className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom mb-3">All Projects</div>

            <div className="panel-body p-3 pb-0">
              <ProjectTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
