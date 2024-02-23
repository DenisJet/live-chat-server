import { Controller, Get, Render, Res } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('/chat')
  @Render('index')
  Home(): string {
    return;
  }

  @Get('/api/chat')
  async getMessages(@Res() res) {
    const messages = await this.messageService.getMessages();
    res.json(messages);
  }
}
