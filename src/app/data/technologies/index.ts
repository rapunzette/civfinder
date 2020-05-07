
import { Technology } from 'src/app/models/technology.model';

import { barracks } from './barracks';
import { eagle_scout } from './eagle_scout';
import { militia } from './militia';
import { archery_range } from './archery_range';
import { archer } from './archer';
import { skirmisher } from './skirmisher';
import { elite_skirmisher } from './elite_skirmisher';
import { hand_cannoneer } from './hand_cannoneer';
import { cavalry_archer } from './cavalry_archer';
import { arbalester } from './arbalester';
import { heavy_cavalry_archer } from './heavy_cavalry_archer';
import { crossbowman } from './crossbowman';
import { man_at_arms } from './man-at-arms';
import { thumb_ring } from './thumb_ring';
import { parthian_tactics } from './parthian_tactics';

export const technologies: Technology[] = [
  barracks,
  militia,
  man_at_arms,
  eagle_scout,

  archery_range,
  archer,
  crossbowman,
  arbalester,
  skirmisher,
  elite_skirmisher,
  hand_cannoneer,
  cavalry_archer,
  heavy_cavalry_archer,
  thumb_ring,
  parthian_tactics,
]