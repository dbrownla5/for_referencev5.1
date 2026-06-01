# CRM & Intake — Canonical Spec
*Locked 2026-05-31 from Dayna. This is the backbone of the business. Build to this. Does NOT need to be built overnight — see phases at the end.*

## The core model: ONE intake form, conditional branching

There is **one intake form**, not a separate form per service. The questions branch — **each answer leads to a conditional next question** — so the same form handles every service path. The path the client takes only changes *which follow-up questions* appear and *what happens after submit*.

**Every submission — every path — captures into the CRM database.** No inquiry is ever just an email. Even people who reach out and don't book are captured.

## What each path triggers after submit

- **Fast Bag Pickup (resale) path** → in addition to the client record, it **opens a chain-of-custody workflow ticket** (the existing handshake) that **stays open for the entire chain of custody, through the sale process, to completion.** This is the only path that needs the full resale workflow ticket.
- **Reset / House Call / Legacy / general paths** → capture the client record and the booking/inquiry. **No resale chain-of-custody ticket, and no resale agreement**, unless and until the work turns into taking items for resale.
- **Conditional agreement rule:** a home visit does **not** require a resale agreement up front. The resale agreement only triggers **once Dayna decides she's actually taking clothes/items** for resale — at that point the e-sign resale agreement is generated for that client.

## The CRM (the real ask — "like Nordstrom's in-house CRM tool")

All intake flows feed a **client-record database** Dayna can work from. She must be able to:
- **Sort/filter clients** by who reached out and **when**.
- See **who booked vs. who didn't**.
- **Track clients over time** — make notes on them, see **how often they book** (booking frequency / history).
- **Tie it to a calendar** (bookings, follow-ups, pickups, sale milestones).
- All inside the **internal dashboard already built** (extend `/api/handshake/dashboard` into this CRM, behind auth).

Reference point: Nordstrom's custom in-house clienteling/CRM tool — a salesperson's view of their clients, history, notes, and outreach. That's the spirit; built for Dayna's business.

## Agreements = e-sign documents, attached to the profile — BUILD THIS FULLY

This is a required, fully-built feature — not a checkbox stub. The current typed-signature gate (`AgreementGate`) is only a starting point. Build the complete e-sign flow below.

**Trigger:** the resale chain-of-custody agreement generates on the Fast Bag Pickup path, OR when a non-resale visit converts to taking items (Dayna marks "taking items" on the client → generate the agreement).

**The full flow (all of it):**
1. **Generate the document** populated with the client's name, date, the service, the commission terms (pulled from `brand.ts` / `docs/SERVICES-PRICING.md`), and the resale chain-of-custody terms. One source agreement template; values filled per client. Version the template (so you record which version was signed).
2. **Client reviews + e-signs:** the full agreement is shown (scrollable, readable), then the client signs — typed (or drawn) name + an explicit "I intend to sign and agree to use an electronic signature" consent checkbox.
3. **Capture a real audit trail:** signer name, ISO-8601 timestamp, IP address, user agent, and the document version/hash that was signed.
4. **Produce a finalized signed PDF** (the agreement text + signature block + audit metadata) and **store it attached to the client's profile** in the CRM.
5. **Email the client a copy** on signing (Resend), and email/notify Dayna.
6. **Status tracking** per agreement: Draft → Sent → Viewed → Signed → (Declined). Visible on the client profile and filterable on the dashboard.
7. **Manual upload:** Dayna can upload/attach any document (PDF/image) to any client profile from the dashboard.
8. **Dashboard management:** view, download, and re-send agreements; see the signed copy + audit trail; filter clients by agreement status.

**Legal validity (required):** comply with the federal ESIGN Act and California UETA — show electronic-records consent, capture intent to sign, associate the signature with the specific record, retain the signed record, and provide the signer a copy. A vetted e-sign provider (e.g. Dropbox Sign / DocuSign API) is acceptable in place of a self-built flow, as long as the signed doc + audit trail still land on the client's profile. Flag for legal review before relying on it for disputes.

**Storage:** signed PDFs + uploads go in object storage (a Replit object-storage bucket is already configured in `.replit`) or DB blob, referenced from the client record.

**Definition of done:** a real client can be sent an agreement, review it, e-sign it, and the signed PDF + audit trail appears on their CRM profile and is downloadable by Dayna; Dayna can also upload her own documents to a profile; agreement status is visible and filterable on the dashboard. Anything less is not done.

## What already exists (build ON these, don't rebuild)
- **Handshake** = the resale chain-of-custody workflow ticket (intake gate → custody → inventory → evaluation → report → consent → review → payout). This is the "Fast Bag Pickup ticket."
- **Ops dashboard** at `/api/handshake/dashboard` — extend into the full CRM.
- **Contact + handshake intake** both persist to the database; intake email-falls-back if the DB is off (never lose a lead).
- **Client records:** `contact_submissions` + `handshakes` tables exist; unify them into one client model.

## Suggested phases (not overnight)
1. **One conditional intake form** + every submission creates/updates a **client record** in the CRM (all paths). Fast Bag path also opens the existing handshake ticket.
2. **CRM dashboard:** client list with sort/filter (reached-out date, booked vs. not), per-client profile with notes + booking history/frequency.
3. **Calendar** tie-in (bookings, follow-ups, pickups, sale milestones).
4. **E-sign agreements** generated on the resale path (and when a visit converts to taking items), stored/attached to the client profile, plus manual document upload.

## Rules for whoever builds this
- One form, conditional branching — never separate forms per service.
- Every path writes to the CRM. Capturing the lead is non-negotiable.
- Only the resale path needs the chain-of-custody ticket + resale agreement; other paths stay light until they convert.
- Build on the existing handshake + dashboard; unify `contact_submissions` and `handshakes` into one client record model.
