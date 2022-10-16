
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const war_galley_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "war galley research",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name],
}
