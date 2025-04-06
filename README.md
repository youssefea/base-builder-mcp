# Base Docs MCP

This repository is an implementation for [Base Docs](https://docs.base.org) Model Context Protocol (MCP).

## Build the server

First, let's build the server:

- Clone the repo and navigate to the directory:

```bash
git clone https://github.com/youssefea/docs-mcp
cd docs-mcp
```

- Install the dependencies and buid the server:

```bash
npm install
npx tsc
```

## Add to Cursor agent

### Steps

To add this MCP to your Cursor agent, **make your server is built** then add the following config to your project as shown in the cursor [documentation](https://docs.cursor.com/context/model-context-protocol):

```json
{
    "mcpServers": {
      "docs-mcp": {
        "command": "node",
        "args": ["/PATH_WHERE_REPO_IS_CLONED/docs-mcp/build/index.js"],
        "env": {
          "OPENAI_API_KEY": "XXXXXX" //OPENAI KEY IS OPTIONAL
        },
        "disabled": false,
        "autoApprove": []
      }
    }
  }
```

To add the MCP server to your project configuration, you need to create a json file at `.cursor/mcp.json`.

To add the MCP server to your global configuration, you need to create a json file at `\~/.cursor/mcp.json`.

✅ OPENAI Key is optional. It allows the server to create a json file of the guide instead of feeding raw guide text to your agent.

## Add to Claude Desktop

If you want to use Base Docs MCP on your Claude Desktop App, you can add the following config to filesystem as detailed in the Claude [MCP documentation](https://modelcontextprotocol.io/quickstart/user):

```json
{
    "mcpServers": {
      "docs-mcp": {
        "command": "node",
        "args": ["/PATH_WHERE_REPO_IS_CLONED/docs-mcp/build/index.js"],
        "env": {
          "OPENAI_API_KEY": "XXXX" //OPENAI KEY IS OPTIONAL
        },
        "disabled": false,
        "autoApprove": []
      }
    }
  }
```
This config should be added to the following paths:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

## Expected Result

After adding Base Docs MCP to your agent, you can use it by saying "I want to build with base". Using that should trigger a call to the Base Docs MCP server:

 ![Cursor Agent](https://i.imgur.com/uSp0vOG.png)
 *Cursor agent calling Base Docs MCP*

![Claude Agent](https://i.imgur.com/WNdcToq.png)
 *Claude agent calling Base Docs MCP*