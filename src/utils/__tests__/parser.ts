import { parseDataAsCustomer } from '../parser';

import { readFileSync } from 'fs';

import { join } from 'path';

const PATH_CUSTOMER_JSON_TEXT = join(__dirname, 'customer_json.txt');

describe('[utils/parser] Unit Tests', () => {
  describe('[parseDataAsCustomer]', () => {
    const CUSTOMER_JSON_AS_STRING = readFileSync(
      PATH_CUSTOMER_JSON_TEXT,
      'utf8'
    );

    it('Should parse the json string into a customer type', () => {
      const customer = parseDataAsCustomer(CUSTOMER_JSON_AS_STRING);

      expect(customer).toBeObject();

      expect(customer.userId).toBeNumber();
      expect(customer.userId).not.toBeNaN();
      expect(customer).not.toHaveProperty('user_id');

      expect(customer.name).toBeString();
      expect(customer.name).not.toBeEmpty();

      expect(customer.latitude).toBeNumber();
      expect(customer.latitude).not.toBeNaN();

      expect(customer.longitude).toBeNumber();
      expect(customer.longitude).not.toBeNaN();
    });
  });
});
