function inject() {
    function sync(datums) {
        jQuery(".appbar").after("<p>Test</p>");
    }
    hound.search($("#lst-ib").val(), sync)
}
