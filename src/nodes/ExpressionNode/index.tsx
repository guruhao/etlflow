import { Handle, Position, NodeResizeControl, type NodeProps } from '@xyflow/react';
import { useState } from 'react';
import { type ExpressionNode } from './types';

const MIN_WIDTH = 280;
const MIN_HEIGHT = 150;
const MAX_WIDTH = 500;
const MAX_HEIGHT = 400;

export function ExpressionNode({ data, selected }: NodeProps<ExpressionNode>) {
  const [minimized, setMinimized] = useState(false);

  const handleMinimizeClick = () => setMinimized(true);
  const handleDoubleClick = () => minimized && setMinimized(false);

  return (
    <div
      className={`expression-node ${selected ? 'selected' : ''} ${minimized ? 'minimized' : ''}`}
      style={{
        minWidth: minimized ? 'auto' : MIN_WIDTH,
        minHeight: minimized ? 'auto' : MIN_HEIGHT,
      }}
      onDoubleClick={handleDoubleClick}
    >
      <div className="expression-node-header" data-draghandle>
        <img
          src="/src/nodes/ExpressionNode/icon.svg"
          alt="Expression Node"
          className="expression-node-header-icon"
        />
        {!minimized && (
          <>
            <span>Expression</span>
            <div className="expression-node-header-buttons">
              <button className="expression-node-button">?</button>
              <button className="expression-node-button" onClick={handleMinimizeClick}>−</button>
            </div>
          </>
        )}
      </div>

      {!minimized ? (
        <>
          <div className="expression-node-content">
            <div className="expression-node-table-header">
              <div className="expression-node-table-header-cell name">Name</div>
              <div className="expression-node-table-header-cell expr">Expr</div>
            </div>

            <div className="expression-node-table-body">
              {data.expressions.map((item, index) => (
                <div key={index} className="expression-node-table-row">
                  <div className="expression-node-table-cell name">
                    <div className="expression-node-grip">
                      <div className="expression-node-grip-dots">
                        <div className="expression-node-grip-dot" />
                        <div className="expression-node-grip-dot" />
                      </div>
                      <div className="expression-node-grip-dots">
                        <div className="expression-node-grip-dot" />
                        <div className="expression-node-grip-dot" />
                      </div>
                    </div>
                    <span className="expression-node-cell-text">{item.name}</span>
                  </div>
                  <div className="expression-node-table-cell expr">{item.expr}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="expression-node-row-handles">
            {data.expressions.map((_, index) => (
              <div
                key={index}
                className="expression-node-row-handle-pair"
                style={{
                  top: `${48 + index * 32}px`,
                  height: '32px'
                }}
              >
                <Handle
                  type="target"
                  position={Position.Left}
                  id={`left-${index}`}
                  className="expression-node-handle left"
                />
                <Handle
                  type="source"
                  position={Position.Right}
                  id={`right-${index}`}
                  className="expression-node-handle right"
                />
              </div>
            ))}
          </div>

          <NodeResizeControl
            minWidth={MIN_WIDTH}
            minHeight={MIN_HEIGHT}
            maxWidth={MAX_WIDTH}
            maxHeight={MAX_HEIGHT}
            shouldResize={(event) => true}
            style={{ background: 'transparent' }}
          >
            <div className="expression-node-resize-handle" />
          </NodeResizeControl>
        </>
      ) : (
        <>
          <Handle type="target" position={Position.Left} className="expression-node-handle left" />
          <Handle type="source" position={Position.Right} className="expression-node-handle right" />
        </>
      )}
    </div>
  );
}