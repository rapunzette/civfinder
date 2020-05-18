import { Technology } from 'src/app/models/technology.model';
import { crossbowman_research } from './crossbowman_research';

export const crossbowman: Technology = {
  "name": "crossbowman",
  "age": "castle",
  "color": "blue",
  dependencies: [crossbowman_research.name,],
}