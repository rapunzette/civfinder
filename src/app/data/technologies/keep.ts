
import { Technology } from 'src/app/models/technology.model'
import { guard_tower } from './guard_tower'
import { keep_research } from './keep_research'
export const keep: Technology = {
  "name": "keep",
  "age": "imperial",
  "color": "red",
  dependencies: [keep_research.name, guard_tower.name]
}
