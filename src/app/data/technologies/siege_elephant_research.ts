import { Technology } from 'src/app/models/technology.model';
import { armored_elephant } from './armored_elephant';

export const siege_elephant_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege elephant research",
  "age": "imperial",
  "color": "green",
  dependencies: [armored_elephant.name],
}