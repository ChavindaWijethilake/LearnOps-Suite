# ADR-001: Modular Monolith Architecture

## Status
**Accepted**

## Context
LearnOps Suite is a multi-module education and services platform. It needed a scalable architecture pattern that balances development speed with maintainability.

## Decision
We adopt a **Modular Monolith** architecture within a **Monorepo**.

### Key Principles
1. **Domain Ownership**: Each module (Billing, Learning, Service Mgmt) owns its data exclusively.
2. **Service Layer**: Business logic is separated from UI via `@learnops/api`.
3. **Repository Pattern**: Data access is abstracted behind repositories with swappable adapters.
4. **Event-Driven Communication**: Modules communicate via a typed Event Bus, never by direct data access.
5. **Platform Core**: Cross-cutting concerns (Auth, RBAC, Audit, Logging) are centralized in `@learnops/platform`.

## Consequences
- New modules can be added without affecting existing ones.
- Storage backend can be swapped (LocalStorage → Postgres) with zero app code changes.
- Modules remain independently testable.
- Event Bus enables loose coupling while maintaining strong contracts.
