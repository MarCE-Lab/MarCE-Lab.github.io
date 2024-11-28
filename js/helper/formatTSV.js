const formatTsv = (data) => {
  let lines = data.split("\n").filter(line => line.trim() !== ""); // Filter out empty lines
  let res = [];
  let headers = lines[0].split("\t");
  console.log("Lines");
  console.log(lines.length)
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split("\t");

    // Skip if the line doesn't have enough columns
    if (currentline.length !== headers.length) continue;
  
    for (var j = 0; j < headers.length; j++) {
      //obj[headers[j].replace("\r", "")] = currentline[j].replace("\r", "");
      obj[headers[j].replace("\r", "")] = currentline[j] ? currentline[j].replace("\r", "") : ""; // add null check
    }

    res.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(res); //JSON
};
