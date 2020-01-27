/* Change the color of existing highlights to green */

var oDoc = event.target;
var aAnnts = oDoc.getAnnots();
var colHilite = color.green; //  Specify the new highlight color

for(var i=0;i<aAnnts.length;i++)
{
  if(aAnnts[i].type == "Highlight") 
  {
    aAnnts[i].type = "Highlight";
    aAnnts[i].opacity = "1.0";
    aAnnts[i].strokeColor = colHilite;
  }
}
