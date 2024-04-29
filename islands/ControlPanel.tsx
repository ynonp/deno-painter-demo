import { clear } from './state.tsx';

export default function ControlPanel() {
  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  )
}