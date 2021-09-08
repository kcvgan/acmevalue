import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContractForm from '@domain/contracts/ContractForm';
import { withTheme } from '@infrastructure/tests/mocks/withTheme';

describe('ContractForm test suite', () => {
  it('Fails to submit when start date is after end date', async () => {
    const { getByRole, getByText } = render(
      withTheme(<ContractForm onSubmit={jest.fn()} />)
    );

    // Fill a mandatory field
    const company = getByRole('textbox', { name: /company/i });
    userEvent.type(company, 'Acme');

    // Set period start date
    const periodStart = getByRole('textbox', { name: /period start/i });
    await waitFor(() => userEvent.click(periodStart));
    const tenthDayOfTheMonth = getByText('10');
    await waitFor(() => userEvent.click(tenthDayOfTheMonth));

    // Set period end date
    const periodEnd = getByRole('textbox', { name: /period end/i });
    await waitFor(() => userEvent.click(periodEnd));
    const ninthDayOfTheMonth = getByText('9');
    await waitFor(() => userEvent.click(ninthDayOfTheMonth));

    // Submit the form
    const submit = getByText(/submit/i);
    await waitFor(() => userEvent.click(submit));

    // Check if warnings appear
    const periodStartWarning = getByText(
      'Period start date needs to be before period end date'
    );
    const periodEndWarning = getByText(
      'Period end date needs to be after period start date'
    );

    expect(periodStartWarning).not.toBeNull();
    expect(periodEndWarning).not.toBeNull();
  });

  it('Fails to submit when company name is not filled', async () => {
    const { getByRole, getByText } = render(
      withTheme(<ContractForm onSubmit={jest.fn()} />)
    );
    // Set mandatory period start date
    const periodStart = getByRole('textbox', { name: /period start/i });
    await waitFor(() => userEvent.click(periodStart));
    const ninthDayOfTheMonth = getByText('9');
    await waitFor(() => userEvent.click(ninthDayOfTheMonth));

    // Set mandatory period end date
    const periodEnd = getByRole('textbox', { name: /period end/i });
    await waitFor(() => userEvent.click(periodEnd));
    const tenthDayOfTheMonth = getByText('10');
    await waitFor(() => userEvent.click(tenthDayOfTheMonth));

    // Submit the form
    const submit = getByText(/submit/i);
    await waitFor(() => userEvent.click(submit));

    // Check if warnings appear
    const companyNameRequiredWarning = getByText('Company name is required');

    expect(companyNameRequiredWarning).not.toBeNull();
  });
});
