import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { isBefore, isAfter } from 'date-fns';

import { Contract } from './types/Contract';
import LabeledInput from '../../ui/molecules/LabeledInput';
import LabeledDatePicker from '../../ui/molecules/LabeledDatePicker';
import { Button, SecondaryButton } from '../../ui/atoms/Button';
import Checkbox from '../../ui/atoms/Checkbox';
import useRedirect from '../../infrastructure/utils/useRedirect';
import { CONTRACTS_MAIN_ROUTE } from '../../application/router/routes';

const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 48%;
  }
`;

const FormControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.md};

  ${SecondaryButton} {
    margin-right: ${({ theme }) => theme.spacing.md};
  }
`;

type ContractFormProps = {
  onSubmit: (submittedContract: Contract) => Promise<void>;
  contract?: Contract;
};

const getInitialValues = (contract?: Contract) => ({
  company: contract?.company || '',
  periodStart: contract?.periodStart,
  periodEnd: contract?.periodEnd,
  scheduledForRenewal: contract?.scheduledForRenewal,
  negotiationRenewalDate: contract?.negotiationRenewalDate,
});

type Inputs = Omit<Contract, 'contractId'>;

const ContractForm = ({ onSubmit, contract }: ContractFormProps) => {
  const returnToContracts = useRedirect(CONTRACTS_MAIN_ROUTE.path);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: getInitialValues(contract),
  });

  const periodStart = watch('periodStart');
  const periodEnd = watch('periodEnd');

  useEffect(() => {
    if (contract) {
      reset(getInitialValues(contract));
    }
  }, [contract, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabeledInput
        label="Company"
        id="company"
        type="text"
        formHooks={register('company', {
          required: 'Company name is required',
        })}
        error={errors?.company?.message}
      />
      <FieldRow>
        <Controller
          name="periodStart"
          control={control}
          defaultValue={contract?.periodStart}
          rules={{
            required: true,
            validate: (value) =>
              isBefore(value, periodEnd) ||
              'Period start date needs to be before period end date',
          }}
          render={({ field: { onChange, value, ...rest } }) => (
            <LabeledDatePicker
              label="Period start"
              id={rest.name}
              onChange={onChange}
              selected={value}
              dateFormat="Pp"
              formHooks={rest}
              showTimeInput
              error={errors?.periodStart?.message}
            />
          )}
        />
        <Controller
          name="periodEnd"
          control={control}
          defaultValue={contract?.periodEnd}
          rules={{
            required: true,
            validate: (value) =>
              isAfter(value, periodStart) ||
              'Period end date needs to be after period start date',
          }}
          render={({ field: { onChange, value, ...rest } }) => (
            <LabeledDatePicker
              label="Period end"
              id={rest.name}
              onChange={onChange}
              selected={value}
              dateFormat="Pp"
              formHooks={rest}
              showTimeInput
              error={errors?.periodEnd?.message}
            />
          )}
        />
      </FieldRow>
      <FieldRow>
        <Checkbox
          label="Scheduled for renewal"
          id="scheduledForRenewal"
          formHooks={register('scheduledForRenewal')}
        />
        <Controller
          name="negotiationRenewalDate"
          control={control}
          defaultValue={contract?.negotiationRenewalDate}
          render={({ field: { onChange, value, ...rest } }) => (
            <LabeledDatePicker
              label="Negotiation renewal date"
              id={rest.name}
              onChange={onChange}
              selected={value}
              dateFormat="Pp"
              formHooks={rest}
              showTimeInput
            />
          )}
        />
      </FieldRow>

      <FormControls>
        <SecondaryButton onClick={() => returnToContracts()}>
          Cancel
        </SecondaryButton>
        <Button type="submit" data-cy="submit-contract-form">
          Submit
        </Button>
      </FormControls>
    </form>
  );
};

export default ContractForm;
