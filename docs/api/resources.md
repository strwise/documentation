---
sidebar_position: 3
sidebar_label: 'API Resources'
id: api-resources
slug: resources
---

# API Resources

> work in progress

The API is a RESTful API that uses JSON for serialization and OAuth 2.0 for authentication. In this section, you will find information about the API resources and how to use them.

## Sorting & Ordering

The `?sortedBy=` parameter is usually used with the `orderBy` parameter.

By default, the `orderBy` sorts the data in **Ascending** order, if you want the data sorted in **Descending** order, you can add `&sortedBy=desc`.

**Accepts**

* `asc` - Ascending order.
* `desc` - Descending order.

Order by _created_at_ in _descending_ order.
```http

GET /api/v1/recourse?orderBy=created_at&sortedBy=desc
```

Order by name in ascending order.
```http
GET /api/v1/resource?orderBy=name
```

:::tip
If you don't specify the `sortedBy` parameter, the data will be sorted in ascending order by default.
:::

## Pagination

`?page=` parameter can be applied to any `GET` HTTP request responsible for listing records (mainly for Paginated data).

The `page` parameter is used to specify the page number to be returned.

```http
GET /api/v1/resource?page=7
```

Pagination object is always returned in meta when pagination is available on the endpoint.

```json
{
    "meta": {
        "pagination": {
            "total": 100,
            "count": 10,
            "per_page": 10,
            "current_page": 7,
            "total_pages": 10,
            "links": {
                "previous": "https://api.example.com/resource?page=6",
                "next": "https://api.example.com/resource?page=8"
            }
        }
    }
}
```

### Limit {#limit}

`?limit=` parameter can be applied to any `GET` HTTP request responsible for listing records (mainly for Paginated data). The `limit` parameter is used to specify the number of records to be returned.

```http
GET /api/v1/resource?limit=10
```

It is possible to combine `limit` and `page` parameters to paginate the data.

```http
GET /api/v1/resource?limit=10&page=7
```

:::info

To change the default number of records per page, please refer to the [System Settings](/docs/administration/settings) section.

:::

### Skip Pagination Limit {#skip-pagination-limit}

In order to allow requests get all data that matches their criteria (e.g. search-criteria) and disable pagination, you can set the `limit` parameter to `0`.

This will return all matching entities:
    
```http
GET /api/v1/resource?limit=0
```

## Filtering

`?filter=` parameter can be applied to any HTTP request and is used to control the response size, by defining what data you want back in the response.

The `filter` parameter is used to specify the fields to be returned.

```http
GET /api/v1/resource?filter=id,name
```

The above request will return only the `id` and `name` fields.

```json
{
    "data": [
        {
            "id": 1,
            "name": "Resource Name"
        }
    ]
}
```

:::info

The filter parameter will be applied to any relationship that is included in the request. This means, that only the fields to be filtered will be present - all other fields are excluded. This also applies for all relationships (i.e., includes) of the object.

:::


## Searching

`?search=` parameter can be applied to any `GET` HTTP request responsible for listing records (mainly for Paginated data).

```
?search=John
?search=name:John
?search=name:John%20Doe
```

:::info

Spaces in the search query should be replaced with `%20` (search=keyword%20here)

:::

**Search any field for multiple keywords**

```http

GET /api/v1/resource?search=?search=John%20Doe

```

**Search in a specific field**

```http

GET /api/v1/resource?search=name:John

```

Use `:` to separate the field name and the search query.

**Search in multiple fields**

```http

GET /api/v1/resource?search=name:John;email:john@doe.com

```

Use `;` to separate multiple fields.

## Relationships (include) {#relationships}

`?include=` parameter can be applied to any `GET` HTTP request responsible for listing records. The `include` parameter is used to specify which relationships should be included in the response.

With the `include` parameter  it is possible request for complex data structures, including relationships.

```http

GET /api/v1/resource?include=relationship1,relationship2

```

#### How to Use

Let's say we have a `Customer` resource that has a `hasMany` relationship with `Account` resource. To include the `Account` relationship in the response, we can use the `include` parameter.

```http

GET /api/v1/customer?include=accounts

```

Available relationships for a resource will be present in the `meta` object of any response.

```json
{
  "meta": {
    "include": [
      "roles",
      "permissions",
      "telephones"
    ]
  }
}
```

#### Nested Relationships {#nested-relationships}

It is possible to include nested relationships by using the `.` (dot) notation.

```http

GET /api/v1/resource?include=relationship1,relationship2.nestedRelationship

```

## Skip caching {#skip-caching}

To run a new query and force disabling the cache on certain endpoints, you can use this parameter:

```http

GET /api/v1/resource?skipCache=true

```
:::note

It's not recommended to keep skipping cache as it has bad impact on the performance.

:::