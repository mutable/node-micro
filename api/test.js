
const ApiTest = {}

module.exports = ApiTest;

ApiTest.count = (req, res) => {
  let i = 0
  while (i < 1e9) i++
  res.send("I counted to " + i)
}
