import fs from "fs/promises";
import path from "path";
import { CONFIG_DIR } from "./constant.js";
/**
 * return the content of the seetings file (create if it's dosen't exist )
 */
export async function getSeetingsFile() {
  // Ensure the config directory exists

  try {
    await fs.access(CONFIG_DIR);
  } catch (error) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  }

  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  try {
    await fs.access(settingsFilePath);
    const content = await fs.readFile(settingsFilePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    // If the file doesn't exist, create it with default content
    await fs.writeFile(settingsFilePath, JSON.stringify({}), "utf-8");
    return {};
  }
}

/**
 * SAVE API KEY TO SEETINGS FILE
 */
export async function saveApiKey(apiKey) {
  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  const settingsContent = await getSeetingsFile();

  settingsContent.apikey = apiKey;

  await fs.writeFile(
    settingsFilePath,
    JSON.stringify({ ...settingsContent, apikey: apiKey }),
    "utf-8",
  );

  console.log("API key saved successfully!");
}

/**
 * GET Api Key 
 */
export async function getApiKey() {
  const settingsContent = await getSeetingsFile();
  return settingsContent.apikey || null;
}
