import React, { useState, useEffect } from 'react';
import ReactFlow, { ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

// === ✅ CONFIG VARIABLES (your control panel) ===
const canvasHeight = 4000;
const canvasWidth = 1000;

const strokeWidth = 3;
const lineColor = '#333';
const showArrows = true;
const animatedLines = true;
const cardBorder = false;
// ================================================

const CARD_WIDTH = 240;
const CARD_HEIGHT = 100;
const SMALL_CARD_WIDTH = 160;
const SMALL_CARD_HEIGHT = 80;
const SPACING_Y = 500;
const PADDING_TOP = 100;

const baseNodeStyle = {
  borderRadius: 12,
  fontWeight: 'bold',
  fontSize: 16,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: cardBorder ? '1px solid #999' : 'none',
};

const nodes = [
  {
    id: 'a1',
    data: { label: 'A1' },
    position: { x: 100, y: PADDING_TOP },
    style: { ...baseNodeStyle, width: SMALL_CARD_WIDTH, height: SMALL_CARD_HEIGHT, background: '#007BFF' },
  },
  {
    id: 'a2',
    data: { label: 'A2' },
    position: { x: 280, y: PADDING_TOP },
    style: { ...baseNodeStyle, width: SMALL_CARD_WIDTH, height: SMALL_CARD_HEIGHT, background: '#007BFF' },
  },
  {
    id: 'a3',
    data: { label: 'A3' },
    position: { x: 460, y: PADDING_TOP },
    style: { ...baseNodeStyle, width: SMALL_CARD_WIDTH, height: SMALL_CARD_HEIGHT, background: '#007BFF' },
  },
  {
    id: 'a4',
    data: { label: 'A4' },
    position: { x: 640, y: PADDING_TOP },
    style: { ...baseNodeStyle, width: SMALL_CARD_WIDTH, height: SMALL_CARD_HEIGHT, background: '#007BFF' },
  },
  {
    id: '1',
    data: { label: 'Main Blue Card' },
    position: { x: (canvasWidth - CARD_WIDTH) / 2, y: PADDING_TOP + SPACING_Y },
    style: { ...baseNodeStyle, width: CARD_WIDTH, height: CARD_HEIGHT, background: '#007BFF' },
  },
  {
    id: '2',
    data: { label: 'Red Card' },
    position: { x: (canvasWidth - CARD_WIDTH) / 2, y: PADDING_TOP + SPACING_Y * 2 },
    style: { ...baseNodeStyle, width: CARD_WIDTH, height: CARD_HEIGHT, background: '#DC3545' },
  },
  {
    id: '3',
    data: { label: 'Yellow Card' },
    position: { x: (canvasWidth - CARD_WIDTH) / 2, y: PADDING_TOP + SPACING_Y * 3 },
    style: { ...baseNodeStyle, width: CARD_WIDTH, height: CARD_HEIGHT, background: '#FFC107', color: '#000' },
  },
];

const createEdge = (source, target) => ({
  id: `e-${source}-${target}`,
  source,
  target,
  animated: animatedLines,
  style: {
    strokeWidth,
    stroke: lineColor,
  },
  markerEnd: showArrows ? {
    type: 'arrowclosed',
    color: lineColor,
  } : undefined,
});

const edges = [
  createEdge('a1', '1'),
  createEdge('a2', '1'),
  createEdge('a3', '1'),
  createEdge('a4', '1'),
  createEdge('1', '2'),
  createEdge('2', '3'),
];

const FlowCanvas = () => {
  const { setViewport } = useReactFlow();
  const [nodePositions, setNodePositions] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;
      const yOffset = scrollPercent * (PADDING_TOP + SPACING_Y * 3);

      setViewport({ x: 0, y: -yOffset, zoom: 1 }, { duration: 0 });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setViewport]);

  const handleNodeDragStop = (event, node) => {
    const maxDistance = 100;  // Max distance to allow dragging
    const originalPosition = nodePositions[node.id] || node.position;

    const dx = node.position.x - originalPosition.x;
    const dy = node.position.y - originalPosition.y;

    // Allow dragging within a 100px range from original position
    if (Math.abs(dx) > maxDistance || Math.abs(dy) > maxDistance) {
      // Snap back to the original position
      setNodePositions(prevPositions => ({
        ...prevPositions,
        [node.id]: originalPosition,
      }));

      // Smoothly snap back to the original position
      node.position = originalPosition;
    } else {
      // Update node position after drag
      setNodePositions(prevPositions => ({
        ...prevPositions,
        [node.id]: node.position,
      }));
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 0,
        width: canvasWidth,
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView={false}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        zoomOnPinch={false}
        preventScrolling
        nodesDraggable={true}  // Enable dragging
        elementsSelectable={false}  // Disable node connection
        onNodeDragStop={handleNodeDragStop}  // Handle drag stop
        connectable={false}  // Disable connection creation
      />
    </div>
  );
};

const ReactFlowScene = () => {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
};

export default ReactFlowScene;
