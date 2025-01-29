import React, { useEffect, useRef, useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [description]);

  return (
    <CardContainer isExpanded={isExpanded}>
      <EditButton className="edit-button" onClick={onEdit}>
        <EditIcon />
      </EditButton>
      <Avatar src={DefaultAvatar} alt={name} />
      <InfoContainer>
        <Name>{name}</Name>
        {description && (
          <Description ref={descriptionRef} isExpanded={isExpanded}>
            {description}
          </Description>
        )}
        {description && isOverflowing && (
          <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ExpandButton>
        )}
      </InfoContainer>
    </CardContainer>
  );
};

export default ProfileCard;
