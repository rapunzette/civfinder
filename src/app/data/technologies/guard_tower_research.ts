
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const guard_tower_research: Technology = {
  "name": "guard tower research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
