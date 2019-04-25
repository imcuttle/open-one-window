/**
 * @file detect-browser
 * @author imcuttle <moyuyc95@gmail.com>
 * @date 2019/4/25
 *
 */

let vName = 'abc'
exports.setName = name => (vName = name)

exports.detect = () => {
  return {
    name: vName
  }
}
