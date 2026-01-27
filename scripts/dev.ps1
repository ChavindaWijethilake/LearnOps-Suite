# LearnOps Suite Development Server
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   LearnOps Suite - Starting All Apps" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Portal:              http://localhost:3000" -ForegroundColor Green
Write-Host "Billing:             http://localhost:3001" -ForegroundColor Green
Write-Host "Service Management:  http://localhost:3002" -ForegroundColor Green
Write-Host "Analytics:           http://localhost:3003" -ForegroundColor Green
Write-Host "Learning Hub:        http://localhost:3004" -ForegroundColor Green
Write-Host "Resource Center:     http://localhost:3005" -ForegroundColor Green
Write-Host "Project Tracker:     http://localhost:3006" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start pnpm dev
pnpm dev
