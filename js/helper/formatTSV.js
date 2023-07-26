const formatTsv = (data) => {
  let lines = data.split("\n");
  let res = [];
  let headers = lines[0].split("\t");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split("\t");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j].replace("\r", "")] = currentline[j].replace("\r", "");
    }

    res.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(res); //JSON
};
