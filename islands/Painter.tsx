import { color, setColor, picture } from './state.tsx'

export default function Painter() {  
  const size = picture.value.size;

  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${size}, minmax(0, 1rem))`}}>
    {
    new Array(size).fill(0).map((_, i) => (
      new Array(size).fill(0).map((_, j) => (
        <div
          className="h-4 w-auto border"
          style={{background: color(i, j)}}
          onClick={() => setColor(i, j, 1)}
        ></div>
      ))
    ))
    }
    </div>
  )
}