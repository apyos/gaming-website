import ssr from "preact-render-to-string";
import { App } from "./app";

export function render() {
  return ssr(<App />);
}
