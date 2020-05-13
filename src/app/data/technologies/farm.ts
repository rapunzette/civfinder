
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
export const farm: Technology = {
  "name": "farm",
  "age": "dark",
  "color": "red",
  dependencies: [mill.name]
}
