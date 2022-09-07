import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.data],
      //   activeCycleId: action.payload.data.id,
      // };
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.data);
        draft.activeCycleId = action.payload.data.id;
      });
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() };
      //     } else {
      //       return cycle;
      //     }
      //   }),
      //   activeCycleId: null,
      // };
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId;
        });
        if (currentCycleIndex < 0) {
          return state;
        }
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FIHISHED:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() };
      //     } else {
      //       return cycle;
      //     }
      //   }),
      //   activeCycleId: null,
      // };
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId;
        });
        if (currentCycleIndex < 0) {
          return state;
        }
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });
    default:
      return state;
  }
}
