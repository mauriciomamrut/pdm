import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPatients, Patient } from "../Services/Patients";

interface PatientFormData {
  name: string;
  description: string;
}

export const usePatientList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [expandedPatientId, setExpandedPatientId] = useState<string | null>(
    null
  );
  const [localPatients, setLocalPatients] = useState<Patient[]>([]);
  const [isEdit, setIsEdit] = useState(false);

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
    setExpandedPatientId(null);
  };

  const handleSave = (data: PatientFormData) => {
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
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
    setIsEdit(false);
    setExpandedPatientId(null);
  };

  const handleExpand = (patientId: string) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId);
  };

  return {
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
  };
};
