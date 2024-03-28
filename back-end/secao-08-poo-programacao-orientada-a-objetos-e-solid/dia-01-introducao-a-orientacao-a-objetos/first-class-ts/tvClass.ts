class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], ct?: string) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = ct;
  }

  
  get connectedTo(): string | undefined {
    return this._connectedTo;
  }
  
  set connectedTo(newConnection: string) {
    this._connections.includes(newConnection)
    ? this._connectedTo = newConnection
    : 'Sorry, connection unavailable'
  };
  
  turnOn() {
    console.log(
      `Turning TV on.
      Brand: ${this._brand}
      Size: ${this._size}
      Resolution: ${this._resolution}
      Connections available: ${this._connections}
      Connected to: ${this.connectedTo ? this.connectedTo : 'None'}`
    );
  }
}
const tv1 = new Tv('LG', 40, 'Full HD', ['HDMI', 'DVI', 'AV', 'Ethernet'], 'HDMI');
const tv2 = new Tv('Samsung', 55, '4k', ['HDMI', 'DVI', 'AV', 'Ethernet']);

tv1.turnOn();
tv2.turnOn();

tv1.connectedTo = 'HDMI';
console.log(`TV 1 connected to: ${tv1.connectedTo}`);