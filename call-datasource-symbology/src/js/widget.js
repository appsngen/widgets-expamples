appstore.ready(function () {
    $("#update").click(function() {
        $("#symbology").empty();
        $("#update").attr("disabled", "disabled");

        resolve();
    });

    //'pipe' char is used as separator for symbols
    $("#from").change(function() {
        var value = this.value;
        var inputSymbols = "MSFT";
        switch (value) {
            case "Ticker":
                inputSymbols = "MSFT|AAPL";
                break;
            case "Ilx":
                inputSymbols = "IBM-N,USD,NORM|ANDAU-M,USD,NORM";
                break;
            case "ISIN":
                inputSymbols = "US4592001014|US5949181045";
                break;
            case "RIC":
                inputSymbols = "TIG.L|MSFT.O";
                break;
            case "LipperId":
                inputSymbols = "40000007|60074191";
                break;
            case "MICPlusTicker":
                inputSymbols = "XNYS IBM|XNYS XOM";
                break;
        }

        $("#symbols").val(inputSymbols);
    });

    function resolve(){
        var targetType = $("#to").val();
        var sourceType = $("#from").val();
        var symbols = $("#symbols").val().split("|");

        var request = {
            targetType: targetType,
            sourceType: sourceType,
            symbols: symbols,
            resolveAmbiguity: true, // always "true" in current implementation can be false in future versions
            callback: function (result) {
                $("#symbology").append($('<pre><code class="javascript" style="overflow: scroll;">' + JSON.stringify(result, undefined, 4) + '</code></pre>'));
                $('pre code').each(function (i, e) { hljs.highlightBlock(e, '	') });
                $("#update").attr("disabled", null);

                appstore.adjustHeight();
            }
        };

        try {
            appstore.symbology.resolve(request);
        }
        catch (e) {
            $("#update").attr("disabled", null);

            appstore.adjustHeight();

            alert(e.message);
        }
    }

    appstore.adjustHeight();

});