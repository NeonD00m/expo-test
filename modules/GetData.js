const strokeWidth = 2;

function getTestData() {
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: strokeWidth, // optional
      },
    ],
  };
}

function getData(name) {

}

function formatData(points, labels) {
  return {
    labels: labels,
    datasets: [
      {
        data: points,
        strokeWidth: strokeWidth,
      },
    ],
  };
}

export {
  getData,
  getTestData,
};