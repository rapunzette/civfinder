import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const stable: Technology = {
  cost: {
    "wood": 175,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "stable",
  "age": "feudal",
  "color": "red",
  dependencies: [barracks.name,]
}