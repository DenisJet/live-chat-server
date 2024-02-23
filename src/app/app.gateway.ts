import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../Message/message.service';
import { Prisma } from '@prisma/client';
import { Message } from 'src/Message/schemas/message.schema';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private messageService: MessageService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client: Socket, payload: Message): Promise<void> {
    await this.messageService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }

  afterInit(server: any) {
    console.log(server);
  }

  handleConnection(client: Socket) {
    console.log(`Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }
}
