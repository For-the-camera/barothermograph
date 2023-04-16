import { defineStore } from "pinia";

export const usePPTStore = defineStore("ppt", {
  state: () => ({
    nowPage: {},
    answer: {
      issue1: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      },
      issue2: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],

      },
      issue3: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],

      },
      issue4: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],

      },
      issue5: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],

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
        processAnswer: [],

      },
      issue7: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],

      },
      issue8: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],

      },
      issue9: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],

      },
      issueExtra1: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      },
    },

    putData: {
      issue4: false,
      issue7: false,
      issue8: false,
    },
    checkedAnswer: false
  }),
});
