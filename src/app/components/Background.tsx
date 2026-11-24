"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  [7, 20], [20, 11], [28, 35], [42, 18], [50, 47], [62, 23], [73, 39], [87, 17], [94, 48],
  [14, 67], [31, 79], [45, 66], [59, 84], [77, 69], [91, 88],
];
const links = [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,5],[4,6],[5,6],[5,7],[6,8],[2,9],[9,10],[10,11],[11,4],[11,12],[6,13],[13,14],[12,13]];
const routes = [[0, 2, 4, 6, 8], [1, 3, 5, 7], [9, 10, 11, 4, 5, 6, 13, 14], [12, 13, 6, 8]];
type ClickEffect = { id: number; x: number; y: number; nodeX: number; nodeY: number; path: string };

export default function Background() {
  const [ready, setReady] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const nextEffectId = useRef(0);
  const effectsSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setReady(true);
    const timers: number[] = [];
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      if (event.target instanceof Element && event.target.closest("button, [role='button']")) return;

      const bounds = effectsSvgRef.current?.getBoundingClientRect();
      if (!bounds || bounds.width === 0 || bounds.height === 0) return;
      const x = ((event.clientX - bounds.left) / bounds.width) * window.innerWidth;
      const y = ((event.clientY - bounds.top) / bounds.height) * window.innerHeight;
      const normalizedX = (x / window.innerWidth) * 100;
      const normalizedY = (y / window.innerHeight) * 100;
      const nearest = nodes.reduce((best, node, index) => {
        const currentDistance = Math.hypot(node[0] - normalizedX, node[1] - normalizedY);
        const bestDistance = Math.hypot(nodes[best][0] - normalizedX, nodes[best][1] - normalizedY);
        return currentDistance < bestDistance ? index : best;
      }, 0);
      const id = nextEffectId.current++;
      const route = routes.find((candidate) => candidate.includes(nearest)) ?? [nearest];
      const routeIndex = route.indexOf(nearest);
      const onward = route.slice(routeIndex + 1);
      const routeNodes = onward.length ? onward : route.slice(0, routeIndex).reverse();
      const points = [
        [x, y],
        ...[nearest, ...routeNodes].map((nodeIndex) => [nodes[nodeIndex][0] / 100 * window.innerWidth, nodes[nodeIndex][1] / 100 * window.innerHeight]),
      ];
      const path = points.map(([pointX, pointY], index) => `${index === 0 ? "M" : "L"} ${pointX} ${pointY}`).join(" ");

      setClickEffects((effects) => [...effects.slice(-3), {
        id,
        x,
        y,
        nodeX: nodes[nearest][0] / 100 * window.innerWidth,
        nodeY: nodes[nearest][1] / 100 * window.innerHeight,
        path,
      }]);
      timers.push(window.setTimeout(() => {
        setClickEffects((effects) => effects.filter((effect) => effect.id !== id));
      }, 2400));
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <>
    <div className="network-backdrop" aria-hidden="true">
      <div className="network-glow network-glow-one" />
      <div className="network-glow network-glow-two" />
      {ready && (
        <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {links.map(([from, to], index) => (
            <line key={index} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} className="network-link" style={{ animationDelay: `${index * -0.6}s` }} />
          ))}
          {routes.map((route, index) => {
            const path = route.map((nodeIndex, pointIndex) => `${pointIndex === 0 ? "M" : "L"} ${nodes[nodeIndex][0]} ${nodes[nodeIndex][1]}`).join(" ");
            const motion = { dur: `${13 + index * 3}s`, begin: `${index * 1.8}s`, repeatCount: "indefinite" as const, path };
            return (
              <g key={`route-${index}`} className="network-packet">
                <circle r="1.15" className="network-packet-halo"><animateMotion {...motion} /></circle>
                <circle r="0.48" className="network-packet-core"><animateMotion {...motion} /></circle>
              </g>
            );
          })}
          {nodes.map(([cx, cy], index) => (
            <g key={index} className="network-node" style={{ animationDelay: `${index * 170}ms` }}>
              <circle cx={cx} cy={cy} r="0.72" />
              <circle cx={cx} cy={cy} r="1.75" className="node-pulse" />
            </g>
          ))}
        </svg>
      )}
    </div>
      {ready && (
        <svg ref={effectsSvgRef} className="network-effects" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} preserveAspectRatio="none">
          {clickEffects.map((effect) => {
            return (
              <g key={effect.id}>
                <circle cx={effect.x} cy={effect.y} r="9" className="click-ripple" />
                <path d={effect.path} className="click-connection" />
                <g className="click-packet">
                  <animateMotion dur="2.2s" fill="freeze" rotate="auto" path={effect.path} />
                  <path d="M -46 0 L -18 0" className="click-packet-trail" />
                  <circle r="19" className="click-packet-glow" />
                  <rect x="-17" y="-11" width="34" height="22" rx="5" className="click-packet-body" />
                  <circle cx="-10" cy="-6" r="1.4" className="click-packet-light" />
                  <circle cx="-5" cy="-6" r="1.4" className="click-packet-light packet-light-delay" />
                  <text x="1" y="4" className="click-packet-label">IP</text>
                </g>
                <circle cx={effect.nodeX} cy={effect.nodeY} r="6" className="click-node-pulse" />
              </g>
            );
          })}
        </svg>
      )}
    </>
  );
}
