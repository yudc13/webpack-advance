const foo = (name) => {
  console.log('foo')
}

foo('jack')

new Promise(resolve => {
  resolve(1)
}).then()
