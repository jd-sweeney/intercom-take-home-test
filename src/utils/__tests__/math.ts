import orthodromicDistance, {
  degreesToRadians,
  radiansToDegrees,
  EARTH_RADIUS_KM,
} from '../math';

const INTERCOM_LATITUDE = parseFloat(process.env.INTERCOM_LATITUDE || '') || 0;

const INTERCOM_LONGITUDE =
  parseFloat(process.env.INTERCOM_LONGITUDE || '') || 0;

describe('[utils/math] Unit Tests', () => {
  describe('[degreesToRadians]', () => {
    it('Should result a value of 0 with 0 degrees', () => {
      const radians = degreesToRadians(0);

      expect(radians).toStrictEqual(0);
    });

    it('Should result a value of PI with 180 degrees', () => {
      const radians = degreesToRadians(180);

      expect(radians).toStrictEqual(Math.PI);
    });

    it('Should result a value of 2 PI with 360 degrees', () => {
      const radians = degreesToRadians(360);

      expect(radians).toStrictEqual(Math.PI * 2);
    });
  });

  describe('[radiansToDegrees]', () => {
    it('Should result a value of 0 degrees with a value of 0', () => {
      const degrees = radiansToDegrees(0);

      expect(degrees).toStrictEqual(0);
    });

    it('Should result a value of 180 degrees with a value of PI', () => {
      const degrees = radiansToDegrees(Math.PI);

      expect(degrees).toStrictEqual(180);
    });

    it('Should result a value of 180 degrees with a value of PI', () => {
      const degrees = radiansToDegrees(Math.PI * 2);

      expect(degrees).toStrictEqual(360);
    });
  });

  describe('[orthodromicDistance]', () => {
    it('Should result in a distance of 0 if spherical radius is 0', () => {
      const distance = orthodromicDistance(
        0,
        INTERCOM_LATITUDE,
        INTERCOM_LONGITUDE,
        0,
        0
      );

      expect(distance).toStrictEqual(0);
    });

    it('Should result in a distance of 0 if lat/long points are the same', () => {
      const distance = orthodromicDistance(
        EARTH_RADIUS_KM,
        INTERCOM_LATITUDE,
        INTERCOM_LONGITUDE,
        INTERCOM_LATITUDE,
        INTERCOM_LONGITUDE
      );

      expect(distance).toStrictEqual(0);
    });
  });
});
