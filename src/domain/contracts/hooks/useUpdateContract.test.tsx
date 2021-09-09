import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/dom';

import { useUpdateContract } from '@domain/contracts/hooks/useUpdateContract';
import { reduxWrapper } from '@infrastructure/tests/mocks/reduxWrapper';

const contractForModification = {
  contractId: '1234558',
  company: 'Acme',
  periodStart: new Date(),
  periodEnd: new Date(),
  scheduledForRenewal: false,
  negotiationRenewalDate: new Date(),
};

const slightlyModifiedContract = {
  contractId: contractForModification.contractId,
  scheduledForRenewal: true,
};

const modifiedContract = {
  contractId: '1234558',
  company: 'Emca',
  periodStart: new Date(),
  periodEnd: new Date(),
  scheduledForRenewal: true,
  negotiationRenewalDate: new Date(),
};

describe('useUpdateContract test suite', () => {
  it('Returns a modified contract with the same ID', async () => {
    const { result } = renderHook(() => useUpdateContract(), {
      wrapper: reduxWrapper,
    });

    await waitFor(async () => {
      const updatedContract = await result.current(
        contractForModification.contractId
      )(modifiedContract);

      expect(updatedContract?.contractId).toEqual(
        contractForModification.contractId
      );
      Object.entries(modifiedContract).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(value).toEqual(updatedContract[key]);
      });
    });
  });

  it('Returns a modified with old attributes and one modified', async () => {
    const { result } = renderHook(() => useUpdateContract(), {
      wrapper: reduxWrapper,
    });

    await waitFor(async () => {
      const updatedContract = await result.current(
        contractForModification.contractId
      )(slightlyModifiedContract);

      expect(updatedContract?.contractId).toEqual(
        contractForModification.contractId
      );
      Object.entries(slightlyModifiedContract).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(value).toEqual(updatedContract[key]);
      });
    });
  });
});
