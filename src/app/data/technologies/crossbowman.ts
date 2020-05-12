import { Technology } from 'src/app/models/technology.model';
import { archer } from './archer';

export const crossbowman: Technology = {
  "name": "crossbowman",
  "age": "castle",
  "color": "blue",
  parentName: archer.name,
}