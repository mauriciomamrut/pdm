import React from "react";

import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Header from "../../Components/Header/Header";
import { usePatientList } from "../../Hooks/usePatientList";
import Modal from "../../Components/Modal/Modal";
import { PatientListContainer, MainContainer, Column } from "./styles";

const PatientList = () => {
  const {
    localPatients,
    isModalOpen,
    selectedPatient,
    expandedPatientId,
    isEdit,
    isLoading,
    isError,
    handleEdit,
    handleAdd,
    handleSave,
    handleCloseModal,
    handleExpand,
  } = usePatientList();

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
          onClose={handleCloseModal}
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
