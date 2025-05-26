import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Mock data with different patterns
const mockAccessCodes = [
  { code: "NPHIES24", maxUses: 1, description: "NPHIES Integration Access" },
  { code: "MOHNEXT2", maxUses: 1, description: "MOH Development Team" },
  { code: "FHIR2024", maxUses: 1, description: "FHIR Implementation Team" },
  { code: "VALTEST4", maxUses: 1, description: "Validation Testing" },
];

async function generateMockData() {
  try {
    // Clear existing data
    console.log("Clearing existing data...");
    await prisma.$transaction([
      prisma.siteAccess.deleteMany(),
      prisma.accessCode.deleteMany(),
    ]);

    // Insert new codes
    console.log("Generating new access codes...");
    const createdCodes = await Promise.all(
      mockAccessCodes.map((code) => prisma.accessCode.create({ data: code })),
    );

    console.log("Created access codes:", createdCodes);
    return createdCodes;
  } catch (error) {
    console.error("Error generating mock data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Execute if running directly
if (require.main === module) {
  generateMockData()
    .then(() => console.log("Mock data generation complete"))
    .catch(console.error)
    .finally(() => process.exit(0));
}

export { generateMockData };
