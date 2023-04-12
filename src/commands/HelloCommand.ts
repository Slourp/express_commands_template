
import { Command } from 'commander';
import { CustomCommand } from '../config/commands/commandInterface';

class HelloCommandCommand implements CustomCommand {
  public command: Command;

  constructor() {
    this.command = new Command('HelloCommand')
      .description('fucking test')
      .action(() => {
        console.log('This is a new command!');
      });
  }
}

export default new HelloCommandCommand();
