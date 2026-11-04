import { tool } from "langchain"
import path from "path";
import Path from "path"
import fs from "fs/promises"
import * as z from "zod"

/**
 * Create , update at multiple file at once (create if not existed)
 */

export const FilesTool = tool(
  async function ({ files }) {
    await Promise.all(files.map(async file => {
      return fs.writeFile(file.path , file.content)
    }))
    return "Successfully File Created."
  },
  {
    name:"upsertFiles",
    description: "Create or update multiple files at once. If a file does not exist, it will be created.",
    argsSchema: z.object({
      files: z.array(
        z.object({
          path: z.string().describe("The path of the file to create or update."),
          content: z.string().describe("The content to write to the file."),
        })
      ).describe("An array of files to create or update."),
    }),
  }
   
);


