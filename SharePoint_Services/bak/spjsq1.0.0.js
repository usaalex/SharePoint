/* SP.JS CAML QUERY BUILDER 1.0.0 */
/* https://github.com/usaalex/SharePoint */
/* � WM-FDH, 2016 */
var SPJS = SPJS || {};
SPJS.Query = function () {

    'use strict';

    /* Init */
    var orderBy = '';
    var groupBy = '';
    var viewFields = '';
    var rowLimit = 0;
    var scope = '';
    var whereStack = [];
    var type = {
        and: 1,
        or: 2,
        eq: 3,
        neq: 4,
        gt: 5,
        geq: 6,
        lt: 7,
        leq: 8,
        begins: 9,
        contains: 10,
        in_: 11,
        includes: 12,
        isNull: 13,
        isNotNull: 14,
        notIncludes: 15/*,
		dataOverlap: 16*/
    };

    /*  Utilities  */

    if (!Date.prototype.toISOString) {
        (function () {

            function pad(number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            }

            Date.prototype.toISOString = function () {
                return this.getUTCFullYear() +
                  '-' + pad(this.getUTCMonth() + 1) +
                  '-' + pad(this.getUTCDate()) +
                  'T' + pad(this.getUTCHours()) +
                  ':' + pad(this.getUTCMinutes()) +
                  ':' + pad(this.getUTCSeconds()) +
                  '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                  'Z';
            };

        }());
    }

    var Element = function (elementType, fieldName, value, valueType, lookupId) {
        this.elementType = elementType || 0;
        this.field = fieldName || '';
        this.value = value || '';
        this.valueType = valueType || '';
        this.lookupId = !!lookupId;
        if (!!fieldName && typeof value != 'undefined' && typeof valueType == 'undefined') {
            this.valueType = autoFieldType(value);
        }
        if (!!fieldName && typeof value != 'undefined' && value instanceof Date) {
            this.value = value.toISOString();
        }
        if (fieldName === 'ID') {
            this.valueType = 'Counter';
        }
        if (!!lookupId) {
            this.valueType = 'Lookup';
        }
        if (valueType == 'Lookup' && typeof lookupId == 'undefined') {
            this.lookupId = true;
        }
    };

    function autoFieldType(value) {
        var result = 'Text';
        if (typeof value == 'string') result = 'Text';
        if (typeof value == 'number') result = 'Number';
        if (typeof value == 'boolean') result = 'Boolean';
        if (typeof value == 'object' && value instanceof Date) {
            result = 'DateTime';
        }
        return result;
    }

    function checkStack(next) {
        if (whereStack.length === 0 && next < 3) {
            throw new Error('Comparison operator expected.');
        }
        if (whereStack[whereStack.length - 1] && (whereStack[whereStack.length - 1].elementType < 3 && next < 3)) {
            throw new Error('Comparison operator expected.');
        }
        if (whereStack[whereStack.length - 1] && (whereStack[whereStack.length - 1].elementType > 2 && next > 2)) {
            throw new Error('Logical join operator expected.');
        }
    }

    function createElement(elementType, field, value, valueType, lookupId) {
        checkStack(elementType);
        if (typeof valueType == 'boolean' && valueType) {
            valueType = 'Lookup';
        }
        if (!!lookupId && valueType != 'Lookup') {
            lookupId = false;
        }
        whereStack.push(new Element(elementType, field, value, valueType, lookupId));
        return this;
    }

    /*  Logical Joins  */

    function And() {
        return createElement.call(this, type.and);
    }

    function Or() {
        return createElement.call(this, type.or);
    }

    /*  Comparison operators  */

    function Eq(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.eq, fieldName, value, valueType, lookupId);
    }

    function Neq(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.neq, fieldName, value, valueType, lookupId);
    }

    function Gt(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.gt, fieldName, value, valueType, lookupId);
    }

    function Geq(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.geq, fieldName, value, valueType, lookupId);
    }

    function Lt(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.lt, fieldName, value, valueType, lookupId);
    }

    function Leq(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.leq, fieldName, value, valueType, lookupId);
    }

    function BeginsWith(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.begins, fieldName, value, valueType, lookupId);
    }

    function Contains(fieldName, value, valueType, lookupId) {
        return createElement.call(this, type.contains, fieldName, value, valueType, lookupId);
    }

    function In(fieldName, values, valueType, lookupId) {
        if (!values || (values && (!(values instanceof Array) || values.length <= 0))) {
            throw new Error('Values must be an array and have at least one element.');
        }
        return createElement.call(this, type.in_, fieldName, values, valueType, lookupId);
    }

    //function Includes(fieldName, value, valueType, lookupId) {
    //    return createElement.call(this, type.includes, fieldName, value, valueType, lookupId);
    //}

    //function NotIncludes(fieldName, value, valueType, lookupId) {
    //    return createElement.call(this, type.notIncludes, fieldName, value, valueType, lookupId);
    //}

    function IsNull(fieldName, value) {
        return createElement.call(this, type.isNull, fieldName);
    }

    function IsNotNull(fieldName, value) {
        return createElement.call(this, type.isNotNull, fieldName);
    }

    /*  Options  */

    function GroupBy(fieldName, collapse) {
        var collapse = !!collapse ? 'TRUE' : 'FALSE';
        groupBy = '<GroupBy Collapse = "' + collapse + '"><FieldRef Name = "' + fieldName + '"/></GroupBy>';
        return this;
    }

    function OrderBy(fieldName, descending) {
        var ascending = !!descending ? 'FALSE' : 'TRUE';
        orderBy += '<FieldRef Name="' + fieldName + '" Ascending="' + ascending + '" />';
        return this;
    }

    function RowLimit(num) {
        rowLimit = (+num) || 0;
        return this;
    }

    function Scope(viewScope) {
        scope = viewScope;
        return this;
    }

    function ViewFields() {
        var result = '';
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'string')
                result += '<FieldRef Name="' + arguments[i] + '" />';
        }
        viewFields = result;
        return this;
    }

    /*  Misc - */

    function buildWhere() {
        var result = '{caml}';
        if (whereStack.length === 0) {
            result = '';
        }
        for (var i = 0; i < whereStack.length; i++) {
            switch (whereStack[i].elementType) {
                case type.and: result = '<And>{caml}{caml}</And>'.replace('{caml}', result); break;
                case type.or: result = '<Or>{caml}{caml}</Or>'.replace('{caml}', result); break;
                case type.eq: result = result.replace('{caml}', '<Eq>' + buildFieldValue(whereStack[i]) + '</Eq>'); break;
                case type.neq: result = result.replace('{caml}', '<Neq>' + buildFieldValue(whereStack[i]) + '</Neq>'); break;
                case type.gt: result = result.replace('{caml}', '<Gt>' + buildFieldValue(whereStack[i]) + '</Gt>'); break;
                case type.geq: result = result.replace('{caml}', '<Geq>' + buildFieldValue(whereStack[i]) + '</Geq>'); break;
                case type.lt: result = result.replace('{caml}', '<Lt>' + buildFieldValue(whereStack[i]) + '</Lt>'); break;
                case type.leq: result = result.replace('{caml}', '<Leq>' + buildFieldValue(whereStack[i]) + '</Leq>'); break;
                case type.begins: result = result.replace('{caml}', '<BeginsWith>' + buildFieldValue(whereStack[i]) + '</BeginsWith>'); break;
                case type.contains: result = result.replace('{caml}', '<Contains>' + buildFieldValue(whereStack[i]) + '</Contains>'); break;
                case type.includes: result = result.replace('{caml}', '<Includes>' + buildFieldValue(whereStack[i]) + '</Includes>'); break;
                case type.notIncludes: result = result.replace('{caml}', '<NotIncludes>' + buildFieldValue(whereStack[i]) + '</NotIncludes>'); break;
                case type.isNull: result = result.replace('{caml}', '<IsNull><FieldRef Name="' + whereStack[i].field + '" /></IsNull>'); break;
                case type.isNotNull: result = result.replace('{caml}', '<IsNotNull><FieldRef Name="' + whereStack[i].field + '" /></IsNotNull>'); break;
                case type.in_: result = result.replace('{caml}', '<In>' + buildInValues(whereStack[i]) + '</In>'); break;
            }
        }
        return '<Where>' + result + '</Where>';
    }

    function buildFieldValue(elem) {
        var result = '';
        result = '<FieldRef Name="' + elem.field + '" ' + (!!elem.lookupId ? 'LookupId="TRUE"' : '') + ' /><Value Type="' + elem.valueType + '">' + elem.value + '</Value>';
        return result;
    }

    function buildQuery(where, order, group) {
        var result = '<Query>{where}{order}{group}</Query>'.replace('{where}', where || '')
                                                           .replace('{order}', order || '')
                                                           .replace('{group}', group || '');
        return result;
    }

    function buildView(query, rowLimit, scope, fields) {
        var result = '<View {scope}>{query}{rowlimit}{fields}</View>'.replace('{query}', query || '')
                                                            .replace('{scope}', scope || '')
                                                            .replace('{rowlimit}', rowLimit || '')
                                                            .replace('{fields}', fields || '');
        return result;
    }

    function buildRowLimit(limit) {
        var result = '';
        if (limit > 0) {
            result = '<RowLimit>{rowlimit}</RowLimit>'.replace('{rowlimit}', limit);
        }
        return result;
    }

    function buildOrder(fields) {
        var result = '';
        if (!!fields) {
            result = '<OrderBy>' + fields + '</OrderBy>';
        }
        return result;
    }

    function buildGroup(groupBy) {
        var result = '';
        if (!!groupBy) {
            result = groupBy;
        }
        return result;
    }

    function buildInValues(elem) {
        var result = '';
        var inValues = '';
        result = '<FieldRef Name="' + elem.field + '" ' + (!!elem.lookupId ? 'LookupId="TRUE"' : '') + ' /><Values>{values}</Values>';
        for (var i = 0; i < elem.value.length; i++) {
            inValues += '<Value Type="' + elem.valueType + '">' + elem.value[i] + '</Value>';
        }
        return result.replace('{values}', inValues);
    }

    function buildViewFields(fields) {
        var result = '';
        if (!!fields) {
            result = '<ViewFields>{fields}</ViewFields>'.replace('{fields}', fields);
        }
        return result;
    }

    function build() {
        if (whereStack[whereStack.length - 1] && whereStack[whereStack.length - 1].elementType < 3) {
            throw new Error('Comparison operator expected.');
        }
        var where = buildWhere();
        var order = buildOrder(orderBy);
        var group = buildGroup(groupBy);
        var query = buildQuery(where, order, group);
        var rows = buildRowLimit(rowLimit);
        var fields = buildViewFields(viewFields);
        var view = buildView(query, rows, scope, fields);
        return view;
    }

    return {
        And: And,
        Or: Or,
        Eq: Eq,
        Neq: Neq,
        Gt: Gt,
        Geq: Geq,
        Lt: Lt,
        Leq: Leq,
        BeginsWith: BeginsWith,
        Contains: Contains,
        In: In,
        IsNull: IsNull,
        IsNotNull: IsNotNull,
        //Includes: Includes,
        //NotIncludes: NotIncludes,
        GroupBy: GroupBy,
        OrderBy: OrderBy,
        Scope: Scope,
        RowLimit: RowLimit,
        ViewFields: ViewFields,
        build: build
    }
};