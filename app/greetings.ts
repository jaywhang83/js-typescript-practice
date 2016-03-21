class Greeter {
  greeting: string;

  constructor (public message: string) {}

  greet() {
    return "Hello, " + this.greeting;
  }
}

var greeters = [];
greeters.push(new Greeter("World"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for(var greeter of greeters) {
  alert(greeter.greet());
}
