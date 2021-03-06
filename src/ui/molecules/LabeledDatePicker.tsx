import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { RefCallBack } from 'react-hook-form';

import DatePicker from '../atoms/DatePicker';
import Label from '../atoms/Label';
import InputErrorMessage from '../atoms/InputErrorMessage';

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
  error?: string;
} & ComponentProps<typeof DatePicker>;

const LabeledDatePicker = ({
  label,
  id,
  formHooks,
  error,
  ...props
}: LabeledDatePickerProps) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <DatePicker
      error={error}
      id={id}
      {...props}
      customInputRef={formHooks?.ref?.name}
    />
    <InputErrorMessage>{error}</InputErrorMessage>
  </Container>
);

export default LabeledDatePicker;
