import { startServer } from '../utils/server.js';

export async function start() {
    await startServer({ config: {}, cwd: process.cwd() });
}
