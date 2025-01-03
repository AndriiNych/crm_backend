export const TABLE_NAMES = {
  active: 'active',
  user: 'users',
  worker: 'workers',
  client: 'clients',
  customer: 'customers',
  customer_type: 'customer_types',
  contract: 'contracts',
  contract_type: 'contract_types',
  contract_plan: 'contract_plans',
  contract_status: 'contract_status',
  client_contract: 'client_contracts',
  client_contract_history: 'client_contract_history',
  client_contract_plan: 'client_contract_plans',
  call_billing: 'calls_billing',
  message: 'messages',
};

export const TABLES_LINKS = {
  USER: {
    client: TABLE_NAMES.client,
    worker: TABLE_NAMES.worker,
  },
};
