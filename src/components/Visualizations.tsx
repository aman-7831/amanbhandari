import { useEffect, useRef } from 'react';

export function BarChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-3">
      {data.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
            <span className="font-semibold text-gray-900 dark:text-white">{item.value}</span>
          </div>
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div
              className="h-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color,
              }}
            >
              <span className="text-white text-xs font-medium">{item.value}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LineChart({ data }: { data: { x: string; y: number }[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    ctx.clearRect(0, 0, width, height);

    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));
    const range = maxY - minY;

    const xStep = (width - 2 * padding) / (data.length - 1);
    const yScale = (height - 2 * padding) / range;

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((point, i) => {
      const x = padding + i * xStep;
      const y = height - padding - (point.y - minY) * yScale;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    ctx.fillStyle = '#059669';
    data.forEach((point, i) => {
      const x = padding + i * xStep;
      const y = height - padding - (point.y - minY) * yScale;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = '#6b7280';
    ctx.font = '12px sans-serif';
    data.forEach((point, i) => {
      const x = padding + i * xStep;
      ctx.fillText(point.x, x - 15, height - 10);
    });
  }, [data]);

  return <canvas ref={canvasRef} width={600} height={300} className="w-full" />;
}

export function PieChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        {data.map((item, idx) => {
          const percentage = (item.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (currentAngle * Math.PI) / 180;
          const x1 = 100 + 80 * Math.cos(startRad);
          const y1 = 100 + 80 * Math.sin(startRad);
          const x2 = 100 + 80 * Math.cos(endRad);
          const y2 = 100 + 80 * Math.sin(endRad);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <path
              key={idx}
              d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={item.color}
              className="transition-all duration-300 hover:opacity-80"
            />
          );
        })}
      </svg>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {((item.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeatMap({ data }: { data: number[][] }) {
  const maxVal = Math.max(...data.flat());
  const minVal = Math.min(...data.flat());

  const getColor = (value: number) => {
    const normalized = (value - minVal) / (maxVal - minVal);
    const r = Math.round(5 + normalized * 250);
    const g = Math.round(150 - normalized * 100);
    const b = Math.round(105 - normalized * 50);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="inline-block">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${data[0].length}, 1fr)` }}>
        {data.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="w-12 h-12 flex items-center justify-center text-white text-xs font-medium rounded"
              style={{ backgroundColor: getColor(cell) }}
              title={`Value: ${cell}`}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
