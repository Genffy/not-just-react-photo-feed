#TODO
* ng2 how to load css file in components

#WARNING
change tscongig compilerOptions module is `commonjs` when you use webpack, oterthen that is `system` when you use Systemjs 
```
// webpack way
{
  "compilerOptions": {
    ...
    "module": "commonjs",
    ...
  },
  ...
}
```
```
// Systemjs way
{
  "compilerOptions": {
    ...
    "module": "system",
    ...
  },
  ...
}
```