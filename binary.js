var docs = document.getElementsByTagName("iframe")
iframesBody = process(docs)

iframesAllTag= allTag(iframesBody)

var allVideos = [] 

function process(docs) {
    var body = []
    for (let i = 0; i < docs.length; i++) {
        var doc = docs[i].contentDocument;
        body.push(searchIframe(doc));
    }
    return body;

}

function searchIframe(doc) {
    html = doc.childNodes[0];
    firstHead = html.childNodes[0];
    firstBody = html.childNodes[1];

    return firstBody;
}

function allTag(iframesBody) {
   if (iframesBody.hasChildNodes()) {
       childControl(iframesBody)
   }
   else{
       console.log("bitti")
   }
}


function childControl(tag) {
    for (let i = 0; i < tag.childNodes.length; i++) {
       if(tag.childNodes[i].tagName == "VIDEO"){
           allVideos.push(tag.childNodes[i])
       }      
   }
}


