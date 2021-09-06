import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';
import LabeledInput from '../molecules/LabeledInput';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;

const StyledInput = styled(Input)`
  width: 12px;
  height: 12px;
`;

const Checkbox = ({
  label,
  formHooks,
  ...props
}: ComponentProps<typeof LabeledInput>) => (
  <Container>
    <StyledInput type="checkbox" {...formHooks} {...props} />
    <Label>{label}</Label>
  </Container>
);

export default Checkbox;
