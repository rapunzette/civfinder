
import { Technology } from 'src/app/models/technology.model'
import { guard_tower_research } from './guard_tower_research'
export const keep_research: Technology = {
  "name": "keep research",
  "age": "imperial",
  "color": "green",
  dependencies: [guard_tower_research.name,],
}
