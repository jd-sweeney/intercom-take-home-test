import { getCustomersWithinDistance } from '../index';

import { join } from 'path';

const INTERCOM_LATITUDE = parseFloat(process.env.INTERCOM_LATITUDE || '') || 0;

const INTERCOM_LONGITUDE =
  parseFloat(process.env.INTERCOM_LONGITUDE || '') || 0;

const PATH_CUSTOMERS_TEXT = join(__dirname, 'customers.txt');

describe('[index]', () => {
  it('Should produce a list of customers within a 100km distance of Intercom Dublin headquarters :)', async () => {
    const customers = await getCustomersWithinDistance(
      PATH_CUSTOMERS_TEXT,
      INTERCOM_LATITUDE,
      INTERCOM_LONGITUDE,
      100
    );

    expect(customers).toBeArray();
    expect(customers).not.toHaveLength(0);
  });

  it('Should produce a list of customers within a 0km distance of Intercom Dublin headquarters -> Could be empty', async () => {
    const customers = await getCustomersWithinDistance(
      PATH_CUSTOMERS_TEXT,
      INTERCOM_LATITUDE,
      INTERCOM_LONGITUDE,
      0
    );

    expect(customers).toBeArray();
  });
});
