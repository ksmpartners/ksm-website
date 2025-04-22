import React from 'react';
import RiveComponent from "@rive-app/react-canvas";

export default function AnimatedIcon() {
  return (
    <div>
      <RiveComponent
        // src="/static/animations/triangle.riv"
        src="/animations/triangle.riv"
        style={{ width: 200, height: 200 }} // 👈 This works too
        />

    </div>
  );
}
