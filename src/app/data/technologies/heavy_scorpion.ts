
import { Technology } from 'src/app/models/technology.model'
import { heavy_scorpion_research } from './heavy_scorpion_research'
export const heavy_scorpion: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "heavy scorpion",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_scorpion_research.name]
}
