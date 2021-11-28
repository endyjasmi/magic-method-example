export class Container {
  protected _record: Record<string | symbol, unknown> = {};

  [property: string | symbol]: unknown;

  public constructor() {
    return new Proxy(this, {
      get: (target, property, receiver): unknown => {
        if (property in target) return target[property];
        return target.get(property);
      },
      set: (target, property, value): boolean => {
        target.set(property, value);
        return true;
      },
    });
  }

  public get(key: string | symbol): unknown {
    return this._record[key];
  }

  public set(key: string | symbol, value: unknown): this {
    this._record[key] = value;
    return this;
  }

  public use(handler: UseHandler): this {
    handler(this);
    return this;
  }
}

export type UseHandler = (container: Container) => void;
