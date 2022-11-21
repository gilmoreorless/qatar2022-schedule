<script>
  import { flagClasses } from './flagClasses';

  export let match = {};
  export let colOffset = 0;

  const hour = match.date?.getHours() || 0;
  const col = hour + 2 - colOffset;
</script>

<div class="match" style="
  grid-column: {col} / {col + 2};
  grid-row: {match.isDoubleTime ? 2 : 1};
">
  <span class="num"><span>Match {match.matchNum}</span></span>
  <time class="time" datetime="{match.date.toISOString()}">
    {match.date.toLocaleString('en', { hour: 'numeric', hour12: false, minute: '2-digit' })}
  </time>
  <span class="round">{match.round}</span>
  <span class="team team1">
    <span class="fi fi-{flagClasses[match.team1]}"></span>
    {match.team1}
  </span>
  <span class="team team2">
    <span class="fi fi-{flagClasses[match.team2]}"></span>
    {match.team2}
  </span>
</div>

<style>
  .match {
    display: grid;
    grid-template-areas:
      "num time round"
      "num team1 team1"
      "num team2 team2";
    grid-template-columns: 1em 1fr 1fr;

    outline: 1px solid black;
    background-color: hsl(210, 100%, 95%);
    font-size: 1em;
    padding: 0.5em;
  }
  .num {
    grid-row: span 3;
    white-space: nowrap;
    position: relative;
  }
  .num > span {
    font-size: 0.8rem;
    display: block;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) rotate(-.25turn);
  }
  .time {
    grid-area: time;
  }
  .round {
    grid-area: round;
    text-align: right;
    padding-left: 0.5em;
  }
  .team {
    white-space: nowrap;
  }
  .team1 { grid-area: team1; }
  .team2 { grid-area: team2; }
</style>
