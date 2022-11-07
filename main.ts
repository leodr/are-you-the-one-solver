import { Presets, SingleBar } from "cli-progress";
import {
  matchboxResults,
  matchedParticipantsLeft,
  matchingNightResults,
} from "./data";
import type { Match } from "./Match";
import type { MatchboxResult } from "./MatchBoxResult";
import { Females, Males } from "./people";

const progressBar = new SingleBar({}, Presets.shades_grey);

const possibleMatches: Array<Array<string>> = [];

const males = Object.keys(Males);
const females = Object.keys(Females);

const confirmedMatches: Match[] = getConfirmedMatches(
  matchedParticipantsLeft,
  matchboxResults
);

const malesToMatch = males.filter(
  (male) => !confirmedMatches.some((match) => match.male === male)
);
const femalesToMatch = females.filter(
  (female) => !confirmedMatches.some((match) => match.female === female)
);

for (let i = 0; i < malesToMatch.length; i++) {
  const possibleFemales = [];

  for (const female of femalesToMatch) {
    let isConfirmedNoMatch = false;

    for (const { isMatch, match } of matchboxResults) {
      if (
        !isMatch &&
        match.male === malesToMatch[i] &&
        match.female === female
      ) {
        isConfirmedNoMatch = true;
        break;
      }
    }

    if (!isConfirmedNoMatch) {
      possibleFemales.push(female);
    }
  }

  possibleMatches[i] = possibleFemales;
}

const counterList = Array.from({ length: malesToMatch.length }, () => 0);

const possible_match_combinations = [];

progressBar.start(malesToMatch.length, 0);

outerloop: while (true) {
  let all_girls: string[] = [];

  for (let i = 0; i < malesToMatch.length; i++) {
    all_girls.push(possibleMatches[i]![counterList[i]!]!);
  }

  // Skip this try if a woman is assigned to more man than possible

  const uniqueFemales = new Set(all_girls).size;

  const maleSurplus = males.length - females.length;

  if (all_girls.length - uniqueFemales > maleSurplus) {
    continue;
  }

  for (const matchingNight of matchingNightResults) {
    let counter = 0;

    for (const match of matchingNight.matches) {
      const femaleIndex = malesToMatch.indexOf(match.male);

      if (all_girls[femaleIndex] === match.female) counter++;
    }

    if (counter !== matchingNight.correctMatches) continue outerloop;
  }

  possible_match_combinations.push(
    malesToMatch.map((male, index) => [male, all_girls[index]])
  );

  for (let i = 0; i < malesToMatch.length; i++) {
    const malePossibleMatches = possibleMatches[i]!.length;

    if (counterList[i]! + 1 < malePossibleMatches) {
      counterList[i] += 1;
      break;
    } else {
      counterList[i] = 0;

      // If this overflows the last male in the list, stop.
      if (i + 1 === malesToMatch.length) {
        break outerloop;
      }

      if (i + 1) counterList[i + 1] += 1;

      progressBar.update(counterList[counterList.length - 1]);
    }
  }
}

console.log(possible_match_combinations);

function getConfirmedMatches(
  matchedParticipantsLeft: Match[],
  matchboxResults: MatchboxResult[]
) {
  const confirmedMatches: Match[] = [];

  for (const match of matchedParticipantsLeft) {
    confirmedMatches.push(match);
  }

  for (const matchboxResult of matchboxResults) {
    if (matchboxResult.isMatch) {
      confirmedMatches.push(matchboxResult.match);
    }
  }

  return confirmedMatches;
}
