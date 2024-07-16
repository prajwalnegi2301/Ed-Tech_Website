// charts

const xVal = ["January", "February", "March", "April", "May", "June", "July", "August"];
const yVal = [0,7,8,9,10,11,12,14];

// hours chart
new Chart("hoursChart", {
  type: "line",
  data: {
    labels: xVal,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yVal,
      fill:false,
      label: "Hours spent per day"
    }]
  },
});

const colors = [
    'rgba(211, 219, 255, 0.8)', 
    'rgba(255, 211, 245, 0.8)', 
    'rgba(255, 211, 218, 0.8)', 
    'rgba(225, 255, 211, 0.8)', 
    'rgba(252, 255, 211, 0.8)', 
    'rgba(211, 255, 242, 0.8)', 
    'rgba(235, 211, 255, 0.8)', 
    'rgba(255, 234, 211, 0.8)'
];

// questions chart
new Chart("quesChart", {
  type: "bar",
  data: {
    labels: xVal,
    datasets: [{
      backgroundColor: colors,
      borderColor: "rgba(0,0,255,0.1)",
      data: yVal,
      fill:false,
      label: "Questions solved",
    }]
  },
  
});