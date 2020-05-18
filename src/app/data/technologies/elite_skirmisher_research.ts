
import { Technology } from 'src/app/models/technology.model'
import { archery_range } from './archery_range'
export const elite_skirmisher_research: Technology = {
  "name": "elite skirmisher research",
  "age": "castle",
  "color": "green",
  dependencies: [archery_range.name],
}
