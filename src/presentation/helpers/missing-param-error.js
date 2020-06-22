module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing Param ${paramName}`)
    this.name = 'MissingParamError'
  }
}
