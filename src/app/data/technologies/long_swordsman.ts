import { Technology } from 'src/app/models/technology.model';
import { long_swordsman_research } from './long_swordsman_research';

export const long_swordsman: Technology = {
  "name": "long swordsman",
  "age": "castle",
  "color": "blue",
  "dependencies": [long_swordsman_research.name,],
}