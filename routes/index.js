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

 var descricaoQualidade1 = "Be determined means that I certain give one hundread and ten of what I have. Even if I'm on a pressure situation. \n"+
 " It's easy to me keep focus on something if I like of what I do. I think that the fact I hate to not be good on what \n"+
 "I'm doing helps a lot on my determination.";

 var descricaoQualidade2 = "Be adaptative means that I can fit on everywhere, cause I learn fast, I'm determinate and don't give up. \n"+ 
 "These things together make me adapt to any language or framework, also help me with the team and the company policies.";

 var descricaoQualidade3  = "Learn fast dont need a lot of explanation. I just learn everything fast.";

 var descricaoQualidade4 = "Be like Naruto means that I will never give up and always learn with my mistakes. \n" +
 "Also means that I'm fun, friendly and very cool. Maybe I know how to make a RASENGAN!.";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quem é Gabriel Chaves?' ,qualidade1: "Determinado", qualidade2: "Adaptativo", 
      qualidade3: "Aprendo rápido", qualidade4: "Pareço o Naruto", qualidade5: "Ideias inovadoras", 
      description: descricao, tituloGaleria: 'Galeria de imagens',
      descricaoQualidadeUm:descricaoQualidade1, descricaoQualidadeDois:descricaoQualidade2, descricaoQualidadeTres:descricaoQualidade3, 
      descricaoQualidadeQuatro: descricaoQualidade4});
});

module.exports = router;
