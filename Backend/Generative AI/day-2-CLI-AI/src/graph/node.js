import { ChatGroq } from "@langchain/groq";
import { FilesTool , ReadFileTool,ListFilesTool } from "../ai/tools/files.tool.js";
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

  const modelwithTools = model.bindTools([FilesTool, ReadFileTool, ListFilesTool]);

  const stream = await modelwithTools.stream(state.messages);

  let aiMessage = null;
  let hasText = false;
  for await (const chunk of stream) {
    const text = chunk.text ?? "";
    if (text) {
      if (!hasText) {
        process.stdout.write("[AI]: ");
        hasText = true;
      }
      process.stdout.write(text);
    }

    if (!aiMessage) aiMessage = chunk;
    else aiMessage = aiMessage.concat(chunk);
  }
  if (hasText) {
    process.stdout.write("\n");
  }

  return {
    messages: [...state.messages, aiMessage],
  };
}

export async function ToolNode(state , config)
{
  const messages = state.messages;
  const lastmessage = state.messages[state.messages.length - 1];
  const toolcalls = lastmessage.tool_calls ?? [];
  const tools = Object.fromEntries(
    [FilesTool, ReadFileTool, ListFilesTool].map((tool) => [tool.name, tool]),
  );

  const toolresults = await Promise.all(toolcalls.map(async toolcall => {
    const tool = tools[toolcall.name];

    if (!tool) {
      throw new Error(`Unknown tool requested: ${toolcall.name}`);
    }

    return await tool.invoke(toolcall);
  }));

  return {
    messages: [
      ...state.messages,
      ...toolresults
    ]
  }
}
