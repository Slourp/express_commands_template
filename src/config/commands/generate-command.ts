import fs from 'fs';
import path from 'path';
import readline from 'readline';
import ejs from 'ejs';
import { commandTemplate } from './commandTemplate';

const COMMANDS_PATH = 'src/commands';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Command name: ', (name) => {
    rl.question('Command description: ', (description) => {
        const content = ejs.render(commandTemplate, { name, description });

        const filename = `${name}.ts`;
        const filepath = path.join(COMMANDS_PATH, filename);

        fs.writeFileSync(filepath, content);

        console.log(`Command "${name}" created at ${filepath}`);
        rl.close();
    });
});
