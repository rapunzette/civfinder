import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';

export const supplies: Technology = {
  "name": "supplies",
  "age": "feudal",
  "color": "green",
  parentName: barracks.name,
}