const opcua = require("node-opcua");
// Crea el objeto AAS, su variable y una pequeña simulacion de su actividad
// El espacio de direcciones se utiliza para personalizar el modelo de objetos que nuestro servidor expondrá al mundo externo.
function construct_address_space(server) {
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    //OBJECT
    const kmt1 = namespace.addObject({
        browseName: "MKM1",
        organizedBy: addressSpace.rootFolder.objects
    });
    //VARIBALE
    const kmt1Temperature = namespace.addAnalogDataItem({
        browseName: "temperature1",
        engineeringUnitsRange: {
            low: -55,
            high: 50.0
        },
        engineeringUnits: opcua.standardUnits.degree_celsius,
        componentOf: kmt1
    });

    // insertar la variable con hitorial
    addressSpace.installHistoricalDataNode(kmt1Temperature);
    let t = 10;
    setInterval(function () { // simulacion de cambio de temperatura
        let value = (Math.sin(t / 50) * 1.90 + Math.random() * 2.80) * 6.0 + 5.0;
        kmt1Temperature.setValueFromSource({ dataType: "Double", value: value });
        t = t + 1;
    }, 200);
};

(async () => {
    const opcua = require("node-opcua");
    try {
        // creacion y inicio del servico
        // Crear una instancia de OPCUAServer
        const server = new opcua.OPCUAServer({
            port: 26544, // puerto del socket del servicio
            resourcePath: "/ua/resource", // esta ruta se agregará al nombre del recurso en el endpoint
            nodeset_filename: [
                opcua.nodesets.standard_nodeset_file,
            ]
        });

        await server.initialize();

        construct_address_space(server);

        await server.start();
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl);
    } catch (err) {
        console.log("Error = ", error);
    }
})();