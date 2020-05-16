
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const fortified_wall_research: Technology = {
  "name": "fortified wall research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
