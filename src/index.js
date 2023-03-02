import { fetchDataGofer, updateDom } from "./utils.js";

window.loadData = async function () {
  const btn = document.getElementById("btnFetch");
  btn.addEventListener("click", updateDom);

  const data = await fetchDataGofer();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = JSON.stringify(data, null, 2);
};
