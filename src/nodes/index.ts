import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { ExpressionNode } from './ExpressionNode';
import { AppNode } from './types';
import './ExpressionNode/styles.css';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
  {
    id: 'expr1',
    type: 'expression',
    position: { x: 200, y: 100 },
    data: {
      expressions: [
        { name: 'COUNTRY_ID', expr: 'COU' },
        { name: 'COUNTRY_NAME', expr: 'COU' },
        { name: 'REGION_ID', expr: 'REG' },
        { name: 'NEXTVAL', expr: 'NEX' }
      ]
    },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'expression': ExpressionNode,
} satisfies NodeTypes;
