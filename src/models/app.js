
import { hashHistory } from 'dva/router';

export default {
  namespace: 'app',
  state: {
    sidebarFold: localStorage.getItem('sidebarFold') === 'true',
    fullScreen: localStorage.getItem('fullScreen') === 'true',
    sidebarBgColor: localStorage.getItem('sidebarBgColor') ? localStorage.getItem('sidebarBgColor') : 'red',
    sidebarBgImg: localStorage.getItem('sidebarBgImg') ? localStorage.getItem('sidebarBgImg') : '1',
    isShowSidebarBgImg: true,
  },
  subscriptions: {

    setup ({ dispatch }) {
    },

  },
  effects: {
    * lock ({
      payload,
    }, { call, put }) {
      hashHistory.push('/lock');
    },
    * unlock ({
      payload,
    }, { call, put }) {
      hashHistory.push('/dashboard');
    },
  },
  reducers: {
    switchSidebar (state) {
      localStorage.setItem('sidebarFold', !state.sidebarFold)
      return {
        ...state,
        sidebarFold: !state.sidebarFold,
      }
    },

    switchFullScreen(state) {
      localStorage.setItem('fullScreen', !state.fullScreen)
      return { ...state, fullScreen: !state.fullScreen };
    },

    switchSidebarBgColor(state, action) {
      localStorage.setItem('sidebarBgColor', action.payload)
      return { ...state, sidebarBgColor: action.payload };
    },

    switchSidebarBgImg(state, action) {
      localStorage.setItem('sidebarBgImg', action.payload)
      return { ...state, sidebarBgImg: action.payload };
    },

    switchIsShowSidebarBgImg(state) {
      return {
        ...state,
        isShowSidebarBgImg: !state.isShowSidebarBgImg,
      }
    },
  },
}
