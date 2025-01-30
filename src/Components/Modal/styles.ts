import styled from "@emotion/styled";

export const ModalOverlay = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  position: "fixed" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
}));

export const ModalContainer = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "20px",
  width: "90%",
  maxWidth: "500px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  transform: isOpen ? "translateY(0)" : "translateY(-20px)",
  opacity: isOpen ? 1 : 0,
  transition: "transform 0.3s ease, opacity 0.3s ease",
}));

export const ModalTitle = styled.h2(() => ({
  margin: "0 0 20px 0",
  color: "#333",
  fontSize: "1.5rem",
}));

export const Form = styled.form(() => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
}));

export const InputGroup = styled.div(() => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
}));

export const Label = styled.label(() => ({
  color: "#666",
  fontSize: "0.9rem",
}));

export const Input = styled.input(() => ({
  padding: "8px 12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "1rem",
  "&:focus": {
    outline: "none",
    borderColor: "#0066cc",
    boxShadow: "0 0 0 2px rgba(0, 102, 204, 0.2)",
  },
}));

export const TextArea = styled.textarea(() => ({
  padding: "8px 12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "1rem",
  minHeight: "100px",
  resize: "vertical" as const,
  "&:focus": {
    outline: "none",
    borderColor: "#0066cc",
    boxShadow: "0 0 0 2px rgba(0, 102, 204, 0.2)",
  },
}));

export const ButtonGroup = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "20px",
}));

export const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  ({ variant = "secondary" }) => ({
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.2s ease-in-out",
    backgroundColor: variant === "primary" ? "#0066cc" : "#f5f5f5",
    color: variant === "primary" ? "white" : "#333",
    "&:hover": {
      backgroundColor: variant === "primary" ? "#0052a3" : "#e5e5e5",
    },
  })
);
