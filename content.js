chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.data !== undefined) {
        console.log(JSON.parse(msg.data));
        var all = JSON.parse(msg.data)
        console.log(all[0].test);
        var rate = all[0].test

        var myVideos = document.getElementsByTagName("video")
        console.log(myVideos);


        for (let i = 0; i < myVideos.length; i++) {
            myVideos[i].playbackRate = rate
        }

        console.log("after update ***** ");
        var docs = document.getElementsByTagName("iframe")
        iframes = process(docs)

        while (1) {
            if (iframes.length == 0) {
                console.log("bitti")
                break;
            }
            iframes = process(iframes)
        }

        console.log("end update ***** ");
    }

});


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
    other = []
    for (let i = 0; i < count; i++) {
        if (body.childNodes[i].tagName == "VIDEO") {
            videos[i] = body.childNodes[i]
        }
        other[i] = body.childNodes[i]

    }

    for (let i = 0; i < count; i++) {
        if (other[i].hasChildNodes()) {

        }

    }


    return videos;
}

function control(tag) {
    count = tag.childNodes.length;
    videos = []
    for (let i = 0; i < count; i++) {
        if (tag.childNodes[i].tagName == "VIDEO") {
            videos[i] = body.childNodes[i]
        }
        other[i] = body.childNodes[i]
    }
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

