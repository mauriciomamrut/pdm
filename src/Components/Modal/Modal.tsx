import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { PatientFormData, patientSchema } from "../../Utils/schemas";
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  ButtonGroup,
  Button,
} from "./styles";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: { name: string; description: string }) => void;
  initialData: {
    name: string;
    description: string;
  };
  isEdit?: boolean;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  onSave,
  initialData,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (open) {
      reset(initialData);
    }
  }, [open, initialData, reset]);

  if (!open) return null;

  const onSubmit = async (data: PatientFormData) => {
    try {
      await onSave(data);
      toast.success(
        isEdit ? "Patient updated successfully" : "Patient created successfully"
      );
      reset();
      onClose();
    } catch (error) {
      toast.error(
        "An error occurred while " +
          (isEdit ? "updating" : "creating") +
          " the patient"
      );
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{isEdit ? "Edit Profile" : "New Patient"}</ModalTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoFocus {...register("name")} />
            {errors.name && (
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.name.message}
              </span>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="description">Description</Label>
            <TextArea id="description" {...register("description")} />
            {errors.description && (
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.description.message}
              </span>
            )}
          </InputGroup>
          <ButtonGroup>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? "Save" : "Create"}
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditModal;
