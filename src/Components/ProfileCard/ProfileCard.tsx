import React from "react";
import DefaultAvatar from "../../Assets/Default_Avatar.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import {
  CardContainer,
  Avatar,
  InfoContainer,
  Name,
  Description,
  ExpandButton,
  EditButton,
} from "./styles";

interface ProfileCardProps {
  name: string;
  avatar: string;
  description?: string;
  onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  avatar,
  description,
  onEdit,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <CardContainer isExpanded={isExpanded}>
      <EditButton onClick={onEdit}>
        <EditIcon />
      </EditButton>
      <Avatar src={DefaultAvatar} alt={name} />
      <InfoContainer>
        <Name>{name}</Name>
        {description && (
          <Description isExpanded={isExpanded}>{description}</Description>
        )}
        {description && (
          <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ExpandButton>
        )}
      </InfoContainer>
    </CardContainer>
  );
};

export default ProfileCard;
