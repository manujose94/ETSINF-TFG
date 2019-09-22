var AAS_Module_Factory = function () {
  var AAS = {
    name: 'AAS',
    defaultElementNamespaceURI: 'http:\/\/www.admin-shell.io\/aas\/1\/0',
    typeInfos: [{
        localName: 'ConceptDictionaryT',
        typeName: 'conceptDictionary_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'conceptDescriptionRefs',
            typeInfo: '.ConceptDescriptionsRefT'
          }]
      }, {
        localName: 'LangStringsT',
        typeName: 'langStrings_t',
        propertyInfos: [{
            name: 'langString',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LangStringT'
          }]
      }, {
        localName: 'ValueListT',
        typeName: {
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0',
          localPart: 'valueList_t'
        }
      }, {
        localName: 'PathTypeT',
        typeName: 'pathType_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'FileT',
        typeName: 'file_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'mimeType',
            required: true
          }, {
            name: 'value',
            required: true,
            typeInfo: '.PathTypeT'
          }]
      }, {
        localName: 'BlobTypeT',
        typeName: 'blobType_t',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
          }]
      }, {
        localName: 'FormulaT',
        typeName: 'formula_t',
        propertyInfos: [{
            name: 'dependsOn',
            required: true,
            typeInfo: '.ReferencesT'
          }]
      }, {
        localName: 'SubmodelRefsT',
        typeName: 'submodelRefs_t',
        propertyInfos: [{
            name: 'submodelRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'SubmodelElementCollectionT',
        typeName: 'submodelElementCollection_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.SubmodelElementsT'
          }, {
            name: 'ordered',
            required: true,
            typeInfo: 'Boolean'
          }, {
            name: 'allowDuplicates',
            required: true,
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SubmodelElementAbstractT',
        typeName: 'submodelElementAbstract_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'semanticId',
            typeInfo: '.SemanticIdT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'kind',
            values: ['Type', 'Instance']
          }, {
            name: 'qualifier',
            typeInfo: '.ConstraintT'
          }]
      }, {
        localName: 'AssetAdministrationShellsT',
        typeName: 'assetAdministrationShells_t',
        propertyInfos: [{
            name: 'assetAdministrationShell',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AssetAdministrationShellT'
          }]
      }, {
        localName: 'QualifiersT',
        typeName: 'qualifiers_t',
        propertyInfos: [{
            name: 'qualifier',
            minOccurs: 0,
            collection: true
          }]
      }, {
        localName: 'IdentificationT',
        typeName: 'identification_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'idType',
            values: ['URI', 'IRDI', 'Custom'],
            attributeName: {
              localPart: 'idType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OperationVariableT',
        typeName: 'operationVariable_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.SubmodelElementT'
          }]
      }, {
        localName: 'BlobT',
        typeName: 'blob_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'mimeType',
            required: true
          }, {
            name: 'value',
            required: true,
            typeInfo: '.BlobTypeT'
          }]
      }, {
        localName: 'ConceptDescriptionsRefT',
        typeName: 'conceptDescriptionsRef_t',
        propertyInfos: [{
            name: 'conceptDescriptionRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'DefinitionT',
        typeName: {
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0',
          localPart: 'definition_t'
        },
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KeyT',
        typeName: 'key_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'type',
            values: ['GlobalReference', 'ConceptDictionary', 'AccessPermissionRule', 'DataElement', 'View', 'Property', 'SubmodelElement', 'File', 'Blob', 'ReferenceElement', 'SubmodelElementCollection', 'RelationShipElement', 'Event', 'Operation', 'OperationVariable', 'AssetAdministrationShell', 'Submodel', 'ConceptDescription', 'Asset'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'idType',
            values: ['idShort', 'IRDI', 'URI', 'Custom'],
            attributeName: {
              localPart: 'idType'
            },
            type: 'attribute'
          }, {
            name: 'local',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'local'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IdPropertyDefinitionT',
        typeName: 'idPropertyDefinition_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'idType',
            attributeName: {
              localPart: 'idType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IdShortT',
        typeName: 'idShort_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'AasenvT',
        typeName: 'aasenv_t',
        propertyInfos: [{
            name: 'assetAdministrationShells',
            typeInfo: '.AssetAdministrationShellsT'
          }, {
            name: 'assets',
            typeInfo: '.AssetsT'
          }, {
            name: 'submodels',
            typeInfo: '.SubmodelsT'
          }, {
            name: 'conceptDescriptions',
            typeInfo: '.ConceptDescriptionsT'
          }]
      }, {
        localName: 'ReferenceT',
        typeName: 'reference_t',
        propertyInfos: [{
            name: 'keys',
            required: true,
            typeInfo: '.KeysT'
          }]
      }, {
        localName: 'QualifierT',
        typeName: 'qualifier_t',
        propertyInfos: [{
            name: 'semanticId',
            typeInfo: '.SemanticIdT'
          }, {
            name: 'qualifierType',
            required: true
          }, {
            name: 'qualifierValue'
          }, {
            name: 'qualifierValueId',
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'ConceptDescriptionsT',
        typeName: 'conceptDescriptions_t',
        propertyInfos: [{
            name: 'conceptDescription',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ConceptDescriptionT'
          }]
      }, {
        localName: 'SubmodelElementT',
        typeName: 'submodelElement_t',
        propertyInfos: [{
            name: 'property',
            required: true,
            typeInfo: '.PropertyT'
          }, {
            name: 'file',
            required: true,
            typeInfo: '.FileT'
          }, {
            name: 'blob',
            required: true,
            typeInfo: '.BlobT'
          }, {
            name: 'referenceElement',
            required: true,
            typeInfo: '.ReferenceElementT'
          }, {
            name: 'submodelElementCollection',
            required: true,
            typeInfo: '.SubmodelElementCollectionT'
          }, {
            name: 'relationshipElement',
            required: true,
            typeInfo: '.RelationshipElementT'
          }, {
            name: 'operation',
            required: true,
            typeInfo: '.OperationT'
          }, {
            name: 'operationVariable',
            required: true,
            typeInfo: '.OperationVariableT'
          }, {
            name: 'event',
            required: true,
            typeInfo: '.EventT'
          }]
      }, {
        localName: 'AssetAdministrationShellT',
        typeName: 'assetAdministrationShell_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'identification',
            typeInfo: '.IdentificationT'
          }, {
            name: 'administration',
            typeInfo: '.AdministrationT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'derivedFrom',
            typeInfo: '.ReferenceT'
          }, {
            name: 'assetRef',
            required: true,
            typeInfo: '.ReferenceT'
          }, {
            name: 'submodelRefs',
            typeInfo: '.SubmodelRefsT'
          }, {
            name: 'views',
            typeInfo: '.ViewsT'
          }, {
            name: 'conceptDictionaries',
            typeInfo: '.ConceptDictionariesT'
          }]
      }, {
        localName: 'ContainedElementsT',
        typeName: 'containedElements_t',
        propertyInfos: [{
            name: 'containedElementRef',
            required: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'ConstraintT',
        typeName: 'constraint_t',
        propertyInfos: [{
            name: 'qualifier',
            required: true,
            typeInfo: '.QualifierT'
          }, {
            name: 'formula',
            required: true,
            typeInfo: '.FormulaT'
          }]
      }, {
        localName: 'SubmodelElementsT',
        typeName: 'submodelElements_t',
        propertyInfos: [{
            name: 'submodelElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SubmodelElementT'
          }]
      }, {
        localName: 'AssetsT',
        typeName: 'assets_t',
        propertyInfos: [{
            name: 'asset',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AssetT'
          }]
      }, {
        localName: 'EmbeddedDataSpecificationT',
        typeName: 'embeddedDataSpecification_t',
        propertyInfos: [{
            name: 'hasDataSpecification',
            typeInfo: '.ReferenceT'
          }, {
            name: 'dataSpecificationContent',
            typeInfo: '.DataSpecificationContentT'
          }]
      }, {
        localName: 'SemanticIdT',
        typeName: 'semanticId_t',
        baseTypeInfo: '.ReferenceT'
      }, {
        localName: 'RelationshipElementT',
        typeName: 'relationshipElement_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'first',
            required: true,
            typeInfo: '.ReferenceT'
          }, {
            name: 'second',
            required: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'ViewT',
        typeName: 'view_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'semanticId',
            typeInfo: '.SemanticIdT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'containedElements',
            required: true,
            typeInfo: '.ContainedElementsT'
          }]
      }, {
        localName: 'ConceptDictionariesT',
        typeName: 'conceptDictionaries_t',
        propertyInfos: [{
            name: 'conceptDictionary',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ConceptDictionaryT'
          }]
      }, {
        localName: 'ViewsT',
        typeName: 'views_t',
        propertyInfos: [{
            name: 'view',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ViewT'
          }]
      }, {
        localName: 'EventT',
        typeName: 'event_t',
        baseTypeInfo: '.SubmodelElementAbstractT'
      }, {
        localName: 'LangStringT',
        typeName: 'langString_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PropertyValueTypeT',
        typeName: 'propertyValueType_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'DataSpecificationIEC61630T',
        typeName: {
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0',
          localPart: 'dataSpecificationIEC61630_t'
        },
        propertyInfos: [{
            name: 'preferredName',
            required: true,
            elementName: {
              localPart: 'preferredName',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            },
            typeInfo: '.LangStringsT'
          }, {
            name: 'shortName',
            elementName: {
              localPart: 'shortName',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'unit',
            elementName: {
              localPart: 'unit',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'unitId',
            elementName: {
              localPart: 'unitId',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            },
            typeInfo: '.ReferenceT'
          }, {
            name: 'valueFormat',
            elementName: {
              localPart: 'valueFormat',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'sourceOfDefinition',
            elementName: {
              localPart: 'sourceOfDefinition',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            },
            typeInfo: '.LangStringsT'
          }, {
            name: 'symbol',
            elementName: {
              localPart: 'symbol',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'dataType',
            elementName: {
              localPart: 'dataType',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'definition',
            elementName: {
              localPart: 'definition',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            }
          }, {
            name: 'valueList',
            elementName: {
              localPart: 'valueList',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            },
            typeInfo: '.ValueListT'
          }, {
            name: 'code',
            elementName: {
              localPart: 'code',
              namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
            },
            typeInfo: '.CodeT'
          }]
      }, {
        localName: 'SubmodelsT',
        typeName: 'submodels_t',
        propertyInfos: [{
            name: 'submodel',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SubmodelT'
          }]
      }, {
        localName: 'KeysT',
        typeName: 'keys_t',
        propertyInfos: [{
            name: 'key',
            minOccurs: 0,
            collection: true,
            typeInfo: '.KeyT'
          }]
      }, {
        localName: 'CodeT',
        typeName: {
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0',
          localPart: 'code_t'
        }
      }, {
        localName: 'AssetT',
        typeName: 'asset_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'identification',
            typeInfo: '.IdentificationT'
          }, {
            name: 'administration',
            typeInfo: '.AdministrationT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'kind',
            values: ['Type', 'Instance']
          }, {
            name: 'assetIdentificationModelRef',
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'ReferencesT',
        typeName: 'references_t',
        propertyInfos: [{
            name: 'reference',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'PrvalueTypeT',
        typeName: 'prvalueType_t'
      }, {
        localName: 'AdministrationT',
        typeName: 'administration_t',
        propertyInfos: [{
            name: 'version'
          }, {
            name: 'revision'
          }]
      }, {
        localName: 'ConceptDescriptionT',
        typeName: 'conceptDescription_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'identification',
            typeInfo: '.IdentificationT'
          }, {
            name: 'administration',
            typeInfo: '.AdministrationT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'isCaseOf',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'OperationT',
        typeName: 'operation_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'in',
            required: true,
            typeInfo: '.OperationVariableT'
          }, {
            name: 'out',
            required: true,
            typeInfo: '.OperationVariableT'
          }]
      }, {
        localName: 'ReferenceElementT',
        typeName: 'referenceElement_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.ReferenceT'
          }]
      }, {
        localName: 'SubmodelT',
        typeName: 'submodel_t',
        propertyInfos: [{
            name: 'idShort',
            typeInfo: '.IdShortT'
          }, {
            name: 'category'
          }, {
            name: 'description',
            typeInfo: '.LangStringsT'
          }, {
            name: 'parent'
          }, {
            name: 'identification',
            typeInfo: '.IdentificationT'
          }, {
            name: 'administration',
            typeInfo: '.AdministrationT'
          }, {
            name: 'embeddedDataSpecification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EmbeddedDataSpecificationT'
          }, {
            name: 'semanticId',
            typeInfo: '.SemanticIdT'
          }, {
            name: 'kind',
            values: ['Type', 'Instance']
          }, {
            name: 'qualifier',
            typeInfo: '.ConstraintT'
          }, {
            name: 'submodelElements',
            required: true,
            typeInfo: '.SubmodelElementsT'
          }]
      }, {
        localName: 'DataSpecificationContentT',
        typeName: 'dataSpecificationContent_t',
        propertyInfos: [{
            name: 'dataSpecificationIEC61360',
            required: true,
            typeInfo: '.DataSpecificationIEC61630T'
          }]
      }, {
        localName: 'PropertyT',
        typeName: 'property_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'valueType',
            required: true
          }, {
            name: 'value',
            typeInfo: '.PropertyValueTypeT'
          }, {
            name: 'valueId',
            typeInfo: '.ReferenceT'
          }]
      }],
    elementInfos: [{
        typeInfo: '.LangStringsT',
        elementName: {
          localPart: 'preferredName',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        elementName: {
          localPart: 'valueFormat',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.ValueListT',
        elementName: {
          localPart: 'valueType',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        elementName: {
          localPart: 'dataType',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        elementName: {
          localPart: 'symbol',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.ValueListT',
        elementName: {
          localPart: 'valueList',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        elementName: {
          localPart: 'unit',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.AasenvT',
        elementName: 'aasenv'
      }, {
        elementName: {
          localPart: 'definition',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.ReferenceT',
        elementName: {
          localPart: 'unitId',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.CodeT',
        elementName: {
          localPart: 'code',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.KeyT',
        elementName: 'key'
      }, {
        elementName: {
          localPart: 'shortName',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }, {
        typeInfo: '.LangStringsT',
        elementName: {
          localPart: 'sourceOfDefinition',
          namespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0'
        }
      }]
  };
  return {
    AAS: AAS
  };
};
if (typeof define === 'function' && define.amd) {
  define([], AAS_Module_Factory);
}
else {
  var AAS_Module = AAS_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.AAS = AAS_Module.AAS;
  }
  else {
    var AAS = AAS_Module.AAS;
  }
}