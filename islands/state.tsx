import { signal } from "@preact/signals";

const palette = [
  '#ffffff', // White
  '#000000', // Black
  '#9bbc0f', // Lime Green
  '#8bac0f', // Olive Green
  '#306230', // Dark Green
  '#0f380f', // Darker Green
  '#34a853', // Green
  '#31a354', // Slightly Darker Green
];

const initialState = () => ({
  size: 8,
  data: new Array(8).fill(0).map((_, i) =>
    new Array(8).fill(0).map((_, j) => (
      signal(0)
    )))
})

export const picture = signal(initialState())

export function color(row: number, column: number) {
  const n = picture.value.data[row][column].value
  return palette[n % palette.length]
}

export function setColor(row: number, column: number, color: number) {
  picture.value.data[row][column].value = color;
}

export function clear() {
  picture.value = initialState()
}

