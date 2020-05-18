
import { Technology } from 'src/app/models/technology.model'
import { crossbowman_research } from './crossbowman_research'
export const arbalester_research: Technology = {
  "name": "arbalester research",
  "age": "imperial",
  "color": "green",
  dependencies: [crossbowman_research.name],
}
