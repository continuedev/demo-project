#!/bin/bash

# Continue Workflows Demo - Quick Start Script
# This script helps users get started quickly

echo "🚀 Continue Workflows Demo - Quick Start"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🧪 Running initial tests (these will fail - that's expected!)..."
npm test -- --passWithNoTests || true

echo ""
echo "🔍 Running security audit (vulnerabilities expected)..."
npm audit || true

echo ""
echo "📝 Checking lint issues (warnings expected)..."
npm run lint || true

echo ""
echo "======================================="
echo "✨ Setup Complete!"
echo ""
echo "📋 Current Status:"
echo "  • ❌ 3 failing tests (TypeError bug)"
echo "  • ⚠️  Multiple lint warnings"
echo "  • 🔴 1 high severity vulnerability (lodash)"
echo "  • 📉 Low test coverage (~45%)"
echo "  • 📝 Missing documentation"
echo ""
echo "🎯 Next Steps:"
echo "  1. Open Continue Hub: https://hub.continue.dev"
echo "  2. Connect your GitHub account"
echo "  3. Copy a prompt from WORKFLOWS.md"
echo "  4. Run it and watch the magic! ✨"
echo ""
echo "💡 Start with: 'Fix the TypeError in api/users.ts'"
echo ""
echo "Happy testing! 🎉"