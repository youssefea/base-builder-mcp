import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import "dotenv/config";
import OpenAI from "openai";

const server = new McpServer({
  name: "docs-mcp",
  version: "1.0.0",
});

server.tool(
  "createActions",
  {
    guideLink: z
      .string()
      .describe(
        "The path to the technical documentation to create actions from"
      ),
  },
  async ({ guideLink }) => {
    console.log("Received request for guide:", guideLink);
    try {
      const client = new OpenAI();
      // Convert the guide path to GitHub raw content URL
      const githubRawUrl = `https://raw.githubusercontent.com/base/web/refs/heads/master/apps/base-docs/docs/pages${guideLink}.mdx`;
      console.log("Fetching from URL:", githubRawUrl);

      const response = await fetch(githubRawUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch guide: ${response.statusText}`);
      }
      const guide = await response.text();
      console.log("Successfully fetched guide content");

      // Define the expected response typ

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
      const actions = result.output_text
      console.log("Successfully processed guide content");

      return {
        content: [
          {
            type: "text",
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
            type: "text",
            text: `Error: ${error.message}`,
          },
        ],
      };
    }
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
