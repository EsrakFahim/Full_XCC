import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import ServicesTable from "../components/Services/ServicesTable";
export const AllServices = () => {
  return (
    <>
      <MetaData title={"All Services"} />
      <DashboardLayout>
        <div className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom mb-3">All Projects</div>

            <div className="panel-body p-3 pb-0">
              <ServicesTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
