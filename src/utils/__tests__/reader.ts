import consumeFilePath from '../reader';

import { join } from 'path';

const PATH_FILE_TXT = join(__dirname, 'file.txt');

describe('[utils/reader] Unit Tests', () => {
  it('Should process each line from the file as expected', async () => {
    let increment = 1;

    const onLineParseCallback = (line: string) => {
      expect(line).toBeString();
      expect(line).toStrictEqual('line' + increment++);
    };

    await consumeFilePath(PATH_FILE_TXT, onLineParseCallback);
  });

  it('Should throw an error if the file does not exist', async () => {
    expect(consumeFilePath('fake/path.txt', () => {})).rejects.toThrow();
  });
});
