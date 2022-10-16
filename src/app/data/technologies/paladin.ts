import { Technology } from 'src/app/models/technology.model';
import { paladin_research } from './paladin_research';

export const paladin: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "paladin",
  "age": "imperial",
  "color": "blue",
  dependencies: [paladin_research.name],
}