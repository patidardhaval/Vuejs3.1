module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue/hello-world/dist/'
    : '/'
}