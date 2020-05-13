
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { demolition_raft } from './demolition_raft'
export const demolition_ship: Technology = {
  "name": "demolition ship",
  "age": "castle",
  "color": "blue",
  dependencies: [castle_age.name, demolition_raft.name]
}
