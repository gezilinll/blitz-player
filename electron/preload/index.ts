import { contextBridge } from 'electron';
import { join } from 'node:path';

contextBridge.exposeInMainWorld('bridge', {
    node: require(join(__dirname, '../../libs/hello.node')),
});
