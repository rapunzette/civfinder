import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const sanctity: Technology = {
  dependencies: [monastery.name],
  "name": "sanctity",
  "age": "castle",
  "color": "green",
}
