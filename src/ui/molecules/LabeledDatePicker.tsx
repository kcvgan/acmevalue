import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { RefCallBack } from 'react-hook-form';
import DatePicker from '../atoms/DatePicker';
import Label from '../atoms/Label';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type LabeledDatePickerProps = {
  label: string;
  id: string;
  formHooks?: {
    ref: RefCallBack;
  };
} & ComponentProps<typeof DatePicker>;

const LabeledDatePicker = ({
  label,
  id,
  formHooks,
  ...props
}: LabeledDatePickerProps) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <DatePicker id={id} {...props} customInputRef={formHooks?.ref?.name} />
  </Container>
);

export default LabeledDatePicker;
