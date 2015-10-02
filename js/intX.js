var intX = function(id){

  var language;

  function read(id){
    var ids = id.split(".");
    var text = internationalText[language];
    for(i in ids){
      text = text[ids[i]]
    }
    return text;
  }

  function isDefined(){
    var keys = Object.keys(internationalText);
    var i = 0;
    while(i < keys.length){
      if(keys[i] == language)
        return true;
      i++;
    }
    return false;
  }

  function getLang(){
    return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
  }


  function load(){
    var elements = getAllElementsWithAttribute('intx');
    for(i in elements){
      elements[i].innerHTML = read(elements[i].attributes.intx.value);
    }
  }

  function getAllElementsWithAttribute(attribute){
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++){
      if (allElements[i].getAttribute(attribute) !== null){
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }

  (function(){
    language = getLang();
    if(!isDefined()){
      language = internationalText._def;
    }
    load();
  })();
}