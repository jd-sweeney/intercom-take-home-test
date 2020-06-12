export const insertionSortByObjectProp = (
  objects: any[],
  prop: string
): any[] => {
  if (!Array.isArray(objects) || !prop) {
    throw new Error(
      '[utils/insertionSortByObjectProp] Invalid parameters provided'
    );
  }

  let i, j;

  for (i = 0; i < objects.length; ++i) {
    const object = objects[i];

    if (
      typeof objects[i] === 'object' &&
      objects[i] &&
      !(
        typeof objects[i][prop] === 'number' ||
        typeof objects[i][prop] === 'string'
      )
    ) {
      throw new Error(
        '[utils/insertionSortByObjectProp] Invalid array item provided'
      );
    }

    let j;

    for (j = i - 1; j >= 0 && objects[j][prop] > object[prop]; --j) {
      objects[j + 1] = objects[j];
    }

    objects[j + 1] = object;
  }

  return objects;
};
