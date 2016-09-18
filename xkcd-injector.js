//
// Injected into google searches.
//    searches title block and returns matching xkcd.

var dataSet;
var hound;

var lastvalue
function oktoinject(){
    if ($("#lst-ib").val() !== lastvalue){
        lastvalue = $("#lst-ib").val()
        jQuery('#collapse').remove()
        inject()
    }
}

function initialize(){
    dataSet = wrapper();
    hound = new Bloodhound({
        local: dataSet,
        identify: dataPoint => dataPoint.num,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: dataPoint => Bloodhound.tokenizers.whitespace(dataPoint.alt)
    });
    setInterval(oktoinject, 300)
}
jQuery(initialize);
