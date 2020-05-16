
import { Technology } from 'src/app/models/technology.model'
import { guard_tower_research } from './guard_tower_research'
import { imperial_age } from './imperial_age'
export const keep_research: Technology = {
  "name": "keep research",
  "age": "imperial",
  "color": "green",
  dependencies: [guard_tower_research.name, imperial_age.name],
}
