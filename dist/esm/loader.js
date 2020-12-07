import { p as promiseResolve, b as bootstrapLazy } from './index-395bc73e.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["shuffle-text",[[0,"shuffle-text",{"text":[1],"emptyChars":[1,"empty-chars"],"randomChars":[1,"random-chars"],"timeOut":[2,"time-out"],"openTime":[2,"open-time"],"mode":[1],"myReq":[32],"_text":[32],"outputText":[32],"initTime":[32],"startTime":[32],"originalLength":[32],"shuffleLength":[32],"outputLength":[32],"Element":[32]}]]]], options);
  });
};

export { defineCustomElements };
