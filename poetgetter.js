function print(){
  var input = document.getElementById('filename').value;
  document.getElementById("message").innerHTML = input + ". So there you go!";
  return null;
}

function getPoem(){

  //clear what's there already
  var name = document.getElementById('filename').value;
  var format = name.toLowerCase().replace(/[^a-z]/gi,"-")
  var url = "https://www.poetryfoundation.org/poets/"+format+"#about"
  var poetPage = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  var poetText = poetPage.getContentText()
  var links = poetText.match(/https\:\/\/www\.poetryfoundation\.org\/poems\/\d[^\"]+/gi)
  
  if(links!=null){
    
    var poemURL = UrlFetchApp.fetch(links[0], {'muteHttpExceptions': true});
    var poemPage = poemURL.getContentText()
    var title = /\<title>(.+)\s\|/gi.exec(poemPage)[1]
    var poemHTML = /data\-view\=\"PoemView\">([\s\S]+)<div\sclass\=\"o\-grid/gi.exec(poemPage)[1]
    var poemText = poemHTML.replace(/^\s+/,"").replace(/<br>/g,"\n").replace(/\<.+?\>/g,"")
    sheet.getRange('E21').setValue(title)
    sheet.getRange('E23').setValue("  "+poemText)
  
  } else { // ie if no links found
    sheet.getRange('E21').setValue("None found!")
  }
    

}

//*** EXTRA UTILITY FUNCTIONS ***//

// adding strip() function to Array.prototype, which flattens a 2d array and removes blanks

Array.prototype.strip = function(){
  return this.map(function(a) { return a[0] }).filter(function(a) { return a!="" })  
}

// a function to create a google doc with the 'text' param as its content

function makeDoc(text) {
  var doc = DocumentApp.openById(DocumentApp.create(sheet.getRange(5,5).getValue()+" poem").getId());
  doc.getBody().appendParagraph(text)
  doc.saveAndClose()
  return doc.getId()
}

// a function to format all initials, so WH => W. H.

function formatNames(){
  var poets = sheet.getRange('A2:A').getValues().strip()
  var arr = poets.map(function(a){
    if(/^[A-Z]{2}$/.exec(first)){
      var split = a.split(" ")
      var first = split[0]
      var rest = split.slice(1).join(" ")
      return [first[0]+". "+first[1]+". "+rest]
    } else return [a]
  })
  sheet.getRange(2,1,1253,1).setValues(arr)
}
