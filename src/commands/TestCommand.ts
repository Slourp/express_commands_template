
import { CustomCommand } from '@configCommands/commandInterface';
import { Command } from 'commander';

class TestCommandCommand implements CustomCommand {
  public command: Command;

  constructor() {
    this.command = new Command('test:fire')
      .description('juste un test')
      .action(() => {
        console.log('This is a new command!');
      });
  }
}

export default new TestCommandCommand();
