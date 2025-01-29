import styled from "@emotion/styled";

export const HeaderContainer = styled.header(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1.5rem",
  backgroundColor: "white",
  width: "100%",
  //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

export const Title = styled.h1(() => ({
  margin: 0,
  color: "#333",
  fontSize: "1.5rem",
  fontWeight: 600,
}));

export const AddButton = styled.button(() => ({
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
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
