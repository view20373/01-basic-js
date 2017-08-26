const hello = require('./hello')

test('hello',() => {
  //Arrange
  let name = 'View'
  //Act
  let result = hello(name)
  //Asert
  expect(result).toBe('Hello View')
})
