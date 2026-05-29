---
name: WLC site audit findings
description: Results of Task #2 voice/brand audit against the full brand vault. What was fixed, what was clean, what is pending.
---

## Fixed (applied to site-build/wlc-launch)

| File | Violation | Fix |
|------|-----------|-----|
| `Home.tsx` usePageMeta title | "Household Stewardship" — banned phrase (vault §10) | → "Home Resets, House Calls, Resale · Los Angeles" |
| `Home.tsx` Gayle attribution | "— Gayle · Seattle" — vault §23 locks homepage to full name | → "— Gayle Williams · Seattle Client" |
| `FAQ.tsx` The Reset answer | "completely transform a closet" — "transform" banned (vault §10) | → "get a closet...back to fully functional" |
| `TheReset.tsx` FAQ answer | Same "completely transform" violation in the page's own FAQ copy | → "back to fully functional" |
| `TheReset.tsx` pricing table | "Payment due: At booking" — same conflict as HouseCalls | → "At time of service" |
| `FAQ.tsx` House Calls answer | "I'm particularly thoughtful about this" — floating claim, no operational grounding | → grounded rewrite |
| `HouseCalls.tsx` FAQ answer | Verbatim duplicate of the "thoughtful" violation | → grounded rewrite |
| `HouseCalls.tsx` pricing table | "Payment due: At booking" — conflicts with body text | → "At time of service" |

## Voice pass (Dayna's pillar descriptions integrated)

| Location | Before | After |
|----------|--------|-------|
| `Services.tsx` Pillar 02 tagline | "The things inside the walls. Documented before they become a burden." | "The relief of the life in the hidden things." |
| `Services.tsx` Pillar 02 desc | Generic walkthrough | "Most families don't know what they have until it's too late to ask..." |
| `Services.tsx` Pillar 03 tagline | "For the things life leaves unfinished." | "The person you used to be able to call." |
| `Services.tsx` Pillar 03 desc | Hourly help catch-all | The neighbor/partner/friend framing |
| `Services.tsx` Pillar 04 tagline | "Resale for the things still worth something — routed to where..." | "It flows from everything else." |
| `Services.tsx` Pillar 04 desc | Full-service resale logistics | "A Reset surfaces what you're ready to part with. Legacy work uncovers..." |
| `HouseCalls.tsx` hero | "observant, resourceful, and capable" | "There used to be a person you could call..." |
| `CuratedResalePillar.tsx` hero p2 | "Not everything belongs in a donation pile..." | "It flows from everything else. A Reset surfaces..." |
| `voice-profile.ts` canonicalCopy | No pillar descriptions | `canonicalPillarDescriptions` block with all 4 pillars |

## Clean (confirmed, no action)
- Hero copy matches locked vault §11 exactly
- Gayle full quote present in both Home.tsx and HouseCalls.tsx (not truncated)
- Footer: only @thewelllivedcitizen + @thewelllivedcloset present (personal accounts absent)
- Fast Bag Fill: 8-step flow, commission splits, 6-month check-in match vault §24
- Services.tsx Pillar 01 tagline "The relief of the room." — already matched Dayna's framing exactly

## Open (not yet fixed)
- `FAQ.tsx` confidentiality answer — "their households" (formal/internal language) — still in file
- `'older adults'` — check against one-use budget; confirm not over-referenced
- About.tsx: Rachel Corwin @ Spruce not yet named (vault §09/§21 — story not yet captured)
- Gayle reference budget: homepage = #1, HouseCalls = #2. At capacity — no new references without retiring one.
