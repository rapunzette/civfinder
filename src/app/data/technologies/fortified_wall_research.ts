
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const fortified_wall_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "fortified wall research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
