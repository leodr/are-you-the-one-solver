import { Match } from "./Match";
import { Females, Males } from "./people";

export class MatchingNight {
  constructor(public matches: Match[], public correctMatches: number) {
    const females: Set<Females> = new Set();
    const males: Set<Males> = new Set();

    for (const match of matches) {
      females.add(match.female);
      males.add(match.male);
    }

    if (females.size !== matches.length || males.size !== matches.length) {
      console.log(matches);

      throw Error("Incorrect matching night data.");
    }
  }
}
