/**
 * @type {object}
 */
const intercomGetCustomers = require('../dist/index');

/**
 * @type {object}
 */
const { writeFile } = require('fs');

/**
 * @type {object}
 */
const { join } = require('path');

/**
 * @type {object}
 */
const { promisify } = require('util');

/**
 * @type {string}
 */
const PATH_CUSTOMERS_TXT = join(__dirname, 'customers.txt');

/**
 * @param {number}  latitude
 * @param {number}  longitude
 * @param {number}  distanceCap
 *
 * @returns Promise<void>
 */
const getCustomersWithinDistance = async (latitude, longitude, distanceCap) => {
  console.log(
    'START TASK -> generateListOfCustomersToInviteWithin100kmOfIntercomHeadquarters\n'
  );

  latitude = latitude || 0;
  longitude = longitude || 0;
  distanceCap = distanceCap || 0;

  console.log('Retrieving customers with search params: ', {
    latitude,
    longitude,
    distanceCap,
  });

  const customers = await intercomGetCustomers.getCustomersWithinDistance(
    PATH_CUSTOMERS_TXT,
    latitude,
    longitude,
    distanceCap
  );

  console.log(`Found customers: ${customers.length}`);
  console.log('Writing to file: output.txt');

  await promisify(writeFile)(
    join(__dirname, 'output.txt'),
    JSON.stringify(customers)
  );

  console.log('File written');
  console.log('Success!\n');

  console.log(
    'END TASK -> generateListOfCustomersToInviteWithin100kmOfIntercomHeadquarters'
  );
};

const arguments = [...process.argv.slice(3)];

getCustomersWithinDistance(...arguments);
