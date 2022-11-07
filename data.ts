import { Match } from "./Match";
import { MatchboxResult } from "./MatchBoxResult";
import { MatchingNight } from "./MatchingNight";
import { Females, Males } from "./people";

export const matchboxResults = [
  new MatchboxResult(new Match(Females.Zoe, Males.Martin), false),
  new MatchboxResult(new Match(Females.Karina, Males.Pharrell), false),
  new MatchboxResult(new Match(Females.Celina, Males.Lukas), false),
  new MatchboxResult(new Match(Females.Ricarda, Males.Felix), false),
  new MatchboxResult(new Match(Females.Isabelle, Males.Pharrell), false),
  new MatchboxResult(new Match(Females.Cecilia, Males.Amadu), true),
  new MatchboxResult(new Match(Females.Anna, Males.Micha), true),
  new MatchboxResult(new Match(Females.Ricarda, Males.Pharrell), false),
];

export const matchingNightResults = [
  new MatchingNight(
    [
      new Match(Females.Franziska, Males.Max),
      new Match(Females.Anna, Males.Micha),
      new Match(Females.Celina, Males.Martin),
      new Match(Females.Ricarda, Males.Maurice),
      new Match(Females.Gina, Males.Calvin),
      new Match(Females.Cecilia, Males.Amadu),
      new Match(Females.Karina, Males.Pharrell),
      new Match(Females.Isabelle, Males.Lukas),
      new Match(Females.Luisa, Males.Fabio),
      new Match(Females.Zoe, Males.Luca),
    ],
    3
  ),
  new MatchingNight(
    [
      new Match(Females.Ricarda, Males.Maurice),
      new Match(Females.Isabelle, Males.Martin),
      new Match(Females.Anna, Males.Micha),
      new Match(Females.Gina, Males.Amadu),
      new Match(Females.Luisa, Males.Calvin),
      new Match(Females.Franziska, Males.Luca),
      new Match(Females.Celina, Males.Max),
      new Match(Females.Zoe, Males.Lukas),
      new Match(Females.Karina, Males.Fabio),
      new Match(Females.Cecilia, Males.Pharrell),
    ],
    2
  ),
  new MatchingNight(
    [
      new Match(Females.Franziska, Males.Lukas),
      new Match(Females.Karina, Males.Calvin),
      new Match(Females.Celina, Males.Fabio),
      new Match(Females.Zoe, Males.Max),
      new Match(Females.Isabelle, Males.Luca),
      new Match(Females.Luisa, Males.Pharrell),
      new Match(Females.Cecilia, Males.Amadu),
      new Match(Females.Ricarda, Males.Maurice),
      new Match(Females.Anna, Males.Martin),
      new Match(Females.Gina, Males.Micha),
    ],
    3
  ),
  new MatchingNight(
    [
      new Match(Females.Cecilia, Males.Amadu),
      new Match(Females.Anna, Males.Pharrell),
      new Match(Females.Franziska, Males.Micha),
      new Match(Females.Ricarda, Males.Max),
      new Match(Females.Zoe, Males.Luca),
      new Match(Females.Celina, Males.Fabio),
      new Match(Females.Karina, Males.Martin),
      new Match(Females.Isabelle, Males.Maurice),
      new Match(Females.Gina, Males.Felix),
    ],
    3
  ),
  new MatchingNight(
    [
      new Match(Females.Ricarda, Males.Pharrell),
      new Match(Females.Cecilia, Males.Maurice),
      new Match(Females.Anna, Males.Micha),
      new Match(Females.Franziska, Males.Max),
      new Match(Females.Celina, Males.Fabio),
      new Match(Females.Gina, Males.Felix),
      new Match(Females.Karina, Males.Calvin),
      new Match(Females.Zoe, Males.Luca),
      new Match(Females.Isabelle, Males.Martin),
    ],
    3
  ),
  new MatchingNight(
    [
      new Match(Females.Gina, Males.Felix),
      new Match(Females.Isabelle, Males.Martin),
      new Match(Females.Anna, Males.Micha),
      new Match(Females.Ricarda, Males.Pharrell),
      new Match(Females.Celina, Males.Fabio),
      new Match(Females.Karina, Males.Calvin),
      new Match(Females.Franziska, Males.Max),
      new Match(Females.Zoe, Males.Luca),
    ],
    4
  ),
  new MatchingNight(
    [
      new Match(Females.Franziska, Males.Calvin),
      new Match(Females.Celina, Males.Luca),
      new Match(Females.Karina, Males.Martin),
      new Match(Females.Zoe, Males.Maurice),
      new Match(Females.Ricarda, Males.Pharrell),
      new Match(Females.Gina, Males.Fabio),
      new Match(Females.Isabelle, Males.Felix),
    ],
    5
  ),
  new MatchingNight(
    [
      new Match(Females.Isabelle, Males.Felix),
      new Match(Females.Gina, Males.Calvin),
      new Match(Females.Franziska, Males.Max),
      new Match(Females.Ricarda, Males.Maurice),
      new Match(Females.Karina, Males.Martin),
      new Match(Females.Zoe, Males.Pharrell),
      new Match(Females.Celina, Males.Fabio),
    ],
    5
  ),
];

export const matchedParticipantsLeft = [new Match(Females.Luisa, Males.Lukas)];
