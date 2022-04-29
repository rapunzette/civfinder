import { Technology } from 'src/app/models/technology.model';
import { elite_elephant_archer_research } from './elite_elephant_archer_research';

export const elite_elephant_archer: Technology = {
  "name": "elite elephant archer",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_elephant_archer_research.name],
}