const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        let tabla = '';

        if (!Number(base)) {
            reject('favor de insertar un numero valido');
            return;
        }

        for (let i = 1; i <= 10; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });
    });
};

module.exports = {
    crearArchivo
};
