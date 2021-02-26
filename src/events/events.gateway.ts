import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('findAll')
  findAll() {
    console.log('findAll');

    return 'c';
  }

  @SubscribeMessage('identity')
  async identity() {
    console.log('identity');
    
    return 'identity';
  }
}
