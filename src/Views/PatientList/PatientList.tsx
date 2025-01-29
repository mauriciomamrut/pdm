import { useQuery } from "@tanstack/react-query";
import { getPatients, Patient } from "../../Services/Patients";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { PatientListContainer, MainContainer, Column } from "./styles";
import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Modal from "../../Components/Modal/Modal";

const PatientList = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(
    null
  );
  const [expandedPatientId, setExpandedPatientId] = React.useState<
    string | null
  >(null);
  const [localPatients, setLocalPatients] = React.useState<Patient[]>([]);
  const [isEdit, setIsEdit] = React.useState(false);

  const {
    data: patients,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  useEffect(() => {
    if (patients) {
      setLocalPatients(patients);
    }
  }, [patients]);

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsEdit(true);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedPatient(null);
    setIsEdit(false);
    setIsModalOpen(true);
  };

  const handleSave = (data: { name: string; description: string }) => {
    if (isEdit && selectedPatient) {
      const updatedPatients = localPatients.map((patient) =>
        patient.id === selectedPatient.id
          ? { ...patient, name: data.name, description: data.description }
          : patient
      );
      setLocalPatients(updatedPatients);
    } else {
      const newPatient: Patient = {
        id: Date.now().toString(), // TODO handle id
        name: data.name,
        description: data.description,
        avatar: "", // TODO handle avatar
      };
      setLocalPatients([newPatient, ...localPatients]);
    }
    setIsModalOpen(false);
    setSelectedPatient(null);
    setIsEdit(false);
  };

  const handleExpand = (patientId: string) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <MainContainer>
      <Header onAddClick={handleAdd} />
      <PatientListContainer>
        <Column>
          {localPatients
            .filter((_, index) => index % 3 === 0)
            .map((patient) => (
              <ProfileCard
                key={patient.id}
                name={patient.name}
                avatar={patient.avatar}
                description={patient.description}
                onEdit={() => handleEdit(patient)}
                isExpanded={expandedPatientId === patient.id}
                onExpand={() => handleExpand(patient.id)}
              />
            ))}
        </Column>
        <Column>
          {localPatients
            .filter((_, index) => index % 3 === 1)
            .map((patient) => (
              <ProfileCard
                key={patient.id}
                name={patient.name}
                avatar={patient.avatar}
                description={patient.description}
                onEdit={() => handleEdit(patient)}
                isExpanded={expandedPatientId === patient.id}
                onExpand={() => handleExpand(patient.id)}
              />
            ))}
        </Column>
        <Column>
          {localPatients
            .filter((_, index) => index % 3 === 2)
            .map((patient) => (
              <ProfileCard
                key={patient.id}
                name={patient.name}
                avatar={patient.avatar}
                description={patient.description}
                onEdit={() => handleEdit(patient)}
                isExpanded={expandedPatientId === patient.id}
                onExpand={() => handleExpand(patient.id)}
              />
            ))}
        </Column>

        <Modal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPatient(null);
            setIsEdit(false);
          }}
          onSave={handleSave}
          initialData={{
            name: selectedPatient?.name || "",
            description: selectedPatient?.description || "",
          }}
          isEdit={isEdit}
        />
      </PatientListContainer>
    </MainContainer>
  );
};

export default PatientList;
