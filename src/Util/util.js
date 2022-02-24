//환경별수 설정을 할예정이었으나, 배포시 env 파일 재설정하기 까다로워 변수로지정
export const API =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTA5MTIyMDQwNCIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2NDU2NjM3MzEsImV4cCI6MTY2MTIxNTczMSwiaWF0IjoxNjQ1NjYzNzMxfQ.PeKlU1BGgV2FVRM100mj3gz4JFHYrJlmMfGh-nn5L_M';

export const headers = {
  headers: {
    Authorization: API,
    ContentType: 'application/json',
  },
};
