
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const capped_ram_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 300,
    "stone": 0
  },
  "name": "capped ram research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
