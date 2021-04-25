Este repositório é um estudo do Vue.js(3.0), tem como objetivo o aprendizado do framework e recriar o site da OLX. As anotações abaixo, tem como propósito resumir os conhecimentos obtidos ao longo do processo.

**Link do deploy: https://vue-olx.vercel.app/**
<br/>
<br/>
<br/>

# ESTUDOS VUE.JS

- ### **Convenções**

  - Nomes de componentes(Começar com letra maiuscula ou tudo minúsculo separado por hífen?)

- ### **Uso de diretivas do Vue:**

  - v-show
  - v-if
  - v-else
  - v-else-if
  - v-for
  - v-bind(:)
  - v-model

- ### **Construção de rotas**

  - Rotas estáticas
  - Rotas dinâmicas

- ### **Uso de bibliotecas CSS**

  - Bootstrap
  - Material UI
  - Styled Components

- ### **Meta tags e SEO**
  - Como injetar meta tags nas views facilmente utilizando a biblioteca **vue-head**

---

## **Convenções**

### **Nomes de componentes**

Há duas opções para nomes de componentes:

**kebab-case**

É valido também diretamente no DOM, fora de templates baseados em string.

###

    <seu-componente/>

**PascalCase**

Quando escrito em PascalCase, você também pode chamá-lo de ambas as formas, porém só poderão ser chamados no DOM(fora de templates) se chamados em kebab-case.

###

    <SeuComponente/> ou <seu-componente/>

---

## **Diretivas**

### **Renderização condicional**

**v-if, v-else-if, v-else, v-show** são as diretivas para renderização condicional. O v-show deve ser usado quando não há else-if nem else.

### **Laços de repetição**

**v-for** é a diretiva utilizada para iterar sobre arrays.

###

    <div v-for="(item, key) in products" :key="key">
    // seu código...
    </div>

### **Manipulando o estado no Vue.js**

Através de data binding, manipulamos o estado no Vue. Há duas formas de Data Binding:

One Way(quando precisamos somente ler o estado)

####

    :nome-do-atributo="nome-da-variavel"

Two Way(podemos alterar e ler)

####

    <input type="text" :value="nome-da-variavel" v-model="nome-da-variavel" />

## **Construção de rotas**

### **Rotas estáticas**

Através do plugin vue-router, é possível criar rotas estáticas dentro da pasta "@views". Elas devem ser inclusas no "@router", no array **routes**.

####

    const routes = [
      {
        path: "/",
        name: "Home",
        component: Home,
      }
    ]

### **Rotas dinâmicas**

Para criar rotas dinâmicas, passamos os parâmetros na rota, como no Express.js.<br/>
No componente destinado, capturamos parâmetros da seguinte forma: **\$route.params.nomeDoParametro**

####

    const routes = [
      {
        path: "/ad/:id",
        component: AdPage,
      }
    ]
