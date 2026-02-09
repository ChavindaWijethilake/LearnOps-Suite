# Architectural Diagrams

This document visualizes the LearnOps Suite architecture using Mermaid diagrams.

## System Component Map
How applications interact with shared packages.

```mermaid
graph LR
    subgraph Applications
        P[Portal]
        B[Billing]
        A[Analytics]
        L[Learning Hub]
    end

    subgraph "Shared Packages"
        UI[@learnops/ui]
        TH[@learnops/theme]
        DB[@learnops/db]
        SH[@learnops/shared]
    end

    P & B & A & L --> UI
    P & B & A & L --> TH
    P & B & A & L --> DB
    P & B & A & L --> SH
```

## Data Flow (Mock Database)
The persistence and synchronization mechanism across apps.

```mermaid
sequenceDiagram
    participant App as Application (Next.js)
    participant Store as Mock Store (@learnops/db)
    participant LS as LocalStorage (Browser)

    App->>Store: Request Data (e.g., Get Invoices)
    Store->>LS: Hydrate from LocalStorage
    LS-->>Store: Return Stored JSON
    Store-->>App: Return State Object

    App->>Store: Update Data (e.g., Pay Invoice)
    Store->>LS: Persist JSON to String
    LS-->>Store: Acknowledge Write
    Store-->>App: Emit Updated State
```

## Global Layout Hierarchy
Standardized structure for all suite applications.

```mermaid
graph TD
    Root[Root Layout] --> SL[SharedLayout]
    
    subgraph "Main Frame (SharedLayout)"
        SL --> Nav[Navbar]
        SL --> Grid[Main Body Grid]
        Grid --> Side[Sidebar]
        Grid --> Content[Page Component]
        SL --> Foot[Footer]
    end

    Content --> Cards[Industrial Cards]
    Content --> Tables[Data Grids]
```

## Build Pipeline
Standardized Next.js transpilation flow.

```mermaid
graph LR
    TS[TypeScript Source] --> NX[Next.js Build]
    UI[@learnops/ui] --> |Transpile| NX
    DB[@learnops/db] --> |Transpile| NX
    NX --> OUT[Static/Edge Bundle]
```
