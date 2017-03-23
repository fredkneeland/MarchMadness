/**
 * Script for generating a march madness bracket at codersbracket.com
 * Unfortunately it is no longer running
 *
 * TODO: convert to a google app engine project that uses data
 *       From previous years to build a neural net to estimate the
 *       Relationships between stats and wins
 *
 */

function(game, team1, team2) {
  // seed 1-16
  var seedVal = 1.0;
  // strength of schedule
  var rpiVal = 10.0;
  // field goal percentage
  var fgPct = 0.10;
  // free throw percentage
  var ftPct = 0.10;
  // three pointer percentage
  var threePct = 0.30;
  // rebounds per game
  var rBPG = 1.0;
  // steals per game
  var sPG = .50;
  // assists per game
  var aPG = .50;
  // turnovers per game
  var tPG = 0.30;

  var team1Score = 1.0;
  var team2Score = 1.0;

  // print

  console.log("rpi: ", team1.rpi);
  console.log("turnovers: ", team1.turnovers_per_game);
  console.log("field goals: ", team1.field_goal_pct);
  console.log("free throws: ", team1.free_throw_pct);
  console.log("three point: ", team1.three_point_pct);
  console.log("total_reb: ", team1.reb_per_game);
  console.log("steals_per_game: ", team1.steals_per_game);
  console.log("assists_per_game: ", team1.assists_per_game);

  // minimize values

  team1Score -= seedVal * team1.seed;
  team1Score -= tPG * team1.turnovers_per_game;

  team2Score -= seedVal * team2.seed;
  team2Score -= tPG * team2.turnovers_per_game;

  // maximize values

  team1Score += rpiVal * team1.rpi;
  team1Score += fgPct * team1.field_goal_pct;
  team1Score += ftPct * team1.free_throw_pct;
  team1Score += threePct * team1.three_point_pct;
  team1Score += rBPG * team1.reb_per_game;
  team1Score += sPG * team1.steals_per_game;
  team1Score += aPG * team1.assists_per_game;

  team2Score += rpiVal * team2.rpi;
  team2Score += fgPct * team2.field_goal_pct;
  team2Score += ftPct * team2.free_throw_pct;
  team2Score += threePct * team2.three_point_pct;
  team2Score += rBPG * team2.reb_per_game;
  team2Score += sPG * team2.steals_per_game;
  team2Score += aPG * team2.assists_per_game;

  if (team1Score > team2Score) {
    team1.winsGame();
  } else {
    team2.winsGame();
  }
}
