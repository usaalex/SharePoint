# SharePoint
SharePoint development related stuff!

## SharePoint JavaScript libraries

### SP.JS Wrapper - SPJS
SP.JS routine operations wrapper.
Allows you to easily perform CRUD operations on Lists, get any user-related data and display SharePoint modal dialogs.
Documentation can be found in 'intellisense' folder.

##### Features:
* Lists CRUD operations
* Get Users data
* SharePoint modal dialogs

##### Examples:
```JavaScript
  // coming soon
```

### SP.CamlQuery Builder - SPJS.Query
Allows you to easily build SharePoint Caml Query.
Documentation can be found in 'intellisense' folder.

##### Features:
* Logical join operators: and, or
* Comparison operators: eq, neq, gt, geq, lt, leq, beginswith, contains, in, is null, isnotnull (all except includes)
* Other: row limit, scope, orderby, groupby

##### Examples:
```JavaScript
  // empty query
  var query = new SPJS.Query().build(); // build() method will return CAML Query as string
  // gt operator
  var query = new SPJS.Query();
  query = query.Gt('ID', 99).build(); // ID is greater than 99
  // or operator
  var query = new SPJS.Query();
  query = query.Eq('Title', 'SharePoint').Or().Eq('Title', 'GitHub').build(); // Title equals to 'SharePoint' or 'GitHub'
  // set row limit
  var query = new SPJS.Query(); 
  query = query.RowLimit(1).build(); // limit query results count by 1
  // order by
  var query = new SPJS.Query();
  query = query.OrderBy('Created', true).RowLimit(1).build(); // order by 'Created' descending (second argument) nad limit query
```
