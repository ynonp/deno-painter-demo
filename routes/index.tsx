import { useSignal } from "@preact/signals";
import Painter from "../islands/Painter.tsx";
import ControlPanel from "../islands/ControlPanel.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto ">
      <ControlPanel />
      <Painter />
      <hr />
      <Painter />
    </div>
  );
}
