# SharePoint
SharePoint development related stuff!

## SharePoint JavaScript libraries

### SP.JS Wrapper - SPJS (1.1.0)
#### Requirements
* SharePoint 2010
* jQuery

SP.JS routine operations wrapper.
Allows you to easily perform CRUD operations on Lists, get any user-related data and display SharePoint modal dialogs.
Documentation can be found in 'intellisense' folder.

##### Features:
* Lists CRUD operations
* Get Users data
* SharePoint modal dialogs
* People Picker fix (picker dialog not returning value unless People Picker is in IFrame)
* Deferreds, deferreds everywhere - no more callbacks

##### Examples:
```JavaScript
  // coming soon
```

##### New features:
* 1.1.0 Added Property Bag get and set functionality.

### SP.CamlQuery Builder - SPJS.Query (1.0.1)
Allows you to easily build SharePoint Caml Query.
Documentation can be found in 'intellisense' folder.

#### Requirements
* SharePoint 2010

##### Features:
* Logical join operators: and, or
* Comparison operators: eq, neq, gt, geq, lt, leq, beginswith, contains, in, is null, isnotnull (all except includes)
* Other: row limit, scope, orderby, groupby
* Auto value type detection (but still can be set explicitly)

##### Examples:
```JavaScript
  // equals to
  var query = new SPJS.Query();
  query.Eq('Title', 'Hello World'); // title equals to 'Hello World'
  query = query.build(); // build() method will return CAML Query as string
  
  // NOTE: every method (except build()) returns SPJS.Query object for chaining

  // empty query
  var query = new SPJS.Query().build(); 
  
  // gt operator
  var query = new SPJS.Query().Gt('ID', 99).build(); // ID is greater than 99
  
  // or/and operator
  var query = new SPJS.Query().Eq('Title', 'SharePoint')
                              .Or() // .And()
                              .Eq('Title', 'GitHub')
                              .build(); // Title equals to 'SharePoint' or 'GitHub'
               
  // set row limit
  var query = new SPJS.Query().RowLimit(1)
                              .build(); // limit query results count by 1
  
  // order by
  var query = new SPJS.Query().OrderBy('Created', true)
                              .RowLimit(1)
                              .build(); // order by 'Created' descending (second argument) nad limit query
                              
  // explicitly specify value type
  // every comparison operator has 3d optional parameter - valueType (4th param works only if valueType is Lookup/Multi)
  // Operator(fieldName, value, valueType, lookupId)
  
  var query = new SPJS.Query().Eq('ListLookup', 5, 'Lookup', true); // ListLookup as Lookup equals to 5 (id)
  var query = new SPJS.Query().Eq('ListLookup', 'Item5', 'Lookup', false); // ListLookup as Lookup equals to 'Item1' (value)
  var query = new SPJS.Query().Eq('Title', 'Title?', 'Text'); // Title as Text equals to 'Title?'
                              
  // lookups
  // every comparison operator has overloaded version for fetching lookups
  // Operator(fieldName, value, lookupId, isMulti)
  
  var query = new SPJS.Query().Eq('ListLookup', 5, true); // ListLookup lookup id equals to 5
  var query = new SPJS.Query().Eq('ListLookup', 'Item1', false); // ListLookup lookup value equals to 'Item1'
  var query = new SPJS.Query().Eq('ListLookupMulti', 2, true, true); // ListLookupMulti lookup id equals to 5
                              
  // complex query
  var query = new SPJS.Query().Gt('Salary', 1500)
                              .And()
                              .Eq('Department', 'IT')
                              .And()
                              .BeginsWith('LastName', 'K')
                              .RowLimit(1)
                              .ViewFields('ID', 'Salary', 'FirstName', 'LastName')
                              .OrderBy('Salary')
                              .OrderBy('ID');

  // some rules:
  // logical join operators must follow comparison operators and vice versa
  // logical join operators cant be first operator in chain
  // logical join operator cant be last operator in chain (must be followed by comparison operator)
  
  var query = new SPJS.Query().And()
                              .Eq('ID', '1'); // this will throw an error - you cant have logical join 
                                              // operator as first operator
  var query = new SPJS.Query().Eq('Title', 'Will this ')       // this will throw an error - you cant have
                              .Eq('Title', 'throw an error?'); // comparison operators without logical join
                              
  var query = new SPJS.Query().Eq('Title', 'Cheese') // this will throw an error - logical join operator
                              .And();                // must be followed by comparison operator
```
