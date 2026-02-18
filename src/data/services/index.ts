import type { ServiceContent } from '@/lib/types';

import { concreteDriveways } from './concrete-driveways';
import { stampedConcrete } from './stamped-concrete';
import { concretePatios } from './concrete-patios';
import { concreteFoundations } from './concrete-foundations';
import { concreteRetainingWalls } from './concrete-retaining-walls';
import { garageFloors } from './garage-floors';
import { concreteSidewalks } from './concrete-sidewalks';
import { exposedAggregate } from './exposed-aggregate';
import { commercialConcrete } from './commercial-concrete';
import { concreteRepair } from './concrete-repair';
import { concreteLeveling } from './concrete-leveling';
import { poolDecks } from './pool-decks';
import { concreteSlabs } from './concrete-slabs';
import { decorativeConcrete } from './decorative-concrete';
import { concreteCurbing } from './concrete-curbing';
import { broomFinishConcrete } from './broom-finish-concrete';
import { polishedConcrete } from './polished-concrete';
import { concreteSealing } from './concrete-sealing';
import { coloredConcrete } from './colored-concrete';
import { concreteSteps } from './concrete-steps';

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  'concrete-driveways': concreteDriveways,
  'stamped-concrete': stampedConcrete,
  'concrete-patios': concretePatios,
  'concrete-foundations': concreteFoundations,
  'concrete-retaining-walls': concreteRetainingWalls,
  'garage-floors': garageFloors,
  'concrete-sidewalks': concreteSidewalks,
  'exposed-aggregate': exposedAggregate,
  'commercial-concrete': commercialConcrete,
  'concrete-repair': concreteRepair,
  'concrete-leveling': concreteLeveling,
  'pool-decks': poolDecks,
  'concrete-slabs': concreteSlabs,
  'decorative-concrete': decorativeConcrete,
  'concrete-curbing': concreteCurbing,
  'broom-finish-concrete': broomFinishConcrete,
  'polished-concrete': polishedConcrete,
  'concrete-sealing': concreteSealing,
  'colored-concrete': coloredConcrete,
  'concrete-steps': concreteSteps,
};
