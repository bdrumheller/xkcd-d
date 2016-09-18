//
// Injected into google searches.
//    searches title block and returns matching xkcd.

var dataSet;
var hound;

var lastvalue

function oktoinject(browser){
    if (browser == "google") {
        if ($("#lst-ib").val() !== lastvalue){
            lastvalue = $("#lst-ib").val()
            jQuery('#collapse').remove()
            inject(browser)
        }
    }
    if (browser == "bing") {
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
    var bingPattern = /bing/i;
    var googlePattern = /google/i;
    if (googlePattern.test(window.location.href)) {
        setInterval(oktoinject("google"), 300)
    }
    else if (bingPattern.test(window.location.href)) {
        setInterval(oktoinject("bing"), 300)
    }
}
jQuery(initialize);
