const dgram = require("dgram");

const HOST = "186.124.22.22";
const PORT = 6060;

const prueba = async(command) => {
  return new Promise((resolve, reject) => {
    const socket = dgram.createSocket("udp4");

    socket.on("message", (message) => {
      console.log("Mensaje recibido:", message.toString());
      socket.close();
      resolve(message.toString()); // Resuelve la promesa con el mensaje recibido
    });

    socket.on("error", (error) => {
      console.error("Error de conexión:", error);
      socket.close();
      reject(error); // Rechaza la promesa en caso de error
    });

    socket.send(
      Buffer.from(command),
      PORT,
      HOST,
      (error) => {
        if (error) {
          console.error("Error al enviar el mensaje:", error);
          socket.close();
          reject(error); // Rechaza la promesa en caso de error al enviar
        } else {
          console.log("Mensaje enviado correctamente");
        }
      }
    );
  });
};

module.exports = prueba;
