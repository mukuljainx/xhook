declare module '@crafts/xhook' {
  export var XMLHttpRequest: XMLHttpRequest;
  export function after(x: (a: any, b: any) => void): void;
  export function before(x: (a: any, b: any) => void): void;
  export function EventEmitter(nodeStyle: boolean): void;
  export function addEventListener(
    event: Event,
    callback: any,
    i: number
  ): void;
  export function destroy(): void;
  export function disable(): void;
  export function dispatchEvent(): void;
  export function enable(): void;
  export function fire(): void;
  export function headers(h: any, dest: any): void;
  export function listeners(event: Event): void;
  export function off(event: Event, callback: any): void;
  export function on(event: Event, callback: any, i: number): void;
  export function once(event: Event, callback: any): void;
  export function removeEventListener(event: Event, callback: any): void;
  export function _has(event: Event): void;
}
