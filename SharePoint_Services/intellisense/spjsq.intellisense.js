/* SPJS intellisense 1.1.0 */
/* https://github.com/usaalex/SharePoint */
/* © WM-FDH, 2016 */
intellisense.annotate(SPJS.Query, function () {
    /// <signature>
    /// <summary>CAML Query builder.</summary>                        
    /// <returns type="SPJS.Query" />
    /// </signature>
});
var _spjsqobj = SPJS.Query;
SPJS.Query = function () {
    var _object = new _spjsqobj();
    intellisense.annotate(_object, {
        'And': function () {
            /// <signature>
            ///     <summary>Logical AND.</summary>                        
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Or': function () {
            /// <signature>
            ///     <summary>Logical OR.</summary>                        
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Eq': function () {
            /// <signature>
            ///     <summary>Equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Neq': function () {
            /// <signature>
            ///     <summary>Lookup not equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Not equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date not equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Gt': function () {
            /// <signature>
            ///     <summary>Greater than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup greater than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date greater than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Geq': function () {
            /// <signature>
            ///     <summary>Greater or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup greater or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date greater or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Lt': function () {
            /// <signature>
            ///     <summary>Less than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup less than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />lean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date less than comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Leq': function () {
            /// <signature>
            ///     <summary>Less or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            /// <summary>Lookup less or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date less or equals to comparison operator.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'BeginsWith': function () {
            /// <signature>
            ///     <summary>Begins with comparison operator. Searches for a string at the start of a column.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup Begins with comparison operator. Searches for a string at the start of a column.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Contains': function () {
            /// <signature>
            ///     <summary>Contains comparison operator. Searches for a string anywhere within a column.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='T'>Field value.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup Contains comparison operator. Searches for a string anywhere within a column.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'In': function () {
            /// <signature>
            ///     <summary>In comparison operator. Specifies whether the field value is equal to one of the values.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='values' type='Array'>Field values.</param>
            ///     <param name='valueType' type='String' optional='true'>Field value type. Field value type is detected implicitly, but you can specify it explicitly.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Lookup In comparison operator. Specifies whether the field value is equal to one of the values.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='String|Number'>Lookup value.</param>
            ///     <param name='lookupId' type='Boolean'>Lookup field value by id.</param>
            ///     <param name='isMulti' type='Boolean' optional='true'>Is Lookup field a MultiLookup.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
            /// <signature>
            ///     <summary>Date In comparison operator. Specifies whether the field value is equal to one of the values.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='value' type='Date'>Field value.</param>
            ///     <param name='includeTimeValue' type='Boolean'>Include Time value.</param>            
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'IsNull': function () {
            /// <signature>
            ///     <summary>Used within a query to return items that are empty (Null).</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'IsNotNull': function () {
            /// <signature>
            ///     <summary>Used within a query to return items that are not empty (Null).</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'OrderBy': function () {
            /// <signature>
            ///     <summary>Determines the sort order for a query.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='descending' type='String' optional='true'>Descending order. (Default = false).</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'GroupBy': function () {
            /// <signature>
            ///     <summary>Group the data returned through a query.</summary>    
            ///     <param name='fieldName' type='String'>Internal field name.</param>
            ///     <param name='collapse' type='Boolean' optional='true'>TRUE for the Group By section in the list view to be collapsed by default. (Default = false)</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'RowLimit': function () {
            /// <signature>
            ///     <summary>Specifies maximum results count for a query.</summary>    
            ///     <param name='count' type='Number'>Maximum results count.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'Scope': function () {
            /// <signature>
            ///     <summary>Specifies view scope and additional view attributes.</summary>    
            ///     <param name='viewScope' type='String'>View scope and additional view attributes.</param>
            ///     <returns type="SPJS.Query" />
            /// </signature>
        },
        'build': function () {
            /// <signature>
            ///     <summary>Build CAML Query.</summary>
            ///     <returns type="String" />
            /// </signature>
        },
    });

    return _object;
};
intellisense.redirectDefinition(SPJS.Query, _spjsqobj);
