import { getSeetingsFile , saveApiKey ,getApiKey } from "./utils/file.utils.js";
import rl from "./utils/readline.js";

async function main() {
  const settings = await getSeetingsFile();
  
  if(!settings.apikey) {
   
    const apiKey = await rl.question("Please enter your API key: ");
    await saveApiKey(apiKey);
  }

  const apiKey = await getApiKey();
  console.log("Your API key is:", apiKey);

  rl.close();

}

export default main;
