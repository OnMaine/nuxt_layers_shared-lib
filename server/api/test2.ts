
export default defineCachedEventHandler(async event => {
  const headers = useRequestHeaders()

  return {
    'test api 2 with header from lib/ Custom header:': headers['Custom header'],
  };
});
