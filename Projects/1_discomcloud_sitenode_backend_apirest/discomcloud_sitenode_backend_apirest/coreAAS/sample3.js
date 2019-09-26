var opcua = require("node-opcua");
require("node-opcua-coreaas")(opcua);


var xmlFiles = [
    opcua.standard_nodeset_file,
    opcua.coreaas.nodeset_file
];
var server = new opcua.OPCUAServer({
    nodeset_filename: xmlFiles,
});
/**
 * Un Shell Administración representa exactamente un activo, con un ID de activo único. En este ejemplo hay un controlador 
 * y una serie de sensores conectados, existe la opcion de asignar por separados un AAS para el controlador y
 * AAS para el sensor, se ha decidido crear un AAS con indentificador unico, para representar el activo compuesto. 
 * */
function post_initialize() {
    console.log("initialized");
    const addressSpace = server.engine.addressSpace;
    const Identifier = opcua.coreaas.getIdentifierConstructor(addressSpace.getCoreAASNamespace()).Identifier;
    const IdentifierType = opcua.coreaas.IdentifierType;
    const Key = opcua.coreaas.getKeyConstructor(addressSpace.getCoreAASNamespace()).Key;
    const KeyElements = opcua.coreaas.KeyElements;
    const KeyType = opcua.coreaas.KeyType;
    const Kind = opcua.coreaas.Kind;
    const PropertyCategory = opcua.coreaas.PropertyCategory;
    const PropertyValueType = opcua.coreaas.PropertyValueType;

    // Workaround  needed to give an Identifier to the DataSpecificationIEC61360Type
    addressSpace.fixSpecificationTypeIdentifications();

    let admin = addressSpace.addAdministrativeInformation({
        version: "2",
        revision: "12"
    });

    // Crear un objeto AAS representa ISTR-MKM1-3ENG10 Communication Controller
    const myaas = addressSpace.addAssetAdministrationShell({
        browseName: "AAS Temperature",
        description: [new opcua.LocalizedText({
            locale: "en", text: "MKM1 CONTROLLER AND MINI-PROGRAMMER" }),
            new opcua.LocalizedText({ locale: "es", text: "CONTROLADOR MKM1" })],
        identification: new Identifier({
            id: "www.admin-shell.io/aas-sample/1.0",
            idType: IdentifierType.URI
        }),
        administration: admin,
        derivedFromRef: [new Key({
            idType: KeyType.IRDI,
            local: false,
            type: KeyElements.AssetAdministrationShell,
            value: "AAA#1234-454#123456789"
        })],
        assetRef: [new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Asset, 
            value: "https://www.ascontecnologic.com/es/automatizacion-industrial/controladores-industriales/serie-kube/km1"
        })]
    })
        .addSubmodelRef([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "./models/coreaas"
        })]);

    /**
     * Añadir un Asset
     */
    let asset = addressSpace.addAsset({
        browseName: "MKM1",
        idShort: "MKM1",
        identification: new Identifier({
            id: "https://www.ascontecnologic.com/es/automatizacion-industrial/controladores-industriales/serie-kube/km1",
            idType: IdentifierType.URI
        }),
        kind: Kind.Instance,
        description: new opcua.LocalizedText({ locale: "en", text: "MKM1 controller and programmer temperature" }),
        assetIdentificationModelRef: [new Key({
            idType: KeyType.URI,
            local: false,
            type: KeyElements.SubmodelElement,
            value: "//submodels/identification_KTY81"
        })]
    });

    myaas.hasAsset(asset)
        .addSubmodelRef([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/12345679"
        })]);
    
    /**
    * Añadir un Submodel
    * Un submodelo define un aspecto específico del activo representado por el AAS.
    */
    const submodel_type = addressSpace.addSubmodel({
        browseName: "TYPEMKM1",
        kind: Kind.Type,
        idShort: "TYPEMKM1",
        identification: new Identifier({
            id: "//models/submodels/TYPEMKM1",
            idType: IdentifierType.URI
        })
    })

    const mysubmodel = addressSpace.addSubmodel({
        browseName: "MKM1AA",
        kind: Kind.Instance,
        idShort: "MKM1AA",
        identification: new Identifier({
            id: "//models/submodels/MKM1AA",
            idType: IdentifierType.URI
        })
    }).submodelOf(myaas)
        // Elemento que puede tener una definición semántica.
        .hasSubmodelSemantic(submodel_type)
        .addParent([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.AssetAdministrationShell,
            value: "www.admin-shell.io/aas-sample/1.0"
        })]);

    /**
    * Añadir SubmodelElementCollection
    * lista de elementos del submodelo.
    */
    let collection = addressSpace.addSubmodelElementCollection({
        idShort: "Measurement",
        submodelElementOf: mysubmodel,
        ordered: true,
        kind: Kind.Instance
    })
        .addParent([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/12345679"
        })]);
    /**
     * Añadir SubmodelProperty
     * Una Property es un elemento de datos que tiene un solo valor.
     */
    let kmt1Temperature=10;
    let t = 10;
    setInterval(function () {
        kmt1Temperature = (Math.sin(t / 50) * 1.90 + Math.random() * 2.80) * 6.0 + 5.0;
        t = t + 1;
    }, 200);
    const temperature = addressSpace.addSubmodelProperty({
        browseName: "TEMPERATURE",
        idShort: "TEMPERATURE",
        category: PropertyCategory.VARIABLE,
        valueType: PropertyValueType.Int,
        value: {
            // definitions https://opcfoundation.org/UA/schemas/1.04/Opc.Ua.Types.bsd
            dataType: "Int16",
            value: {
                get: () => {
                    return new opcua.Variant({ dataType: opcua.DataType.Int16, value: kmt1Temperature });
                }
            }
        }
    })
        .addSemanticId([new Key({
            idType: KeyType.IRDI,
            local: true,
            type: KeyElements.ConceptDescription,
            value: "0112/2///61360_4#AAE685#001"
        })])
        .addParent([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/12345679"
        }),
        new Key({
            idType: KeyType.idShort,
            local: true,
            type: KeyElements.SubmodelElementCollection,
            value: "Measurement"
        })])
        .addValueId([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.GlobalReference,
            value: "//value/of/temperature"
        })]);

    const tempmax = addressSpace.addSubmodelProperty({
        browseName: "TEMPMAX",
        idShort: "TEMPMAX",
        semanticId: [new Key({
            idType: KeyType.IRDI,
            local: true,
            type: KeyElements.ConceptDescription,
            value: "0112/2///61360_4#AAF277#002"
        })],
        category: PropertyCategory.PARAMETER,
        valueType: PropertyValueType.Int,
        value: {
            dataType: "Int16", 
            value: {
                get: () => {
                    return new opcua.Variant({ dataType: opcua.DataType.Int16, value: 55 });
                }
            }
        }
    });
 
    collection.addElements([tempmax, temperature]);

    /**
    * A partir de este punto el activo bajo un AAS ya es funcional.
    * Sin embarjo, en muchas ocasiones es necesario disponer de referencias,
    * dicCionarios o descripciones del continido del AAS.
    */
     
    /**
     * Añadir File
     */
    addressSpace.addAASFile({
        idShort: "KTM1_Documentation",
        kind: Kind.Instance,
        description: [new opcua.LocalizedText({ locale: "en", text: "Documentation for the KTM1 Controller." }),
            new opcua.LocalizedText({ locale: "it", text: "Documentazione per il Controller KTM1" }), new opcua.LocalizedText({ locale: "it", text: "Documentacion para Controller KTM1" })],
        submodelElementOf: mysubmodel,
        value: "./aas/files/KTM1/documentation",
        mimeType: "application/pdf"
    })
        .addParent([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/12345679"
        })]);

    /**
     * Añadir Reference Element
     */
    addressSpace.addReferenceElement({
        idShort: "ASCON",
        kind: Kind.Instance,
        submodelElementOf: mysubmodel,
        value: [new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/ASCON"
        })]
    })
        .addParent([new Key({
            idType: KeyType.URI,
            local: true,
            type: KeyElements.Submodel,
            value: "//models/submodels/12345679"
        })]);

    /**
     * Añadir Concept Dictionary
     * Se refererencia https://www.festo-didactic.com/int-en/services/online-dictionary/
     */

    const conceptDictionary = addressSpace.addConceptDictionary({
        browseName: "ConceptDict_1",
        idShort: "ConceptDictionary_1",
        conceptDictionaryOf: myaas,
        description: [new opcua.LocalizedText({ locale: "en", text: "Dicitonary for the temperature controller ." }),
        new opcua.LocalizedText({ locale: "it", text: "Diccionario para el controlador de temperatura" })]
    })
        .addConceptDescriptionRef([
            new Key({
                idType: KeyType.IRDI,
                local: true,
                type: KeyElements.ConceptDescription,
                value: "0112/2///61360_4#AAE685#001"
            })
        ])
        .addConceptDescriptionRef([
            new Key({
                idType: KeyType.IRDI,
                local: true,
                type: KeyElements.ConceptDescription,
                value: "0112/2///61360_4#AAF277#002"
            })
        ]);

    /**
    * Añadir ConceptDescription con EmbeddedDataSpecification
    */

    const embedded_1 = addressSpace.addEmbeddedDataSpecification({
        browseName: "EmbeddedDS_1",
        hasDataSpecification: [new Key({
            idType: KeyType.URI,
            local: false,
            type: KeyElements.GlobalReference,
            value: "www.admin-shell.io/DataSpecificationTemplates/DataSpecificationIEC61360"
        })],
    })
        .addDataSpecificationIEC61360({ // Tipo definido por el estandard iec61360
            identifier: "0112/2///61360_4#AAE685",
        preferredName: "temperature",
        definition: "temperature of a component, or its environment, as a variable",
        dataType: "INT_MEASURE_TYPE",
        unit: "°C",
        unitId: [new Key({
            idType: KeyType.IRDI,
            local: false,
            type: KeyElements.GlobalReference,
            value: '0112/2///62720#UAA033#001' // Preferred name: degree Celsius
        })],
        shortName: "@T",
        valueFormat: "NR1 S..4"
    });

    addressSpace.addConceptDescription({
        browseName: "@T",
        identification: new Identifier({
            id: "0112/2///61360_4#AAE685#001",
            idType: IdentifierType.IRDI
        }),
        conceptDescriptionOf: conceptDictionary
    })
        .hasEmbeddedDataSpecifications(embedded_1)
        .semanticOf(temperature);

    // Añadir un EmbeddedDataSpecification al AAS para una Maxima temperaturA
    // IEC 61360 - Common Data Dictionary en uso
    const embedded_2  = addressSpace.addEmbeddedDataSpecification({
        browseName: "EmbeddedDS_1",
        hasDataSpecification: [new Key({
            idType: KeyType.URI,
            local: false,
            type: KeyElements.GlobalReference,
            value: "www.admin-shell.io/DataSpecificationTemplates/DataSpecificationIEC61360"
        })],
    }).addDataSpecificationIEC61360(addressSpace.addDataSpecificationIEC61360({
        //pasar el objeto DataSpecificationIEC61360Type como parámetro.
        preferredName: "stress temperature max",
        shortName: "T_stress(max)",
        valueFormat: "NR1 S..4",
        description: "maximum temperature applied to a component during cycle stress",
        dataType: "LEVEL(MAX) OF INT_MEASURE_TYPE",
        unit: "°C",
        unitId: [new Key({
            idType: KeyType.IRDI,
            local: false,
            type: KeyElements.GlobalReference,
            value: '0112/2///62720#UAA033#001' // Preferred name: degree Celsius
        })]
    }));

    addressSpace.addConceptDescription({
        browseName: "Tstress(max)",
        identification: new Identifier({
            id: "0112/2///61360_4#AAF277#002",
            idType: IdentifierType.IRDI
        }),
        hasEmbeddedDataSpecifications: embedded_2,
        conceptDescriptionOf: conceptDictionary
    })
        .semanticOf(tempmax);

    /** 
     *  Añdir View
     *  Vistas que se centren en los Elementos y Servicios de Datos relacionados con el asset del AAS creado.   
     */
    
    let view_1 = addressSpace.addAASView({
        idShort: "Medida",
        semanticId: [new Key({
            idType: KeyType.IRDI,
            local: true,
            type: KeyElements.ConceptDescription,
            value: "EREOTO"
        })],
        description: [new opcua.LocalizedText({ locale: "en", text: "Controller MKM1" }),
            new opcua.LocalizedText({ locale: "es", text: "Controller MKM1" })],
    })
        .addContainedElementRef([
            new Key({
                idType: KeyType.URI,
                local: true,
                type: KeyElements.Submodel,
                value: "//models/submodels/12345679"
            }),
            new Key({
                idType: KeyType.idShort,
                local: true,
                type: KeyElements.Property,
                value: "TEMPMAX"
            })
        ])
        .addContainedElementRef([
            new Key({
                idType: KeyType.URI,
                local: true,
                type: KeyElements.Submodel,
                value: "//models/submodels/12345679"
            }),
            new Key({
                idType: KeyType.idShort,
                local: true,
                type: KeyElements.OperationVariable,
                value: "TEMPERATURE"
            })
        ])
        .containsElements([tempmax, temperature]);

    myaas.addViews([view_1]);

    /**
     * Iniciar OPC UA Server
     */
    server.start(function () {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl);
        
    });
}

server.initialize(post_initialize);
