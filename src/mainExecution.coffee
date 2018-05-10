mainExecution = (event, context, callback)->
  await testingFunction("hello world")

testingFunction = (message)->
  console.log message

export default mainExecution