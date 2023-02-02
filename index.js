import express from "express";
import { appendFileSync } from 'fs';
const app = express();

app.use(express.static('.'));
app.use(express.json());

app.post('/statistics', (req,res) => {
    appendFileSync('statistics.txt', JSON.stringify(req.body) + '\n' );
    res.sendStatus(201)
});

app.listen(3000, () => {
    console.log('Server work');
});


// app.post('/api/registration', (req,res) => {
//     let text = readFileSync('statistics.txt', 'utf-8')
//     let match = text.match(req.body.email)
//     if (match != null || req.body.password.length < 8 || req.body.age < 18) {
//         res.sendStatus(500);
//     }

//     appendFileSync('statistics.txt', JSON.stringify(req.body) + '\n');
//     res.sendStatus(201)
// });
// app.get('/', function(req, res){
//     res.send('Hello, World');
// });
// app.get('/name/:name', function(req, res){
//     let name = req.params.name;
//     res.send();
// });

// app.get('/google', function(req, res){
//     res.redirect('http://google.com')
// });

// app.get('/google/:search', function(req, res){
//     let search = req.params.search
//     res.redirect("https://www.google.com/search?q=" + search)
// })
    


// import { readFileSync, writeFileSync, appendFileSync } from 'fs';

// writeFileSync(
//     'test.txt', 
//     'Акорд в музиці (італ. accordo — узгоджую) — ритмічно одночасне сполучення кількох (не менше трьох) різних за висотою звуків./nВ класичній гармонії акордом вважається лише таке сполучення звуків, в якому звуки розташовані по терціях, або можуть бути розташовані шляхом перенесень на октаву. Таке визначення вперше висунув Й. Г. Вальтер в 1732 році. При цьому звуки, що не можуть бути розташовані по терціях, в класичній гармонії вважаються неакордовими./nВ той же час в старовинній музиці (до Вольтера), а також в багатьох випадках — в музиці ХХ століття, акордом називається будь-яке сполучення тонів, що звучать одночасно./nЗалежно від кількості різнойменних звуків, що можуть бути розташовані по терціях, акорди поділяються на:/nтризвуки (3 звуки),/nсептакорди (4 звуки),/nнонакорди (5 звуків),/nундецимакорди (6 звуків) і/nтерцдецимакорди (7 звуків)./nНижній звук акорду називають основним тоном, інші звуки отримують назву згідно з інтервалом, що вони утворюють з основним тоном. Будь-який звук акорду може бути подвоєним (потроєним), або перенесеним в іншу октаву. Якщо основний тон акорду перестає бути нижнім — відбувається обернення акорду./nАкорд може бути розташованим тісно або широко. При тісному розташуванні сусідні голоси (крім басу) віддалені на інтервал секунди, терції, або кварти, при широкому — на інтервал квінти, сексти або септими. Бас із тенором може утворювати будь-який інтервал. Зустрічаються також акорди в змішаному розташуванні./nВ атональній музиці (див. атональність) акорди класифікують за інтервальним складом. Розрізняють акорди секундової (т. зв. кластери), терцевої (а також політерцевої), квартової та змішаної структури.'
// );

// appendFileSync('test.txt', '))');

// let text = readFileSync('test.txt', 'utf8');
// let word = 'звук';
// let reg = new RegExp(word, 'g');
// let res = text.match(reg)
// console.log(res.length);

// console.log('+++');

// let text = readFileSync('test.txt', 'utf8');
// console.log(text);

// console.log('---');

// let word = 'Віджет';

// let str = 'Віджет з ідентифікатором Віджет';

// let reg = new RegExp(word, 'g')
// let res = str.match(reg)
// console.log(res.length);