
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const heavy_scorpion_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "heavy scorpion research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
