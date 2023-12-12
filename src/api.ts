import { remultExpress } from 'remult/remult-express';
import { User } from './User';

export const api = remultExpress({
  entities: [User],
});
