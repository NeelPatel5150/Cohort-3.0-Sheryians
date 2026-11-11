import fs from "fs/promises";
import { tool } from "langchain";
import * as z from "zod";
import path from "path";

/**
 * Create , update at multiple file at once (create if not existed)
 */

export const FilesTool = tool(
  async function ({ files }) {
    await Promise.all(
      files.map(async (file) => {
        return fs.writeFile(file.path, file.content);
      }),
    );
    return "Successfully File Created.";
  },
  {
    name: "upsertFiles",
    description:
      "Create or update multiple files at once. If a file does not exist, it will be created.",
    schema: z.object({
      files: z
        .array(
          z.object({
            path: z
              .string()
              .describe("The path of the file to create or update."),
            content: z.string().describe("The content to write to the file."),
          }),
        )
        .describe("An array of files to create or update."),
    }),
  },
);
/**
 * List all the folder (recursively) and files in current folder(ignore hidden files and folders like .git , .vscode , .node_modules)
 */
export const ListFilesTool = tool(
  async function ({ folder }) {
    const results = [];
    const ignoredDirectories = new Set([".git", ".vscode", "node_modules"]);

    async function traverse(currentfolder) {
      const files = await fs.readdir(currentfolder, { withFileTypes: true });
      for (const file of files) {
        if (file.name.startsWith(".") || ignoredDirectories.has(file.name)) {
          continue;
        }

        const fullPath = path.join(currentfolder, file.name);
        if (file.isDirectory()) {
          await traverse(fullPath);
        } else {
          results.push(fullPath);
        }
      }
    }
    await traverse(folder);
    return JSON.stringify(results);
  },
  {
    name: "listFiles",
    description: "List all the folder and files in current folder.",
    schema: z.object({
      folder: z.string().describe("The path of the folder to list."),
    }),
  },
);

export const ReadFileTool = tool(
  async function ({ files }) {
    const results = await Promise.all(
      files.map(async (file) => {
        const content = await fs.readFile(file.path, "utf-8");
        return { path: file.path, content };
      }),
    );
    return JSON.stringify(results);
  },
  {
    name: "readFiles",
    description: "Read multiple files at once.",
    schema: z.object({
      files: z
        .array(
          z.object({
            path: z.string().describe("The path of the file to read."),
          }),
        )
        .describe("An array of files to read."),
    }),
  },
);
