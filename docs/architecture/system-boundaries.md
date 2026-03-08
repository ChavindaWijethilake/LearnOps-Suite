# LearnOps Suite Architecture

```mermaid
graph TD
    Client[Web/Mobile Client] --> Nginx[Nginx Reverse Proxy]
    Nginx --> Gateway[API Gateway :4000]
    
    subgraph "LearnOps Modular Monolith"
        Gateway --> Portal[Portal App :3000]
        Gateway --> Billing[Billing App :3001]
        Gateway --> Services[Services App :3002]
        Gateway --> Analytics[Analytics App :3003]
        Gateway --> Learning[Learning App :3004]
    end
    
    subgraph "Platform Services"
        Billing --> EventBus((Event Bus))
        Services --> EventBus
        Learning --> EventBus
        Portal --> EventBus
        
        EventBus -.-> JobQueue[Background Jobs Worker]
        EventBus -.-> AnalyticsProj[Analytics Projections]
    end
    
    subgraph "Infrastructure"
        Billing -.-> Postgres[(Postgres DB)]
        Services -.-> Postgres
        Portal -.-> Postgres
        Learning -.-> Postgres
        
        Prometheus[Prometheus] -.-> Gateway
        Grafana[Grafana] -.-> Prometheus
    end
```

## Boundary Enforcement
- Modules communicate synchronously only via Gateway API boundaries or explicit shared contracts (`@learnops/contracts`).
- Modules communicate asynchronously via the typed `EventBus`.
- Domain boundaries (DDD) are strictly enforced within `packages/api/src/`.
- UI features are segmented per domain under `packages/ui/src/features/`.
