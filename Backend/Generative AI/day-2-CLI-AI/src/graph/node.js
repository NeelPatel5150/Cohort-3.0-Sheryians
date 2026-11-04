import { ChatGroq } from "@langchain/groq";
import { AIMessage } from "langchain";
import { FilesTool } from "../ai/tools/files.tool.js";
import { getApiKey } from "../utils/file.utils.js";

/**
 * handles the LLM node logic for the state graph.
 * @param {Object} state - The current state of the graph.
 * @returns {Promise<Object>} - The updated state after processing the LLM node.
 * @param {Object} config - The configuration for the LLM node.
 */

export async function LLMNode(state, config) {
  // console.log("Config:", config);

  const response = await getApiKey();

  if (response.error) {
    throw new Error(response.error);
  }

  const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: response.apikey,
  });

  const modelwithTools = model.bindTools([FilesTool]);

  const stream = await modelwithTools.stream(state.messages);

  process.stdout.write("[AI]: ");

  let aiMessage = "";
  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
    console.log(chunk);
    aiMessage += chunk.text;
  }
  process.stdout.write("\n");

  return {
    messages: [...state.messages, new AIMessage(aiMessage)],
  };
}
