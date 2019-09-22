//Inicializando node modules
var express = require('express'),
    path = require('path');
dateTime = require('node-datetime'),
    bodyParser = require("body-parser");
const fs = require('fs');
//Jsonix inspirado y basado en JAXB
var Jsonix = require('jsonix').Jsonix;
// Requiere mapear el eschema para conseguir AAS.js, tener disponible la variable AAS
// java -jar node_modules/jsonix-schema-compiler/lib/jsonix-schema-compiler-full.jar -logLevel TRACE -d mappings -p AAS XML/AAS.xsd
var AAS = require('./mappings/AAS').AAS;// Instancia en node.js

// Determinar la raiz del proyector
var appDir = path.dirname(require.main.filename);
var app = express();
app.use(bodyParser.json());//Ajustes habilitacion json parse

// CORS Middleware
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Express(web framework) corriendo ahora en IISNode!');
});
var server = app.listen(process.env.PORT || 8081, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
    console.log("http://localhost:" + port + "/api/");
});

// El objeto pasado al marshaller debe seguir las normas del schema
// Etiqueta no cumple con el schema, ella misma y todo lo que descienda despues no ser? serializado.
var assetObject = {
    name: {
        namespaceURI: "http://www.admin-shell.io/aas/1/0",
        localPart: "aasenv",
        prefix: "aas",
        key: "{http://www.admin-shell.io/aas/1/0}aasenv",
        string: "{http://www.admin-shell.io/aas/1/0}aas:aasenv"
    },
    value: {
        assets: {
            asset: [{
                idShort: "MKM1",
                description: {
                    langString: [
                        {
                            lang: "ES",
                            value: "Controlador con Regulador con temporizador independiente KM1"
                        },
                        {
                            lang: "EN",
                            value: "CONTROLLER AND MINI-PROGRAMMER KM1"
                        }
                    ]
                },
                identification: {
                    idType: "URI",
                    value: "http://red.upv.com/KMT1HCRRRRDS-S"
                },
                kind: "Instance"
            },
            {
                idShort: "KMT1HC",
                description: {
                    langString: [
                        {
                            lang: "ES",
                            value: "Controlador con Sensor de temperatura de silicio"
                        },
                        {
                            lang: "EN",
                            value: "Controller with Silicon temperature sensor"
                        }
                    ]
                },
                identification: {
                    idType: "URI",
                    value: "https://www.ascontecnologic.com/es/automatizacion-industrial/controladores-industriales/serie-kube/km1"
                },
                kind: "Instance"
            },
            ]
        }
    }
};

/* Uso de la libreria Jsonix*/
// Primero construimos el context Jsonix, utilizado para unmarshaller(parser) y marshaller(serializer)
var context2 = new Jsonix.Context([AAS]);
// Marshaller para serializar un objeto en NodeJs a XML o JSON.
var marshaller = context2.createMarshaller();
let object, asset, property, property2;
//Creamos el Unmarshaller
var unmarshaller2 = context2.createUnmarshaller();
// unmarshal un objeto del xml recuperado de un fichero
// unmarshalUR para recuperar desde una url
unmarshaller2.unmarshalFile('data/XML_Example_for_Administration_Shell.xml',
    // Esta llamada a funcion devuelve un resultadovel unmarshalling
    function (unmarshalled) {
        object = unmarshalled;
        fs.writeFile(appDir + '/outputs/objectNodejs.json', JSON.stringify(unmarshalled, null, 2),
            (err) => { if (err) console.error(err) });
        if (unmarshalled.value.assets) {
            if (unmarshalled.value.assets.asset.length > 0) {
                asset = unmarshalled.value.assets.asset[0];          
                property = unmarshalled.value.submodels.submodel[0].submodelElements.submodelElement[0].property;
                property2 = unmarshalled.value.submodels.submodel[0].submodelElements.submodelElement[1].property;
            }
        }
    });

app.get("/api/sample1/marshal", function (req, res, next) {
    res.contentType('application/xml');
    res.send(marshaller.marshalString(assetObject).toString()); //Objeto -> XML + SCHEMA
    next();
});

app.get("/api/sample1/unmarshal", function (req, res, next) {
    res.set('Content-Type', 'text/html')
        .status(200)
        .end(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    table {
      width:100%;
    }
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td {
      padding: 15px;
      text-align: left;
    }
    table#t01 tr:nth-child(even) {
      background-color: #eee;
    }
    table#t01 tr:nth-child(odd) {
     background-color: #fff;
    }
    table#t01 th {
      background-color: #3cb371;
      color: white;
    }
    </style>
    <title>Page AAS</title>
    </head>
    <body>
    <h1> AAS  </h1>
    <table id="t01">
      <tr>
        <th>Variable</th>
        <th>Valor</th> 
        <th>Tipo</th>
      </tr>
      <tr>
        <td>ID</td>
        <td>`+ asset.identification.value + `</td>
        <td>`+ asset.identification.idType + `</td>
      </tr>
      <tr>
        <td>kind</td>
        <td>`+ asset.kind + `</td>
        <td>String</td>
      </tr>
      <tr>
        <td>description</td>
        <td>`+ asset.description.langString[0].value + `</td>
        <td>`+ asset.description.TYPE_NAME + `</td>
      </tr>
      <tr>
        <td>property</td>
        <td>`+ property.idShort.value + `</td>
        <td>`+ property.TYPE_NAME + `</td>
      </tr>
      <tr>
        <td>property</td>
        <td>`+ property2.idShort.value + `</td>
        <td>`+ property2.TYPE_NAME + `</td>
      </tr>
    </table>
    </body>
    </html>
  `);
    next();
});

