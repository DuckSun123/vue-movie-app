exports.handler = async function (even, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JAEHYUK',
      age: 28,
      email: 'happiness-0613@naver.com'
    })
  }
}