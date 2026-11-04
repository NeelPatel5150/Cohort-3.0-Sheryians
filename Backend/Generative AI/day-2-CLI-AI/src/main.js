import { saveApiKey, getApiKey } from "./utils/file.utils.js";
import rl from "./utils/readline.js";
import initGraph from "./graph/graph.js";

async function main() {
  let response = await getApiKey();

  while (response.error) {
    if (response.error !== "API key not found.") {
      console.log("Invalid or expired API key.");
    }

    const apiKey = (await rl.question("Please enter your API key: ")).trim();
    response = await getApiKey(apiKey);

    if (!response.error) {
      await saveApiKey(response.apikey);
    }
  }

  await initGraph();
}

export default main;
