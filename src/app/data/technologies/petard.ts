
import { Technology } from 'src/app/models/technology.model'
import { castle } from './castle'
export const petard: Technology = {
  "name": "petard",
  "age": "castle",
  "color": "blue",
  dependencies: [castle.name]
}
