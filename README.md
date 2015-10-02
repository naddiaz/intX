# intX Library
#### Internationalization library for JavaScript

This library allows to manage the __internationalization of text__ into HTML with __JavaScript__. It only require the __js__ library and it not require any another dependency. 

#### Librería para la internacionlización para JavaScript

Esta librería permite gestionar la __internacionalización de textos_ en un HTML con __Javascript__. No requiere ninguna dependencia, solamente es necesario añadir la propia librería.

## How does it work?

Firstly, you need to add the __js__ or __minify version__ file into your html code. Also, it is needed to add the international text file just previous than this library, as it follows:
```html
<script src="js/internationalText.js"></script>
<script src="js/intX.js"></script>
```

Secondly, you need to make the __international text__ file with the structure that it is shown, for example:
```javascript
var internationalText = {
  _def: "en",
  es: {
    title: 'Título de la página',
    page: {
      title: "Título del H1"
    },
    ...
  },
  en: {
    title: 'Web title',
    page: {
      title: "H1 title"
    },
    ...
  },
  ...
}
```

You can add all hierarchy levels as you want. It's totally need add the __parameter _def__, because if the navigator's language not match with any language defined, the library takes this parameter like default language.

The keys of the language are appertaining with the __ISO 639-1 Language Codes__. You can check this codes in [W3Schools references](http://www.w3schools.com/tags/ref_language_codes.asp)

Thirdly, you can use this library like html tag into your html file, as it follows:
```html
<h1 intx="page.title"></h1>
```

Finally, you only ought to execute the constructor function when the document is ready, as it's shown in the following:
```js
new intX();
```

#### Note
If you add dynamic content and it uses the __intX__ library, you should relaunch anew the contructor function. This action is necessary because this library works in execution time. 

### Extension of library
You can use the __intx html tag__ with attribute __label__ if you need add international and static text in the same tag. It's shown in the following example:

```html
<h1><intx label="page.welcome"></intx> naddiaz</h1>
```

## ¿Cómo funciona?

En primer lugar, es necesario añadir el fichero de la librería ya sea en su __versión comprimida__ o en la __versión normal__. Previamente a este fichero es necesario incluir el fichero de textos internacionalizados, tal y como se muestra acontinuación:

```html
<script src="js/internationalText.js"></script>
<script src="js/intX.js"></script>
```

Luego, necesita crear el __fichero de internacionalización__ con una estructura como se indica en el siguiente ejemplo: 
```javascript
var internationalText = {
  _def: "en",
  es: {
    title: 'Título de la página',
    page: {
      title: "Título del H1"
    },
    ...
  },
  en: {
    title: 'Web title',
    page: {
      title: "H1 title"
    },
    ...
  },
  ...
}
```
Puede añadir tantos niveles de jerarquía como desee. Además es totalmente necesario definir el __parámetro _def__, ya que cuando el idioma del navegador no corresponda con ninguno de los idiomas definidos, la librería tomará el idioma definido en esta variable como idioma por defecto.

Las claves de los idiomas definidos corresponden con los __ISO 639-1 Language Codes__. Puede comprobar los códigos en [W3Schools references](http://www.w3schools.com/tags/ref_language_codes.asp)

A continuación, ya puede utilizar la librería como un __atributo de la etiqueta html__, tal y como se puede observar en este ejemplo:
```html
<h1 intx="page.title"></h1>
```

Por último, para que se añadan los textos a las etiquetas, debe ejecutar una vez cargado el html, el contructor de la clase:
```js
new intX();
```

#### Nota
Si añade contenido dinámico y éste hace uso de la librería __intX__ es necesario que ejecute nuevamente el contructor para reconstruir los textos que se han añadido.

### Ampliación de la librería
Puede utilizar __la etiqueta intx__ con el atributo __label__ cuando necesite añadir contenido estático e internacionalizado en la misma etiqueta html. Tal y como se muestra en el siguiente ejemplo:

```html
<h1><intx label="page.welcome"></intx> naddiaz</h1>
```
