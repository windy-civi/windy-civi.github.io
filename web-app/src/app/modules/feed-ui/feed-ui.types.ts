import { Env, FeedData, FilterParams } from "@windycivi/domain/types";
import { RouteOption } from "./feed-ui.constants";

export interface FeedLoaderData extends FeedData {
  env: Env;
  filters: FilterParams;
  globalState: GlobalState;
}

export interface FeedProps extends FeedLoaderData {
  updateFilters: UpdateFiltersFn;
  updateGlobalState: UpdateGlobalStateFn;
  saveToFeed: (next: Partial<FilterParams>) => void;
  deleteAllData: () => void;
}

export interface GlobalState {
  lastVisited: string; // timestamp
  hideLLMWarning: boolean;
  route: RouteOption;
}

export type UpdateFiltersFn = (p: Partial<FilterParams>) => void;

export type UpdateGlobalStateFn = (p: Partial<GlobalState>) => void;

export type FeedFilterProps = FeedProps & {
  showAllReps?: () => void;
};
