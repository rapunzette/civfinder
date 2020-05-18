import { Technology } from 'src/app/models/technology.model';
import { elite_skirmisher_research } from './elite_skirmisher_research';

export const elite_skirmisher: Technology = {
  "name": "elite skirmisher",
  "age": "castle",
  "color": "blue",
  dependencies: [elite_skirmisher_research.name,],
}