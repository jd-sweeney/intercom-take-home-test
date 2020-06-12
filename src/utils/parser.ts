import ICustomer from '../types/customer';

import camelcaseKeys from 'camelcase-keys';

export const parseDataAsCustomer = (data: string): ICustomer => {
  const customer: ICustomer = JSON.parse(data);

  return camelcaseKeys(customer);
};
