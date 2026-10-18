'use strict';

// A schematic illustration of the research question, not a numerical solver.
// Three phases cycle: a carrier flow organises particle paths (tracers follow
// it, heavier particles lag); particles meet and contacts flash; the population
// settles into streamwise bands. Nothing here is measured or to scale.
(() => {
  const canvas = document.getElementById('research-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const figure = canvas.closest('.motion');
  const toggle = document.getElementById('animation-toggle');
  const caption = document.getElementById('animation-caption');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const descriptions = [
    'A carrier flow organises particle paths. Light particles follow it; heavier ones lag and cross it.',
    'Finite-size particles meet. Each contact changes two trajectories at once.',
    'Across the whole population, structure appears: bands, alignment, coherence.'
  ];
  const STAGES = descriptions.length;
  const H = 430, duration = 8;
  let LW = 720; // logical width, follows the rendered aspect ratio
  const BLUE = '36, 87, 163', INK = '23, 33, 48', ORANGE = '217, 105, 15';
  let seed = 283923597;
  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  // x in [0,1) along the flow, y in [-.5,.5] across it. Each particle carries the
  // label c of the streamline it would follow if it had no inertia.
  const particles = Array.from({length: 230}, (_, i) => {
    const heavy = i % 6 === 0;
    const c = (random() - .5) * .86;
    return {
      x: random(), y: c, c, dy: 0,
      lane: i % 4, phase: random() * Math.PI * 2,
      speed: .028 + random() * .016,
      size: heavy ? 3.2 + random() * .8 : 1.4 + random() * 1.3,
      tau: heavy ? 1.0 + random() * .9 : .04 + random() * .1,
      off: (random() - .5) * .05
    };
  });
  const flashes = [];
  let current = motion.matches ? 2 : 0;
  let weights = Array(STAGES).fill(0); weights[current] = 1;
  let time = 0, story = current * duration, paused = motion.matches;
  let inView = true, frame = 0, previous = 0;

  function selectStage(index) {
    current = index;
    if (caption) caption.textContent = descriptions[index];
  }
  function updateToggle() {
    if (!toggle) return;
    toggle.textContent = paused ? 'Play' : 'Pause';
    toggle.setAttribute('aria-label', paused ? 'Play the illustration' : 'Pause the illustration');
  }
  function canRun() { return !paused && inView && !document.hidden; }
  function schedule() { if (canRun() && !frame) frame = requestAnimationFrame(tick); }
  function stop() { if (frame) cancelAnimationFrame(frame); frame = 0; previous = 0; }

  // The carrier flow: the streamline with label c, as a curve y = Y(x; c).
  function streamline(x, c) {
    return c + Math.sin(x * Math.PI * 2.2 + c * 3.1 + time * .12) * .045
      + Math.sin(x * Math.PI * 4.6 - c * 2 + time * .07) * .012;
  }
  // Band centres for the collective phase: streamwise streaks with a slow wave.
  const LANES = [-.30, -.10, .10, .30];
  function streak(x, lane, phase) {
    return lane + Math.sin(x * Math.PI * 2.05 + phase + time * .18) * .03
      + Math.sin(x * Math.PI + time * .12) * .035 * lane;
  }
  function toScreen(p) {
    return {x: 40 + p.x * (LW - 80), y: H / 2 + p.y * 360};
  }
  function edgeFade(x) { return Math.min(1, x * 16, (1 - x) * 16); }

  function step(dt) {
    const organise = weights[2];
    for (const p of particles) {
      const dx = p.speed * dt * (1 + .08 * p.lane);
      p.x += dx;
      if (p.x >= 1) { p.x -= 1; p.c = (random() - .5) * .86; p.y = p.c + (random() - .5) * .3 * Math.min(1, p.tau); p.dy = 0; }
      // Where the particle would be without inertia, blended toward its band as structure forms.
      const target = streamline(p.x, p.c) * (1 - organise)
        + (streak(p.x, LANES[p.lane], p.phase * .08) + p.off) * organise;
      // Light particles sit on the target; heavy ones relax toward it with a lag.
      const tau = p.tau * (1 - .5 * organise) + .03;
      const y1 = p.y + (target - p.y) * (1 - Math.exp(-dt / tau));
      p.dy = dx > 0 ? (y1 - p.y) / dx : 0;
      p.y = y1;
    }
    // Contacts: close pairs flash, separate, and keep the change in their paths.
    if (weights[1] > .05) {
      const sorted = particles.slice().sort((a, b) => a.x - b.x);
      for (let i = 0; i < sorted.length; i++) {
        const a = sorted[i];
        for (let j = i + 1; j < sorted.length; j++) {
          const b = sorted[j];
          if (b.x - a.x > .018) break;
          const dx = (b.x - a.x) * (LW - 80), dy = (b.y - a.y) * 360;
          const reach = a.size + b.size + 1.5, d = Math.hypot(dx, dy);
          if (d < reach && a.x > .08 && a.x < .92) {
            const push = (reach - d) / 360 * .6 + .004;
            const sgn = dy >= 0 ? 1 : -1;
            a.y -= sgn * push; b.y += sgn * push;
            a.c -= sgn * push * 1.5; b.c += sgn * push * 1.5;
            const s = toScreen({x: (a.x + b.x) / 2, y: (a.y + b.y) / 2});
            if (!flashes.some(f => Math.hypot(f.x - s.x, f.y - s.y) < 14 && time - f.t < .5)) {
              flashes.push({x: s.x, y: s.y, t: time});
            }
          }
        }
      }
    }
    while (flashes.length && time - flashes[0].t > .9) flashes.shift();
  }

  function strokePath(points, color, width) {
    context.beginPath();
    points.forEach((p, i) => i ? context.lineTo(p.x, p.y) : context.moveTo(p.x, p.y));
    context.strokeStyle = color; context.lineWidth = width; context.stroke();
  }

  function draw() {
    context.clearRect(0, 0, LW, H);
    const background = context.createLinearGradient(0, 0, LW, H);
    background.addColorStop(0, '#f3f6fb'); background.addColorStop(1, '#ffffff');
    context.fillStyle = background; context.fillRect(0, 0, LW, H);

    // Streamlines.
    for (let row = 0; row < 13; row++) {
      const y0 = -.46 + row * .077;
      const points = [];
      for (let s = 0; s <= 90; s++) {
        const x = -.08 + s / 90 * 1.16;
        points.push(toScreen({x, y: streamline(x, y0)}));
      }
      const alpha = .09 + (row % 3 === 0 ? .06 : 0);
      strokePath(points, 'rgba(' + BLUE + ',' + alpha + ')', row % 3 === 0 ? 1.2 : .9);
      const ax = -.06 + ((time * .018 + row * .083) % 1) * 1.12;
      const head = toScreen({x: ax, y: streamline(ax, y0)});
      const back = toScreen({x: ax - .008, y: streamline(ax - .008, y0)});
      const ang = Math.atan2(head.y - back.y, head.x - back.x);
      context.save(); context.translate(head.x, head.y); context.rotate(ang);
      strokePath([{x: -4, y: -2.4}, {x: 0, y: 0}, {x: -4, y: 2.4}], 'rgba(' + BLUE + ',.32)', 1);
      context.restore();
    }

    // Soft bands stand for a population-level description.
    if (weights[2] > .02) {
      context.save(); context.globalAlpha = weights[2];
      for (const lane of LANES) {
        const path = [];
        for (let s = 0; s <= 70; s++) {
          const x = -.08 + s / 70 * 1.16;
          path.push(toScreen({x, y: streak(x, lane, 0)}));
        }
        strokePath(path, 'rgba(' + BLUE + ',.045)', 30);
        strokePath(path, 'rgba(' + BLUE + ',.07)', 14);
      }
      context.restore();
    }

    // Contact flashes.
    for (const f of flashes) {
      const age = (time - f.t) / .9;
      context.beginPath(); context.arc(f.x, f.y, 5 + age * 16, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(' + ORANGE + ',' + (.75 * (1 - age)) + ')';
      context.lineWidth = 1.4; context.stroke();
      context.beginPath(); context.arc(f.x, f.y, 2.2, 0, Math.PI * 2);
      context.fillStyle = 'rgba(' + ORANGE + ',' + (.9 * (1 - age)) + ')'; context.fill();
    }

    // Particles, with short tails and a faint halo on the heavy ones.
    for (const p of particles) {
      const s = toScreen(p);
      let tx = -.012 * (LW - 80), ty = -p.dy * .012 * 360;
      const len = Math.hypot(tx, ty), cap = 4 + p.size * 2.2;
      if (len > cap) { tx *= cap / len; ty *= cap / len; }
      const tail = {x: s.x + tx, y: s.y + ty};
      context.save(); context.globalAlpha = edgeFade(p.x);
      strokePath([tail, s], 'rgba(' + BLUE + ',.22)', p.size * .7);
      if (p.tau > .5) {
        context.beginPath(); context.arc(s.x, s.y, p.size + 4, 0, Math.PI * 2);
        context.fillStyle = 'rgba(' + INK + ',.045)'; context.fill();
      }
      context.beginPath(); context.arc(s.x, s.y, p.size, 0, Math.PI * 2);
      context.fillStyle = p.tau > .5 ? '#172130' : (p.lane % 2 ? '#5b7fb5' : '#2457a3');
      context.fill();
      context.restore();
    }
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    const scale = canvas.height / H;
    LW = canvas.width / scale;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    draw();
  }
  function tick(now) {
    frame = 0;
    if (!canRun()) { previous = 0; return; }
    const delta = previous ? Math.min((now - previous) / 1000, .05) : 0;
    previous = now; time += delta; story = (story + delta) % (duration * STAGES);
    const stage = Math.floor(story / duration);
    if (stage !== current) selectStage(stage);
    weights = weights.map((weight, i) => weight + ((i === current ? 1 : 0) - weight) * Math.min(1, delta * 1.6));
    step(delta); draw(); schedule();
  }
  // Settle the initial state so the first frame already looks like a flow.
  for (let i = 0; i < 90; i++) { time += .04; step(.04); }
  time = 0;

  if (toggle) toggle.addEventListener('click', () => {
    paused = !paused; updateToggle();
    if (paused) { stop(); draw(); } else schedule();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else schedule(); });
  motion.addEventListener('change', event => {
    if (event.matches) { paused = true; stop(); updateToggle(); draw(); }
  });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting; if (inView) schedule(); else stop();
  }, {threshold: .05}).observe(canvas);
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
  else window.addEventListener('resize', resize, {passive: true});
  figure.classList.add('animation-ready');
  if (toggle) toggle.disabled = false;
  selectStage(current); updateToggle(); resize(); schedule();
})();
