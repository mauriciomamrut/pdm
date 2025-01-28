import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../Services/Patients";

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

  return (
    <div>
      {patients?.map((patient) => (
        <div key={patient.id}>
          <h2>{patient.name}</h2>
          <img src={patient.avatar} alt={patient.name} />
          {patient.description && <p>{patient.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default PatientList;
