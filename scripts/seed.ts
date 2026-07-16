/**
 * Seeds a demo account so the "Try demo login" button works immediately.
 * Run with: npm run seed
 */
import { auth } from "../lib/auth";

const DEMO_EMAIL = "demo@shareplate.app";
const DEMO_PASSWORD = "demopass123";
const DEMO_NAME = "Demo User";

async function main() {
  try {
    await auth.api.signUpEmail({
      body: {
        email: DEMO_EMAIL,
        password: DEMO_PASSWORD,
        name: DEMO_NAME,
      },
    });
    console.log(`Demo account ready: ${DEMO_EMAIL} / ${DEMO_PASSWORD}`);
  } catch (err: any) {
    if (String(err?.message || err).toLowerCase().includes("already")) {
      console.log("Demo account already exists — nothing to do.");
    } else {
      console.error("Failed to seed demo account:", err?.message || err);
      process.exitCode = 1;
    }
  }
}

main();
