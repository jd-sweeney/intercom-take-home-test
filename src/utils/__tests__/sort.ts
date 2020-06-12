import { insertionSortByObjectProp } from '../sort';

import { readFileSync } from 'fs';

import { join } from 'path';

const PATH_CUSTOMERS_JSON = join(__dirname, 'customers.json');

describe('[utils/sort] Unit Tests', () => {
  describe('[insertionSortByObjectProp]', () => {
    const CUSTOMERS_JSON = JSON.parse(
      readFileSync(PATH_CUSTOMERS_JSON, 'utf8')
    );

    it('Should produce a sorted list', () => {
      const customersClone = [...CUSTOMERS_JSON];
      const customerPropId = 'id';

      insertionSortByObjectProp(customersClone, customerPropId);

      expect(customersClone).not.toStrictEqual(CUSTOMERS_JSON);

      // Check if the values still exists
      CUSTOMERS_JSON.forEach((customerObject: any) => {
        const customer = customersClone.find((customerCloneObject: any) => {
          return (customerCloneObject[customerPropId] =
            customerObject[customerPropId]);
        });

        expect(customer).toBeObject();
      });

      // Check if the preceding values are ascending
      customersClone.forEach(
        (customerObject: any, customerObjectIndex: number) => {
          if (customerObjectIndex) {
            expect(customerObject[customerPropId]).toBeLessThanOrEqual(
              customersClone[customerObjectIndex][customerPropId]
            );
          }
        }
      );
    });

    it('Should throw an exception if provided an invalid value to sort', () => {
      const customerPropId = 'id';

      expect(() => {
        insertionSortByObjectProp(null as any, customerPropId);
      }).toThrow();
    });

    it('Should throw an exception if provided no prop', () => {
      expect(() => {
        insertionSortByObjectProp(CUSTOMERS_JSON, '');
      }).toThrow();
    });

    it('Should throw an exception if provided an invalid array to sort', () => {
      const invalidArray = [{}];
      const customerPropId = 'id';

      expect(() => {
        insertionSortByObjectProp(invalidArray, customerPropId);
      }).toThrow();
    });
  });
});
