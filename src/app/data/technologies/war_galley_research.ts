
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const war_galley_research: Technology = {
  "name": "war galley research",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name],
}
