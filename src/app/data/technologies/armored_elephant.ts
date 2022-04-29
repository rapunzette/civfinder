import { Technology } from 'src/app/models/technology.model';
import { siege_workshop } from './siege_workshop';

export const armored_elephant: Technology = {
  "name": "armored elephant",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name],
}