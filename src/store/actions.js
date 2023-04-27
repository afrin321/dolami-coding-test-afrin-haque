export function updateCurrentProduct(name) {
  //console.log("updating state: " + name);
  return {
    type: "UPDATE_CURRENT_PRODUCT",
    payload: name,
  };
}
