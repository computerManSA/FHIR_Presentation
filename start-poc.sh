
#!/bin/bash

echo "🏥 Starting FHIR POC for Saudi MOH"
echo "=================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Create necessary directories
mkdir -p config services/{converter,notifications,mobile-backend} dashboard

echo "📦 Starting all services..."
docker-compose up -d

echo "⏳ Waiting for services to initialize..."
sleep 30

# Health checks
echo "🔍 Checking service health..."

# Check FHIR Server
if curl -sf http://localhost:8080/fhir/metadata > /dev/null; then
    echo "✅ FHIR Server is healthy"
else
    echo "⚠️  FHIR Server is still initializing..."
fi

# Check Converter Service
if curl -sf http://localhost:3001/health > /dev/null; then
    echo "✅ Converter Service is healthy"
else
    echo "⚠️  Converter Service is still initializing..."
fi

# Check Keycloak
if curl -sf http://localhost:8180/health > /dev/null; then
    echo "✅ Keycloak is healthy"
else
    echo "⚠️  Keycloak is still initializing..."
fi

echo ""
echo "🎯 POC Services Available:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔥 FHIR Server:      http://localhost:8080/fhir"
echo "🔐 Keycloak:         http://localhost:8180"
echo "🔄 Converter API:    http://localhost:3001"
echo "📱 Mobile Backend:   http://localhost:3003"
echo "📊 Dashboard:        http://localhost:5000"
echo ""
echo "📋 Test the conversion:"
echo "curl -X POST http://localhost:3001/convert/hl7v2 \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"messageType\": \"ADT\", \"message\": \"MSH|...\"}'"
echo ""
echo "🎉 POC is ready for demonstration!"
