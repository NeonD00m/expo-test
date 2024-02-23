const strokeWidth = 2;

function getTestData() {
  return { //Real GDP
    name: 'Real GDP',
    similar: ['GDP', 'GDP_Capita'],
    graph: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: strokeWidth, // optional
        },
      ],
    }
  };
}

function getData(name) {
  let data;
  switch (name) {
    case 'S&P500':
      
      break;
    
    case 'RealGDP':

      break;
  
    default:
      break;
  };
  return data;
}

function formatData(name, similar, points, labels) {
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