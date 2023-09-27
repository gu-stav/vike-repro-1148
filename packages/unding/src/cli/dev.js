import { startServer } from '../utils/server.js';

export async function dev() {
    try {
        await startServer({ env: 'development', config: {}, cwd: process.cwd() });
    } catch(error) {
        // silence
    }
}
