export type Contract = {
  contractId?: string;
  company: string;
  periodStart: Date;
  periodEnd: Date;
  scheduledForRenewal: boolean;
  negotiationRenewalDate: Date;
};

export type ContractDTO = {
  company: string;
  contractId?: string;
  periodEnd: string;
  periodStart: string;
  scheduledForRenewal: string;
  negotiationRenewalDate: string;
};
