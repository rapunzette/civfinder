
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const onager_research: Technology = {
  "name": "onager research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
