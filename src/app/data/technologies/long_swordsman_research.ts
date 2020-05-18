
import { Technology } from 'src/app/models/technology.model'
import { man_at_arms_research } from './man_at_arms_research'
export const long_swordsman_research: Technology = {
  "name": "long swordsman research",
  "age": "castle",
  "color": "green",
  dependencies: [man_at_arms_research.name],
}
