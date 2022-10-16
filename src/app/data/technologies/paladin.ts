import { Technology } from 'src/app/models/technology.model';
import { paladin_research } from './paladin_research';

export const paladin: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "paladin",
  "age": "imperial",
  "color": "blue",
  dependencies: [paladin_research.name],
}