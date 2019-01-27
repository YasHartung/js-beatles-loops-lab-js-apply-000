
function theBeatlesPlay (musicians, instruments) {
  var beatlesMembers = [];
  var i;
  for (i=0; i < musicians.length; i++){
    beatlesMembers[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return beatlesMembers;

}

function johnLennonFacts (facts) {
  var i=0;
  while ( i < facts.length ){
    facts[i] = facts [i] + "!";
    i++;
  }
  
}
