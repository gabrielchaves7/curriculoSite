var express = require('express');
var router = express.Router();
var descricao = "Nowadays I'am a student of Sistemas da Informação at UFMG. I also work at DTI, \n"+
"a huge TI company at Belo Horizonte. But that description is not who I'am. \n"+
"I'am a person who likes to be myself, without following the template. I would say that\n"+
 "my major characterist is be different of what the others expect of me. Beside that, \n"+
 "I'm very competitive and hate to lose. But I'am not the kind of person that dont accept the lost, \n"+
 "when I lose, I just work hard to win the next one. Not everything are flowers and I have some deffects.\n"+
 "I need to be motivated to give 110%, if I'm not motivated, my productivit will fall a little. \n"+
 "I have another deffect that is be very sensitive, I dont show that to the others around me but for example \n"+
 "if I break up with my girlfriend I will just not want to do anything else to be sad. It's something \n"+
 "hard to happens, but just destroy me.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quem é Gabriel Chaves?' , description: descricao, tituloGaleria: 'Galeria de imagens'});
});

module.exports = router;
