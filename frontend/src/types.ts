export type BountyStatus = 'open' | 'claimed' | 'disputed' | 'completed' | 'cancelled';

export interface Bounty {
  id: string;
  title: string;
  description: string;
  reward: string;
  status: BountyStatus;
  creator: string;
  assignee?: string;
  createdAt: string;
  maxAssignees: number;
  tags: string[];
  milestones: Array<{
    description: string;
    reward: string;
    completed: boolean;
  }>;
}

export interface BountyPage {
  bounties: Bounty[];
  nextCursor: string | null;
}

/** A single data point in a contributor's reputation over time. */
export interface ReputationPoint {
  /** ISO-8601 date string, e.g. "2024-03-15". */
  date: string;
  reputation: number;
}

export interface Contributor {
  address: string;
  reputation: number;
  completedBounties: number;
  /** Chronological history of reputation changes (oldest first). */
  reputationHistory: ReputationPoint[];
}

/** One entry in the leaderboard top-50 list. */
export interface LeaderboardEntry {
  rank: number;
  address: string;
  reputation: number;
  completedBounties: number;
}

export interface LeaderboardPage {
  entries: LeaderboardEntry[];
}
