import FMGofer from "fm-gofer";

const fetchDataGofer = async (limit = 0) => {
  const query = { limit: limit + 1 };
  const result = await FMGofer.PerformScript(
    "Load Data",
    JSON.stringify(query),
    0
  );
  return JSON.parse(result);
};
const updateDom = async () => {
  const outputDiv = document.getElementById("output");
  const contents = outputDiv.innerHTML;
  const array = JSON.parse(contents);
  const length = array.length;
  const data = await fetchDataGofer(length);
  outputDiv.innerHTML = JSON.stringify(data, null, 2);
};

export { fetchDataGofer, updateDom };
