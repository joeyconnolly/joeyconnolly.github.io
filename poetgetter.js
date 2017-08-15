/* EXAMPLE FROM WEB

var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};
xhr.send(null);

*/

function print(){
  document.getElementById("version").innerHTML = "Version: 2.3";

  document.getElementById("poemBody").innerHTML = "No poem found yet";
  var name = document.getElementById('filename').value;
  var format = name.toLowerCase().replace(/[^a-z]/gi,"-")
  var url = "https://www.poetryfoundation.org/poets/"+format
  
  document.getElementById("message").innerHTML = url;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  var poemText = xhr.responseText;
  
  document.getElementById("poemBody").innterHTML = poemText
  
/*  var poetPage = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  var poetText = poetPage.getContentText()
  var links = poetText.match(/https\:\/\/www\.poetryfoundation\.org\/poems\/\d[^\"]+/gi)
  document.getElementById("poemHead").innerHTML = "first link: "+links[0];
  
  if(links!=null){
    
    var poemURL = UrlFetchApp.fetch(links[0], {'muteHttpExceptions': true});
    var poemPage = poemURL.getContentText()
    var title = /\<title>(.+)\s\|/gi.exec(poemPage)[1]
    var poemHTML = /data\-view\=\"PoemView\">([\s\S]+)<div\sclass\=\"o\-grid/gi.exec(poemPage)[1]
    var poemText = poemHTML.replace(/^\s+/,"").replace(/<br>/g,"\n").replace(/\<.+?\>/g,"")
    document.getElementById("poemHead").innerHTML = title;
    document.getElementById("poemBody").innerHTML = poemText;
  
  } else { // ie if no links found
    document.getElementById("poemBody").innerHTML = "Nothing found!";
  }
  
  */
  
}


  
//*** EXTRA UTILITY FUNCTIONS ***//

// adding strip() function to Array.prototype, which flattens a 2d array and removes blanks

Array.prototype.strip = function(){
  return this.map(function(a) { return a[0] }).filter(function(a) { return a!="" })  
}
