/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
var x=0,y=0;
var path =[];
path.push("00");
for (var i=0;i<s.length;i++){
    if (s[i]==="N"){
        y+=1;
    }
    else if (s[i]==="S"){
        y-=1;
    }
    else if (s[i]==="E"){
        x+=1;
    }
    else {
        x-=1;
    }
    var current = x.toString()+y.toString();
    if (path.includes(current)){
        return true;
    }
    else{
        path.push(current);}
}
return false;
};