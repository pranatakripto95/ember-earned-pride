# Ember Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/competitions/u-mang-one-line-of-earned-pride-a0138557)
[![Rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/pranatakripto95/ember-earned-pride/rank.svg)](https://make.fun/competitions/u-mang-one-line-of-earned-pride-a0138557)
[![Reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/pranatakripto95/ember-earned-pride/reward.svg)](https://make.fun/competitions/u-mang-one-line-of-earned-pride-a0138557)

One line of quiet, earned pride. The line is:

> "The build went green at 3 a.m., and he sat there, afraid to touch anything."

Seventy-five characters, one read. A builder who fought a red build all
night finally sees it go green at 3 a.m. — and just sits there, afraid to
touch anything. No trophy, no podium, no congratulations: the effort is
felt, not explained, and the pride lands on the last word.

Three candidates were weighed before this one: "She changed one sign,
ran the tests, and a week of red turned green at 3 a.m." (80 chars —
states its triumph mid-line instead of landing it at the end), the pick
above (75 chars — the sharpest image, a builder who dares not disturb
the green build he finally earned), and "Nine rewrites in, the tenth run
passed, and he finally exhaled." (63 chars — shorter, but "finally
exhaled" is generic relief, not a scene).

## How it works

`main.ts` writes exactly that one line — no newline, no extra words — to
`/output/entry.txt`. It refuses to write anything that is not a single
line of 1–240 characters, then reads the file back and proves it holds
exactly that. No network, no secrets, no dependencies — just Node.

```sh
node main.ts
```

## Entry

Built for the make.fun bounty **One Line of Earned Pride**
(`u-mang-one-line-of-earned-pride-a0138557`) as `@pranata`.
