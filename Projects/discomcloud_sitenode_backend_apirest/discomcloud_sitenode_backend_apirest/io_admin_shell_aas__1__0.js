var io_admin_shell_aas__1__0_Module_Factory = function () {
  var io_admin_shell_aas__1__0 = {
    name: 'io_admin_shell_aas__1__0',
    defaultElementNamespaceURI: 'http:\/\/www.admin-shell.io\/aas\/1\/0',
    dependencies: ['io_admin_shell_iec61360__1__0'],
    typeInfos: [{
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
        localName: 'ReferenceT',
        typeName: 'reference_t',
        propertyInfos: [{
            name: 'keys',
            required: true,
            typeInfo: '.KeysT'
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
        localName: 'ReferenceElementT',
        typeName: 'referenceElement_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'value',
            required: true,
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
        localName: 'PrvalueTypeT',
        typeName: 'prvalueType_t'
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
        localName: 'BlobTypeT',
        typeName: 'blobType_t',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
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
        localName: 'DataSpecificationContentT',
        typeName: 'dataSpecificationContent_t',
        propertyInfos: [{
            name: 'dataSpecificationIEC61360',
            required: true,
            typeInfo: 'io_admin_shell_iec61360__1__0.DataSpecificationIEC61630T'
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
        localName: 'AssetAdministrationShellsT',
        typeName: 'assetAdministrationShells_t',
        propertyInfos: [{
            name: 'assetAdministrationShell',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AssetAdministrationShellT'
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
        localName: 'ViewsT',
        typeName: 'views_t',
        propertyInfos: [{
            name: 'view',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ViewT'
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
        localName: 'ConceptDictionariesT',
        typeName: 'conceptDictionaries_t',
        propertyInfos: [{
            name: 'conceptDictionary',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ConceptDictionaryT'
          }]
      }, {
        localName: 'PathTypeT',
        typeName: 'pathType_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }]
      }, {
        localName: 'IdShortT',
        typeName: 'idShort_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
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
        localName: 'OperationVariableT',
        typeName: 'operationVariable_t',
        baseTypeInfo: '.SubmodelElementAbstractT',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.SubmodelElementT'
          }]
      }, {
        localName: 'AdministrationT',
        typeName: 'administration_t',
        propertyInfos: [{
            name: 'version'
          }, {
            name: 'revision'
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
        localName: 'KeysT',
        typeName: 'keys_t',
        propertyInfos: [{
            name: 'key',
            minOccurs: 0,
            collection: true,
            typeInfo: '.KeyT'
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
        localName: 'QualifiersT',
        typeName: 'qualifiers_t',
        propertyInfos: [{
            name: 'qualifier',
            minOccurs: 0,
            collection: true
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
        localName: 'AssetsT',
        typeName: 'assets_t',
        propertyInfos: [{
            name: 'asset',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AssetT'
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
        localName: 'LangStringsT',
        typeName: 'langStrings_t',
        propertyInfos: [{
            name: 'langString',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LangStringT'
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
        localName: 'ContainedElementsT',
        typeName: 'containedElements_t',
        propertyInfos: [{
            name: 'containedElementRef',
            required: true,
            typeInfo: '.ReferenceT'
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
        localName: 'PropertyValueTypeT',
        typeName: 'propertyValueType_t',
        propertyInfos: [{
            name: 'value',
            type: 'value'
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
        localName: 'EventT',
        typeName: 'event_t',
        baseTypeInfo: '.SubmodelElementAbstractT'
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
        localName: 'SubmodelElementsT',
        typeName: 'submodelElements_t',
        propertyInfos: [{
            name: 'submodelElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SubmodelElementT'
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
        localName: 'SemanticIdT',
        typeName: 'semanticId_t',
        baseTypeInfo: '.ReferenceT'
      }, {
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
      }],
    elementInfos: [{
        typeInfo: '.KeyT',
        elementName: 'key'
      }, {
        typeInfo: '.AasenvT',
        elementName: 'aasenv'
      }]
  };
  return {
    io_admin_shell_aas__1__0: io_admin_shell_aas__1__0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], io_admin_shell_aas__1__0_Module_Factory);
}
else {
  var io_admin_shell_aas__1__0_Module = io_admin_shell_aas__1__0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.io_admin_shell_aas__1__0 = io_admin_shell_aas__1__0_Module.io_admin_shell_aas__1__0;
  }
  else {
    var io_admin_shell_aas__1__0 = io_admin_shell_aas__1__0_Module.io_admin_shell_aas__1__0;
  }
}