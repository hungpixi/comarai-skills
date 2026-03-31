import { inngest } from "./client";

export const generateMarketingCampaign = inngest.createFunction(
  { id: "generate-marketing-campaign" },
  { event: "campaign/generate" },
  async ({ event, step }) => {
    const { prompt, orgId } = event.data;

    // Wait, let's step through the workflow
    const analyzeContext = await step.run("analyze-context", async () => {
      // Gọi LLM để phân tích prompt
      return { topic: prompt, audience: "General" };
    });

    const createPillars = await step.run("create-content-pillars", async () => {
      // Gọi Agent sinh Content Pillars
      return ["Pillar 1", "Pillar 2"];
    });

    return { success: true, analyzeContext, createPillars };
  }
);
