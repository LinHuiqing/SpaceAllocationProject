// initial state
// shape: [{ id, quantity }]
const state = {
  group_no: "",
  length: 1,
  breadth: 1,
  power_outlets: 0,
  monitors: 0,
  frames: 0,
  theme: "",
};

// actions
const actions = {
  submitGroupFBAsync({ commit }) {
    commit("submitGroupFB");
  },
};

// mutations
const mutations = {
  submitGroupFB() {
    alert("TEST: Form Submitted");
  },
  setGroupNo(state, groupNo) {
    state.group_no = parseInt(groupNo);
  },
  setLength(state, length) {
    // console.log("length", length);
    state.length = parseInt(length);
  },
  setBreadth(state, breadth) {
    // console.log("breadth", breadth);
    state.breadth = parseInt(breadth);
  },
  setPowerOutlets(state, powerOutlets) {
    state.power_outlets = parseInt(powerOutlets);
  },
  setMonitors(state, monitors) {
    state.monitors = parseInt(monitors);
  },
  setFrames(state, frames) {
    state.frames = parseInt(frames);
  },
  setTheme(state, theme) {
    state.theme = theme;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
