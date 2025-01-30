import React from "react";
import { HeaderContainer, Title, AddButton } from "./styles";
import { Add as AddIcon } from "@mui/icons-material";

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <HeaderContainer>
      <Title>Patient Data Management</Title>
      <AddButton onClick={onAddClick}>
        <AddIcon />
        Add Patient
      </AddButton>
    </HeaderContainer>
  );
};

export default Header;
