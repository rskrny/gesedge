# Motion & Diagram Tooling — Expert Operating File
<!-- Loaded when building animated diagrams / motion graphics on the site. -->

## When to invoke
Building or choosing tools for animated diagrams, flow/pipeline visualizations, or
motion graphics (e.g., the email-triage flow, the ShopMyRoom 3D/AR pipeline).

## What "great" demands here
Impressive, on-brand motion that reads instantly and stays lightweight. A diagram should
feel alive (data flowing, states changing) without shipping a heavy bundle to every
visitor. Prefer purpose-built tools over hand-rolling.

## Recommended stack (research, 2026)
- **Node/flow pipelines → React Flow (@xyflow/react)** — MIT, ~37k★, purpose-built for
  node+connection diagrams. Use its **Animated SVG Edge** for the "data flowing along the
  connection" particle effect (more performant than CSS stroke-dash). Best fit for the
  email-triage diagram (messy inbox → AI core → routed workers; states = node/edge state).
- **Choreography → Motion (ex-Framer Motion)** for React-native entrance/scroll motion;
  **GSAP** for cinematic timelines. NOTE: GSAP is now 100% free incl. MorphSVG/DrawSVG/
  MotionPath (Webflow, 2025) — no paywall reason to avoid it.
- **3D (ShopMyRoom) → React Three Fiber + drei + postprocessing** (three.js, MIT). Right
  for showing a real 3D/AR pipeline. The ONE perf cost is three.js (~155KB gz) — gate it:
  lazy-load the section, `<Suspense>`, Draco-compressed glTF, render only in-viewport, cap DPR.
- **Lightweight 3D fallback → render once in Motion Canvas (or a Rive state machine) and
  embed a short WebM / tiny Rive file** — near-zero page JS for a 3D feel.
- **AI tools (SVGator, StarVector)** — only to generate STATIC icon/SVG assets; never the
  final interactive diagram.

## Checklist
- Code-split/lazy-load any diagram bundle to its own section; nothing heavy on first paint.
- Compress 3D assets (Draco/glTF); render 3D only when in viewport; cap pixel ratio.
- Honor prefers-reduced-motion; provide a static fallback image for each animated diagram.
- Budget per-diagram weight; measure on mobile.

## Anti-patterns
- Mermaid for showcase diagrams (generic, limited motion) — prototyping only.
- Shipping three.js to every page; full Lottie payloads when Rive/WebM is lighter.
- Relying on AI generators for the final animation.

## Decisions & trade-offs
Live 3D vs rendered video for ShopMyRoom: go live R3F only if interactivity earns its
weight; otherwise ship a rendered video/Rive. For the email pipeline, React Flow + Motion
is the clear low-risk, high-polish choice.

## Project notes
- Email-triage diagram concept (Ryan): messy inbox → our AI system → routed to the right
  workers, organized.
- ShopMyRoom: scan → 3D model → place-in-room → AR view (Ryan is CTO).
- Key URLs: reactflow.dev · reactflow.dev/ui/components/animated-svg-edge · motion.dev ·
  r3f.docs.pmnd.rs · rive.app · motioncanvas.io
