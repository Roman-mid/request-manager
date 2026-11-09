import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Request } from '../../../shared/types/request.js';

const DATA_FILE = fileURLToPath(
  new URL('../../data/requests.json', import.meta.url),
);

export const requestRepository = {
  async findAll(): Promise<Request[]> {
    try {
      const content = await readFile(DATA_FILE, 'utf-8');

      return JSON.parse(content) as Request[];
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code === 'ENOENT'
      ) {
        await this.save([]);
        return [];
      }

      throw error;
    }
  },

  async findById(id: string): Promise<Request | undefined> {
    const requests = await this.findAll();

    return requests.find((request) => request.id === id);
  },

  async create(request: Request): Promise<Request> {
    const requests = await this.findAll();

    requests.push(request);

    await this.save(requests);

    return request;
  },

  async delete(id: string): Promise<boolean> {
    const requests = await this.findAll();
    const remainingRequests = requests.filter((request) => request.id !== id);

    if (remainingRequests.length === requests.length) {
      return false;
    }

    await this.save(remainingRequests);

    return true;
  },

  // записать массив в JSON
  async save(data: Request[]): Promise<void> {
    await mkdir(dirname(DATA_FILE), { recursive: true });

    await writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  },
};
