import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { ControllerRenderProps, UseFormRegisterReturn } from 'react-hook-form';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type LabeledInputProps = {
  label: string;
  id: string;
  formHooks: UseFormRegisterReturn | ControllerRenderProps;
} & ComponentProps<typeof Input>;

const LabeledInput = ({
  label,
  id,
  formHooks,
  ...props
}: LabeledInputProps) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} {...formHooks} />
  </Container>
);

export default LabeledInput;
