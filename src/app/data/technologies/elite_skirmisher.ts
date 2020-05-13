import { Technology } from 'src/app/models/technology.model';
import { skirmisher } from './skirmisher';
import { castle_age } from './castle_age';

export const elite_skirmisher: Technology = {
  "name": "elite skirmisher",
  "age": "castle",
  "color": "blue",
  dependencies: [skirmisher.name, castle_age.name],
}