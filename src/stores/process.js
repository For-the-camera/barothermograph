import { defineStore } from "pinia";

export const useProcessStore = defineStore("process", {
  state: () => ({
    page1: {
      totalTime: 0,
      responseTime: 0,
      answer: {}
    },
    // issue1
    page2: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult:[],
        lastResult: [],
        processAnswer: [],
      }

    },
    // issue2
    page3: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      }

    },
    // issue3
    page4: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],
      }
    },
    // issue4
    page5: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],
      }
    },
    // issue5
    page6: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      }
    },
    // issueExtra1
    page7: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      }
    },
    // issue6
    page8: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {
          guessNo: "",
          guess: "",
        },
        lastResult: {
          guessNo: "",
          guess: "",
        },
        processAnswer: [],
      }
    },
    // issue7
    page9: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        processAnswer: [],
      }
    },
    // issue8
    page10: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      }
    },
    // issue9
    page11: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        processAnswer: [],
      }
    },
  }),
});
