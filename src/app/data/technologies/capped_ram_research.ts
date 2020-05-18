
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const capped_ram_research: Technology = {
  "name": "capped ram research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
