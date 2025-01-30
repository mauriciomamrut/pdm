import styled from "@emotion/styled";

export const HeaderContainer = styled.header(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 1.5rem",
  width: "100%",
  maxWidth: "1200px",
  position: "sticky" as const,
  top: 0,
  backgroundColor: "#F8FAFC",
  zIndex: 10,
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  paddingBottom: "1rem",
  paddingTop: "1rem",
}));

export const Title = styled.h1(() => ({
  margin: 0,
  color: "#6B7280",
  fontSize: "2.5rem",
  fontWeight: 800,
  paddingLeft: "1rem",
}));

export const AddButton = styled.button(() => ({
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  marginRight: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  fontSize: "0.9rem",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#0052a3",
    transform: "translateY(-1px)",
  },

  "& svg": {
    fontSize: "20px",
  },
}));
