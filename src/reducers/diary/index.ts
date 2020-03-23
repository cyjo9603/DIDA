import produce from 'immer';

import {
  WriteDiaryRequest,
  WriteDiarySuccess,
  WriteDiaryFailure,
  WRITE_DIARY_REQUEST,
  WRITE_DIARY_SUCCESS,
  WRITE_DIARY_FAILURE,
} from './writeDiary';
import {
  UpdateDiaryRequest,
  UpdateDiarySuccess,
  UpdateDiaryFailure,
  UPDATE_DIARY_REQUEST,
  UPDATE_DIARY_SUCCESS,
  UPDATE_DIARY_FAILURE,
} from './updateDiary';
import {
  DeleteDiaryRequest,
  DeleteDiarySuccess,
  DeleteDiaryFailure,
  DELETE_DIARY_REQUEST,
  DELETE_DIARY_SUCCESS,
  DELETE_DIARY_FAILURE,
} from './deleteDiary';
import {
  GetDiaryListRequest,
  GetDiaryListSuccess,
  GetDiaryListFailure,
  GET_DIARY_LIST_REQUEST,
  GET_DIARY_LIST_SUCCESS,
  GET_DIARY_LIST_FAILURE,
} from './getDiaryList';

export interface DiaryContents {
  diaryNo: number;
  userCode: string;
  writeDiary: string;
  contents: string;
  diaryDate: string;
  score: number;
  isDeleteYn: number;
}

interface DiaryData {
  writeDate: string;
  contents: DiaryContents[];
}

export interface DiaryState {
  diaryLists: DiaryData[];
}

const diaryInitailState: DiaryState = {
  diaryLists: [],
};

type DairyReducerAction =
  | WriteDiaryRequest
  | WriteDiarySuccess
  | WriteDiaryFailure
  | UpdateDiaryRequest
  | UpdateDiarySuccess
  | UpdateDiaryFailure
  | DeleteDiaryRequest
  | DeleteDiarySuccess
  | DeleteDiaryFailure
  | GetDiaryListRequest
  | GetDiaryListSuccess
  | GetDiaryListFailure;

const diaryReducer = (state: DiaryState = diaryInitailState, action: DairyReducerAction) => {
  return produce(state, (draft: DiaryState) => {
    switch (action.type) {
      // write diary
      case WRITE_DIARY_REQUEST:
      case WRITE_DIARY_SUCCESS:
      case WRITE_DIARY_FAILURE:
        break;

      // update diary
      case UPDATE_DIARY_REQUEST:
      case UPDATE_DIARY_SUCCESS:
      case UPDATE_DIARY_FAILURE:
        break;

      // delete diary
      case DELETE_DIARY_REQUEST:
      case DELETE_DIARY_SUCCESS:
      case DELETE_DIARY_FAILURE:
        break;

      // get diary list
      case GET_DIARY_LIST_REQUEST:
      case GET_DIARY_LIST_FAILURE:
        break;
      case GET_DIARY_LIST_SUCCESS:
        action.userData.forEach(v => {
          let index = draft.diaryLists.findIndex(i => i.writeDate === v.diaryDate);
          if (index === -1) {
            draft.diaryLists.push({
              writeDate: v.diaryDate,
              contents: [],
            });
            index = draft.diaryLists.length - 1;
          }
          draft.diaryLists[index].contents.push(v);
        });
        break;

      default:
        break;
    }
  });
};

export default diaryReducer;
