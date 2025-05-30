import { PipeI } from '@baseai/core';
import memoryColdCallAiMemory from '../memory/cold-call-ai-memory';

const pipeColdCallAi = (): PipeI => ({
	// Replace with your API key https://langbase.com/docs/api-reference/api-keys
	apiKey: process.env.LANGBASE_API_KEY!,
	name: 'cold-call-ai',
	description: 'generates emails for job description',
	status: 'private',
	model: 'openai:gpt-4o-mini',
	stream: true,
	json: false,
	store: true,
	moderate: true,
	top_p: 1,
	max_tokens: 1000,
	temperature: 0.7,
	presence_penalty: 1,
	frequency_penalty: 1,
	stop: [],
	tool_choice: 'auto',
	parallel_tool_calls: true,
	messages: [{ role: 'system', content: `Based on the job description and my resume attached, write a compelling cold email tailored to the job, highlighting my most relevant skills, achievements, and experiences. Ensure the tone is professional yet approachable, and include a strong call to action for a follow-up or interview.` }],
	variables: [],
	memory: [memoryColdCallAiMemory()],
	tools: []
});

export default pipeColdCallAi;
