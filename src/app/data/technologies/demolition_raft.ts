
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
import { dock } from './dock'
export const demolition_raft: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "demolition raft",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name,]
}
