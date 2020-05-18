import { Technology } from 'src/app/models/technology.model';
import { champion_research } from './champion_research';

export const champion: Technology = {
  "name": "champion",
  "age": "imperial",
  "color": "blue",
  dependencies: [champion_research.name],
}