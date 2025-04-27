import {MemoryI} from '@baseai/core';

const memoryColdCallAiMemory = (): MemoryI => ({
	name: 'cold-call-ai-memory',
	description: "contains my resume",
	git: {
		enabled: false,
		include: ['documents/**/*'],
		gitignore: false,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryColdCallAiMemory;