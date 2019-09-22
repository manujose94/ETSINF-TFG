var io_admin_shell_iec61360__1__0_Module_Factory = function () {
  var io_admin_shell_iec61360__1__0 = {
    name: 'io_admin_shell_iec61360__1__0',
    defaultElementNamespaceURI: 'http:\/\/www.admin-shell.io\/IEC61360\/1\/0',
    dependencies: ['io_admin_shell_aas__1__0'],
    typeInfos: [{
        localName: 'DataSpecificationIEC61630T',
        typeName: 'dataSpecificationIEC61630_t',
        propertyInfos: [{
            name: 'preferredName',
            required: true,
            typeInfo: 'io_admin_shell_aas__1__0.LangStringsT'
          }, {
            name: 'shortName'
          }, {
            name: 'unit'
          }, {
            name: 'unitId',
            typeInfo: 'io_admin_shell_aas__1__0.ReferenceT'
          }, {
            name: 'valueFormat'
          }, {
            name: 'sourceOfDefinition',
            typeInfo: 'io_admin_shell_aas__1__0.LangStringsT'
          }, {
            name: 'symbol'
          }, {
            name: 'dataType'
          }, {
            name: 'definition'
          }, {
            name: 'valueList',
            typeInfo: '.ValueListT'
          }, {
            name: 'code',
            typeInfo: '.CodeT'
          }]
      }, {
        localName: 'ValueListT',
        typeName: 'valueList_t'
      }, {
        localName: 'CodeT',
        typeName: 'code_t'
      }, {
        localName: 'DefinitionT',
        typeName: 'definition_t',
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
      }],
    elementInfos: [{
        typeInfo: 'io_admin_shell_aas__1__0.LangStringsT',
        elementName: 'preferredName'
      }, {
        elementName: 'valueFormat'
      }, {
        elementName: 'definition'
      }, {
        typeInfo: '.CodeT',
        elementName: 'code'
      }, {
        elementName: 'symbol'
      }, {
        elementName: 'shortName'
      }, {
        typeInfo: '.ValueListT',
        elementName: 'valueList'
      }, {
        elementName: 'unit'
      }, {
        typeInfo: 'io_admin_shell_aas__1__0.ReferenceT',
        elementName: 'unitId'
      }, {
        typeInfo: 'io_admin_shell_aas__1__0.LangStringsT',
        elementName: 'sourceOfDefinition'
      }, {
        typeInfo: '.ValueListT',
        elementName: 'valueType'
      }, {
        elementName: 'dataType'
      }]
  };
  return {
    io_admin_shell_iec61360__1__0: io_admin_shell_iec61360__1__0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], io_admin_shell_iec61360__1__0_Module_Factory);
}
else {
  var io_admin_shell_iec61360__1__0_Module = io_admin_shell_iec61360__1__0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.io_admin_shell_iec61360__1__0 = io_admin_shell_iec61360__1__0_Module.io_admin_shell_iec61360__1__0;
  }
  else {
    var io_admin_shell_iec61360__1__0 = io_admin_shell_iec61360__1__0_Module.io_admin_shell_iec61360__1__0;
  }
}