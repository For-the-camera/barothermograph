import { defineStore } from "pinia";

export const usePPTStore = defineStore("ppt", {
  state: () => ({
    nowPage: {},
    answer: {
      issue1: {
        firstResult: "",
        lastResult: "",
      },
      issue2: {
        firstResult: "",
        lastResult: "",
      },
      issue3: {
        firstResult: [],
        lastResult: [],
      },
      issue4: {
        firstResult: [],
        lastResult: [],
      },
      issue5: {
        firstResult: "",
        lastResult: "",
      },
      issue6: {
        firstResult: {
          guessNo: "",
          guess: "",
        },
        lastResult: {
          guessNo: "",
          guess: "",
        },
      },
      issue7: {
        firstResult: [],
        lastResult: [],
      },
      issue8: {
        firstResult: "",
        lastResult: "",
      },
      issue9: {
        firstResult: "",
        lastResult: "",
      },
      issueExtra1: {
        firstResult: "",
        lastResult: "",
      },
    },

    putData: {
      issue4: false,
      issue7: false,
      issue8: false,
    }
  }),
});
