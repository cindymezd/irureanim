(async () => {
  let count = await GM_getValue("count", 0);
  console.log("The count is:", count);
})();
