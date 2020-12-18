
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "Año");
    data.addColumn("number", "Poblacion");
    data.addRows([
        [2017, 14252],
        [2018, 23360],
        [2019, 40421],
        [2020, 43500],
      ]);

      var options = {'title':'Evolucion de la poblacion de Navalcarnero',
                       'width':700,
                       'height':300,
                       'backgroundColor': {fill:"green"}};

    var chart = new google.visualization.Table(document.getElementById('grafico'));

    chart.draw(data, options);
}

