---
description: Mandatory project development rules for Ayswariya Mahal website
---

# Project Development Rules (Apply to Every Task)

These rules are mandatory for every change made in this project.

## Code Quality

* Do **not** use patches, temporary fixes, or workaround code.
* Do **not** create duplicate components, duplicate functions, or duplicate logic.
* Do **not** create override CSS or patch styles.
* Do **not** add unnecessary wrappers or extra layers just to make something work.
* Do **not** use `!important` unless there is no other technically correct solution.
* Keep a **single source of truth** for every feature.

## Make Changes in the Original Code

If a behavior needs to change:

* Modify the original implementation.
* Refactor the existing code if required.
* Do **not** leave the old implementation and build another one beside it.
* Remove obsolete code after refactoring.
* Keep the codebase clean and maintainable.

## Existing Structure

* Reuse existing components whenever possible.
* Reuse existing animation variants.
* Reuse existing utility functions.
* Reuse existing styles.
* Do not duplicate the same logic in multiple files.

## Clean Architecture

Every change should:

* Follow the existing project architecture.
* Improve readability.
* Reduce complexity where possible.
* Remove dead code introduced during refactoring.
* Avoid unnecessary state variables, timers, effects, or event listeners.

## Performance

* Do not introduce unnecessary re-renders.
* Do not add expensive animations without justification.
* Keep animations GPU-friendly using `opacity` and `transform`.
* Avoid layout thrashing.

## Responsiveness

Every change must be verified on:

* Mobile
* Tablet
* Desktop

A fix for one breakpoint must not break another.

## Validation

After every task:

* Run `npm run lint`
* Run `npm run build`
* Verify there are no console errors.
* Ensure no visual regressions.
* Remove any temporary debug code before completion.

## Deliverable

Every implementation should be:

* Production-ready
* Clean
* Maintainable
* Scalable
* Free from patches, overrides, duplicate code, and unnecessary complexity.
