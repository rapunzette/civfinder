
import { Technology } from 'src/app/models/technology.model'
import { two_handed_swordsman_research } from './two_handed_swordsman_research'
export const champion_research: Technology = {
  "name": "champion research",
  "age": "imperial",
  "color": "green",
  dependencies: [two_handed_swordsman_research.name],
}
