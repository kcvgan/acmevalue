import * as React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

import Input from './Input';

const DatePickerContainer = styled.div`
  width: 100%;
`;

type DatePickerProps = ReactDatePickerProps<any> & { error?: string };

const DatePicker = ({ error, ...datePickerProps }: DatePickerProps) => (
  <DatePickerContainer>
    <ReactDatePicker
      {...datePickerProps}
      customInput={<Input error={error} />}
    />
  </DatePickerContainer>
);

export default DatePicker;
