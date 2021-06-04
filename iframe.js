$("#temp").click(function (e) {

    var docs = document.getElementsByTagName("iframe")
    iframes = process(docs)

    while (1) {
        if (iframes.length == 0) {
            console.log("bitti")
            break;
        }
        iframes = process(iframes)
    }


    function process(docs) {

        for (let i = 0; i < docs.length; i++) {
            var doc = docs[i].contentDocument;
            body = searchIframe(doc);

            console.log(body);
            console.log(searchBody(body))
        }

        console.log(inlineIframe(body))
        addIframes = inlineIframe(body)
        return addIframes;
    }

    function searchIframe(doc) {

        html = doc.childNodes[0];
        firstHead = html.childNodes[0];
        firstBody = html.childNodes[1];

        return firstBody;
    }

    function searchBody(body) {
        count = body.childNodes.length;
        videos = []
        for (let i = 0; i < count; i++) {
            if (body.childNodes[i].tagName == "VIDEO") {
                videos[i] = body.childNodes[i]
            }
        }

        return videos;
    }

    function inlineIframe(body) {
        count = body.childNodes.length;
        iframe = []
        for (let i = 0; i < count; i++) {
            if (body.childNodes[i].tagName == "IFRAME") {
                iframe[i] = body.childNodes[i]
            }
        }

        return iframe;
    }
});



