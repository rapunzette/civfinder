
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
import { watch_tower } from './watch_tower'
import { guard_tower_research } from './guard_tower_research'
export const guard_tower: Technology = {
  dependencies: [guard_tower_research.name, watch_tower.name],
  "name": "guard tower",
  "age": "castle",
  "color": "red",
}
