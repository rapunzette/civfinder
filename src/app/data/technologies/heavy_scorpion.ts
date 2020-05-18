
import { Technology } from 'src/app/models/technology.model'
import { heavy_scorpion_research } from './heavy_scorpion_research'
export const heavy_scorpion: Technology = {
  "name": "heavy scorpion",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_scorpion_research.name]
}
