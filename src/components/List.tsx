import React from 'react';

interface I_ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: I_ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
