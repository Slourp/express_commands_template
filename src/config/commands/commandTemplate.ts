export const commandTemplate = `
import { Command } from 'commander';
import { CustomCommand } from '../config/commands/commandInterface';

class <%= name %>Command implements CustomCommand {
  public command: Command;

  constructor() {
    this.command = new Command('<%= name %>')
      .description('<%= description %>')
      .action(() => {
        console.log('This is a new command!');
      });
  }
}

export default new <%= name %>Command();
`;
