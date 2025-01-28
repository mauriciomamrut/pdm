import axios from "axios";

interface Patient {
  id: string;
  name: string;
  avatar: string;
  description?: string;
}

const getPatients = async (): Promise<Patient[]> => {
  const { data } = await axios.get<Patient[]>(
    "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"
  );
  return data;
};

export { getPatients };
