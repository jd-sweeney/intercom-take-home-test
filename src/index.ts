import orthodromicDistance, { EARTH_RADIUS_KM } from './utils/math';

import consumeFilePath from './utils/reader';

import { parseDataAsCustomer } from './utils/parser';

import { insertionSortByObjectProp } from './utils/sort';

import ICustomer from './types/customer';

export const getCustomersWithinDistance = async (
  filePath: string,
  referenceLatitude: number,
  referenceLongitude: number,
  distanceCapInKm: number,
  referenceRadius: number = EARTH_RADIUS_KM
): Promise<ICustomer[]> => {
  const customers: ICustomer[] = [];

  await consumeFilePath(filePath, (line: string) => {
    const customer = parseDataAsCustomer(line);

    const customerDistance = orthodromicDistance(
      referenceRadius,
      referenceLatitude,
      referenceLongitude,
      customer.latitude,
      customer.longitude
    );

    if (customerDistance < distanceCapInKm) {
      customers.push(customer);
    }
  });

  if (!customers.length) {
    return customers;
  }

  insertionSortByObjectProp(customers, 'userId');

  return customers;
};
