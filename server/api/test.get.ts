export default defineCachedEventHandler(async event => {

  return await $fetch('https://fakestoreapi.com/products/1');
});
