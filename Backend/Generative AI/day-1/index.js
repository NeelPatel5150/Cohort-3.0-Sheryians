import { ChatGroq } from "@langchain/groq";
import { END, START, StateGraph } from "@langchain/langgraph";
import dotenv from "dotenv";
import { tool } from "langchain";
import { createInterface } from "node:readline/promises";
import * as z from "zod";
dotenv.config();

const events = [];

const createEventTool = tool(
  async function ({ name, date, location }) {
    console.log(
      `Creating event: Name: ${name}, Date: ${date}, Location: ${location}`,
    );

    const event = { name, date, location };
    events.push(event);
    return `Event "${name}" created successfully!`;
  },
  {
    name: "create_event",
    description: "Creates a new event with the given name, date, and location.",
    schema: z.object({
      name: z.string().describe("The name of the event"),
      date: z.string().describe("The date of the event in YYYY-MM-DD format"),
      location: z.string().describe("The location of the event"),
    }),
  },
);

const getEventsTool = tool(
  async function ({}) {
    console.log("Retrieving events...");

    if (events.length === 0) {
      return "No events found.";
    }
    return events;
  },
  {
    name: "get_events",
    description: "Retrieves a list of all created events.",
    schema: z.object({}),
  },
);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

// const agent = createAgent({
//   model,
//   tools: [createEventTool,getEventsTool],
//   agentType: "chat-conversational-react-description",
//   verbose: true,
// });

/**
 * LLM Node
 */
async function LLMNode(state) {
  console.log("LLM Node ", state);

  return {
    messages: [
      ...state.messages,
        {
          role: "assistant",
          content: "Hello from LLM Node!",
        }
      
    ]
  }
}

const graph = new StateGraph(
  z.object({
    messages: z.array(z.any()),
  }),
)
  .addNode("LLMNode", LLMNode)
  .addEdge(START, "LLMNode")
  .addEdge("LLMNode", END)
  .compile()

const graphresult = await graph.invoke({
  messages: [
    {
      role: "user",
      content: "Hello World!",
    },
  ],
});

console.log("Graph Result: ", graphresult);

// while (true) {
//   const userInput = await readline.question("User: ");
//   const stream = await agent.stream({
//     messages: [
//       {
//         role: "user",
//         content: userInput,
//       }
//     ]
//   },{streamMode:"messages"});

//   for await (const [chunk , metadata] of stream) {
//     process.stdout.write(chunk.content);
//   }

//   process.stdout.write("\n");
// }

// const messages = [];

// while (true) {
//   const userInput = await readline.question("User: ");

//   messages.push({
//     role: "user",
//     content: userInput,
//   });

//   const response = await model.stream(messages);

//   let aiMessage = "";
//   for await (const chunk of response) {
//     aiMessage += chunk.content;
//     process.stdout.write(chunk.content);
//   }

//   messages.push({
//     role: "assistant",
//     content: aiMessage,
//   });

//   process.stdout.write("\n");
// }
