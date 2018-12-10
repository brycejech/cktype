'use strict';

import type from './cktype';

const types = [
    { type: 'object',   val: {},         typeMethod: 'isObject'   },
    { type: 'array',    val: [],         typeMethod: 'isArray'    },
    { type: 'function', val: () => {},   typeMethod: 'isFunction' },
    { type: 'string',   val: 'string',   typeMethod: 'isString'   },
    { type: 'number',   val: 123,        typeMethod: 'isNumber'   },
    { type: 'boolean',  val: true,       typeMethod: 'isBoolean'  },
    { type: 'date',     val: new Date(), typeMethod: 'isDate'     },
    { type: 'regexp',   val: /abc/g,     typeMethod: 'isRegExp'   }
];

describe('It should identify types', () => {
    types.forEach(_type => {
        test(`When given "${ _type.type }"`, () => {
            expect(type(_type.val)).toBe(_type.type);
        });

        test(`When using type.${ _type.typeMethod } method`, () => {
            expect(type[_type.typeMethod](_type.val)).toBe(true);
        });
    });
});
