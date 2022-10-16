
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const war_galley_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "war galley research",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name],
}
