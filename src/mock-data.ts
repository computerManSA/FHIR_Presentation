
import { PrismaClient } from '@prisma/client';

async function seedMockCodes() {
  const prisma = new PrismaClient();
  
  try {
    // Clear existing data
    await prisma.siteAccess.deleteMany({});
    await prisma.accessCode.deleteMany({});
    
    // Create 4 mock access codes
    const codes = [
      { code: "FHIR2024", maxUses: 1, description: "Developer Access" },
      { code: "HEALTH24", maxUses: 1, description: "Clinical Staff" },
      { code: "MOH2024", maxUses: 1, description: "Management Access" },
      { code: "TEST2024", maxUses: 1, description: "Test Access" }
    ];
    
    for (const codeData of codes) {
      await prisma.accessCode.create({
        data: codeData
      });
    }
    
    console.log("Mock data seeded successfully");
  } catch (error) {
    console.error("Error seeding mock data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedMockCodes();
