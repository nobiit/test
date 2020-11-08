/*
 * Copyright(c) 2016 - 2020 NobiDev
 */


// noinspection JSUnusedGlobalSymbols
export default (async (): Promise<void> => {
  console.log('Starting ...');
  let delay = 10;
  while (delay > 0) {
    console.log(`Delay in ... ${delay}s`);
    await new Promise(done => setTimeout(done, 1000));
    delay--;
  }
  console.log('Ok !');
})();
