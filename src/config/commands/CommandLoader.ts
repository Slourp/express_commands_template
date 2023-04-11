import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { CustomCommand } from '@configCommands/commandInterface';


const COMMANDS_PATH = 'src/commands';

async function loadCommands(commander: Command) {
    const commandFiles = fs.readdirSync(COMMANDS_PATH).filter((file) => file.endsWith('.ts'));

    for (const file of commandFiles) {
        const commandPath = path.join(COMMANDS_PATH, file);
        const commandModule = await import(commandPath);
        const customCommand = commandModule.default as CustomCommand;

        commander.addCommand(customCommand.command);
    }
}

const main = async () => {
    const commander = new Command();

    await loadCommands(commander);

    commander.parse(process.argv);
};

main();
