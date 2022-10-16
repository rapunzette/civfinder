
import { Technology } from 'src/app/models/technology.model'
import { pikeman_research } from './pikeman_research'
export const halberdier_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "halberdier research",
  "age": "imperial",
  "color": "green",
  dependencies: [pikeman_research.name,],
}