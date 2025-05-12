import React, { useState, useEffect } from 'react';
import ReactFlow, { ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

// === ✏️ EDITABLE SETTINGS =====================
const canvasWidth = 1000;
const canvasHeight = 4000;

const SPACING_Y = 500;
const PADDING_TOP = 100;

const CARD = { width: 240, height: 100 };
const SMALL_CARD = { width: 40, height: 40 };

const lineColor = '#555';
const strokeWidth = 2;
const showArrows = true;
const animatedLines = true;
// ==============================================

// === 💡 NODES: Edit your visible blocks here
const baseStyle = {
  borderRadius: 12,
  fontWeight: 'bold',
  fontSize: 16,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
};

const nodes = [
  { id: 'a1', label: '', x: 610, y: PADDING_TOP + 10},
  { id: 'a2', label: '', x: 670, y: PADDING_TOP + 50 },
  { id: 'a3', label: '', x: 850, y: PADDING_TOP +120},
  { id: 'a4', label: '', x: 940, y: PADDING_TOP + 230},
  { id: 'a5', label: '', x: 740, y: PADDING_TOP + 370},
  { id: '1', label: 'Start', x: (canvasWidth - CARD.width) / 2, y: PADDING_TOP + SPACING_Y },
  { id: '2', label: 'Red Card',       x: (canvasWidth - CARD.width) / 2, y: PADDING_TOP + SPACING_Y * 2 },
  { id: '3', label: 'Yellow Card',    x: (canvasWidth - CARD.width) / 2, y: PADDING_TOP + SPACING_Y * 3 },
].map((n, i) => ({
  id: n.id,
  data: { label: n.label },
  position: { x: n.x, y: n.y },
  style: {
    ...baseStyle,
    background: ['rgba(178, 197, 223, 0.67)', 'rgba(178, 197, 223, 0.67)', 'rgba(178, 197, 223, 0.67)', 'rgba(178, 197, 223, 0.67)', '#a9b9cf', '#a9b9cf', '#a9b9cf'][i],
    width: i < 5 ? SMALL_CARD.width : CARD.width,
    height: i < 5 ? SMALL_CARD.height : CARD.height,
    color: i === 6 ? '#000' : '#fff',
  },
})) ;

//rgba(178, 197, 223, 0.67)
// #7bb8f9
// #70e9ed
// #f68ad0
// #d0dae8
// #db7b33


// === 💡 EDGES: Edit connections here
const createEdge = (from, to) => ({
  id: `e-${from}-${to}`,
  source: from,
  target: to,
  animated: animatedLines,
  style: { stroke: lineColor, strokeWidth },
  markerEnd: showArrows ? { type: 'arrowclosed', color: lineColor } : undefined,
});

const edges = [
  createEdge('a1', '1'),
  createEdge('a2', '1'),
  createEdge('a3', '1'),
  createEdge('a4', '1'),
  createEdge('a5', '1'),
  createEdge('1', '2'),
  createEdge('2', '3'),
];

// === 🧠 FLOW CANVAS (scroll-linked camera)
const FlowCanvas = () => {
  const { setViewport } = useReactFlow();
  const [originalPos, setOriginalPos] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const t = window.scrollY / maxScroll;
      const yOffset = t * (PADDING_TOP + SPACING_Y * 3);
      setViewport({ x: 0, y: -yOffset, zoom: 1 }, { duration: 0 });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setViewport]);

  const onDragStop = (_, node) => {
    const prev = originalPos[node.id] || node.position;
    const dx = node.position.x - prev.x;
    const dy = node.position.y - prev.y;
    const max = 100;

    const newPos = Math.abs(dx) > max || Math.abs(dy) > max ? prev : node.position;
    node.position = newPos;

    setOriginalPos(pos => ({ ...pos, [node.id]: newPos }));
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: canvasWidth, height: '100vh', zIndex: 0, pointerEvents: 'none'
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView={false}
        zoomOnScroll={false}
        panOnDrag={false}
        zoomOnPinch={false}
        panOnScroll={false}
        preventScrolling
        elementsSelectable={false}
        connectable={false}
        nodesDraggable={true}
        onNodeDragStop={onDragStop}
      />
    </div>
  );
};

// === 🔁 MAIN WRAPPER
const ReactFlowScene = () => (
  <ReactFlowProvider>
    <FlowCanvas />
  </ReactFlowProvider>
);

export default ReactFlowScene;