n=documents.length;
var docname = [];
var dn = [];
var a = '';
d=0;

w_i=activeDocument.width;
h_i=activeDocument.height;


while (d<n) {
    docname.push(String(documents[d]));
    
    l=String(docname[d]).length;

    if ( l == 19) {
        
        a = String(docname[d]);
        a=a.slice(-9,-1);
        dn.push(a);

    } else if ( l == 18) {

        a = String(docname[d]);
        a=a.slice(-8,-1);
        dn.push(a);

    } else if (l==17){

        a = String(docname[d]);
        a=a.slice(-7,-1);
        dn.push(a);

    }
    d++;   
}

dn=dn.reverse();

var pngOpts = new ExportOptionsSaveForWeb; 
pngOpts.format = SaveDocumentType.PNG
pngOpts.PNG8 = false; 
pngOpts.transparency = true; 
pngOpts.interlaced = false; 
pngOpts.quality = 100;

f=0;
i=2;
a=1;

while (i<(n/2)+1) {

    app.activeDocument = app.documents.getByName(String(dn[i-1]));
    var file = app.activeDocument;
    var selec =  file.selection; 
    var newRect = [ [Math.floor(w_i/2),0], [Math.floor(w_i/2),h_i], [0,h_i], [0,0] ]; // set coords for selection, counter-clockwise
    selec.select(newRect);
    app.activeDocument.selection.cut();
    documents.add(w_i,h_i,300,"D",NewDocumentMode.RGB)
    app.activeDocument.paste();
    activeDocument.activeLayer.applyOffset ( -Math.floor(w_i/4), 0, OffsetUndefinedAreas.REPEATEDGEPIXELS);
    app.activeDocument = app.documents.getByName(String(dn[n+1-i]));
    var file = app.activeDocument;
    var selec =  file.selection; 
    var newRect = [ [w_i,0],[w_i,h_i], [Math.floor(w_i/2),h_i], [Math.floor(w_i/2),0] ]; // set coords for selection, counter-clockwise
    selec.select(newRect);
    app.activeDocument.selection.cut();
    app.activeDocument = app.documents.getByName("D");
    app.activeDocument.paste();
    activeDocument.activeLayer.applyOffset ( Math.floor(w_i/4), 0, OffsetUndefinedAreas.REPEATEDGEPIXELS);
    savloc=File("C:/Users/amrit/Desktop/New folder/"+String(a)+"a.png");
    activeDocument.exportDocument(savloc, ExportType.SAVEFORWEB,pngOpts);
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    
    alert("Next")

    app.activeDocument = app.documents.getByName(String(dn[i-1]));
    var file = app.activeDocument;
    var selec =  file.selection; 
    var newRect = [ [w_i,0], [w_i,h_i], [Math.floor(w_i/2),h_i], [Math.floor(w_i/2),0] ]; // set coords for selection, counter-clockwise
    selec.select(newRect);
    app.activeDocument.selection.cut();
    documents.add(w_i,h_i,300,"D",NewDocumentMode.RGB)
    app.activeDocument.paste();
    activeDocument.activeLayer.applyOffset ( Math.floor(w_i/4), 0, OffsetUndefinedAreas.REPEATEDGEPIXELS);
    
    app.activeDocument = app.documents.getByName(String(dn[n+1-i]));
    var file = app.activeDocument;
    var selec =  file.selection; 
    var newRect = [ [Math.floor(w_i/2),0], [Math.floor(w_i/2),h_i], [0,h_i], [0,0] ]; // set coords for selection, counter-clockwise 
    selec.select(newRect);
    app.activeDocument.selection.cut();
    app.activeDocument = app.documents.getByName("D");
    app.activeDocument.paste();
    activeDocument.activeLayer.applyOffset ( -Math.floor(w_i/4), 0, OffsetUndefinedAreas.REPEATEDGEPIXELS);
    savloc=File("C:/Users/amrit/Desktop/New folder/"+String(a)+"b.png");
    activeDocument.exportDocument(savloc, ExportType.SAVEFORWEB,pngOpts);
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    alert("Next")
    a++;
    i++; 
}

app.activeDocument = app.documents.getByName(String(dn[0]));
savloc=File("C:/Users/amrit/Desktop/New folder/0b.png");
activeDocument.exportDocument(savloc, ExportType.SAVEFORWEB,pngOpts);
alert("Next...")

app.activeDocument = app.documents.getByName(String(dn[(n/2)]));
savloc=File("C:/Users/amrit/Desktop/New folder/"+String(a)+"a.png");
activeDocument.exportDocument(savloc, ExportType.SAVEFORWEB,pngOpts);
alert("Done.")

while (app.documents.length > 0)
{
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}