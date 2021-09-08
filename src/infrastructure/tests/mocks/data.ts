import { Contract } from '../../../domain/contracts/types/Contract';

const getDate = (dateString: string) => new Date(Date.parse(dateString));

export const contracts: Contract[] = [
  {
    company: 'Marius Bodvin A/S',
    contractId: '1234558',
    periodEnd: getDate('2020-06-01T01:01:00Z'),
    periodStart: getDate('2019-06-01T01:01:00Z'),
    scheduledForRenewal: true,
    negotiationRenewalDate: getDate('2020-05-01T01:01:00Z'),
  },
  {
    company: 'Tarjei Romtveit A/S',
    contractId: '1234559',
    periodEnd: getDate('2021-07-01T01:01:00Z'),
    periodStart: getDate('2018-06-01T01:01:00Z'),
    scheduledForRenewal: false,
    negotiationRenewalDate: getDate('2021-06-01T01:01:00Z'),
  },
];
