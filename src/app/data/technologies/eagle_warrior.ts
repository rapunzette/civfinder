import { Technology } from 'src/app/models/technology.model';
import { eagle_scout } from './eagle_scout';
import { castle_age } from './castle_age';

export const eagle_warrior: Technology = {
  "name": "eagle warrior",
  "age": "castle",
  "color": "blue",
  dependencies: [eagle_scout.name, castle_age.name],
}