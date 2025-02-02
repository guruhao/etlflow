import type { Node } from '@xyflow/react';

export interface ExpressionItem {
  name: string;
  expr: string;
}

export type ExpressionNodeData = {
  expressions: ExpressionItem[];
};

export type ExpressionNode = Node<ExpressionNodeData, 'expression'>;