/* Change the color of existing highlights */

//  Some predefined colors are:
//    color.yellow
//    color.green
//    color.cyan
//    color.magenta

//  Define your own color(s)
//    color.ltcyan = new Array("RGB", .75, 1, 1);

//  Choose highlights to change: all, pink, yellow, cyan, green -- checkboxes

//  Specify the color to be changed
//    var oldColor = color.cyan

var oDoc = event.target;
var aAnnts = oDoc.getAnnots();
var colHilite = color.yellow; //  Specify the new highlight color

for(var i=0;i<aAnnts.length;i++)
{
  if(aAnnts[i].type == "Highlight") // && color.equal(aAnnts[i].strokeColor, oldColor)
  {
    aAnnts[i].type = "Highlight";
    aAnnts[i].strokeColor = colHilite;
  }
}
