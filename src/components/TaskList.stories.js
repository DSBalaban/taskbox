import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { task, actions } from './Task.stories';

export const defaultTasks = Array.from({ length: 6 }, (v, k) => ({
  ...task,
  id: k + 1,
  title: `Task ${k + 1}`
}));

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3em' }}>{story()}</div>)
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)
  .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />)
