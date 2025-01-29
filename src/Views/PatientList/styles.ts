import styled from "@emotion/styled";

export const PatientListContainer = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
}));

export const MainContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
}));
