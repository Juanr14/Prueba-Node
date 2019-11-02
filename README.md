# Aplicación rest typescript

## Instalación

Ingresar a la carpeta del repositorio y ejecutar el siguiente comando para instalar todas las dependencias.

```bash
npm install
```

## Ambiente de desarrollo

Para ejecutar la aplicación de manera local se debe ejecutar el siguiente comando

```bash
npm run start-dev
```


## Depliegue

Tener en cuenta que para realizar los siguientes pasos se debe crear una cuenta en Ibmcloud, instalar el bluemix-cli y por ultimo logearse usando 
```bash
ibmcloud login --sso
```

La aplicación contiene varios scripts en el archivo package.json, para desplegar primero es necesario ejecutar el script:

```bash
npm run build
```
Este script a su vez ejecutara los siguientes comandos: 
```bash
1. rimraf dist/*
2. cpx package.json dist/ && cpx package-lock.json dist/
3. tslint -c tslint.json -p tsconfig.json --fix"
4. tsc
```
1. Este comando limpia todo el contenido de la carpeta dist
2. Este comando copia el package.json y el package-lock.json a la carpeta dist para prepararla para el despliegue.
3. Este comando revisa el código según lo parametrizado en el archivo tsconfig.json 
4. Este comando compila el código a javascript.

Por ultimo se debe ejecutar el siguiente comando:

```bash
npm run deploy
```
Este comando se encargara de empezar el despliegue en ibmcloud usando la configuración descrita en el archivo manifest.yml, por debajo ejecuta el siguiente comando: 

```bash
bluemix app push
```

## Créditos
Esta aplicación ha sido desarrollada por Juan David Rincón
