import { useEffect, useRef, useCallback } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
}

interface ShootingStar {
    x: number;
    y: number;
    len: number;
    speed: number;
    angle: number;
    opacity: number;
    decay: number;
    color: string;
    rgb: string;
}

interface ShootingStarsProps {
    starCount?: number;
    minSpeed?: number;
    maxSpeed?: number;
    minTrailLength?: number;
    maxTrailLength?: number;
    newStarEveryNFrames?: number;
    starColors?: string[];
    backgroundColor?: string;
}

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const DIAGONAL_ANGLES = [
    (35 * Math.PI) / 180,
    (45 * Math.PI) / 180,
    (55 * Math.PI) / 180,
];

function hexToRgb(hex: string): string {
    const clean = hex.replace('#', '');
    let r: number, g: number, b: number;
    if (clean.length === 3) {
        r = parseInt(clean[0] + clean[0], 16);
        g = parseInt(clean[1] + clean[1], 16);
        b = parseInt(clean[2] + clean[2], 16);
    } else {
        r = parseInt(clean.substring(0, 2), 16);
        g = parseInt(clean.substring(2, 4), 16);
        b = parseInt(clean.substring(4, 6), 16);
    }
    return `${r},${g},${b}`;
}

function spawnShootingStar(
    w: number,
    h: number,
    minSpeed: number,
    maxSpeed: number,
    minLen: number,
    maxLen: number,
    colors: string[]
): ShootingStar {
    const angle = DIAGONAL_ANGLES[Math.floor(Math.random() * DIAGONAL_ANGLES.length)];
    const speed = rand(minSpeed, maxSpeed);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const rgb = hexToRgb(color);

    let x: number, y: number;
    if (Math.random() < 0.5) {
        x = rand(0, w);
        y = 0;
    } else {
        x = 0;
        y = rand(0, h * 0.6);
    }

    return {
        x,
        y,
        len: rand(minLen, maxLen),
        speed,
        angle,
        opacity: 1,
        decay: rand(0.004, 0.009),
        color,
        rgb,
    };
}

export function ShootingStars({
    starCount = 120,
    minSpeed = 2,
    maxSpeed = 5,
    minTrailLength = 30,
    maxTrailLength = 90,
    newStarEveryNFrames = 30,
    starColors = ['#9E00FF', '#2EB9DF', '#ffffff'],
    backgroundColor = 'transparent',
}: ShootingStarsProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const bgStarsRef = useRef<Star[]>([]);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const frameRef = useRef(0);
    const rafRef = useRef<number>(0);

    const buildBgStars = useCallback((w: number, h: number) => {
        bgStarsRef.current = Array.from({ length: starCount }, () => ({
            x: rand(0, w),
            y: rand(0, h),
            radius: rand(0.2, 1.1),
            opacity: rand(0.2, 0.9),
            speed: rand(0.001, 0.003),
        }));


        if (!offscreenCanvasRef.current) {
            offscreenCanvasRef.current = document.createElement('canvas');
        }
        const osc = offscreenCanvasRef.current;
        osc.width = w;
        osc.height = h;
        const octx = osc.getContext('2d');
        if (octx) {
            octx.clearRect(0, 0, w, h);
            bgStarsRef.current.forEach(s => {
                octx.beginPath();
                octx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                octx.fillStyle = `rgba(255,255,255,${s.opacity})`;
                octx.fill();
            });
        }
    }, [starCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: backgroundColor === 'transparent' });
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildBgStars(canvas.width, canvas.height);
        };
        resize();
        window.addEventListener('resize', resize);

        const tick = () => {
            const w = canvas.width;
            const h = canvas.height;
            const now = Date.now();

            ctx.clearRect(0, 0, w, h);

            if (backgroundColor !== 'transparent') {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, w, h);
            }


            if (offscreenCanvasRef.current) {
                ctx.globalAlpha = 0.8 + Math.sin(now * 0.001) * 0.2;
                ctx.drawImage(offscreenCanvasRef.current, 0, 0);
                ctx.globalAlpha = 1.0;
            }

            frameRef.current++;
            if (frameRef.current % newStarEveryNFrames === 0) {
                shootingStarsRef.current.push(
                    spawnShootingStar(w, h, minSpeed, maxSpeed, minTrailLength, maxTrailLength, starColors)
                );
            }

            shootingStarsRef.current = shootingStarsRef.current.filter(s => {
                if (s.opacity <= 0) return false;

                const tailX = s.x - Math.cos(s.angle) * s.len;
                const tailY = s.y - Math.sin(s.angle) * s.len;

                const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
                grad.addColorStop(0, `rgba(${s.rgb},0)`);
                grad.addColorStop(1, `rgba(${s.rgb},${s.opacity})`);

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(s.x, s.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${s.rgb},${s.opacity})`;
                ctx.fill();

                s.x += Math.cos(s.angle) * s.speed;
                s.y += Math.sin(s.angle) * s.speed;
                s.opacity -= s.decay;

                return s.x < w + s.len && s.y < h + s.len;
            });

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(rafRef.current);
        };
    }, [
        buildBgStars,
        minSpeed,
        maxSpeed,
        minTrailLength,
        maxTrailLength,
        newStarEveryNFrames,
        starColors,
        backgroundColor,
    ]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
            aria-hidden="true"
        />
    );
}
