import type { Node, BuiltInNode } from '@xyflow/react';
import type { ExpressionNode } from './ExpressionNode/types';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode | ExpressionNode;
