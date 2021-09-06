import * as React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

import { RefCallBack } from 'react-hook-form';
import Input from './Input';

const DatePickerContainer = styled.div`
  width: 100%;
`;

type DatePickerProps = ReactDatePickerProps<any> & {
  formHookRef?: RefCallBack;
};

const DatePicker = ({ formHookRef, ...datePickerProps }: DatePickerProps) => (
  <DatePickerContainer>
    <ReactDatePicker
      {...datePickerProps}
      customInput={<Input ref={formHookRef} />}
    />
  </DatePickerContainer>
);

export default DatePicker;
