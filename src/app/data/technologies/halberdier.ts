import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { halberdier_research } from './halberdier_research';

export const halberdier: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "halberdier",
  "age": "imperial",
  "color": "blue",
  dependencies: [halberdier_research.name],
}