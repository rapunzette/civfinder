
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
export const man_at_arms_research: Technology = {
  "name": "man at arms research",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name],
}
