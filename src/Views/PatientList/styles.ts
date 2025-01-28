import styled from "@emotion/styled";

export const PatientListContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as const,
  gap: "1rem",
  backgroundColor: "white",
}));
