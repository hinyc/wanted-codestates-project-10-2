import { dummyMatchesInfo } from '../Util/util';

const SET_USERINFO = 'userinfo/GET_USERINFO';

export const setUserInfo = (nickName, data) => ({
  type: SET_USERINFO,
  nickName,
  data,
});

const initialState = {
  nickName: window.localStorage.getItem('nickname')
    ? window.localStorage.getItem('nickname')
    : 'BBEESSTT',
  matches: JSON.parse(window.localStorage.getItem('matchInfo'))
    ? JSON.parse(window.localStorage.getItem('matchInfo'))
    : dummyMatchesInfo,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERINFO:
      return { nickName: action.nickName, matches: action.data };
    default:
      return state;
  }
}
