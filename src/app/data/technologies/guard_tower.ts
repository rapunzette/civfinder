
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const guard_tower: Technology = {
  dependencies: [university.name,],
  "name": "guard tower",
  "age": "castle",
  "color": "red",
}
