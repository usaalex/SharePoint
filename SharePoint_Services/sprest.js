/* SPRest 0.1.0 */
/* https://github.com/usaalex/SharePoint */
/* © WM-FDH, 2016 */
var SPRest = (function ($) {    

    'use strict';

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

    function isNullEmptyUndefined(val) {
        return typeof val === 'undefined' || val === null || val === '';
    }

    function isEmptyArray(val) {
        return (typeof val != 'undefined' && val instanceof Array) ? !val.length : true;
    }

    function isPrimitiveType(val) {
        return (typeof val === 'string' ||
                typeof val === 'number' ||
                typeof val === 'boolean' ||
                val === null ||
                typeof val === 'undefined');
    }

    String.prototype.format = function () {
        var str = this;
        for (var i = 0; i < arguments.length; i++) {
            var regex = new RegExp('{' + i + '\\}', 'g');
            str = str.replace(regex, arguments[i]);
        }

        return str;
    };

    var $httpProvider = $ || null;

    function setHttpProvider(provider) {
        $httpProvider = provider || null;
    }

    function getItemType(listName) {
        return 'SP.Data.' + listName.replace(/\s/g, '') + 'ListItem';
    }

    function getRequestDigest() {
        return document.getElementById('__REQUESTDIGEST').value;
    }

    function getListItems(listName, query, webUrl) {
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/items{2}".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName,
                    query || ''),
            headers: { 'accept': 'application/json;odata=nometadata' },
            method: 'GET'
        });
    }

    function getListItemsCAML(listName, camlQuery, webUrl) {
        var camlData = {
            query: {
                __metadata: { type: 'SP.CamlQuery' },
                ViewXml: camlQuery
            }
        };
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/getitems".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName),
            headers: {
                'accept': 'application/json;odata=nometadata',
                'content-type': 'application/json;odata=nometadata',
                'X-RequestDigest': getRequestDigest(),
            },
            data: JSON.stringify(camlData),
            method: 'POST'
        });
    }

    function getListItemById(listName, id, query, webUrl) {
        // todo id check
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/items({2}){3}".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName,
                    id,
                    query || ''),
            headers: { 'accept': 'application/json;odata=nometadata' },
            method: 'GET'
        });
    }

    function updateListItem(listName, id, item, itemType, webUrl) {
        item['__metadata'] = { type: itemType || getItemType(listName) };
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/items({2})".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName,
                    id),
            method: 'POST',
            data: JSON.stringify(item),
            headers: {
                'accept': 'application/json;odata=verbose',
                'content-type': 'application/json;odata=verbose',
                'X-RequestDigest': getRequestDigest(),
                'X-HTTP-Method': 'MERGE',
                'If-Match': '*'
            }            
        });
    }

    function deleteListItem(listName, id, forceDelete, webUrl) {        
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/items({2}){3}".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName,
                    id,
                    forceDelete ? '' : '/recycle()'),
            method: (forceDelete ? 'DELETE' : 'POST'),
            headers: {
                'accept': 'application/json;odata=nometadata',
                'X-RequestDigest': getRequestDigest(),
                'If-Match': '*'
            }
        });
    }

    function createListItem(listName, item, itemType, query, webUrl) {
        item['__metadata'] = { type: itemType || getItemType(listName) };
        return $httpProvider({
            url: "{0}/_api/web/lists/getbytitle('{1}')/items{2}".format(
                    webUrl || _spPageContextInfo.webServerRelativeUrl,
                    listName,
                    query || ''),
            method: 'POST',
            data: JSON.stringify(item),
            headers: {
                'accept': 'application/json;odata=nometadata',
                'content-type': 'application/json;odata=verbose',
                'X-RequestDigest': getRequestDigest()
            }
        });
    }

    return {
        getListItems: getListItems,
        getListItemById: getListItemById,
        createListItem: createListItem,
        updateListItem: updateListItem,
        deleteListItem: deleteListItem,
        getListItemsCAML: getListItemsCAML,
        setHttpProvider: setHttpProvider
    }

})(typeof jQuery != 'undefined' ? jQuery.ajax : null);

