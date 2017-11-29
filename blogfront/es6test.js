async function getData () {
    var res1 = await getDataAsync('/page/1?param=123')
    console.log(res1)
    var res2 = await getDataAsync(`/page/2?param=${res1.data}`)
    console.log(res2)
    var res3 = await getDataAsync(`/page/2?param=${res2.data}`)
    console.log(res3)
}


import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';

var getData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var res1, res2, res3;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getDataAsync('/page/1?param=123');

                    case 2:
                        res1 = _context.sent;

                        console.log(res1);
                        _context.next = 6;
                        return getDataAsync('/page/2?param=' + res1.data);

                    case 6:
                        res2 = _context.sent;

                        console.log(res2);
                        _context.next = 10;
                        return getDataAsync('/page/2?param=' + res2.data);

                    case 10:
                        res3 = _context.sent;

                        console.log(res3);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getData() {
        return _ref.apply(this, arguments);
    };
}();
