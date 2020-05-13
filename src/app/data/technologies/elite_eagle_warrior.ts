import { Technology } from 'src/app/models/technology.model';
import { eagle_warrior } from './eagle_warrior';
import { imperial_age } from './imperial_age';

export const elite_eagle_warrior: Technology = {
  "name": "elite eagle warrior",
  "age": "imperial",
  "color": "blue",
  dependencies: [eagle_warrior.name, imperial_age.name],
}