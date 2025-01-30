import styled from "@emotion/styled";

export const PatientListContainer = styled.div(() => ({
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  overflow: "visible",
  width: "100%",
  marginBottom: "1rem",
}));

export const Column = styled.div(() => ({
  flex: "1",
  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",
  minWidth: "300px",
  "@media (max-width: 1000px)": {
    "&:nth-of-type(3)": {
      display: "none",
    },
  },
  "@media (max-width: 700px)": {
    "&:nth-of-type(2)": {
      display: "none",
    },
  },
}));

export const MainContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  maxWidth: "1200px",
  margin: "1.2rem auto",
  width: "100%",
  backgroundColor: "#F8FAFC",
  borderRadius: "1rem",
  overflow: "visible",
  minHeight: "calc(100vh - 2.4rem)",
}));
