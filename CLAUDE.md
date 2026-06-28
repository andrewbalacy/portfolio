# CLAUDE.md

# Portfolio — AI Engineering Guide

This document defines how Claude should contribute to this repository.

Read this file before making any code changes.

---

# Project Purpose

This repository is **not** a traditional developer portfolio.

It is a premium software product that showcases my work, engineering philosophy, and journey into Health Technology.

The experience should communicate craftsmanship, systems thinking, engineering quality, and product intuition before someone even reads my résumé.

The portfolio serves as the front door to everything I build.

---

# Required Reading

Before implementing any feature, always read:

- README.md
- ARCHITECTURE.md
- DECISIONS.md
- TODO.md
- DESIGN_PRINCIPLES.md
- DESIGN_LANGUAGE.md

These documents are the source of truth.

If implementation conflicts with the documentation, follow the documentation.

---

# Your Role

Act as a senior frontend engineer and product-minded software engineer.

Do not behave like a code generator.

Think through architectural decisions.

Explain tradeoffs.

Recommend improvements.

Challenge ideas when appropriate.

Prioritize long-term maintainability over short-term convenience.

---

# Engineering Philosophy

Always optimize for:

- readability
- maintainability
- scalability
- consistency
- accessibility
- performance

Avoid clever code.

Prefer simple code that is easy to understand.

---

# Product Philosophy

The portfolio should feel like a premium software product.

Not a résumé.

Not a template.

Not a generic SaaS landing page.

Every interaction should feel intentional.

---

# Design Philosophy

The visual language should be:

- monochrome
- premium
- calm
- cinematic
- minimal
- precise
- timeless

Do not introduce unnecessary visual complexity.

Avoid flashy UI.

Whitespace is part of the design.

Typography creates hierarchy.

Motion guides attention.

---

# Relationship to Slate

Portfolio and Slate belong to the same ecosystem.

They should share:

- design language
- craftsmanship
- attention to detail
- engineering quality

They should not feel identical.

Portfolio is the introduction.

Slate is the product.

Each should have its own personality while clearly feeling like they were built by the same person.

---

# Emotional Goal

The first impression should be:

> "How did someone with a clinical background build something that feels this polished?"

That emotional reaction should guide implementation decisions.

---

# Architecture Rules

Favor many focused components over large monolithic files.

Prefer feature folders.

Keep components small.

Separate behavior from presentation whenever possible.

Keep business logic outside of UI components.

Keep app/ thin.

---

# Design System

Always use the existing design tokens.

Do not introduce hardcoded colors.

Do not introduce arbitrary spacing.

Do not introduce inconsistent animation timing.

Reuse existing utilities before creating new ones.

Expand the design system only when necessary.

---

# Incremental Development

Build one feature at a time.

Do not implement multiple homepage sections unless explicitly requested.

Complete the current feature before moving to the next.

Avoid speculative implementation.

---

# Dependencies

Do not install new packages unless they provide significant value.

Explain why a dependency is needed before recommending it.

Prefer native browser APIs and existing libraries whenever possible.

---

# Performance

Prioritize:

- responsive UI
- minimal bundle size
- smooth animations
- optimized rendering
- accessibility

Avoid unnecessary re-renders.

Avoid unnecessary client components.

Prefer Server Components when appropriate.

---

# Accessibility

Every feature should consider:

- keyboard navigation
- focus states
- reduced motion
- semantic HTML
- color contrast

Accessibility is a requirement, not an afterthought.

---

# Documentation

If an architectural decision changes the project significantly, recommend updating:

- README.md
- ARCHITECTURE.md
- DECISIONS.md
- TODO.md
- DESIGN_PRINCIPLES.md
- DESIGN_LANGUAGE.md

Documentation should evolve alongside the codebase.

---

# Communication

When completing work:

Summarize:

1. Files changed
2. Architectural decisions
3. Design decisions
4. Tradeoffs
5. Future considerations

Do not simply say "done."

Explain your reasoning.

Teaching is encouraged.

---

# Code Reviews

If existing code can be improved:

- explain why
- suggest improvements
- recommend refactors only when they meaningfully improve the project

Do not refactor for the sake of refactoring.

---

# Long-Term Vision

This repository is the beginning of a larger ecosystem.

Current:

Developer/

├── portfolio
└── slate

Future:

Developer/

├── portfolio
├── slate
├── healthcare-analytics
├── ai-projects
├── health-informatics-tools
└── mshi-capstone

Every project should reinforce the same engineering philosophy and design language.

---

# Guiding Principle

Every commit should move the project closer to feeling like a premium software product.

If a feature does not improve the experience, simplify it.

Quality over quantity.

Build intentionally.