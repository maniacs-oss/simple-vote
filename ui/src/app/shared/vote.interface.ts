import { User } from './';

export interface Vote {
	id: number;
	user_id: number;
	user?: User;
	candidate_id: number;
	vote: number;
	created: number;
}
