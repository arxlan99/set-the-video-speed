value = 1
var autocorrect = false;

$("#increase").click(function (e) { 
    var speedRate = $("#rate").val();
    console.log(speedRate);
    if (speedRate == "" ) {
        $("#rate").val(value)
    } else {
        speedRate = parseFloat(speedRate)
        if (speedRate == 16) {
            speedRate = 16
            $("#rate").val(speedRate)
        }
        else{
            speedRate = speedRate + 0.25
            $("#rate").val(speedRate)
        }
     
    }

});

$("#decrease").click(function (e) { 
    var speedRate = $("#rate").val();

    if (speedRate == "" ) {
        $("#rate").val(value)
    } else {
        speedRate = parseFloat(speedRate)
        if(speedRate == 0.25 )
        {
            speedRate = 0.25
            $("#rate").val(speedRate)

        }
        else{
            speedRate = speedRate - 0.25
            $("#rate").val(speedRate)
        }

    }
});


$("#default").click(function (e) { 
    value = 1
    $("#rate").val(value)

    sendSpeed(value)  
});

$("#startSpeed").click(function (e) { 
    var text = $("#rate").val();

    sendSpeed(text)
});

function sendSpeed(text){        
    text = parseFloat(text)
    if (text > 16) {
        text = 16
        $("#rate").val(16)

    }

    var searchList = [{test:text}]
    var jsonSearchList = JSON.stringify(searchList);

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            data: jsonSearchList
        });
    });
}