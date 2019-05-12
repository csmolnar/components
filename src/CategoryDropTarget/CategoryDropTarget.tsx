import * as React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd';
import { Category } from '@cytoai/types';
const { useDrop } = dnd;

type Props = {
  category: Category;
  children: React.ReactNode;
  updateImageCategory: (identifier: string, categoryIdentifier: string) => void;
};

const CategoryDropTarget = (props: Props) => {
  const { category, children, updateImageCategory } = props;

  const drop = React.useCallback(
    item => {
      updateImageCategory(item.id, category.identifier);
    },
    [category.identifier, updateImageCategory]
  );

  const spec = {
    accept: 'image',
    drop: drop
  };

  const [, dropTarget] = useDrop(spec);

  return <div ref={dropTarget}>{children}</div>;
};

export default CategoryDropTarget;
