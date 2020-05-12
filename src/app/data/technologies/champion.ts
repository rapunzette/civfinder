import { Technology } from 'src/app/models/technology.model';
import { two_handed_swordsman } from './two_handed_swordsman';

export const champion: Technology = {
  "name": "champion",
  "age": "imperial",
  "color": "blue",
  parentName: two_handed_swordsman.name,
}