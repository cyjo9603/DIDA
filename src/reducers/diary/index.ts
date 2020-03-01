import IWriteDiary, {WRITE_DIARY_REQUEST} from './writeDiary';
import IUpdateDiary, {UPDATE_DIARY_REQUEST} from './updateDiary';
import IDeleteDiary, {DELETE_DIARY_REQUEST} from './deleteDiary';
import TGetDiaryList, {GET_DIARY_LIST_REQUEST, GET_DIARY_LIST_SUCCESS, GET_DIARY_LIST_FAILURE} from './getDiaryList';

interface IDiaryContents {
  diaryNumber: number;
  contents: string;
  score: number;
}

interface IDiaryData {
  writeDate: Date;
  userDiary: IDiaryContents;
  partnerDiary: IDiaryContents;
}

interface IDiaryState {
  diaryLists: IDiaryData[];
}

const diaryInitailState: IDiaryState = {
  diaryLists: [],
};

type DairyReducerAction = IWriteDiary | IUpdateDiary | IDeleteDiary | TGetDiaryList;

const diaryReducer = (state: IDiaryState = diaryInitailState, action: DairyReducerAction) => {
  switch (action.type) {
    // write diary
    case WRITE_DIARY_REQUEST: {
      return {
        ...state,
      };
    }

    // update diary
    case UPDATE_DIARY_REQUEST: {
      return {
        ...state,
      };
    }

    // delete diary
    case DELETE_DIARY_REQUEST: {
      return {
        ...state,
      };
    }

    // get diary list
    case GET_DIARY_LIST_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_DIARY_LIST_SUCCESS: {
      return {
        ...state,
      };
    }
    case GET_DIARY_LIST_FAILURE: {
      return {
        ...state,
      };
    }
  }
};
