const PiBy180 = Math.PI / 180;

export const EARTH_RADIUS_KM = 6371;

export const degreesToRadians = (degrees: number): number => {
  return degrees * PiBy180;
};

export const radiansToDegrees = (radians: number): number => {
  return radians / PiBy180;
};

export const orthodromicDistance = (
  sphereRadius: number,
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  if (!sphereRadius || (lat1 === lat2 && lon1 === lon2)) {
    return 0;
  }

  const lat1AsRads = degreesToRadians(lat1);
  const lat2AsRads = degreesToRadians(lat2);

  const haversineLat = haversineFunction(lat1, lat2);
  const haversineLon = haversineFunction(lon1, lon2);

  const a = Math.sqrt(
    haversineLat + Math.cos(lat1AsRads) * Math.cos(lat2AsRads) * haversineLon
  );

  return 2 * sphereRadius * Math.asin(a);
};

/**
 * @private
 *
 * @param x   Value in degrees
 * @param y   Value in degrees
 */
const haversineFunction = (x: number, y: number): number => {
  const diffAsRads = degreesToRadians(y - x);
  const sin = Math.sin(diffAsRads / 2);

  return sin * sin;
};

export default orthodromicDistance;
