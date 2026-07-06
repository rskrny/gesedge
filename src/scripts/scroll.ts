import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── page motion: smooth scroll + hero text beats + section reveals ──
   The 3D island runs its own ScrollTriggers on the same track; this file
   owns everything DOM. Tier 0 (reduced motion / no WebGL) skips smoothing
   and shows content statically. */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initSmoothScroll() {
  const lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

function initHeroBeats() {
  const track = document.getElementById('hero-track');
  if (!track) return;

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.35,
    },
  });

  // beat 0 visible on load; each beat fully exits before the next enters
  tl.to('[data-beat="0"]', { autoAlpha: 0, y: -46, duration: 0.09 }, 0.05)
    .fromTo(
      '[data-beat="1"]',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.08 },
      0.23
    )
    .to('[data-beat="1"]', { autoAlpha: 0, y: -46, duration: 0.08 }, 0.38)
    .fromTo(
      '[data-beat="2"]',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.08 },
      0.53
    )
    .to('[data-beat="2"]', { autoAlpha: 0, y: -46, duration: 0.08 }, 0.68)
    .fromTo(
      '[data-beat="3"]',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.08 },
      0.83
    )
    .to('[data-beat="3"]', { autoAlpha: 0, y: -30, duration: 0.03 }, 0.97);
}

function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  for (const el of items) {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      }
    );
  }
}

function initNavState() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const started = performance.now();
  const MIN_SHOW = 750;
  const MAX_WAIT = 2400;
  let done = false;

  const clear = () => {
    if (done) return;
    done = true;
    const elapsed = performance.now() - started;
    const wait = Math.max(0, MIN_SHOW - elapsed);
    setTimeout(() => {
      loader.classList.add('is-done');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
      // safety: remove even if transitionend never fires
      setTimeout(() => loader.isConnected && loader.remove(), 900);
    }, wait);
  };

  if (reduced) {
    loader.remove();
    return;
  }
  if ((window as unknown as { __sceneReady?: boolean }).__sceneReady) {
    clear();
    return;
  }
  window.addEventListener('scene-ready', clear, { once: true });
  setTimeout(clear, MAX_WAIT);
}

/* Dev/debug: ?at=0..1 jumps to that progress through the hero track
   (or past it for values > 1) so any beat can be screenshotted headlessly. */
function initDebugJump(lenis?: Lenis) {
  const raw = new URLSearchParams(window.location.search).get('at');
  if (!raw) return;
  const at = Number.parseFloat(raw);
  if (Number.isNaN(at)) return;
  const track = document.getElementById('hero-track');
  if (!track) return;
  const target = at * (track.offsetHeight - window.innerHeight);
  requestAnimationFrame(() => {
    if (lenis) lenis.scrollTo(target, { immediate: true });
    else window.scrollTo(0, target);
    ScrollTrigger.refresh();
  });
}

initLoader();
initNavState();

if (reduced) {
  document.documentElement.classList.add('tier-0');
  // content is fully visible without JS-driven motion
  gsap.set('[data-beat], [data-reveal]', { clearProps: 'all' });
} else {
  const lenis = initSmoothScroll();
  initHeroBeats();
  initReveals();
  initDebugJump(lenis);
}
