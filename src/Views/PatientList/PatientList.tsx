import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../../Services/Patients";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { PatientListContainer } from "./styles";

const PatientList = () => {
  const {
    data: patients,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar los usuarios</div>;
  console.log(JSON.stringify(patients?.[1]));
  return (
    <PatientListContainer>
      <ProfileCard
        key={patients?.[1].id}
        name={patients?.[1].name || ""}
        avatar={patients?.[1].avatar || ""}
        description={patients?.[1].description || ""}
      />
    </PatientListContainer>
  );
};

export default PatientList;
