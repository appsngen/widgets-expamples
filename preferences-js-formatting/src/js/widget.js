appstore.ready(function () {
    var datetime = moment();

    $('#GLOBAL_TIME_FORMAT_MASK_value').html(datetime.format('DD/MM/YYYY hh:mm:ss'));
    $('#GLOBAL_DATE_FORMAT_MASK_value').html(datetime.format('DD/MM/YYYY hh:mm:ss'));
    $('#GLOBAL_TIME_ZONE_value').html(datetime.format('DD/MM/YYYY hh:mm:ss'));

    var prefs = appstore.prefs.get();
    var generalNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_GENERAL_DECIMAL_PLACES_value').html());
    var largeNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_LARGE_NUMBER_DECIMAL_PLACES_value').html());
    var smallNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_SMALL_NUMBER_DECIMAL_PLACES_value').html());
    var ratioNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_RATIO_DECIMAL_PLACES_value').html());
    var percentNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_PERCENTAGE_DECIMAL_PLACES_value').html());
    var currencyNumber = parseFloat($('#GLOBAL_NUMBER_FORMAT_CURRENCY_DECIMAL_PLACES_value').html());
    var decimalSeparatorNumber = $('#GLOBAL_NUMBER_FORMAT_DECIMAL_SEPARATOR_value').html();
    var groupSeparatorNumber = $('#GLOBAL_NUMBER_FORMAT_GROUP_SEPARATOR_value').html();
    var negativeNumber = $('#GLOBAL_NUMBER_FORMAT_NEGATIVE_value').html();

    var applyGroupSeparator = function (value, separator) {
        var strValue = value.toString(),
            result = '',
            i;

        for (i = 0; i < strValue.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                result = separator + result;
            }
            result = strValue[strValue.length - 1 - i] + result;
        }

        return result;
    };
    var applyNegative = function (value, formatter) {
        if (value <= 0 || formatter === REGULAR) {
            return value.toString();
        } else {
            return '(' + value * -1  +')';
        }
    };

    $('#GLOBAL_TIME_FORMAT_MASK_result').html(datetime.format(prefs['GLOBAL_TIME_FORMAT_MASK']));
    $('#GLOBAL_DATE_FORMAT_MASK_result').html(datetime.format(prefs['GLOBAL_DATE_FORMAT_MASK']));
    $('#GLOBAL_TIME_ZONE_result').html(datetime.zone(prefs['GLOBAL_TIME_ZONE']).format(prefs['GLOBAL_TIME_FORMAT_MASK']));
    $('#GLOBAL_CONVERT_TIME_FORMAT_result').html(prefs['GLOBAL_CONVERT_TIME_FORMAT']);
    $('#GLOBAL_DISPLAY_TIME_ZONE_result').html(prefs['GLOBAL_DISPLAY_TIME_ZONE']);
    $('#GLOBAL_NUMBER_FORMAT_GENERAL_DECIMAL_PLACES_result').html(generalNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_GENERAL_DECIMAL_PLACES']));
    $('#GLOBAL_NUMBER_FORMAT_LARGE_NUMBER_DECIMAL_PLACES_result').html(largeNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_LARGE_NUMBER_DECIMAL_PLACES']));
    $('#GLOBAL_NUMBER_FORMAT_SMALL_NUMBER_DECIMAL_PLACES_result').html(smallNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_SMALL_NUMBER_DECIMAL_PLACES']));
    $('#GLOBAL_NUMBER_FORMAT_PERCENTAGE_DECIMAL_PLACES_result').html(percentNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_PERCENTAGE_DECIMAL_PLACES']) + '%');
    $('#GLOBAL_NUMBER_FORMAT_RATIO_DECIMAL_PLACES_result').html(ratioNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_RATIO_DECIMAL_PLACES']));
    $('#GLOBAL_NUMBER_FORMAT_CURRENCY_DECIMAL_PLACES_result').html(currencyNumber.toFixed(prefs['GLOBAL_NUMBER_FORMAT_CURRENCY_DECIMAL_PLACES']) + '$');
    $('#GLOBAL_NUMBER_FORMAT_DECIMAL_SEPARATOR_result').html(decimalSeparatorNumber.replace('.', prefs['GLOBAL_NUMBER_FORMAT_DECIMAL_SEPARATOR']));
    $('#GLOBAL_NUMBER_FORMAT_GROUP_SEPARATOR_result').html(applyGroupSeparator(groupSeparatorNumber, prefs['GLOBAL_NUMBER_FORMAT_GROUP_SEPARATOR']));
    $('#GLOBAL_NUMBER_FORMAT_NEGATIVE_result').html(applyNegative(negativeNumber, prefs['GLOBAL_NUMBER_FORMAT_NEGATIVE']));
    $('#GLOBAL_PREFERRED_SYMBOLOGY_result').html(prefs['GLOBAL_PREFERRED_SYMBOLOGY']);
    $('#GLOBAL_PREFERRED_COUNTRY_result').html(prefs['GLOBAL_PREFERRED_COUNTRY'] || '-');
    $('#GLOBAL_LANGUAGE_CODE_result').html(prefs['GLOBAL_LANGUAGE_CODE']);
});