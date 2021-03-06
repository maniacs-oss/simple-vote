import { Vote, User } from './';

export interface Candidate {
	id: number;
	user_id: number;
	user: User;
	question_id: number;
	title?: string;
	created: number;
	votes?: Array<Vote>;
	avg_score?: number;
	editable?: boolean;
	editing?: boolean;
}
