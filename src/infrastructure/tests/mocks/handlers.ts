import { rest } from 'msw';

import { Contract } from '@domain/contracts/types/Contract';
import { contracts } from './data';

let contractsDB = contracts;

export const handlers = [
  rest.get(`${process.env.API_URL}/contract/:contractId`, (req, res, ctx) => {
    const { contractId } = req.params;

    const contract =
      contractsDB.find((c) => c.contractId === contractId) || null;

    return res(
      ctx.json({
        contract,
      })
    );
  }),

  rest.get(`${process.env.API_URL}/contracts`, (req, res, ctx) =>
    res(
      ctx.json({
        contracts: contractsDB,
      })
    )
  ),

  rest.patch<{ contract: Contract }>(
    `${process.env.API_URL}/contract/:contractId`,
    (req, res, ctx) => {
      const { contract } = req.body;
      const { contractId } = req.params;

      const contractForModification = contractsDB.find(
        (c) => c.contractId === contractId
      );

      if (contractForModification) {
        const modifiedContract = {
          ...contractForModification,
          ...contract,
          contractId,
        };

        contractsDB = contractsDB.map((c) => {
          if (c.contractId === contractForModification.contractId) {
            return modifiedContract;
          }

          return c;
        });

        return res(
          ctx.json({
            contract: modifiedContract,
          })
        );
      }

      return res(
        ctx.json({
          contract: null,
        })
      );
    }
  ),

  rest.post<{ contract: Contract }>(
    `${process.env.API_URL}/contract`,
    (req, res, ctx) => {
      const { contract } = req.body;

      const createdContract = {
        ...contract,
        contractId: Date.now().toString(),
      };
      contractsDB = [...contractsDB, createdContract];

      return res(
        ctx.json({
          contract: createdContract,
        })
      );
    }
  ),
];
