# Consolidated Foundation Map (Baseline: This Repository)

This map lists what is currently available to assemble, with readiness and integration cost.

## Available Copy Library (tagged)

| Item | Source | Phase | Use case | Readiness |
|---|---|---|---|---|
| Recognition-style homepage language | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/_work/site-copy-inventory.md` | D | Homepage / service intros | High |
| Gap diagnostic language (“frame with no tools”) | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/SITE-TOOLING-GAPS.md` | A | Product truth / implementation planning | High |
| Outcome-sell service phrasing | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/brand-source/marketing-strategy-2026-06-11.md` | C | Conversion copy / CTA framing | High |
| Core philosophy and positioning lines | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/brand-source/Brand-Foundation-Lines.md` | C | Messaging calibration | Medium |
| Voice constraints and banned-language guidance | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/BRAND-VOICE.md` | B | Editorial QA | High |
| Direct founder lineage language | `/home/runner/work/for_referencev5.1/for_referencev5.1/docs/brand-source/dayna-voice-capture-2026-06-11.md` | C | About/background credibility | High |

## Available Tool Library (tagged)

| Tool component | Source | Phase | Readiness | Integration cost |
|---|---|---|---|---|
| Contact API route | `/home/runner/work/for_referencev5.1/for_referencev5.1/artifacts/api-server/src/routes/contact.ts` | D | Built | Medium |
| Handshake API workflow | `/home/runner/work/for_referencev5.1/for_referencev5.1/artifacts/api-server/src/routes/handshake.ts` | D | Built | Medium |
| Handshake state engine | `/home/runner/work/for_referencev5.1/for_referencev5.1/artifacts/api-server/src/handshake/logic.ts` | D | Built | Low |
| Voice analysis API | `/home/runner/work/for_referencev5.1/for_referencev5.1/artifacts/api-server/src/routes/voice.ts` | D | Built | Low |
| Brand constants module | `/home/runner/work/for_referencev5.1/for_referencev5.1/artifacts/wlc-site/src/content/brand.ts` | D | Built | Low |
| Contact persistence schema | `/home/runner/work/for_referencev5.1/for_referencev5.1/lib/db/src/schema/contact.ts` | D | Built | Low |
| Handshake persistence schema | `/home/runner/work/for_referencev5.1/for_referencev5.1/lib/db/src/schema/handshake.ts` | D | Built | Low |
| OpenAPI contract package | `/home/runner/work/for_referencev5.1/for_referencev5.1/lib/api-spec/openapi.yaml` | D | Partial | Medium |

## Do / Don’t Use Rules (pattern-derived)

### Do
- Do treat every source as evidence and reconcile in the ledger first.
- Do extract by chronology before choosing what survives.
- Do link copy decisions to implementation paths (page/module/API), not just docs.
- Do keep one canonical location per fact in code constants where applicable.
- Do log non-use reasons immediately (duplicate, unresolved conflict, missing runtime path, or drift risk).

### Don’t
- Don’t treat “final/locked” wording as auto-authority without lineage check.
- Don’t merge copy or tool fragments without a source/date/context record.
- Don’t keep duplicate deploy paths untagged; they create silent non-use.
- Don’t close a wave without documenting what was intentionally not adopted and why.

