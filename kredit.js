function credit(Kr,T){
  var B = Kr/T;
  var S = [];var P = [];var L = [];var D = [];
  var SS,SP;
  SS = 0;SP = 0;
  L[1]=Kr;
  for(var i = 1;i<=T;i++){
    P[i]=L[i]*0.13/12;
    L[i]=Kr-B*i;
    L[i+1]=L[i];
    SP += P[i];
    S[i]=B+P[i];
    SS += S[i];
    D[i]=P[1]-P[i];
  }
  for(var i = 1;i<=T;i++){
    var cl='odd';
    if(i%2==0){
      cl='even';
    }
    document.write("<tr><td class='id'>"+i+"</td>");
    document.write("<td class='"+cl+"'>"+S[i].toFixed(2)+"</td>");
    document.write("<td class='"+cl+"'>"+B.toFixed(2)+"</td>");
    document.write("<td class='"+cl+"'>"+P[i].toFixed(2)+"</td>");
    document.write("<td class='"+cl+"'>"+L[i].toFixed(2)+"</td>");
    document.write("<td class='"+cl+"'>"+D[i].toFixed(2)+"</td></tr>");
  }
  document.write("<tr><th>Всего заплачено</th>");
  document.write("<th>"+SS.toFixed(2)+"</th>");
  document.write("<th>"+Kr.toFixed(2)+"</th>");
  document.write("<th>"+SP.toFixed(2)+"</th>");
  document.write("<th></th><th></th></tr>");
}