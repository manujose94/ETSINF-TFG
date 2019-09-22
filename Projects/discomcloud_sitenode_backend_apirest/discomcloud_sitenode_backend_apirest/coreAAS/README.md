## Overview
**CoreAAS** information model is an OPC UA implementation of the Asset Administration Shell (AAS) metamodel [here](https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/2018-details-of-the-asset-administration-shell.html) provided by Platform Industrie 4.0.

**node-opcua-coreaas** is an extension for the Node.js stack [node-opcua](https://github.com/node-opcua/node-opcua) including new functions in order to easily populate your OPC UA Server with Objects related to AAS, Assets, Submodel, etc. without taking care about putting the Nodes and references in the right place.

## Dependencies before starting
    OpenSSL
    Nodejs
    npm
### Dependencies before starting
In this example its created and luanched over:

  * OpenSSL 1.0.2g
  * Node v10.16.2
  * Npm 6.9.0
  * Ubuntu 16.04 LTS

## Getting started

## Launch

```
manel@MSI-GS60-2QD:~/opcua$ node  example.js
loadnodeset2 ( checking identifier type) : unsupported typeId in ExtensionObject ns=1;i=5002
loadnodeset2: unsupported typeId in ExtensionObject ns=1;i=5002
initialized
Server is now listening ... ( press CTRL+C to stop)
port  26543
 the primary server endpoint url is  opc.tcp://msi-gs616-04:26543

```
