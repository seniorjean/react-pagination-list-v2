# PaginationList

`PaginationList` is a React component designed to render paginated lists of items. It utilizes Material-UI `Pagination` component and allows for custom item rendering and various styling options. ✨powered by Mr. John 😎🤘

## Installation

You can install the package using npm or yarn:

```bash
npm install react-pagination-list-v2 --legacy-peer-deps
```

or

```bash
yarn add react-pagination-list-v2 --legacy-peer-deps
```

## Usage

Here's a basic example of how to use the `PaginationList` component in your React project:

```jsx
import React from 'react';
import  { UserCard , PaginationList } from 'pagination-list';

const users = [];

for (let i = 1; i <= 30; i++) {
    users.push({
        id: i,
        name: `John${i}`,
        email: `john${i}@gmail.com`,
        phone: `0123456789${i}`
    });
}

const App = () => (
    <PaginationList
        data={users}
        pageSize={10}
        renderItem={(user) => <UserCard user={user} />}
        color="primary"
        shape="circular"
        variant="contained"
        size="medium"
    />
);

export default App;
```

## Props

| **Prop**         | **Type**                      | **Default**                    | **Description**                                                                                               |
|------------------|-------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| data             | Array                         | (required)[]                   | An array of items to be paginated.                                                                             |
| pageSize         | Number                        | 10                             | The number of items per page.                                                                                 |
| renderItem       | Function                      | (item,index)=>{<CustomItem />} | A function that takes an item and its index as arguments and returns a React element. Renders each item in the list. |
| color            | String                        | 'primary'                      | The color of the pagination controls. Valid values are `'primary'`, `'secondary'`, and `'standard'`.             |
| shape            | String                        | 'circular'                     | The shape of the pagination controls. Valid values are `'circular'` and `'rounded'`.                              |
| variant          | String                        | 'text'                         | The variant of the pagination controls. Valid values are `'outlined'`, `'text'`, and `'contained'`.              |
| size             | String                        | 'small'                        | The size of the pagination controls. Valid values are `'small'`, `'medium'`, and `'large'`.                    |

This table provides a clear overview of the available props for the `PaginationList` component, their types, default values, and descriptions.

The `PaginationList` component accepts the following props:

- **data** (required): An array of items to be paginated.
- **pageSize** (optional, default: 10): The number of items per page.
- **renderItem** (optional, default: renders a `UserCard` component for each item): A function that takes an item and its index as arguments and returns a React element. This function is used to render each item in the list.
- **color** (optional, default: 'primary'): The color of the pagination controls. Valid values are `'primary'`, `'secondary'`, and `'standard'`.
- **shape** (optional, default: 'circular'): The shape of the pagination controls. Valid values are `'circular'` and `'rounded'`.
- **variant** (optional, default: 'outlined'): The variant of the pagination controls. Valid values are `'outlined'`, `'text'`, and `'contained'`.
- **size** (optional, default: 'medium'): The size of the pagination controls. Valid values are `'small'`, `'medium'`, and `'large'`.

## Example

Here's a more detailed example with custom rendering:

```jsx
import React from 'react';
import  { PaginationList } from 'pagination-list';


const items = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    // ... more items ...
];

const CustomItemRenderer = (item) => (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h3>{item.label}</h3>
    </div>
);

const App = () => (
    <PaginationList
        data={items}
        pageSize={5}
        renderItem={CustomItemRenderer}
        color="secondary"
        shape="rounded"
        variant="contained"
        size="large"
    />
);

export default App;
```

In this example, we're rendering a list of custom items with a larger pagination component.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

Please make sure to update tests as appropriate.

## License

MIT
```