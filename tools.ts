import OpenAI from "openai";
import { getStepsListParams, testAgentResponseParams } from "./params.js";
import { z } from "zod";

export const getStepsList = async ({ guideLink }: z.infer<typeof getStepsListParams>) => {
    console.log("Received request for guide:", guideLink);
    try {
      const client = new OpenAI();
      
      // Remove the base URL prefix and ensure the path starts correctly
      const guidePath = guideLink.replace('https://docs.base.org', '');
      const githubRawUrl = `https://raw.githubusercontent.com/base/web/refs/heads/master/apps/base-docs/docs/pages${guidePath}.mdx`;
      console.log("Fetching from URL:", githubRawUrl);

      const response = await fetch(githubRawUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch guide: ${response.statusText}`);
      }
      const guide = await response.text();
      console.log("Successfully fetched guide content");

      // Process the guide content with GPT-4
      console.log("Processing with ChatGPT...");
      const result = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
          {
            role: "developer",
            content: "convert this guide into a structured JSON of actions, including all steps and gotchas:\n\n" + guide,
          },
        ],
      });
      const actions = result.output_text;
      console.log("Successfully processed guide content");

      return {
        content: [
          {
            type: "text" as const,
            text: actions,
          },
        ],
      };
    } catch (err) {
      const error = err as Error;
      console.error("Error processing guide:", error.message);
      return {
        content: [
          {
            type: "text" as const,
            text: `Error: ${error.message}`,
          },
        ],
      };
    }
  }

export const testAgentResponse = async ({ code }: z.infer<typeof testAgentResponseParams>) => {
  console.log("Received request for code:", code);
  try {
    const client = new OpenAI();
    const result = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "developer",
          content: "test this code and return the results:\n\n" + code,
        },
      ],
    });
    const actions = result.output_text;
    console.log("Successfully processed code");

    return {
      content: [
        {
          type: "text" as const,
          text: actions,
        },
      ],
    };
  } catch (err) {
    const error = err as Error;
    console.error("Error processing guide:", error.message);
    return {
      content: [
        {
          type: "text" as const,
          text: `Error: ${error.message}`,
        },
      ],
    };
  }
}
  