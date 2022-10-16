
import { Technology } from 'src/app/models/technology.model'
import { heavy_scorpion_research } from './heavy_scorpion_research'
export const heavy_scorpion: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "heavy scorpion",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_scorpion_research.name]
}
