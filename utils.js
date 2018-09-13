function need(level) {
  var xp = [100, 110, 120, 130, 140
           , 999999999]
  return xp[level-1];
}

module.exports = {
  need:need
}
