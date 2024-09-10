const fs = require("fs");
const colors = require("colors");

/*
1.
require("fs"): Esta es una función que carga un módulo nativo de Node.js llamado fs, que significa "File System" (sistema de archivos). El módulo fs proporciona funcionalidades para interactuar con el sistema de archivos, permitiendo leer, escribir, eliminar, y manipular archivos o directorios en el sistema.

En este caso, estamos asignando el módulo fs a la constante fs para poder utilizar sus métodos, como writeFile.

2.
fs.writeFile(tabla-${base}.txt, salida, (err) => { if (err) throw err; console.log(tabla-${base}.txt creada); });
Esta línea usa el método writeFile del módulo fs para escribir un archivo en el sistema. Te la desgloso en partes:

fs.writeFile: Es un método del módulo fs que permite escribir datos en un archivo. Si el archivo no existe, lo crea; si ya existe, lo sobrescribe.

*/

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("============================".green);
            console.log(`  Tabla del: ${base}`.red);
            console.log("============================".green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
};

/**
 if (err) throw err;: Si existe un error (err no es null o undefined),
 se lanza una excepción con throw err. Esto detiene la ejecución y muestra el error.
*/
