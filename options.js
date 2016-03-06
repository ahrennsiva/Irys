var refresh = function(){
  chrome.tabs.getSelected(null, function(tab) {
    click_time = click_time + 1;
    chrome.tabs.reload(tab.id);
  });
};

function option_0() {
  chrome.storage.sync.set({
    "click": 0
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function option_1() {
  chrome.storage.sync.set({
    "click": 1
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function option_2() {
  chrome.storage.sync.set({
    "click": 2
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function option_3() {
  chrome.storage.sync.set({
    "click": 3
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function option_4() {
  chrome.storage.sync.set({
    "click": -1
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function end() {
  var element = document.getElementById("scrollbar");
  var a = element.scrollLeft;
  var b = element.offsetWidth;
  var c = Math.floor(a / b / 4);
  chrome.storage.sync.set({
    "bar1pos": a
  }, function() {
  });
  var data = document.getElementById("popup");
  data.innerHTML = c.toString();
  chrome.storage.sync.set({
    "mouseup": c
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function cbhend() {
  var element = document.getElementById("cbh");
  var a = element.scrollLeft;
  var b = element.offsetWidth;
  var c = Math.floor(a / b * 9);
  chrome.storage.sync.set({
    "bar2pos": a
  }, function() {
  });
  var data = document.getElementById("cphdata");
  data.innerHTML = c.toString();
  chrome.storage.sync.set({
    "cbhmouseup": c
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

var click_time = 0;

document.getElementById("0").addEventListener("click", option_0);
document.getElementById("1").addEventListener("click", option_1);
document.getElementById("2").addEventListener("click", option_2);
document.getElementById("3").addEventListener("click", option_3);
document.getElementById("4").addEventListener("click", option_4);

var text = document.getElementById("scrollbar");
text.onmouseup = end;
chrome.storage.sync.get("mouseup", function(data) {
        var c = data['mouseup'];
        var t = document.getElementById("popup");
        t.innerHTML = c.toString(); 
        chrome.storage.sync.get("bar1pos", function(data){
          text.scrollLeft = data['bar1pos']; 
        });
    }
);

var cbh = document.getElementById("cbh");
cbh.onmouseup = cbhend;
chrome.storage.sync.get("cbhmouseup", function(data) {
        var c = data['cbhmouseup'];
        var t = document.getElementById("cphdata");
        t.innerHTML = c.toString();
        chrome.storage.sync.get("bar2pos", function(data){
          cbh.scrollLeft = data['bar2pos']; 
        });
    }
);