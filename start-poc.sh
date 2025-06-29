#!/bin/bash

echo "🏥 Starting FHIR POC for Saudi MOH (Replit Environment)"
echo "======================================================"

# Check if required directories exist
mkdir -p services/{converter,notifications,mobile-backend} dashboard config

echo "📦 Installing dependencies for converter service..."
cd services/converter
npm install
cd ../..

echo "🚀 Starting converter service..."
cd services/converter
npm start &
CONVERTER_PID=$!
cd ../..

echo "🎯 Starting main application..."
npm run dev &
DEV_PID=$!

echo "⏳ Waiting for services to initialize..."
sleep 5

echo ""
echo "🎯 POC Services Available:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 Main Dashboard:   http://0.0.0.0:5173"
echo "🔄 Converter API:    http://0.0.0.0:3000"
echo "📊 Backend API:      http://0.0.0.0:5000"
echo ""
echo "📋 Test the conversion (when services are ready):"
echo "curl -X POST http://0.0.0.0:3000/convert/hl7v2 \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"messageType\": \"ADT\", \"message\": \"MSH|...\"}'"
echo ""
echo "🎉 POC is ready for demonstration!"
echo ""
echo "Note: This is a simplified version for Replit environment."
echo "Full Docker-based deployment would include FHIR server, Keycloak, etc."

# Keep the script running
wait $CONVERTER_PID $DEV_PID