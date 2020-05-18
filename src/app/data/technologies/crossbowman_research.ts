
import { Technology } from 'src/app/models/technology.model'
import { archery_range } from './archery_range'
export const crossbowman_research: Technology = {
  "name": "crossbowman research",
  "age": "castle",
  "color": "green",
  dependencies: [archery_range.name],
}
