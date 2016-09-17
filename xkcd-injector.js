//
// Injected into google searches.
//    searches title block and returns matching xkcd.

var dataSet
var hound
function initialize(){
    dataSet = wrapper()
    hound = new Bloodhound({
        local: dataSet,
        identify: dataPoint => dataPoint.num
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: dataPoint => Bloodhound.tokenizers.whitespace(dataPoint.alt)
    }) 
}

initialize()
