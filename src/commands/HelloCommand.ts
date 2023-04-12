
import { CustomCommand } from '@configCommands/commandInterface';
import { Command } from 'commander';

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
