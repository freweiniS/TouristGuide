const getData = require('./index')
const appendChild = jest.fn()
document.body.appendChild = appendChild
test('should be defined', () => {
  expect(getData).toBeDefined()
})

test('to append to document.body',() => {
  getData()

  expect(appendChild.mock.calls.length).toBe(1)

})
