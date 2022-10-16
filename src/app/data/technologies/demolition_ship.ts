
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { demolition_raft } from './demolition_raft'
import { war_galley_research } from './war_galley_research'
export const demolition_ship: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "demolition ship",
  "age": "castle",
  "color": "blue",
  dependencies: [war_galley_research.name]
}
