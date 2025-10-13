@echo off
REM Continue Workflows Demo - Quick Start Script for Windows
REM This script helps users get started quickly

echo ========================================
echo  Continue Workflows Demo - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/
    exit /b 1
)

echo ✓ Node.js found
node --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

echo.
echo Running initial tests (these will fail - that's expected!)...
call npm test -- --passWithNoTests 2>nul

echo.
echo Running security audit (vulnerabilities expected)...
call npm audit 2>nul

echo.
echo Checking lint issues (warnings expected)...
call npm run lint 2>nul

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo Current Status:
echo   - 3 failing tests (TypeError bug)
echo   - Multiple lint warnings
echo   - 1 high severity vulnerability (lodash)
echo   - Low test coverage (~45%%)
echo   - Missing documentation
echo.
echo Next Steps:
echo   1. Open Continue Hub: https://hub.continue.dev
echo   2. Connect your GitHub account
echo   3. Copy a prompt from WORKFLOWS.md
echo   4. Run it and watch the magic!
echo.
echo Start with: "Fix the TypeError in api/users.ts"
echo.
echo Happy testing!
pause