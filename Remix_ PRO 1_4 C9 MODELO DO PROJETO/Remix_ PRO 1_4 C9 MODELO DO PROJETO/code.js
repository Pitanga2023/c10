var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","f3e3cb84-99c8-4541-8334-57f19e3cd57a","f35d7939-2a70-4a7c-824f-8bdf5acba4a2","7e62d203-20e6-4407-b5d0-b13d74d74236","25cb5660-3662-4259-afe1-3d4c5668f18b","0db85def-10b0-4c30-8465-8eef3b3189c5","459f0d6d-54af-4228-9d31-b2ac2695d765"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"apuM31cXDl9AkrnqBgIPIf3uBHgbQRB_","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"yWrj19y7LLa4AgrBxkBuFgMUHphkgD5D","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"q3lp1smXE64pTJOvhwFR5c6qwyHlaks3","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"f3e3cb84-99c8-4541-8334-57f19e3cd57a":{"name":"space","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:15 UTC","pngLastModified":"2021-01-07 19:29:50 UTC","version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"f35d7939-2a70-4a7c-824f-8bdf5acba4a2":{"name":"gosmento","categories":["animals"],"frameCount":1,"frameSize":{"x":392,"y":398},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:25:15 UTC","pngLastModified":"2021-01-05 18:25:15 UTC","version":"8pCX3sJMxtF9qzAHW0FICAagMv3V3olK","sourceUrl":"assets/api/v1/animation-library/gamelab/8pCX3sJMxtF9qzAHW0FICAagMv3V3olK/category_animals/creature_18.png","sourceSize":{"x":392,"y":398},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/8pCX3sJMxtF9qzAHW0FICAagMv3V3olK/category_animals/creature_18.png"},"7e62d203-20e6-4407-b5d0-b13d74d74236":{"name":"virus","categories":["germs"],"frameCount":1,"frameSize":{"x":390,"y":390},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:50 UTC","pngLastModified":"2021-01-05 19:14:43 UTC","version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","sourceSize":{"x":390,"y":390},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"25cb5660-3662-4259-afe1-3d4c5668f18b":{"name":"virus2","categories":["germs"],"frameCount":1,"frameSize":{"x":388,"y":390},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:18 UTC","pngLastModified":"2021-01-05 19:14:42 UTC","version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","sourceSize":{"x":388,"y":390},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"0db85def-10b0-4c30-8465-8eef3b3189c5":{"name":"virus3","categories":["germs"],"frameCount":1,"frameSize":{"x":390,"y":390},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:37 UTC","pngLastModified":"2021-01-05 19:14:40 UTC","version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","sourceSize":{"x":390,"y":390},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"459f0d6d-54af-4228-9d31-b2ac2695d765":{"name":"ufo","categories":["icons"],"frameCount":1,"frameSize":{"x":386,"y":267},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:20:12 UTC","pngLastModified":"2021-01-05 19:20:50 UTC","version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","sourceSize":{"x":386,"y":267},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
var hero = createSprite(200,345,200,345);
b.setAnimation("space");
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,6,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("gosmento");
hero.scale=.2;
enemy1.setAnimation("virus");
enemy1.scale=.1;
enemy2.setAnimation("virus2");
enemy2.scale=.1;
enemy3.setAnimation("virus3");
enemy3.scale=.1;
net.setAnimation("ufo");
net.scale = .2;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-15
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+15
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-15
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+15
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
