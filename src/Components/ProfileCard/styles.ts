import styled from "@emotion/styled";

export const CardContainer = styled.div<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    position: "relative",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0.75rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "100%",
    height: isExpanded ? "auto" : "120px",
    minHeight: "120px",
    transition: "all 0.3s ease-in-out",
    transform: isExpanded ? "scale(1.02)" : "scale(1)",
  })
);

export const Avatar = styled.img(() => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
}));

export const InfoContainer = styled.div(() => ({
  flex: 1,
  overflow: "hidden",
  height: "100%",
  transition: "all 0.3s ease-in-out",
}));

export const Name = styled.h2(() => ({
  margin: "0 0 0.25rem 0",
  color: "#333",
  fontSize: "1.2rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "left" as const,
}));

export const Description = styled.p<{ isExpanded: boolean }>(
  ({ isExpanded }) => ({
    margin: 0,
    color: "#666",
    fontSize: "15px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as const,
    WebkitLineClamp: isExpanded ? "unset" : "3",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left" as const,
    alignSelf: "flex-end",
    transition: "all 0.3s ease-in-out",
    maxHeight: isExpanded ? "1000px" : "120px",
    opacity: isExpanded ? 1 : 0.8,
    marginBottom: "0.7rem",
  })
);

export const ExpandButton = styled.button(() => ({
  position: "absolute" as const,
  bottom: "0",
  right: "50%",
  background: "none",
  border: "none",
  color: "#666",
  cursor: "pointer",
  paddingTop: "0.5rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "all 0.2s ease-in-out",
  transform: "translateY(0)",
  "&:hover": {
    color: "#0066cc",
    transform: "translateY(-2px)",
  },
  "& svg": {
    fontSize: "24px",
  },
}));

export const EditButton = styled.button(() => ({
  position: "absolute" as const,
  top: "0.75rem",
  right: "0.75rem",
  background: "none",
  border: "none",
  color: "#666",
  cursor: "pointer",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: "#0066cc",
    transform: "scale(1.1)",
  },
  "& svg": {
    fontSize: "20px",
  },
}));
