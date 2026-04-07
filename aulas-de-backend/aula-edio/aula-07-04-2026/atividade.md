## Step By Step Config Express Server

## Perguntas de patch para responder em um arquivo .md

- Por que `PATCH` é a melhor escolha nesse caso?
- O que significa atualização parcial?
- O que acontece quando você envia apenas um campo?

### Respostas.
```
1> Para que você mude apenas uma informação da atividade e não todas.

2>Uma atualização por partes.

3>Ele recebe esse campo e altera o mesmo para uma nova informação pre colocada.

```

## Perguntas de put para responder em um arquivo .md

- Por que `PUT` é considerado uma substituição completa?
- Qual é a diferença entre substituir e atualizar parcialmente?
- Se o objeto tivesse mais campos, o que poderia acontecer se eles não fossem enviados?

### Respostas.
```
1> Pois ele altera todos dados sem ter que justificar um por um.

2>Na substituição voce perde a versao anterior por algo novo e na atualização parcial voce altera apenas uma parte dele sem perder a versao antiga por completo.

3>Ele iria retirar os campos.

```