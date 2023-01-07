import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

import { CategoryAction } from './category.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

// for this reducer we only want respond to these 3 different actions
// PROBLEM: this reducer will only receive only CategoryAction <= {} as ...
//

export const categoriesReducer = (
  //
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction
): CategoriesState => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
