import { defineStore } from "pinia";

export const usePPTStore = defineStore("ppt", {
  state: () => ({
    nowPage: {},
    answer: {
      issue1: "",
      issue2: "",
      issue3: [],
      issue4: [],
      issue5: "",
      issue6: {
        guessNo: "",
        guess: "",
      },
      issue7: [],
      issue8: "",
      issue9: "",
      issueExtra1: "",
    },

    putData: {
      issue4: false,
      issue7: false,
      issue8: false,
    }
  }),
});
