
String.prototype.toJadenCase = function () {
  let stringArray = this.split(/(\s+)/)
  let newArray = stringArray.map(word => word[0].toUpperCase() + word.slice(1))
  return newArray.join("")
};