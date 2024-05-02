var str = 'aaabbcdd';
function charCount(line) {
    var obj = {}
    var linelist = line.split('')
    linelist.forEach(item => {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    })
    var objVal = Object.values(obj).sort()
    console.log(1, objVal)
    var min = objVal[0]
    for (var k in obj) {
      if (obj[k] <= min) {
        var reg = new RegExp(k, 'g')
        line = line.replace(reg, '')
      }
    }
    console.log(line)
}
charCount(str);