import { Technology } from 'src/app/models/technology.model';
import { pikeman_research } from './pikeman_research';

export const pikeman: Technology = {
  "name": "pikeman",
  "age": "castle",
  "color": "blue",
  dependencies: [pikeman_research.name],
}