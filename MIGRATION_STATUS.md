# Cloudflare migration status

This branch is reserved for the Tarot Practice Lab migration from Floot to Cloudflare.

## Safety rules
- Keep the existing Floot app intact.
- Do not merge this branch into `main` or deploy to production until the owner reviews and approves the migration.
- Preserve all approved features, themes, card artwork, and user progress wherever export and migration allow.
- Never overwrite the current staging bundle on `main`.

## Current source assessment
The repository's `main` branch contains only a partial feature bundle ZIP and a README. The README explicitly identifies missing application pages, shared UI components, Floot runtime/configuration, database helpers/schema, uploaded assets, and full project export. It is not a deployable app yet.

Floot's account build-action limit is currently active and is scheduled to reset at 2026-11-23 04:00 UTC (2026-11-22 20:00 Pacific). Full source retrieval must resume after that reset.

## Planned target
- GitHub remains the source of truth.
- Cloudflare Workers with static assets and D1 are the preferred hosting/API/data target, subject to compatibility review of the recovered app.
- Use environment bindings/secrets for credentials; never commit secrets.
- Add automated build, typecheck, and feature regression checks before any preview deployment.

## Migration checklist
- [ ] Export and inventory the complete latest Floot source and dependencies.
- [ ] Export database schema and determine safe data migration path.
- [ ] Export uploaded assets and verify all 78 card entries and deck artwork.
- [ ] Replace Floot-specific runtime, auth, storage, and database integrations.
- [ ] Preserve all six destinations and five approved themes.
- [ ] Preserve learning path, guided interpretation coach, encyclopedia, research library, blind readings, journal, saved progress/resume, deck selection, and custom artwork behavior.
- [ ] Run production build, typecheck, tests, mobile/responsive checks, and feature-by-feature regression.
- [ ] Create a private/preview-only Cloudflare deployment for owner review.
- [ ] Obtain explicit approval before production deployment or changing the production branch.
