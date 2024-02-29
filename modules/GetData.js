const strokeWidth = 2;

function getTestData() {
  return getData('GDP');
}

//future items: (leading indicators) orders of capital goods, building permits
// (current indicators) personal income, retail sales?? IDK
function getData(name) {
  let data;
  switch (name) {
    // case 'S&P500':
    //   data = getTestData();
    //   break;
    case 'Inflation':
      data = formatData(
        'Inflation', ['RealGDP', 'GDP'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        [20, 45, 28, 80, 99, 43]
      );
      break;

    case 'RealGDP':
      data = formatData(
        'Real GDP', ['GDP', 'Inflation'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        [20, 45, 28, 80, 99, 43]
      );
      break;

    case 'GDP':
      data = formatData(
        '(Nominal) GDP', ['RealGDP', 'Inflation'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        [20, 45, 28, 80, 99, 43]
      );
      break;

    default:
      data = getData('GDP');
      break;
  };
  return data;
}

function formatData(name, similar, labels, points) {
  return {
    name: name,
    similar: similar,
    graph: {
      labels: labels,
      datasets: [
        {
          data: points,
          strokeWidth: strokeWidth,
        },
      ],
    }
  };
}

export {
  getData,
  getTestData,
};