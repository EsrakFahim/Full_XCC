import { useParams } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import MetaData from "../components/layout/MetaData";
import EditServiceForm2 from "../components/Services/EditServiceFrom2";

const EditService = () => {
  const { serviceId } = useParams();

  return (
    <>
      <MetaData title={"Edit Service"} />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Edit Service</div>
            <EditServiceForm2 serviceId={serviceId} />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default EditService;
