

__TFG DOCUMENTATION__
=================


## __Folder Structure__

This project content a different folder content, in order to sperate teoric and practical content.

**Tree Folders**
- Documents
	> **Contets** all type de documents from Idustria 4.0. Articles, Projects, References, Documenttions specific methodology or element, etc... 

- Project Documents
	> *Content** **TFG** explaining document and PowerPoint presentation

- Projects
    > **Content** font material to the impmented projects in **TFG**.
    - **1**_discomcloud_sitenode_backend_apirest 
    - **2**_DiscomCloud 
    - **3**_discomcloud_backend_apirest-master 
- Software Tools
	 > **Content** opensource programs: OPC UA clients and UA modeler visualitzacion.
    - UAExpert
    - UAModeler
## Overview
This project is a SOA(-based) system which utilizes/makes use of microservices, adding new functionalities and ensuring greater scalability.The TFG project currently consists of two different modules integrated into one repository.

The first module is a useful, one client-server system and, since this server Web API uses REST, ensures that a stateless connection is established. Therefore, any client that uses the HTTP protocol will be able to access data. This data comes from  the machines and Dashboard information stored in the data base.

On the other hand, however, it's a teoric case where the implementation of the single-source'AAS' is performed on a machine data basis."

![Overall](https://github.com/manujose94/ETSINF-TFG/blob/master/Projects%20Documents/Images/image24.png?raw=true)
## Demos

You can find 3 demo files in [the project](https://github.com/manujose94/ETSINF-TFG/tree/master/Projects/1_discomcloud_sitenode_backend_apirest/discomcloud_sitenode_backend_apirest). Just use it as a full example about how to use  node-opua or node-opua-coreaas. Of course be sure to change the  `require`  statement putting the  node-opcua and node-opcua-coreaas module.
-   "sample1.js"  is a single-file sample showing an AAS sereialitzacion example.
-   "sample2.js" is a single-file sample where there ara implemented AAS serialitazcion with node-opcua in such a communication method.
-   "sample3.js" is a single-file sample showing an AAS based on the example shown in  [this](https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/2018-details-of-the-asset-administration-shell.html)  document.
## Getting started
### Project Ionic and Backend
To use this project you only need to decompress the following packages:

| Name | Type | Dependencies  |
|--|--|--|
| discomcloud-ionic | client | Ionic v3|
| [discomcloud_backend_apirest](https://github.com/manujose94/ETSINF-TFG/tree/master/Projects/3_discomcloud_backend_apirest-master) | backend  | Microsoft.AspNet.WebApi v4.0.30506.0|

Do not remove the node_modules folder, if it does not exist, you will need to install al dependenies.

### Project AAS

```
$ mkdir my-project
$ cd my-project
$ npm init
```
After that, you can install node-opcua or node-opcua-coreaas as dependency using the following command:

```
$ npm install node-opcua --save
```

If only node-opcua-coreaas, is **not necessary** node-opc-ua, this extension  has already included this in its dependencies.
```
$ npm install node-opcua-coreaas --save
```
### install AAS project f
rom source
```
 $ git clone https://github.com/manujose94/ETSINF-TFG.git
 $ cd node-opcua
 $ npm install
```
## Running
In the root folder project:

| Sample | Command |
|--|--|
| sample1 | npm run sample1 |
| sample2 | npm run sample2 |
| sample3 | npm run sample3 |

### Minimum nodejs requirement
-   nodejs version 6.10 or above
## Test
When one sample is launched it shows the information in the terminal:

    Server is now listening... ( press CTRL+C to stop) 
    port 26544 
    the primary server endpoint url is:
     opc.tcp://LAPTOPLL2T36MU:26544/ua/resource

Add a server with addres that shows it:

![enter image description here](https://github.com/manujose94/ETSINF-TFG/blob/master/Projects%20Documents/Images/addserver.PNG?raw=true)

View data log:

![enter image description here](https://github.com/manujose94/ETSINF-TFG/blob/master/Projects%20Documents/Images/image49.png?raw=true)
OPC UA client software: [UA Expert](https://www.unified-automation.com/products/development-tools/uaexpert.html)

## Notes
### API Documentation node-opcua

check out the [API documentation](http://node-opcua.github.io/api_doc/index.html)
### Problems
Exist some problems with the Openssl version when installing dependencies, in this case copy&paste node_modules folder ins root folder into the project.

Copy [node_modeles](https://github.com/manujose94/ETSINF-TFG/blob/master/Projects/node_modules.7z) folder into discomcloud_sitenode_backend_apirest\coreAAS\

## Reference
 - ![#1589F0](https://placehold.it/15/f03c15/000000?text=+) Extension:
 [node-opcua](https://github.com/node-opcua/node-opcua)
 [node-ocpua-coreaas](https://github.com/OPCUAUniCT/node-opcua-coreaas)
 - ![#1589F0](https://placehold.it/15/f03c15/000000?text=+) Documention:
 I4.0 Paltform
 
 - ![#1589F0](https://placehold.it/15/f03c15/000000?text=+) Lenguajes:
 [NodeJS](https://nodejs.org/es/)
 [Ionic](https://github.com/ionic-team/ionic-v3)
 [WepApi](https://dotnet.microsoft.com/apps/aspnet/apis)
