
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
import { watch_tower } from './watch_tower'
export const guard_tower: Technology = {
  dependencies: [university.name, watch_tower.name],
  "name": "guard tower",
  "age": "castle",
  "color": "red",
}
