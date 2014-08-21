appstore.ready(function () {
    var symbol = appstore.prefs.get().symbol;

    var request = {
        dataSourceId: 'sample_org.data',
        path : 'data',
        params: { symbols : [symbol] }
    };

    appstore.ajax(request)
        .success(function (response, code) {
            showResult(response)
        }).error(function (error, code) {
            showError(error);
        });
});

function showResult (response) {
    var name = response.symbols[0].name;
    var lastPrice = response.symbols[0].price;
    $("table tr:nth-child(2) td:first").text(name);
    $("table tr:nth-child(2) td:last").text(lastPrice);
}

function showError (error) {
    console.error(error.message);
}