# Qatar 2022 schedule

A match schedule for a certain football tournament, designed to be printed out and stuck on a fridge.

This was quickly hacked together on a weekend. It's not intended to be tracker for match results, I just wanted something that fulfils these criteria:

1. Clearly shows exactly which matches are when, in order (not clumped by venue or group).
2. Shows matches in a grid **in my local time zone**.
2. Doesn't waste printer ink with a bunch of frivolous graphics.

Every search for a match schedule online failed at least one of those criteria, so I built my own.

## :warning: NOTE: Display problems

1. This page only works properly in a browser that supports CSS `subgrid`. Right now that means Firefox and Safari only. (That's right, Chrome isn't first to everything.)
2. When viewing the page on a large monitor, the table might look weird. The page scales to browser width, but it's optimised for printing on A4 paper.

Like I said, I hacked it together in a day for myself.

## Local testing

```
npm i
npm run dev
```
