'use strict';

// A conceptual illustration of a research programme, not a numerical solver.
(() => {
  const canvas = document.getElementById('research-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const figure = canvas.closest('.research-animation');
  const toggle = document.getElementById('animation-toggle');
  const caption = document.getElementById('animation-caption');
  const stages = [...figure.querySelectorAll('[data-stage]')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const descriptions = [
    'Flow and particle inertia shape transport through a complex environment.',
    'Local encounters connect individual particle dynamics with collective behaviour.',
    'Statistics and reduced models reveal organisation across particle and population scales.',
    'A future direction: use mechanistic models to guide transport design and control.'
  ];
  const W = 720, H = 430, duration = 7;
  let seed = 283923597;
  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  const particles = Array.from({length: 155}, (_, i) => ({
    x: random(), y: (random() - .5) * .82,
    lane: i % 4, phase: random() * Math.PI * 2,
    speed: .029 + random() * .018, size: i % 7 === 0 ? 3.4 : 1.5 + random() * 1.2
  }));
  let current = motion.matches ? 2 : 0;
  let weights = [0, 0, 0, 0]; weights[current] = 1;
  let time = 0, story = current * duration, paused = motion.matches;
  let inView = true, frame = 0, previous = 0;

  function selectStage(index) {
    current = index;
    if (caption) caption.textContent = descriptions[index];
    stages.forEach(button => {
      const active = Number(button.dataset.stage) === index;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
  }
  function updateToggle() {
    if (!toggle) return;
    toggle.textContent = paused ? 'Play' : 'Pause';
    toggle.removeAttribute('aria-pressed');
    toggle.setAttribute('aria-label', paused ? 'Play conceptual research animation' : 'Pause conceptual research animation');
  }
  function canRun() { return !paused && inView && !document.hidden; }
  function schedule() {
    if (canRun() && !frame) frame = requestAnimationFrame(tick);
  }
  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; previous = 0;
  }
  function curve(x, lane, phase) {
    return Math.sin(x * Math.PI * 2.05 + phase + time * .18) * .035
      + Math.sin(x * Math.PI + time * .12) * .04 * lane;
  }
  function position(p, trail = 0) {
    const x = ((p.x + time * p.speed - trail) % 1 + 1) % 1;
    const natural = p.y + Math.sin(x * Math.PI * 2 + p.phase + time * .13) * .085;
    const lane = [-.29, -.09, .105, .30][p.lane];
    const ordered = lane + curve(x, lane, p.phase * .08) + p.y * .085;
    const structure = weights[1] * .28 + weights[2] + weights[3];
    let y = natural * (1 - structure) + ordered * structure;
    // This smooth steering is an inverse-design metaphor, not a control result.
    y += weights[3] * Math.sin(x * Math.PI) * .14;
    return {x: 45 + x * 630, y: H / 2 + y * 360, edge: Math.min(1, x * 18, (1 - x) * 18)};
  }
  function strokePath(points, color, width) {
    context.beginPath();
    points.forEach((p, i) => i ? context.lineTo(p.x, p.y) : context.moveTo(p.x, p.y));
    context.strokeStyle = color; context.lineWidth = width; context.stroke();
  }
  function draw() {
    context.clearRect(0, 0, W, H);
    const background = context.createRadialGradient(395, 215, 25, 395, 215, 380);
    background.addColorStop(0, '#eaf4f4'); background.addColorStop(1, '#ffffff');
    context.fillStyle = background; context.fillRect(0, 0, W, H);

    // An unobtrusive spatial frame gives the concept a scientific character.
    context.strokeStyle = 'rgba(47, 88, 104, .06)'; context.lineWidth = 1;
    for (let x = 60; x <= 660; x += 60) {
      context.beginPath(); context.moveTo(x, 43); context.lineTo(x, 388); context.stroke();
    }
    for (let y = 65; y < 390; y += 65) {
      context.beginPath(); context.moveTo(40, y); context.lineTo(680, y); context.stroke();
    }

    // The streamlines gently respond to the final, forward-looking phase.
    for (let row = 0; row < 11; row++) {
      const base = 60 + row * 30;
      const points = [];
      for (let step = 0; step <= 70; step++) {
        const x = step / 70;
        const y = base + Math.sin(x * Math.PI * 2.2 + row * .18 + time * .10) * 17
          + weights[3] * Math.sin(x * Math.PI) * 43;
        points.push({x: 25 + x * 670, y});
      }
      strokePath(points, 'rgba(7, 94, 105, ' + (.10 + (row % 3 === 0 ? .07 : 0)) + ')', 1.1);
      const arrowX = 55 + ((time * 14 + row * 49) % 600);
      const arrowY = base + Math.sin((arrowX - 25) / 670 * Math.PI * 2.2 + row * .18 + time * .10) * 17
        + weights[3] * Math.sin((arrowX - 25) / 670 * Math.PI) * 43;
      strokePath([{x:arrowX-4,y:arrowY-2},{x:arrowX,y:arrowY},{x:arrowX-4,y:arrowY+2}], 'rgba(7, 94, 105, .25)', 1);
    }

    // Soft bands represent a population description; no scale or value is implied.
    const organised = weights[2] + weights[3] * .62;
    if (organised > .01) {
      context.save(); context.globalAlpha = organised;
      for (const lane of [-.29, -.09, .105, .30]) {
        const path = [];
        for (let step = 0; step <= 65; step++) {
          const x = step / 65;
          path.push({x:45+x*630,y:H/2+(lane+curve(x,lane,0)+weights[3]*Math.sin(x*Math.PI)*.14)*360});
        }
        strokePath(path, 'rgba(43, 140, 151, .035)', 38);
        strokePath(path, 'rgba(43, 140, 151, .06)', 18);
      }
      context.restore();
    }

    const positions = particles.map(p => position(p));
    // Selected proximity links communicate local interactions.
    if (weights[1] > .01) {
      context.save(); context.globalAlpha = weights[1];
      let count = 0;
      for (let i = 0; i < positions.length && count < 24; i++) {
        const a = positions[i];
        if (a.x < 180 || a.x > 565) continue;
        for (let j = i + 1; j < positions.length && count < 24; j++) {
          const b = positions[j], distance = Math.hypot(a.x-b.x,a.y-b.y);
          if (distance < 31 && distance > 7) {
            strokePath([a,b], 'rgba(173, 112, 64, .42)', 1.1);
            context.beginPath(); context.arc((a.x+b.x)/2,(a.y+b.y)/2,8+Math.sin(time*2+i)*2,0,Math.PI*2);
            context.strokeStyle = 'rgba(173, 112, 64, .23)'; context.stroke(); count++;
          }
        }
      }
      context.restore();
    }

    particles.forEach((p, i) => {
      const point = positions[i], tail = position(p, .017);
      context.save(); context.globalAlpha = Math.max(0, point.edge);
      if (point.x - tail.x > 0 && point.x - tail.x < 25) strokePath([tail,point], 'rgba(29, 117, 131, .18)', p.size * .75);
      if (p.size > 3) {
        context.beginPath(); context.arc(point.x,point.y,p.size+5,0,Math.PI*2);
        context.fillStyle='rgba(22, 80, 103, .055)'; context.fill();
      }
      context.beginPath(); context.arc(point.x,point.y,p.size,0,Math.PI*2);
      context.fillStyle=i%7===0?'#203e5b':i%3===0?'#4f9b9f':'#087a87'; context.fill();
      context.restore();
    });

    if (weights[3] > .01) {
      context.save(); context.globalAlpha = weights[3];
      const cx = 624, cy = 231;
      [19,31,45].forEach((radius,i) => {
        context.beginPath(); context.arc(cx,cy,radius+Math.sin(time*.7)*2,0,Math.PI*2);
        context.strokeStyle='rgba(7,94,105,'+(.25-i*.065)+')'; context.lineWidth=1; context.stroke();
      });
      const model = [{x:79,y:355},{x:114,y:336},{x:143,y:355},{x:115,y:378}];
      strokePath([model[0],model[1],model[2],model[3],model[0]],'rgba(7,94,105,.3)',1);
      strokePath([model[1],model[3]],'rgba(7,94,105,.2)',1);
      model.forEach(p=>{context.beginPath();context.arc(p.x,p.y,3,0,Math.PI*2);context.fillStyle='#3c8b94';context.fill()});
      context.setLineDash([4,5]);
      strokePath([{x:151,y:356},{x:318,y:367},{x:479,y:329},{x:601,y:262}],'rgba(7,94,105,.2)',1.2);
      context.setLineDash([]); context.restore();
    }
  }
  function resize() {
    const bounds = canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    context.setTransform(canvas.width/W, 0, 0, canvas.height/H, 0, 0);
    draw();
  }
  function tick(now) {
    frame = 0;
    if (!canRun()) { previous = 0; return; }
    const delta = previous ? Math.min((now-previous)/1000, .05) : 0;
    previous = now; time += delta; story = (story + delta) % (duration * 4);
    const stage = Math.floor(story / duration);
    if (stage !== current) selectStage(stage);
    weights = weights.map((weight,i)=>weight+((i===current?1:0)-weight)*Math.min(1,delta*2.3));
    draw(); schedule();
  }
  if (toggle) toggle.addEventListener('click',()=>{
    paused=!paused; updateToggle();
    if(paused){stop();draw()}else schedule();
  });
  stages.forEach(button=>button.addEventListener('click',()=>{
    const stage=Number(button.dataset.stage);
    if(!Number.isInteger(stage)||stage<0||stage>3)return;
    story=stage*duration; selectStage(stage);
    if(paused){weights=weights.map((_,i)=>i===stage?1:0);draw()}
  }));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else schedule()});
  motion.addEventListener('change',event=>{
    if(event.matches){paused=true;stop();updateToggle();draw()}
  });
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{
    inView=entries[0].isIntersecting;if(inView)schedule();else stop();
  },{threshold:.05}).observe(canvas);
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(canvas);
  else window.addEventListener('resize',resize,{passive:true});
  figure.classList.add('animation-ready');
  stages.forEach(button => {button.disabled = false});
  if (toggle) toggle.disabled = false;
  selectStage(current);updateToggle();resize();schedule();
})();
