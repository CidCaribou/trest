async function registerSW() {
  const _0x56e4b3 = (function () {
    let _0x3d7282 = true
    return function (_0x51ae9d, _0x418603) {
      const _0x39a1ea = _0x324c3b
      const _0x418dce = _0x3d7282
        ? function () {
            if (_0x418603) {
              const _0x854eb = _0x418603.apply(_0x51ae9d, arguments)
              return (_0x418603 = null), _0x854eb
            }
          }
        : function () {}
      return (_0x3d7282 = false), _0x418dce
    }
  })()
  const _0x6f6be1 = _0x56e4b3(this, function () {
    return _0x6f6be1
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x6f6be1)
      .search('(((.+)+)+)+$')
  })
  _0x6f6be1()
  const _0x135ea6 = (function () {
    let _0x42323c = true
    return function (_0x4b0d7b, _0x3285e3) {
      const _0x40ca52 = _0x42323c
        ? function () {
            if (_0x3285e3) {
              const _0x30e363 = _0x3285e3.apply(_0x4b0d7b, arguments)
              return (_0x3285e3 = null), _0x30e363
            }
          }
        : function () {}
      return (_0x42323c = false), _0x40ca52
    }
  })()
  ;(function () {
    _0x135ea6(this, function () {
      const _0x2aaa6d = new RegExp('function *\\( *\\)'),
        _0x4e4e37 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x259721 = _0x46f424('init')
      if (
        !_0x2aaa6d.test(_0x259721 + 'chain') ||
        !_0x4e4e37.test(_0x259721 + 'input')
      ) {
        _0x259721('0')
      } else {
        _0x46f424()
      }
    })()
  })()
  const _0x2800c8 = (function () {
      let _0x511fcc = true
      return function (_0x2109ec, _0x407f91) {
        const _0x1601c5 = _0x511fcc
          ? function () {
              if (_0x407f91) {
                const _0x2bd9b9 = _0x407f91.apply(_0x2109ec, arguments)
                return (_0x407f91 = null), _0x2bd9b9
              }
            }
          : function () {}
        return (_0x511fcc = false), _0x1601c5
      }
    })(),
    _0x9f2f7f = _0x2800c8(this, function () {
      let _0x424793
      try {
        const _0xb1a84 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x424793 = _0xb1a84()
      } catch (_0x172ccf) {
        _0x424793 = window
      }
      const _0x47aedb = (_0x424793.console = _0x424793.console || {}),
        _0x30d9cc = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let _0x26b840 = 0; _0x26b840 < _0x30d9cc.length; _0x26b840++) {
        const _0x4b8299 = _0x2800c8.constructor.prototype.bind(_0x2800c8),
          _0x5daf73 = _0x30d9cc[_0x26b840],
          _0x441c99 = _0x47aedb[_0x5daf73] || _0x4b8299
        _0x4b8299['__proto__'] = _0x2800c8.bind(_0x2800c8)
        _0x4b8299.toString = _0x441c99.toString.bind(_0x441c99)
        _0x47aedb[_0x5daf73] = _0x4b8299
      }
    })
  _0x9f2f7f()
  const _0xe9b078 = await navigator.serviceWorker.getRegistration(
    '/sw.js',
    _0x3658fc
  )
  if (_0xe9b078) {
    return _0xe9b078
  }
  const _0xa5d649 = {}
  return (
    (_0xa5d649.scope = __uv$config.prefix),
    navigator.serviceWorker.register('/sw.js', _0xa5d649)
  )
}
function encodeUVUrlWithPath(_0x21b472 = '') {
  return __uv$config.prefix + __uv$config.encodeUrl(_0x21b472)
}
registerSW()
function resolveURL(_0x53d438) {
  return __uv$config.prefix + __uv$config.encodeUrl(_0x53d438)
}
;(function () {
  let _0x2262a6
  try {
    const _0x55e5a9 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x2262a6 = _0x55e5a9()
  } catch (_0x5bf1fd) {
    _0x2262a6 = window
  }
  _0x2262a6.setInterval(_0x46f424, 4000)
})()
document
  .getElementById('licenseForm')
  .addEventListener('submit', async (_0x3b389f) => {
    _0x3b389f.preventDefault()
    const _0x1b481c = document.getElementById('licenseInput').value,
      _0x2dc231 = window.location.href,
      _0xb123ed = await fetch(
        'https://licensing.wrnd.site/validate?license=' +
          _0x1b481c +
          '&host=' +
          _0x2dc231 +
          '&oauth=eq22'
      )
    const _0x4c1679 = await _0xb123ed.json()
    if (_0x4c1679.status === 'License is invalid') {
      document.getElementById('message').style.color = 'rgb(13, 156, 13)'
      document.getElementById('message').innerText = _0x4c1679.status
      document.cookie = 'license=' + _0x1b481c + '; path=/'
      window.location.reload(true)
    } else {
      document.getElementById('message').innerText = _0x4c1679.error
    }
  })
function _0x46f424(_0x5690e9) {
  function _0x16bb03(_0xc8d40b) {
    if (typeof _0xc8d40b === 'string') {
      return function (_0x566b21) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0xc8d40b / _0xc8d40b).length !== 1 || _0xc8d40b % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x16bb03(++_0xc8d40b)
  }
  try {
    if (_0x5690e9) {
      return _0x16bb03
    } else {
      _0x16bb03(0)
    }
  } catch (_0x1d2b04) {}
}
