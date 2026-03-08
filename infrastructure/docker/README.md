# LearnOps Infrastructure — Docker

Docker Compose configuration for containerized services.

## Usage

```bash
# Start Postgres database
docker compose up -d postgres

# Start all services
docker compose up -d

# Stop all services
docker compose down

# Reset database
docker compose down -v
```
