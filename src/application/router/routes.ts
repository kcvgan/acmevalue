export const CONTRACTS_MAIN_ROUTE = {
  path: '/contracts',
  name: 'Contracts manager',
};

export const CONTRACTS_ROUTES = {
  contracts: CONTRACTS_MAIN_ROUTE,
  create: {
    path: `${CONTRACTS_MAIN_ROUTE.path}/create`,
    name: 'Create contract',
  },
};

export const navRoutes = [CONTRACTS_MAIN_ROUTE];
