/* SPJS intellisense 1.2.0 */
/* https://github.com/usaalex/SharePoint */
/* © WM-FDH, 2016 */
intellisense.annotate(SPJS, {
    'applyPeoplePickerFix': function () {
        /// <signature>
        ///	     <summary>Apply People Picker bug fix.</summary>
        ///	     <returns type='void' />
        /// </signature>
    },
    'getListItems': function () {
        /// <signature>
        ///      <summary>Get list items by CAML query (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='camlQuery' type='String' optional='true'>CAML Query.</param>
        ///      <param name='viewFields' type='Array' optional='true'>Array of internal fields names.</param>		
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type="$.Deferred" />
        /// </signature>
        /// <signature>
        ///      <summary>Get list items by CAML query (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='camlQuery' type='String' optional='true'>CAML Query.</param>
        ///      <param name='viewFields' type='Array' optional='true'>Array of internal fields names.</param>		
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'getListItemsByIds': function () {
        /// <signature>
        ///      <summary>Get list items by ids (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='ids' type='Array'>Array of ids.</param>
        ///      <param name='viewFields' type='Array' optional='true'>Array of internal fields names.</param>		
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Get list items by ids (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='ids' type='Array'>Array of ids.</param>
        ///      <param name='viewFields' type='Array' optional='true'>Array of internal fields names.</param>		
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'createListItems': function () {
        /// <signature>
        ///      <summary>Create list items (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='newItems' type='Array'>Array of objects ({ fieldA: value, fieldB: value }, each object represent a single item).<para>Example: [{ Title: 'Salary 1', Employee_Salary: 199 }, { Title: 'Salary 2', Employee_Salary: 299 }]</para></param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Create list items (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='newItems' type='Array'>Array of objects ({ fieldA: value, fieldB: value }, each object represent a single item).<para>Example: [{ Title: 'Salary 1', Employee_Salary: 199 }, { Title: 'Salary 2', Employee_Salary: 299 }]</para></param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'deleteListItems': function () {
        /// <signature>
        ///      <summary>Delete list items (Async). By default list items are moved to recycle bin.<para>On success: void.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='camlQuery' type='String'>CAML Query.</param>
        ///      <param name='noRecycle' type='Boolean' optional='true'>Delete SP.ListItem permanently.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Delete list items (Async). By default list items are moved to recycle bin.<para>On success: void.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='camlQuery' type='String'>CAML Query.</param>
        ///      <param name='noRecycle' type='Boolean' optional='true'>Delete SP.ListItem permanently.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'deleteListItemsByIds': function () {
        /// <signature>
        ///      <summary>Delete list items by ids (Async).<para>On success: void.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='ids' type='Array'>Array of ids.</param>
        ///      <param name='noRecycle' type='Boolean' optional='true'>Delete SP.ListItem permanently.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Delete list items by ids (Async).<para>On success: void.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='ids' type='Array'>Array of ids.</param>
        ///      <param name='noRecycle' type='Boolean' optional='true'>Delete SP.ListItem permanently.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'updateListItems': function () {
        /// <signature>
        ///      <summary>Update list items (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>
        ///      <param name='updatedItems' type='Array'>Array of objects ({ ID: value, fieldA: value, fieldB: value }, each object represent a single item).<para>Example: [{ ID: 1, Title: 'Salary 1', Employee_Salary: 199 }, { ID: 2, Title: 'Salary 2', Employee_Salary: 299 }]</para></param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Update list items (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='updatedItems' type='Array'>Array of objects ({ ID: value, fieldA: value, fieldB: value }, each object represent a single item).<para>Example: [{ ID: 1, Title: 'Salary 1', Employee_Salary: 199 }, { ID: 2, Title: 'Salary 2', Employee_Salary: 299 }]</para></param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },

    'ensureUser': function () {
        /// <signature>
        ///      <summary>Checks whether the specified login name belongs to a valid user in the site (Async).<para>On success: SP.User.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='userName' type='String'>User internal name.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'getUserProfile': function () {
        /// <signature>
        ///      <summary>Get User profile (Async).<para>On success: Array of SP.ListItem.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='ids' optional='true' type='Array'>Array of ids. If no ids provided - returns current's user profile.</param>
        ///      <param name='viewFields' type='Array' optional='true'>Array of internal fields names.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },

    'getGUID': function () {
        /// <signature>
        ///      <summary>Get list GUID (Async).<para>On success: String (GUID).</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>	
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///      <summary>Get list GUID (Async).<para>On success: String (GUID).</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },

    'showSPAlert': function () {
        /// <signature>
        ///      <summary>Show SP.UI.ModalDialog.<para>On success: Boolean (dialog result OK - true, Cancel - false).</para></summary>
        ///      <param name='message' type='String'>Dialog contents (text or HTML).</param>	
        ///      <param name='title' type='String' optional='true'>Dialog title.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'showSPConfirm': function () {
        /// <signature>
        ///      <summary>Show SP.UI.ModalDialog with OK and Cancel buttons.<para>On success: Boolean (dialog result OK - true, Cancel - false).</para></summary>
        ///      <param name='message' type='String'>Dialog contents (text or HTML).</param>	
        ///      <param name='title' type='String' optional='true'>Dialog title.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'showSPError': function () {
        /// <signature>
        ///      <summary>Show SP.UI.ModalDialog.<para>On success: Boolean (dialog result OK - true, Cancel - false).</para></summary>
        ///      <param name='message' type='String'>Dialog contents (text or HTML).</param>	
        ///      <param name='title' type='String' optional='true'>Dialog title.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'showSPPopup': function () {
        /// <signature>
        ///      <summary>Show SP.UI.ModalDialog.<para>On success: Boolean (dialog result OK - true, Cancel - false).</para></summary>
        ///      <param name='url' type='String'>Dialog URL.</param>	
        ///      <param name='title' type='String' optional='true'>Dialog title.</param>
        ///      <param name='hideClose' type='Boolean' optional='true'>Hide close button.</param>
        ///      <returns type='$.Deferred' />
        /// </signature>
    },
    'showSPWaitDialog': function () {
        /// <signature>
        ///      <summary>Show SP.UI.ModalDialog.showWaitScreenWithNoClose.</summary>
        ///      <param name='message' type='String' optional='true'>Dialog contents (text or HTML).</param>	
        ///      <param name='title' type='String' optional='true'>Dialog title.</param>
        ///      <param name='timeout' type='Number' optional='true'>Amount of milliseconds before wait dialog closes automatically.</param>
        ///      <param name='height' type='Number' optional='true'>Dialog height.</param>
        ///      <param name='width' type='Number' optional='true'>Dialog width.</param>
        ///      <returns type='void' />
        /// </signature>
    },
    'hideSPWaitDialog': function () {
        /// <signature>
        ///      <summary>Hide SP.UI.ModalDialog.showWaitScreenWithNoClose.</summary>
        ///      <returns type='void' />
        /// </signature>
    },
    'getEntitiesPeoplePicker': function () {
        /// <signature>
        ///	     <summary>Get resolved entities (user logins) from People Picker control.</summary>
        ///      <param name='controlID' type='String'>People Picker control id.</param>	
        ///	     <returns type='Array' />
        /// </signature>
    },
    'setPropertyBag': function () {
        /// <signature>
        ///	     <summary>Set SP.Web Property Bag value.<para>On success: Boolean (true).</para></summary>
        ///      <param name='key' type='String'>Property Bag key.</param>
        ///      <param name='value' type='T'>Property Bag value. Value will be converter to string.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'getPropertyBag': function () {
        /// <signature>
        ///	     <summary>Get SP.Web Property Bag value.<para>On success: String.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='key' type='String'>Property Bag key.</param>
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'getFile': function () {
        /// <signature>
        ///	     <summary>Get SP.File by server relative url.<para>On success: SP.File.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='url' type='String'>Server relative url.</param>        
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'forcePublish': function () {
        /// <signature>
        ///	     <summary>Force publish SP.File by server relative url ignoring current file's status.<para>On success: String (UI version label).</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='url' type='String'>Server relative url.</param>        
        ///      <param name='comment' type='String' optional='true'>Check-in comment.</param>        
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'checkOutFile': function () {
        /// <signature>
        ///	     <summary>Check-out SP.File by server relative url.<para>On success: String (UI version label).</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='url' type='String'>Server relative url.</param>        
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'checkInPublishFile': function () {
        /// <signature>
        ///	     <summary>Check-in (and publish) SP.File by server relative url.<para>On success: String (UI version label).</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='url' type='String'>Server relative url.</param>  
        ///      <param name='comment' type='String' optional='true'>Check-in comment.</param>   
        ///      <param name='spCheckInType' type='SP.CheckinType' optional='true'>Check-in type.</param>   
        ///      <param name='noPublish' type='boolean' optional='true'>No publishing.</param>   
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'getList': function () {
        /// <signature>
        ///	     <summary>Get SP.List.<para>On success: SP.List.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='String'>List name.</param>     
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///	     <returns type='$.Deferred' />
        /// </signature>
        /// <signature>
        ///	     <summary>Get SP.List.<para>On success: SP.List.</para><para>On failure: SP.ClientRequestFailedEventArgs.</para></summary>
        ///      <param name='list' type='SP.List'>SP.List object.</param>        
        ///      <param name='rootWeb' type='Boolean' optional='true'>Perform query on root web.</param>
        ///	     <returns type='$.Deferred' />
        /// </signature>
    },
    'spObjectToObject': function () {
        /// <signature>
        ///	     <summary>Convert SP.js object (SP.ListItem, SP.List etc) to Plain JavaScript object.<para>On success: Object.</para><para>On failure: null.</para></summary>
        ///      <param name='spObjects' type='Object'>SP.js object.</param>                
        ///	     <returns type='Object' />
        /// </signature>
        /// <signature>
        ///	     <summary>Convert SP.js objects (SP.ListItem, SP.List etc) to Plain JavaScript objects.<para>On success: Object.</para><para>On failure: null.</para></summary>
        ///      <param name='spObjects' type='Array'>SP.js objects.</param>                
        ///	     <returns type='Array' />
        /// </signature>
    },
});