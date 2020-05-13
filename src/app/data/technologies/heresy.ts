
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const heresy: Technology = {
  dependencies: [monastery.name],
  "name": "heresy",
  "age": "castle",
  "color": "green",
}
