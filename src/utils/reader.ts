import { existsSync, createReadStream } from 'fs';

import { createInterface } from 'readline';

import { once } from 'events';

const consumeFilePath = async (
  filePath: string,
  onLineParseCallback: (...args: any[]) => void
) => {
  if (!existsSync(filePath)) {
    throw new Error('[utils/reader/consumeFilePath] Invalid file path');
  }

  const fileStream = createReadStream(filePath, 'utf8');
  const fileStreamLineInterface = createInterface({
    input: fileStream,
  });

  fileStreamLineInterface.on('line', onLineParseCallback);

  await once(fileStreamLineInterface, 'close');
};

export default consumeFilePath;
