import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/dom';

import { useCreateContract } from '@domain/contracts/hooks/useCreateContract';
import { reduxWrapper } from '@infrastructure/tests/mocks/reduxWrapper';

const mockNewContract = {
  company: 'Acme',
  periodStart: new Date(),
  periodEnd: new Date(),
  scheduledForRenewal: false,
  negotiationRenewalDate: new Date(),
};

describe('useCreateContract test suite', () => {
  it('Returns a properly created contract with a contractId', async () => {
    const { result } = renderHook(() => useCreateContract(), {
      wrapper: reduxWrapper,
    });

    await waitFor(async () => {
      const createdContract = await result.current(mockNewContract);

      expect(createdContract?.contractId).toBeDefined();
      Object.entries(mockNewContract).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(value).toEqual(createdContract[key]);
      });
    });
  });
});
