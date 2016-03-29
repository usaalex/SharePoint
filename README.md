# SharePoint
SharePoint development related stuff!

## SharePoint JavaScript libraries

### SP.JS Wrapper - SPJS
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

### SP.CamlQuery Builder - SPJS.Query
Allows you to easily build SharePoint Caml Query.
Documentation can be found in 'intellisense' folder.

#### Requirements
* SharePoint 2010

##### Features:
* Logical join operators: and, or
* Comparison operators: eq, neq, gt, geq, lt, leq, beginswith, contains, in, is null, isnotnull (all except includes)
* Other: row limit, scope, orderby, groupby

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
```
