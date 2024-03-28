class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: number;
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: number, ct?: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = ct;
  }

  turnOn() {
    console.log(
      `Turning TV on.
      Brand: ${this.brand}
      Size: ${this.size}
      Resolution: ${this.resolution}
      Connections available: ${this.connections}
      Connected to: ${this.connectedTo ? this.connectedTo : 'None'}`
    );
  }
}

const tv1 = new Tv('LG', 40, 'Full HD', 6, 'HDMI');
const tv2 = new Tv('Samsung', 55, '4k', 7);

tv1.turnOn();
tv2.turnOn();