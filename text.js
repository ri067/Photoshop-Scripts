/*
*/

var pngOpts = new ExportOptionsSaveForWeb; 
pngOpts.format = SaveDocumentType.PNG
pngOpts.PNG8 = false; 
pngOpts.transparency = true; 
pngOpts.interlaced = false; 
pngOpts.quality = 100;


function readCSVFile(filepath) {
    var file = new File(filepath);
    if (!file.exists) {
        alert("File not found: " + filepath);
        return [];
    }
    
    file.open('r'); // Open the file for reading
    var content = file.read(); // Read the file content
    file.close();
    
    // Split the content into rows
    var rows = content.split('\n');
    
    // Read rows
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].length>1) {data.push(rows[i].split(',')); // Splitting cols by comma        
    }}
    
    return data;
}

var doc = app.activeDocument;

t=[]
for (var j =0; j<doc.layers.length; j++){
    var layer = doc.layers[j];
    if (layer.kind == LayerKind.TEXT){
        t.push(j);
    }}


// csv file path
var csvData = readCSVFile('C:/Users/amrit/Desktop/m.csv');



// Process the CSV data
for (var i = 0; i < csvData.length; i++) {
    var row = csvData[i];
    var layer = doc.layers[0];
    layer.textItem.contents = row[0];
    var layer = doc.layers[1];
    layer.textItem.contents = row[1];
    
    var saveFile = File('C:/Users/amrit/Desktop/placards/'+row[0]+'.png');
    doc.exportDocument(saveFile, ExportType.SAVEFORWEB, pngOpts);
}
        //layer.textItem.contents = row[k];
   // $.writeln(row[0]);
    //$.writeln(row[1]);
