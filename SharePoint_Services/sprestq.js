/* SPRest.Query OData QUERY BUILDER 0.1.0 */
/* https://github.com/usaalex/SharePoint */
/* © WM-FDH, 2016 */
var SPRest = SPRest || {};
SPRest.Query = function (url) {

    var ver = function () {
        return '0.1.0';
    };

    function ArgumentNullException(argument) {
        this.name = "ArgumentNullException";
        this.message = 'Value can not be null or undefined. Parameter name: ' + argument;
        this.stack = (new Error()).stack;
    }

    function ArgumentException(argument, message) {
        this.name = "ArgumentException";
        this.message = (message || 'Argument exception') + '. Parameter name: ' + argument;
        this.stack = (new Error()).stack;
    }

    var query = '';    
    var $select = [];
    var $filter = '';
    var $expand = [];
    var $orderby = [];
    var $skip = 0;
    var $top = 0;
    var previousExpression = '';
    var first = true;
    var $orderbyDesc = false;

    var parenthesesOpen = 0;
    var parenthesesClosed = 0;

    var Expression = {
        eq: '{field} eq {value}',
        lt: '{field} lt {value}',
        gt: '{field} gt {value}',
        ge: '{field} ge {value}',
        le: '{field} le {value}',
        ne: '{field} ne {value}',
        endswith: "endswith({field}, '{value}')",
        startswith: "startswith({field}, '{value}')",
        substringof: "substringof({field}, '{value}')",
        and: ' and ',
        or: ' or '
    };

    function buildExpression(expression, field, value, lookup) {
        if ((expression != Expression.and && expression != Expression.or) && (field == null)) throw new ArgumentNullException('field');
        if ((expression != Expression.and && expression != Expression.or) && (value == null)) throw new ArgumentNullException('value');
        // lookup
        if (lookup) {
            $expand.push(field);
            field = field + '/Id,' + field + '/Title';
        }
        // type
        if (typeof value === 'string') {
            value = "'" + value + "'";
        } else if (typeof value === 'object' && value instanceof Date) {
            value = "datetime'" + value.toJSON() + "'";
        } else if (typeof value === 'boolean') {
            value = !!value ? '1' : '0';
        }                
        $filter += (first ? ' ' : '') + expression.replace('{field}', field).replace('{value}', value);
        previousExpression = expression;
        first = false;
        return this;
    }

    function eq(field, value, lookup) {
        return buildExpression.call(this, Expression.eq, field, value, lookup);
    }

    function lt(field, value, lookup) {
        return buildExpression.call(this, Expression.lt, field, value, lookup);         
    }

    function ge(field, value, lookup) {
        return buildExpression.call(this, Expression.ge, field, value, lookup);
    }


    function gt(field, value, lookup) {
        return buildExpression.call(this, Expression.gt, field, value, lookup);        
    }

    function le(field, value, lookup) {
        return buildExpression.call(this, Expression.le, field, value, lookup);        
    }

    function ne(field, value, lookup) {
        return buildExpression.call(this, Expression.ne, field, value, lookup);        
    }

    function endswith(field, value, lookup) {
        return buildExpression.call(this, Expression.endswith, field, value, lookup);        
    }

    function startswith(field, value, lookup) {
        return buildExpression.call(this, Expression.startswith, field, value, lookup);        
    }

    function substringof(field, value, lookup) {
        return buildExpression.call(this, Expression.substringof, field, value, lookup);        
    }

    function and() {
        return buildExpression.call(this, Expression.and);        
    }
    
    function or() {
        return buildExpression.call(this, Expression.or);        
    }

    function orderby(fields, desc) {
        if (!(fields instanceof Array)) throw new ArgumentException('fields', 'Value must be an array.');
        $orderby = fields || [];
        $orderbyDesc = !!desc;
        return this;
    }

    function top(count) {
        if (isNaN(+count)) throw new ArgumentException('count', 'Value must be of type "Number".');
        $top = count || 0;
        return this;
    }

    //function skip(count) {
    //    if (isNaN(+count)) throw new ArgumentException('count', 'Value must be of type "Number".');
    //    $skip = count | 0;
    //    return this;
    //}

    function select(fields) {
        if (!(fields instanceof Array)) throw new ArgumentException('fields', 'Value must be an array.');
        $select = fields || [];
        return this;
    }

    function expand(fields) {
        if (!(fields instanceof Array)) throw new ArgumentException('fields', 'Value must be an array.');
        $expand = $expand.concat(fields || []);
        return this;
    }

    function openParenthesis() {
        $filter += '(';
        parenthesesOpen++;
        return this;
    }

    function closeCondition() {
        if (parenthesesClosed < parenthesesOpen) {
            $filter += ')';
            parenthesesClosed--;
        }
        return this;
    }

    function build() {
        if (parenthesesClosed != parenthesesOpen) throw new Error('Parentheses are not balanced.');
        query += url ? url : '';
        query += '?';
        query += ($filter ? '&$filter=' + $filter : '');
        query += ($select.length > 0 ? '&$select=' + $select.join(',') : '');
        query += ($expand.length > 0 && $select.length > 0 ? '&$expand=' + $expand.join(',') : '');
        query += ($orderby.length > 0 ? '&$orderby=' + $orderby.join(',') + ($orderbyDesc ? ' desc' : ' asc') : '');
        query += ($top > 0 ? '&$top=' + $top : '');
        //query += ($skip > 0 ? '&$skip=' + $skip : '');

        return query;
    }
    
    return {
        eq: eq,
        lt: lt,
        le: le,
        gt: gt,
        ge: ge,
        ne: ne,
        and: and,
        or: or,
        endswith: endswith,
        startswith: startswith,
        substringof: substringof,
        select: select,
        top: top,        
        orderby: orderby,
        expand: expand,
        build: build,
        ver: ver
    }
}