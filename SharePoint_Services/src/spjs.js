/* SP.JS WRAPPER 1.0.3 */
/* https://github.com/usaalex/SharePoint */
/* © WM-FDH, 2016 */
var SPJS = (function ($) {

    'use strict';

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

    /* LIST ITEMS */

    function getListItems(list, camlQuery, viewFields, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();        
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;
        var spQuery = new SP.CamlQuery();
        spQuery.set_viewXml(camlQuery || "");
        var spItems = spList.getItems(spQuery);
        if (!!viewFields)
            spCtx.load(spItems, "Include(ID," + viewFields.join(",") + ")");
        else
            spCtx.load(spItems);
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(spItems.$2_1, sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    function getListItemsByIds(list, ids, viewFields, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");
        if (isNullEmptyUndefined(ids) || isEmptyArray(ids)) throw new ArgumentException("ids", "Value must be an array and have at least one element.");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;
        var spItems = [];
        for (var i = 0; i < ids.length; i++) {
            var item = spList.getItemById(ids[i]);
            if (!!viewFields)
                spCtx.load.apply(this, [item].concat(viewFields));
            else
                spCtx.load(item);

            spItems.push(item);
        }
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(spItems, sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    function createListItems(list, newItems, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");
        if (isNullEmptyUndefined(newItems) || isEmptyArray(newItems)) throw new ArgumentException("newItems", "Value must be an array and have at least one element.");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;
        var spItems = [];
        for (var i = 0; i < newItems.length; i++) {
            if (!newItems[i]) continue;
            var itemCreationInfo = new SP.ListItemCreationInformation();
            var item = spList.addItem(itemCreationInfo);
            for (var field in newItems[i]) {
                if (field == "ID") continue;
                var value = newItems[i][field] || null;
                item.set_item(field, value);
            }
            item.update();
            spItems.push(item);
            spCtx.load(item);
        }
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(spItems, sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    function updateListItems(list, updatedItems, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");        
        if (isNullEmptyUndefined(updatedItems) || isEmptyArray(updatedItems)) throw new ArgumentException("updatedItems", "Value must be an array and have at least one element.");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;
        var spItems = [];
        for (var i = 0; i < updatedItems.length; i++) {
            if (!updatedItems[i] || !updatedItems[i].ID || updatedItems[i].ID <= 0) continue;
            var item = spList.getItemById(updatedItems[i].ID);
            spCtx.load(item, "ID");
        }
        spCtx.executeQueryAsync(
            function () {
                for (var i = 0; i < updatedItems.length; i++) {
                    if (!updatedItems[i] || !updatedItems[i].ID || updatedItems[i].ID <= 0) continue;
                    var item = spList.getItemById(updatedItems[i].ID);
                    for (var field in updatedItems[i]) {
                        if (field == "ID") continue;
                        var value = updatedItems[i][field] || null;
                        item.set_item(field, value);
                    }
                    item.update();
                    spItems.push(item);
                    spCtx.load(item);
                }
                spCtx.executeQueryAsync(
                    function (sender, args) {
                        def.resolve(spItems, sender, args);
                    },
                    function (sender, args) {
                        def.reject(args, sender);
                    }
                );
            },
            function (sender, args) {
                def.reject(args);
            }
        );

        return def.promise();
    }

    function deleteListItems(list, camlQuery, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");
        if (isNullEmptyUndefined(camlQuery)) throw new ArgumentNullException("camlQuery");        

        return getListItems(list, camlQuery, ["ID"], rootWeb)
            .then(function (items) {
                var ids = [];
                for (var i = 0; i < items.length; i++) {
                    ids.push(items[i].get_item('ID'));
                }
                return deleteListItemsByIds(list, ids, rootWeb);
            });
    }

    function deleteListItemsByIds(list, ids, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");        
        if (isNullEmptyUndefined(ids) || isEmptyArray(ids)) throw new ArgumentException("ids", "Value must be an array and have at least one element.");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;
        for (var i = 0; i < ids.length; i++) {
            var item = spList.getItemById(ids[i]);
            item.deleteObject();
        }
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(true, sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    /* LISTS */

    function getGUID(list, rootWeb) {

        if (isNullEmptyUndefined(list)) throw new ArgumentNullException("list");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = (!!rootWeb) ? spCtx.get_site().get_rootWeb() : spCtx.get_web();
        var spList = (typeof list == "string") ? spWeb.get_lists().getByTitle(list) : list;        
        spCtx.load(spList);
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(spList.get_id().$5_0 || "", sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    /* USERS */

    function ensureUser(userName) {

        if (isNullEmptyUndefined(userName)) throw new ArgumentNullException("userName");

        var def = $.Deferred();
        var spCtx = SP.ClientContext.get_current();
        var spWeb = spCtx.get_web();
        var spUser = spWeb.ensureUser(userName);
        spCtx.load(spUser);
        spCtx.executeQueryAsync(
            function (sender, args) {
                def.resolve(spUser, sender, args);
            },
            function (sender, args) {
                def.reject(args, sender);
            }
        );

        return def.promise();
    }

    function getUserProfile(ids, viewFields) {
        var spCtx = SP.ClientContext.get_current();
        var spWeb = spCtx.get_web();
        var spList = spWeb.get_siteUserInfoList();
        if (!(ids instanceof Array)) {
            ids = [ids || _spUserId];
        }
        return getListItemsByIds(spList, ids, viewFields);
    }

    /* SP.UI */

    function _stringToHtml(str) {
        var element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }

    function _showSPModalDialog(title, html, url, hideClose) {
        var def = $.Deferred();
        var options = {
            title: title,
            allowMaximize: false,
            showClose: !hideClose,
            autoSize: true,
            dialogReturnValueCallback: function (dialogResult, returnValue) {
                def.resolve(dialogResult == SP.UI.DialogResult.OK, returnValue);
            }
        };
        if (!!url)
            options.url = url;
        else
            options.html = _stringToHtml("<div class='dialog-wrapper' style='padding: 5px;'>{0}</div>".format(html));
        SP.UI.ModalDialog.showModalDialog(options);

        return def.promise();
    }

    function showSPPopup(url, title, hideClose) {
        return _showSPModalDialog(title, null, url, hideClose);
    }

    function showSPAlert(message, title) {
        var html = "<div class='message message-alert'>{0}</div>".format(message);
        return _showSPModalDialog(title || "Information", html);
    }

    function showSPError(message, title) {
        var html = "<div class='message message-error' style='color: red;'>{0}</div>".format(message);
        return _showSPModalDialog(title || "Error", html);
    }

    function showSPConfirm(message, title) {
        var html = "<div class='message message-error'>{0}</div>\
                    <div class='controls' style='margin-top: 15px; text-align: right;'>\
                        <button onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK); return false;'>OK</button>\
                        <button onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel); return false;'>Cancel</button>\
                    </div>".format(message);
        return _showSPModalDialog(title || "Confirm", html);
    }

    var waitDialog = null;
    var waitDialogTimeout = null;
    function hideSPWaitDialog() {
        if (waitDialog != null) {
            waitDialog.close();
            waitDialog = null;
        }
        if (waitDialogTimeout != null) {
            clearTimeout(waitDialogTimeout);
            waitDialogTimeout = null;
        }
    };

    function showSPWaitDialog(message, title, timeout, height, width) {
        hideSPWaitDialog();
        waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(title || "Processing", message || "Please wait...", height || 60, width || 300);
        if (+timeout > 0) {
            waitDialogTimeout = setTimeout(hideSPWaitDialog, +timeout);
        }
    };

    /* MISC */

    function _commonShowModalDialog(e, o, l, s) { function a() { return new Array } function n(e, o, l) { e.push(o), e[o] = l } function r(e) { for (var o = new Array, l = 0; l < e.length; l++) o.push(e[l]); return o } null != document.getElementById("__spPickerHasReturnValue") && (document.getElementById("__spPickerHasReturnValue").value = ""), null != document.getElementById("__spPickerReturnValueHolder") && (document.getElementById("__spPickerReturnValueHolder").value = ""), commonModalDialogReturnValue.clear(); var i; if (window.showModalDialog && !browseris.safari125up) i = window.showModalDialog(e, s, o), l && invokeModalDialogCallback(l, i); else { var t = 500, u = 550, d = "yes"; if (o) { var c, w, g = a(); -1 != o.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) ? (c = /^\s*(\w+)\s*:\s*(.+?)\s*$/, w = o.split(/\s*;\s*/)) : (c = /^\s*(\w+)\s*=\s*(.+?)\s*$/, w = o.split(/\s*,\s*/)); for (var h in w) { var m = c.exec(w[h]); m && 3 == m.length && n(g, m[1].toLowerCase(), m[2]) } g.width || n(g, "width", g.dialogwidth || t), g.height || n(g, "height", g.dialogheight || u), g.scrollbars || n(g, "scrollbars", g.scroll || d), o = ""; var p = r(g); for (var f in p) o && (o += ","), o += p[f] + "=" + g[p[f]] } else o = "width=" + t + ",height=" + u; var v = window.open(e, "_blank", o + ",modal=yes,dialog=yes"); v && (v.dialogArguments = s); var _ = "/Picker.aspx".toUpperCase(), k = e.toUpperCase().indexOf(_) > -1; k || (window.onfocus = function () { var e = null != document.getElementById("__spPickerHasReturnValue") && "1" == document.getElementById("__spPickerHasReturnValue").value || commonModalDialogReturnValue.isSet(); !v || v.closed || e ? (window.onfocus = null, l && invokeModalDialogCallback(l, i)) : v.focus() }), browseris.ie || (window.fndlgClose = l) } return i }
    function applyPeoplePickerFix() {
        if (typeof commonShowModalDialog == "function") {
            window.commonShowModalDialog = _commonShowModalDialog;
        }
    }

    function getEntitiesPeoplePicker(controlID) {
        var entities = [];
        $.each($("div[id*='" + controlID + "'], " + controlID).find("> span.ms-entity-resolved"), function (i, e) {
            var resolvedEntity = $(e).attr("title") || null;
            entities.push(resolvedEntity);
        });

        return entities;
    }

    return {
        getListItems: getListItems,
        getListItemsByIds: getListItemsByIds,
        createListItems: createListItems,
        deleteListItems: deleteListItems,
        deleteListItemsByIds: deleteListItemsByIds,
        updateListItems: updateListItems,

        ensureUser: ensureUser,
        getUserProfile: getUserProfile,

        getGUID: getGUID,

        showSPAlert: showSPAlert,
        showSPConfirm: showSPConfirm,
        showSPError: showSPError,
        showSPPopup: showSPPopup,

        showSPWaitDialog: showSPWaitDialog,
        hideSPWaitDialog: hideSPWaitDialog,

        applyPeoplePickerFix: applyPeoplePickerFix,
        getEntitiesPeoplePicker: getEntitiesPeoplePicker,
    }

})(jQuery);