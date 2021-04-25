Este repositório é um estudo do VueJS, tem como objetivo o aprendizado do framework e recriar o site da OLX.

**Link do deploy: https://vue-olx.vercel.app/**

# CHECKLIST DE ESTUDOS VUE.JS

- ### Convenções

  - Nomes de componentes(É melhor começar com letra maiuscula ou tudo minúsculo separado por hífen?)

- ### Uso de diretivas do Vue:

  - v-show
  - v-if
  - v-else
  - v-else-if
  - v-for
  - v-bind(:)
  - v-model

- ### Construção de rotas

  - Rotas estáticas
  - Rotas dinâmicas

- ### Uso de bibliotecas CSS
  - Bootstrap
  - Material UI
  - Styled Components?

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
