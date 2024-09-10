const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log("base: yargs", argv.b);

// const [, , arg3 = "base = 5"] = process.argv;
// const [, base = 5] = arg3.split("=");

//const base = 8;

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creadoss"))
    .catch((err) => console.log(err));
