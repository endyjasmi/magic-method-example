import { Container } from "../container";

declare module "../container" {
  interface Container {
    random(): number;
  }
}

export default function (container: Container) {
  container.set("random", () => Math.random());
}
