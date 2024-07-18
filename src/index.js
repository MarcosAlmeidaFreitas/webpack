// webpack é um compactador utilizado para fazer módulos
// comando para instalar o webpack pnpm i -D webpack webpack-cli
// comando para executar o npx webpack para compactar os aquivos
// comando para instalar o loader para utilizar o css no projeto "pnpm i -D style-loader css-loader"
// dayjs biblioteca para mexer com datas.
// comando para instalar o dayjs, pnpm i dayjs  

const dayjs = require('dayjs');
import './styles/index.css';

alert(`Hoje é o dia: ${dayjs().format("DD/MM/YYYY")}`);