
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const scale_mail_armor: Technology = {
  dependencies: [blacksmith.name],
  "name": "scale mail armor",
  "age": "feudal",
  "color": "green",
}
