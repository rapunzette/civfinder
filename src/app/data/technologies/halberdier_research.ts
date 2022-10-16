
import { Technology } from 'src/app/models/technology.model'
import { pikeman_research } from './pikeman_research'
export const halberdier_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "halberdier research",
  "age": "imperial",
  "color": "green",
  dependencies: [pikeman_research.name,],
}