import { rest } from 'msw';

import { Contract } from '@domain/contracts/types/Contract';
import { contracts } from './data';

let contractsDB = contracts;

export const handlers = [
  rest.get('/contract/:contractId', (req, res, ctx) => {
    const { contractId } = req.params;

    const contract =
      contractsDB.find((c) => c.contractId === contractId) || null;

    return res(
      ctx.json({
        contract,
      })
    );
  }),

  rest.get('/contracts', (req, res, ctx) =>
    res(
      ctx.json({
        contracts: contractsDB,
      })
    )
  ),

  rest.patch<{ contract: Contract }>(
    '/contract/:contractId',
    (req, res, ctx) => {
      const { contract } = req.body;
      const { contractId } = req.params;

      contractsDB = contractsDB.map((c) => {
        if (c.contractId === contractId) {
          return { ...contract, contractId };
        }

        return c;
      });

      return res(
        ctx.json({
          contract,
        })
      );
    }
  ),

  rest.post<{ contract: Contract }>('/contract', (req, res, ctx) => {
    const { contract } = req.body;

    contractsDB = [
      ...contractsDB,
      { ...contract, contractId: Date.now().toString() },
    ];

    return res(
      ctx.json({
        contract,
      })
    );
  }),
];
