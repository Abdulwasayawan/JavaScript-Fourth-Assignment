var userChart = prompt("Enter your desire Chracter");
var addit = " ";
for(var i = 0; i < userChart.length; i++){
    addit += userChart[i] + i;
    }
document.write(addit);
