//
// Injected into google searches.
//    searches title block and returns matching xkcd.

var dataSet;
var hound;

var lastvalue

function oktoinject(){
    var bingPattern = /bing/i;
    var googlePattern = /google/i;
    if (googlePattern.test(window.location.href)) {
        browser = "google"
    }
    else if (bingPattern.test(window.location.href)) {
        browser = "bing"
    }
    if (browser == "google") {
        if ($("#lst-ib").val() !== lastvalue){
            lastvalue = $("#lst-ib").val()
            jQuery('#collapse').remove()
            inject(browser)
        }
    }
    else if (browser == "bing") {
        if ($(".b_searchbox").val() !== lastvalue){
            lastvalue = $(".b_searchbox").val()
            jQuery('#collapse').remove()
            inject(browser)
        }
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
