
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const heavy_scorpion_research: Technology = {
  "name": "heavy scorpion research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
