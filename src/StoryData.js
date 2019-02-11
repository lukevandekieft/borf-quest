const Pages = {
  1: {
    buttons: {
      'Drunk' : 2,
      'Scholar' : 3,
    },
    location: 'cabin',
    text: `You find yourself in the town pub. You approach the barkeep and ask for a pint of grog. He passes you a frothy mug. You take a hefty swig. It helps, but it doesn’t heal the pain. You are mourning the loss of your true love. They were taken in the night. You know little of the mysterious circumstances surrounding their disappearance. The only clue you have is a piece of torn parchment that was left in their room. It is scribbled with a single word: Borf. You read the word aloud as you try to make sense of this tragedy.

    A man appears beside you and startles you from your lament. He is a large, disheveled bloke who reeks of alcohol. “Why do you speak the name of the Goblin King?” he slurs. With sadness and confusion in your eyes, you show him the parchment. “Borf is the most evil creature in the land. There is a bounty for his head,” he declares as he brandishes a sword. “I plan to capture him myself!”

    Another man overhears your conversation and interrupts. “No ordinary man stands a chance against the Goblin King,” he says. “He wields powers of darkness.” This character is a scholarly gentleman with an arm full of texts. “I’ve studied the ancient texts, and I know all about him. The key is his magic staff. I have developed a plan to acquire it.”

    At that moment, a flaming arrow comes crashing through the window of the pub and lands on your table. Chaos erupts in the bar and you have to make a run for it. Both of these men have knowledge of the Goblin King, who may have had something to do with the disappearance of your love. You have nothing left to lose, so you decide to find this Borf. Which of these two adventurers will you follow on your new quest: The drunk who seeks a bounty or the scholar who seeks knowledge?`,
    title: `Choose a companion`,
  },
  2: {
    buttons: {
      'Moon' : 4,
      'Pearl' : 9,
    },
    location: 'cabin',
    text: `After a few more pints and shouting conversation the drunkard is finally ready to go. He picks up his giant frame and drags it away from the bar. You leave the pub with the drunkard by your side and embark on your adventure. He tells you once again that he will kill Borf and steal his treasure. He continues on at length about his plans to then buy a horse, to maybe buy a compass and to somehow attract a suitable partner. His motivations are simple and despite his intimidating demeanor he seems very good natured. He stops briefly beside the path to make sick in a bush.

    As you approach the edge of town, you encounter an old hag. She prolly has had a very rough life, or she's like 200 years old. It seems she is blocking the path, but not with her sack of bones. With no provocation she says: "Good evening travelers. My name is Vurda. If you cannot solve my riddle something bad will happen." She recites the riddle with boredom. It seems this is not her first riddle rodeo.
    "Lovely and round,
    I shine with pale light,
    grown in the darkness,
    A lady's delight."

    Which answer do you choose?`,
    title: `Drunk Riddle`,
  },
  3: {
    buttons: {
      'Two' : 8,
      'One' : 5,
    },
    location: 'cabin',
    text: `You push through the panicked crowd as you hurry out of the pub in pursuit of the scholar. You barely make it out before the building erupts in flames. “Do you wish to join me on my quest?” the scholar asks. You nod. His knowledge could dispel the mystery of these tragic events. “Fantastic!” he exclaims. “These ancient scrolls tell of a castle in the forest where Borf resides. That is our destination.”

    Intrigued by this new discovery, you follow the scholar out of town and toward the forest. As you approach the drawbridge that leads out of town, you encounter an old hermit. He is hunched over and draped in a dark cloak. “You may not pass unless you answer my riddle,” he says. You are in a hurry, but he seems harmless, so you agree.

    *Riddle*
    There are three apples and you take two. How many apples do you have?`,
    title: `Scholar Riddle`,
  },
  4: {
    buttons: {
      "You're beautiful! Let bygones be bygones?": {
        attribute: 'charisma',
        value: 15,
        pass: 9,
        fail: 6,
      },
    },
    location: 'cabin',
    text: `You have answered the stupid riddle with the wrong choice. They seem equally viable but this old hag, er, Vurda only accepts the answer "Pearls". She cackles, as she would, and tells you that her big brother Borf will be delighted she prevented you from leaving town. At this point you realize you don't know the name of the drunkard. You have spent a few hours conversing about fate and it's cruel tricks; about life and the dreams you have. You have made a true friend that has a shared interest in defeating Borf. If you survive this encounter with Vurda (whomst'nt name no one needs to know ever, whomst've is a damned goblin related to Borf) you should maybe introduce yourself??
    Well, I guess you need to push this old hag/goblin aside and continue on your journey, eh? You do so with ease and hear her mumbling something behind you. Shoot! She has cast a spell! (More cackles.) If you fail this charisma stat test your fate will be even less fortunate than usual lol.`,
    title: `Stats Test`,
  },
  5: {
    buttons: {
      'RUN!': {
        attribute: 'agility',
        value: 15,
        pass: 8,
        fail: 7,
      },
    },
    location: `cabin`,
    text: `“Fools!” the hermit yells, as he rises from his crouched position. His cloak fall away to reveal the form of a demon. “You have chosen poorly! Now you shall perish!” says the demon as he makes his way toward you.

    The outlook is grim. He is a massive, dark creature. Your only option is to run. Make an agility roll to run for your life!`,
    title: `Stats Test`,
  },
  6: {
    buttons:  {
      'Game Over!': null,
    },
    location: `cabin`,
    text: `Fortune does not smile upon thee. It has been a long journey and you have shown yourself to be a potentially excellent hero. Really. But you have just made a fatal error. It's over. It's done. Caput. Alas, you are...

      ...NOW DEAD. Rest in Peace and Thanks for Playing! T_T

      Give it another go?`,
    title: `Death`,
  },
  7: {
    buttons: {
      'Game Over!': null,
    },
    location: `cabin`,
    text: `Your speed is no match for the quickness of the dark fiend. A dark cloud envelopes you. You hear screams. You are unsure whether the voice belongs to you or the lost souls who came before you. You find it hard to breathe. The world begins to go dark. You can feel the grip of death closing in on you. Your final thought is that maybe you will see your beloved on the other side….

      Game over.`,
    title: `Death`,
  },
  8: {
    buttons: {
      'Into the Forest': 10,
    },
    location: `forest`,
    text: `You sprint across the bridge, leaving the hermit far behind. Departing the town, your sadness is replaced with determination. You are one step closer to finding out what happened to your lost love. You push forward through the evening mist until you happen upon a dark and scary forest. “Our destination is just beyond this forest,” Artemisia says as he checks the map. You shiver as you hear the unknown noises of the forest before you.`,
    title: `Outside Forest - Artemisia`,
  },
  9: {
    buttons: {
      'Into the Forest': 11,
    },
    location: `forest`,
    text: `Success! Leaving the town and the crone behind, your sadness is replaced with determination. You are one step closer to finding out what happened to your lost love. You push forward through the evening mist until you happen upon a dark and scary forest. “I know these woods well,” Bootstrap says as he takes a swig from his flask. You shiver as you hear the unknown noises of the forest before you. “The forest is treacherous, but it is the shortest way there."`,
    title: `Outside Forest - Bootstrap`,
  },
  10: {
    buttons: {
      'Hide': 19,
      'Sneak Away': 12,
    },
    location: `forest`,
    text: `You make your way into the dimly-lit forest and immediately regret your decision. You can see menacing eyes looking at you from all around the wood. You pray these are just woodland creatures as you push further into the brush. All of the sudden, you hear a loud snarl that stops you in your tracks. Looking around, you see a pair of goblin sentries patrolling the woods. They are hideous, armored creatures wielding axes. “Stay very still,” Artemisia whispers. “I don’t think they’ve seen us. We should avoid confrontation.” If you duck and hide, you can lay low and wait until they pass, but who knows how long that will take. You’d like to leave this sinister place as soon as possible. If you stay very quiet, you may be able to sneak past them undetected. Do you choose to hide and wait for them to pass or choose to sneak around them?`,
    title: `Inside Forest - Artemisia`,
  },
  11: {
    buttons: {
      'Hide': 20,
      'Sneak Away': 13,
    },
    location: `forest`,
    text: `You make your way into the dimly-lit forest and immediately regret your decision. You can see menacing eyes looking at you from all around the wood. You pray these are just woodland creatures as you push further into the brush. Bootstrap unsheathes his dagger and uses it to hack and slash through the foliage. All of the sudden, you hear a loud snarl that stops you in your tracks. Looking around, you see a pair of goblin sentries patrolling the woods. They are hideous, armored creatures wielding axes. “Goblins,” whispers Bootstrap. “Strong beasts, but not very bright. I say we take them down.” You aren’t looking for a fight. Lucky for you, they haven’t noticed you yet. If you duck and hide, you can lay low and wait until they pass, but who knows how long that will take. You’d like to leave this sinister place as soon as possible. If you stay very quiet, you may be able to sneak past them undetected. Do you choose to hide and wait for them to pass or choose to sneak around them?`,
    title: `Inside Forest - Bootstrap`,
  },
  12: {
    buttons: {
      'Fight': {
        attribute: 'strength',
        value: 30,
        pass: 15,
        fail: 18,
      },
      'Run': {
        attribute: 'agility',
        value: 20,
        pass: 14,
        fail: 18,
      }
    },
    location: `forest`,
    text: `*CRACK* You attempt to sneak away, but Artemisia steps on a branch. The sound of the twig snapping echoes through the forest. The goblins roar as they swing around to discover you there. They raise their weapons and begin advancing toward you. “We are done for! Gods save us!” Artemisia cries. Do you choose to stay and fight or attmept to run away?`,
    title: `Goblin Battle - Artemisia`,
   },
  13: {
    buttons: {
      'Fight': {
        attribute: 'strength',
        value: 30,
        pass: 17,
        fail: 18,
      },
      'Run': {
        attribute: 'agility',
        value: 20,
        pass: 16,
        fail: 18,
      }
    },
    location: `forest`,
    text: `*CRACK* You attempt to sneak away, but Bootstrap clumsily steps on a branch. The sound of the twig snapping echoes through the forest. The goblins roar as they swing around to discover you there. They raise their weapons and begin advancing toward you. “Ay! I’ve been looking for a fight. These evil fiends will taste my blade!” Bootstrap cries. Do you choose to stay and fight or attempt to run away?`,
    title: `Goblin Battle - Bootstrap`,
  },
  14: {
    buttons: {
      'Continue': 49,
    },
    location: `forest`,
    text: `The goblins are strong and their size formidable. Without a weapon of your own, you fear certain death. You climb a nearby tree to escape their slimy grip. You breathe a sigh of relief as you find yourself well out of their reach. Thank goodness goblins cannot climb. The tree begins to shake and you hold on for dear life. Looking down, you see the goblins are hacking away at the tree with their axes. You begin to say your final prayers as the goblin’s axe makes a slicing blow to the tree. The tree falls to the forest floor with a deafening thud. You land in a bush, badly scratched and short of breath. In a glorious turn of fate, you rise to see that the tree has fallen and crushed your goblin adversaries. You thank the gods that the goblins were not nearly as smart as they were strong. You quickly move on through the forest.`,
    title: `Battle Success - Run - Artemisia`,
  },
  15: {
    buttons: {
      'Continue': 49,
    },
    location: `forest`,
    text: `You win the battle. You claim the spoils of victory as you strip them of their armor and weapons. After all, they won’t be needing it anymore. You quickly move on through the forest.`,
    title: `Battle Success - Fight - Artemisia`,
  },
  16: {
    buttons: {
      'Continue': 21,
    },
    location: `forest`,
    text: `The goblins are strong and their size formidable. Without a weapon of your own, you fear certain death. You climb a nearby tree to escape their slimy grip. You breathe a sigh of relief as you find yourself well out of their reach. Thank goodness goblins cannot climb. The tree begins to shake and you hold on for dear life. Looking down, you see the goblins are hacking away at the tree with their axes. You begin to say your final prayers as the goblin’s axe makes a slicing blow to the tree. The tree falls to the forest floor with a deafening thud. You land in a bush, badly scratched and short of breath. In a glorious turn of fate, you rise to see that the tree has fallen and crushed your goblin adversaries. You thank the gods that the goblins were not nearly as smart as they were strong. You quickly move on through the forest.`,
    title: `Battle Success - Run- Bootstrap`,
  },
  17: {
    buttons: {
      'Continue': 21,
    },
    location: `forest`,
    text: `You win the battle. You claim the spoils of victory as you strip them of their armor and weapons. After all, they won’t be needing it anymore. You quickly move on through the forest.`,
    title: `Battle Success - Fight - Bootstrap`,
  },
  18: {
    buttons: {
      'Play Again': null,
    },
    location: `forest`,
    text: `The goblins are strong and their size formidable. There seems to be no escape, so you must turn and face them. Without a weapon of your own, you fear certain death. You frantically search around you for something to use in battle. You grab a large rock and attempt to hurl it at your foe. The stone glances off the heavily armored creature. Your feeble attack has only angered the goblins more. They lunge at your with their battle axes. The blade makes contact and slices into your shoulder. You cry out as the searing pain overtakes your body. You collapse to the ground as the goblins tower over you. You pray for a swift death as the goblins claws begin to rip into you. Your final thought is of your beloved. Did they suffer the same fate at the hands of the goblins? As the world goes black, you are comforted at the possibility of being with your beloved in the afterlife. Game over!`,
    title: `Death`,
  },
  19: {
    buttons: {
      'Continue': 41,
    },
    location: `forest`,
    text: `You remain as quiet as possible as you duck in the underbrush. Unfortunately, you chose a hiding place that was also home to a nest of poisonous spiders. You stay still and bite your tongue while enduring the searing pain of the spider bites. After what seems like hours, the goblin sentries are finally out of sight. You have evaded danger for now, but the poison has taken a toll on your health. You wince through the pain as you continue through the forest.`,
    title: `Hide Artemesia`,
  },
  20: {
    buttons: {
      'Continue': 29,
    },
    location: `forest`,
    text: `You remain as quiet as possible as you duck in the underbrush. Unfortunately, you chose a hiding place that was also home to a nest of poisonous spiders. You stay still and bite your tongue while enduring the searing pain of the spider bites. After what seems like hours, the goblin sentries are finally out of sight. You have evaded danger for now, but the poison has taken a toll on your health. You wince through the pain as you continue through the forest.`,
    title: `Hide Bootstrap`,
    },
  21: {
    buttons: {
      'Bridge': {
        attribute: 'agility',
        value: 999,
        pass: 23,
        fail: 23,
      },
      'Sewer': 22,
    },
    location: `castle`,
    text: `You and Bootstrap emerge from the dense forest and the strange purple fog clears. You take a breath of air--naturally expecting the usual fresh, unpolluted breeze of this pre-industrial age--but a indescribable stench has taken it’s place. You follow the stench’s direction and a castle appears on the horizon, erupting from the landscape like a pimple. It's the magnificent and terrible castle of the Goblin King Borf. You and Bootstrap approach. The stench holds you back like a wall, but you plug your nose and push on. Bootstrap doesn’t seem bothered by it at all. A moat flows around the castle, but instead of water a brown sewage burbles slowly. Bootstrap pushes a branch out of the way to reveal a path to a large brown, stone chute emptying into the moat from underneath the castle where the sun dost ne'er shineth.
    “It’s our only way in,” Bootstrap tells you, as if he’s been here before. You’ve heard tales of the diseased phantoms of goblin excrement, as putrid and potent as poison. Bootstrap dips his flask in it, and you don’t even want to imagine why. 

    You think you may see another way. If you monkey climb across the beam under the drawbridge and swing up onto that stone there that seems to be poking out a bit, a small window on the other side could just barely fit your broad shoulders.
    Which path will you choose?`,
    title: ``,
    },
  22: {
  buttons: {
    'Climb Up': 24,
    'Wait Under Hole': 25,
  },
  location: `castle`,
  text: `You realize you were kidding yourself that you could pull off such a stunt. And surely Bootstrap would not have followed.   

  The sewer is not the worst place you’ve ever been. After all, at least it's not promising to be anything it's not. 

  You slip and fall and slide a good twenty feet before scrambling back to your feet. You've been soiled. Oh well. After the loss of your love you now look on the outside like you feel on the inside. 

  You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.`,
  title: ``,
  },
  23: {
  buttons: {
    'Climb Up': 24,
    'Wait Under Hole': 25,
  },
  location: `castle`,
  text: `You immediately fall into the moat of sewage. How did you ever think you could have pulled that off? Bootstrap laughs at you, but he's not spic and span either. You wallow over to him as best you can, and climb up to the sewer. You’re covered from head to toe, but after the loss of your love you now look on the outside like you feel on the inside. 

  You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.`,
  title: ``,
  },
  24: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `You emerge to find a giant goblin with his pants down, getting ready to sit on your head. The goblin turns around with enraged frustration, and grabs you by the neck. You and Bootstrap are carried off and thrown into a dungeon cell. 

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  25: {
  buttons: {
    'Stick Sword in Hole': 27,
    'Continue Waiting': 28,
  },
  location: `castle`,
  text: `One of the holes above you darkens, and a rude noise is followed by a rush of waste which fills your eye sockets. You wipe your eyes and see the hole covered above you. What do you do?`,
  title: ``,
  },
  26: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `A pair of goblin guards see you, drop their tankards of brown ale and they splatter and splash across the cobblestone hall, completely ignoring all your best efforts and overtures. You are quickly overwhelmed but mercifully taken without a scratch.

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  27: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `You hear a violent scream, and a sinewy arms reaches down and grabs you by the hair, yanking you up through the hole. You and Bootstrap are carried off and thrown into a dungeon cell.   

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard somehow smells worse than the sewage, and is dozing off outside the cell. 

  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  28: {
  buttons: {
    'Go Left': 39,
    'Go Right': 59,
  },
  location: `castle`,
  text: `The goblin leaves, and the holes are once again clear. You climb up into the goblin latrine and peer out the door. You are free in Borf's halls. The hallway leads off in two directions.`,
  title: ``,
  },
  29: {
  buttons: {
    'Dash Past': {
      attribute: 'agility',
      value: 18,
      pass: 26,
      fail: 30,
    },
    'Fight!': {
      attribute: 'strength',
      value: 25,
      pass: 26,
      fail: 31,
    },
    'Try Hiding': {
      attribute: 'intelligence',
      value: 18,
      pass: 26,
      fail: 32,
    },
    "'Hi Fellow Goblin!'": {
      attribute: 'charisma',
      value: 15,
      pass: 26,
      fail: 33,
    }
  },
  location: `castle`,
  text: `You and Bootstrap emerge from the forest in full Goblin Armor and smeared with waste and dried blood, but even with the accoutrement you make a scrawny excuse for goblins. 

  An invisible cloud of stench leads you down the road to the Goblin King Borf’s Castle, erupting out of the landscape like a pimple. 

  The castle's drawbridge is down. A single goblin guard is playing checkers against himself. A fly becomes trapped in his ear wax. The goblin reaches up and pulls a few flies from his ear gunk and tosses 'em in his mouth like caramel corn. Bootstrap licks his hairy lips which makes bile creep up your throat. But your lost love is all that’s on your mind. 

  The goblin looks up dumbly from his game. You must think quickly. What will you do? 

  You could run past him, but he's blocking the way. 

  You could fight him, but he looks quite strong. 

  You could hide, but unless he's really as stupid as he looks he's probably seen you. 

  You could talk to him and try to convince him you're goblins. 
  Or you could just walk by casually as if your confidence alone could fool him.`,
  title: ``,
  },
  30: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `Your dash has failed. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell. 
  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  31: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `You fail to defeat the guard. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell.
  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  32: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `The Goblin sees through your shoddy disguise. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell. 
  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  33: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `You fail to convince the guard of your goblin hood. The goblin’s checkers scatter across the drawbridge, and he runs after you at a surprising speed. He grabs you by the hair and throws you in a cell. 

  You are made to kneel, shackled with a rusty chain against the wall. Sharp bones of the previous inhabitant poke holes in your pants and lacerate your shins and your gluteus maximus. The guard smells worse than sewage, and is dozing off outside the cell. 

  'Well, I guess it’s finally o’er,” Bootstrap says to you with glee as he prepares to drink from his flask. 

  “Wait,” you say to him before he poisons himself. “There’s a way.”`,
  title: ``,
  },
  34: {
  buttons: {
    'Talk to Guards': {
      attribute: 'charisma',
      value: 15,
      pass: 38,
      fail: 34,
    },
    'Slip Out of Shackles': {
      attribute: 'agility',
      value: 15,
      pass: 36,
      fail: 34,
    },
    'Pick Locks': {
      attribute: 'intelligence',
      value: 15,
      pass: 37,
      fail: 34,
    },
    'Break Chains - RAWWWHRR!': {
      attribute: 'strength',
      value: 15,
      pass: 35,
      fail: 34,
    }
  },
  location: `castle`,
  text: `Well that didn't go so hot... What now?`,
  title: ``,
  },
  35: {
  buttons: {
    'Go Left': 39,
    'Go Right': 59,
  },
  location: `castle`,
  text: `You use your Herculean strength to break the rusty chains with your bare hands. The guard jumps up in surprise but you put your hands right back to work on their throat. The Goblin convulses and gurgles, eventually coming to sweet, sweet rest after a pitiful, pitiful life. You grab the keys and you and Bootstrap are free in the halls of Borf’s castle.
  Which way do you go?`,
  title: ``,
  },
  36: {
  buttons: {
    'Go Left': 39,
    'Go Right': 59,
  },
  location: `castle`,
  text: `You use your agile fingers slide off your handcuffs and then bide your time. When the guard falls asleep you silently get up and slip the ring of keys from their belt. For a moment you imagine the punishment this goblin will receive for letting you go, but you decide you don't feel sorry for him. His death would be a sweet, sweet relief from a pitiful, pitiful life. 
  You insert the key with such supple delicacy that you are reminded of your lost love. “I like the way you use your hands,” Bootstrap whispers as he sucks in some drool. Your nimble fingers continue their magic and turn the key with nary a jangle.
  You and Bootstrap are free in the halls of Borf’s castle. 
  Which way do you go?`,
  title: ``,
  },
  37: {
  buttons: {
    'Go Left': 39,
    'Go Right': 59,
  },
  location: `castle`,
  text: `You study the primitive bindings on your hand and realize they're easy pickings. Your huge brain gets to work as you slowly work the cuffs with a small bone lying nearby. The lock clicks open, the sleeping giant snorts in their sleep, and then you're up and on your way.

  You and Bootstrap are free in the halls of Borf’s castle. 

  Which way do you go?`,
  title: ``,
  },
  38: {
  buttons: {
    'Go Left': 39,
    'Go Right': 59,
  },
  location: `castle`,
  text: `You use your rugged worldliness on the simple Goblin guard.
  “There is more world out there than you know,” you tell the pitiful excuse for a creature who doesn't deserve any amount of anthropomorphizing. “Just do this one weird trick, and women will fawn over your huge Goblin strength.”
  “Tell me,” the Goblin begs and begs.  The only way you’ll tell him is if he leaves the key with you.
  “Every day you must do something you’re afraid of.  Ask someone out, even if you know they'll say no. And the more you fail the more you will succeed. Now go, find your future love slave.” 

  The goblin runs off, and you use the key to open the cell door. 

  You and Bootstrap are free in the halls of Borf’s castle. 

  “Does that weird trick really work?” Bootstrap asks.
  Which way do you go?`,
  title: ``,
  },
  39: {
  buttons: {
    "Enter Borf's Throne Room": 59
  },
  location: `castle`,
  text: `You find the goblin armory. In the center of the room, elevated above all other gear, is a golden sword and shield, and a glistening suit of golden armor. “Hey, it’s just your size,” Bootstrap says, and helps it on. His hands are damp with sweat for no reason.
  You and Bootstrap rush off down the hallway, and you approach the giant door which will surely lead to the Goblin King Borf’s throne room.`,
  title: ``,
  },
  40: {
  buttons: {
    'Bridge': {
      attribute: 'agility',
      value: 1337,
      pass: 41,
      fail: 41,
    },
    'Sewer': 42,
  },
  location: `castle`,
  text: `You emerge from the dense forest and the strange purple fog clears. You take a breath of air--naturally expecting the usual fresh, unpolluted breeze of this pre-industrial age--but a indescribable stench has taken it’s place. You follow the stench’s direction and a castle appears on the horizon, erupting from the landscape like a pimple. It's the magnificent and terrible castle of the Goblin King Borf. You and Artemesia approach.  The stench holds you back like a wall, but you plug your nose and push on. Artemesia ties a perfumed kerchief round his nose parts. A moat flows around the castle, but instead of water a brown sewage burbles slowly. Artemesia pushes a branch out of the way to reveal a path to a large brown, stone chute emptying into the moat from underneath the castle where the sun dost ne'er shineth.
  “It’s our only way in,” Artemesia tells you, as if he’s been here before. You’ve heard tales of the diseased phantoms of goblin excrement, as putrid and potent as poison. Artemesia saves a phial of the noxious sludge, perhaps to add to a potion in his alchemical laboratory.
  You think you may see another way. If you monkey climb across the beam under the drawbridge and swing up onto that stone that seems to be poking out a bit, a small window on the other side could just barely fit your broad shoulders. 
  Which path will you choose?`,
  title: ``,
  },
  41: {
  buttons: {
    'Climb Up': 43,
    'Wait Under Hole': 44,
  },
  location: `castle`,
  text: `You realize you were kidding yourself that you could pull off such a stunt. And surely Artemesia would not have followed.   

  The sewer is not the worst place you’ve ever been. After all, at least it's not promising to be anything it's not. 

  You slip and fall and slide a good twenty feet before scrambling back to your feet. You've been soiled. Oh well. After the loss of your love you now look on the outside like you feel on the inside. 

  You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.`,
  title: ``,
  },
  42: {
  buttons: {
    'Climb Up': 43,
    'Wait Under Hole': 44,
  },
  location: `castle`,
  text: `You immediately fall into the moat of sewage. How did you ever think you could have pulled that off? Artemesia snickers at you, but he's not spic and span either. You wallow over to him as best you can, and climb up to the sewer. You’re covered from head to toe, but after the loss of your love you now look on the outside like you feel on the inside. 

  You journey deep into the sewer and find a set of holes several feet above you letting in light, just big enough to squeeze through.`,
  title: ``,
  },
  43: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  44: {
  buttons: {
    'Stick Sword in Hole': 46,
    'Continue Waiting': 47,
  },
  location: `castle`,
  text: `One of the holes above you darkens, and a rude noise is followed by a rush of waste which fills your eye sockets. You wipe your eyes and see the hole covered above you. What do you do? 

  Artemesia’s judgmental eyes wait for your next stupid decision.`,
  title: ``,
  },
  45: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  46: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  47: {
  buttons: {
    'Go Left': 58,
    'Go Right': 72,
  },
  location: `castle`,
  text: `The goblin leaves, and the holes are once again clear. You climb up into the goblin latrine and peer out the door. You are free in Borf's halls. The hallway leads off in two directions.`,
  title: ``,
  },
  48: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  49: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  50: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  51: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  52: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  53: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  54: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  55: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  56: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  57: {
  buttons: {

  },
  location: `castle`,
  text: ``,
  title: ``,
  },
  58: {
  buttons: {
    "Enter Borf's Throne Room": 72,
  },
  location: `castle`,
  text: `You find the goblin armory. In the center of the room, elevated above all other gear, is a golden sword and shield, and a glistening suit of golden armor. “It’s approximately your size,” Artemesia says, and helps it on. 
  You and Artemesia rush off down the hallway, and you approach the giant door which will surely lead to the Goblin King Borf’s throne room.`,
  title: ``,
  },
  59: {
  buttons: {
    'Enter': 62,
    'Go Back': 60,
  },
  location: `throneRoom`,
  text: `From here the disgusting rumbling of The Goblin King Borf's belly can be heard. Bootstrap seems like he could use something to eat as well. You progress through the castle corridors towards Borf's lair. It seems eerily quiet. The throne room door is ajar... should you enter the throne room or just go back to the pub?`,
  title: ``,
  },
  60: {
  buttons: {
    'Pub Please': 61,
    'Go Onward': 62,
  },
  location: `throneRoom`,
  text: `You are paralyzed with fear and decide to go back to the pub and just hope for the best. Unless you overcome your fear now and face Borf this is the end of your quest and your designation as a hero.
    Do you go back to the pub or continue the quest?`,
  title: ``,
  },
  61: {
  buttons: {
    'Game Over...?': null,
  },
  location: `throneRoom`,
  text: `You have decided to waste all of this time and just give up. Congrats or something?`,
  title: `Death`,
  },
  62: {
  buttons: {
    'Yeah Sure': 63,
    'No!': 64,
  },
  location: `throneRoom`,
  text: `You quietly approach the door to Borf's lair. It smells like burnt toast and soured ranch dressing. As you push the door open the hinge creaks, announcing your arrival. Borf sits upon his throne, glaring at you and Bootstrap. You feel like you've been waiting your whole life for this one moment. With the lights low and the curtains open you fear you may be on the verge of just blowing it.
  You look around the room and notice your dead lover Jaime on a ritual table. Enraged, you find the strength to push forward. Borf declares he will resurrect Jaime and unleash unknown horrors upon the earth. There is literally a bucket of ranch dressing and a pile of toast nearby on the floor. Should you feed Bootstrap a snack now?`,
  title: ``,
  },
  63: {
  buttons: {
    'Continue': 65,
  },
  location: `throneRoom`,
  text: `While Bootstrap holds Borf's gaze you snatch up a piece of toast and dip it deeply into the ranch dressing. You hand the snack to your companion. Not because you are about to fight Borf but because Bootstrap Buckles is a drunkard he consumes the thing in one bite, smearing ranch dressing from his lips with his forearm. He is ready now.`,
  title: ``,
  },
  64: {
  buttons: {
    'He Better!': 65,
  },
  location: `throneRoom`,
  text: `You are in too much of a pickle to help Bootstrap snack right now. He can fight with an empty belly.`,
  title: ``,
  },
  65: {
  buttons: {
    'Ranch': 66,
    'Attack': 67,
  },
  location: `throneRoom`,
  text: `Borf gets up from the throne and points his staff your direction. His eyes turn red with fury. He yells "Now you die!!!" You and Bootstrap sense there is danger incoming and step aside just as a fireball soars past. Bootstrap seems braced to attack, awaiting your next move. Do you launch the bucket of ranch dressing at Borf or lead the charge and attack?`,
  title: ``,
  },
  66: {
  buttons: {
    'Next': 68,
  },
  location: `throneRoom`,
  text: `In one swift movement you swipe up the ranch dressing and hurl it at Borf's head. The Goblin King is amused with your decision and hits it back your way with his staff. You have been covered with cool ranch dressing. Bootstrap attacks the sidetracked Borf and lands a direct hit.`,
  title: ``,
  },
  67: {
  buttons: {
    'Onward!': 68,
  },
  location: `throneRoom`,
  text: `You do not have time for a food fight. This is serious business here. You lead the attack with the loyal Bootstrap by your side.`,
  title: ``,
  },
  68: {
  buttons: {
    'Ouch!!': {
      attribute: 'strength',
      value: 20,
      pass: 69,
      fail: 69,
    },
  },
  location: `throneRoom`,
  text: `Borf withstands the attack though his flaming eyes of fury have been cooled. His staff cannot be used magically yet but he can and does hit you in the face with it.`,
  title: ``,
  },
  69: {
  buttons: {
    'Kill Borf!': {
      attribute: 'strength',
      value: 15,
      pass: 70,
      fail: 68,
    },
  },
  location: `throneRoom`,
  text: `You survive the attack and have no choice now but to attack Borf again. With no small amount of emotion you scream "Let's buckle this thing, Bootstrap!!!"`,
  title: ``,
  },
  70: {
  buttons: {
    'Play Again!': null,
  },
  location: `throneRoom`,
  text: `You have defeated the terrible Goblin King Borf. His gross behavior can no longer unleash terror upon the earth. His foul plan to resurrect Jaime and open the doors to the underworld will die with him. He manages to utter one last menacing threat: "You haven't seen the last of me..." and then hands you a glamor shot of his likeness and expires.
  Bootstrap Buckles gathers enough treasure to live comfortably for a while. His dream of owning a horse and finding a partner seem within close reach. In another life, another time, he could be a cowboy.
  Tear in eye you take one last look at Jaime Jquerya. They would have made a lovely undead Goblin Royalty. They made a wonderful normal-alive-human-true-love partner. Alas, that ship has sailed.
  You gather a small fortune in treasure and light the castle on fire as you leave. Tossing Borf's glamor shot in the fire you laugh out loud. The hero's journey has many branches and you have walked the path to victory. Fortune smiles upon thee.`,
  title: ``,
  },
  71: {
  buttons: {

  },
  location: `throneRoom`,
  text: ``,
  title: `DEAD PAGE`,
  },
  72: {
  buttons: {
    'Enter': 74,
    'Leave': 73,
  },
  location: `throneRoom`,
  text: `From here the disgusting rumbling of The Goblin King Borf's belly can be heard. Artemisia seems like he knows the way. You wonder how he knows so much. He really has studied some very esoteric knowledge. You progress through the castle corridors towards Borf's lair. It seems eerily quiet. The throne room door is ajar... should you enter the throne room or just leave?`,
  title: ``,
  },
  73: {
  buttons: {
    'Go Onward': 74,
    'Pub it Is': 61,
  },
  location: `throneRoom`,
  text: `You are paralyzed with fear and decide to go back to the pub and just hope for the best. Unless you overcome your fear now and face Borf this is the end of your quest and your designation as a hero.
  Do you go back to the pub or continue the quest?`,
  title: ``,
  },
  74: {
  buttons: {
    'Ranch': 75,
    'Attack': 76,
  },
  location: `throneRoom`,
  text: `You quietly approach the door to Borf's lair. It smells like burnt toast and soured ranch dressing. As you push the door open the hinge creaks, announcing your arrival. Borf sits upon his throne, glaring at you and Artemisia. You feel like you've been waiting your whole life for this one moment. With the lights low and the curtains open you fear you may be on the verge of just blowing it.
  You look around the room and notice your dead lover Jaime on a ritual table. Enraged, you find the strength to push forward. Borf declares he will resurrect Jaime and unleash unknown horrors upon the earth. There is literally a bucket of ranch dressing and a pile of toast nearby on the floor.
  Borf gets up from the throne and points his staff your direction. His eyes turn red with fury. He yells "Now you die!!!" You and Artemisia sense there is danger incoming and step aside just as a fireball soars past. Artemisia says "Now is our chance!" and awaits your next move. Do you launch the bucket of ranch dressing at Borf or lead the charge and attack?`,
  title: ``,
  },
  75: {
  buttons: {
    'Next': 77,
  },
  location: `throneRoom`,
  text: `In one swift movement you swipe up the ranch dressing and hurl it at Borf's head. The Goblin King is amused with your decision and hits it back your way with his staff. You have been covered with cool ranch dressing. Artemisia attacks the sidetracked Borf and lands a direct hit.`,
  title: ``,
  },
  76: {
  buttons: {
    'En Garde!': 77,
  },
  location: `throneRoom`,
  text: `You do not have time for a food fight. This is serious business here. You lead the attack with Artemisia by your side.`,
  title: ``,
  },
  77: {
  buttons: {
    'Try to Dodge': {
      attribute: 'agility',
      value: 20,
      pass: 79,
      fail: 78,
    },
  },
  location: `throneRoom`,
  text: `Borf withstands the attack though his flaming eyes of fury have cooled. Artemisia whispers "He will not be able to cast a fireball until his eyes are red again." He can however hit you in the face with it directly. Borf swings his magic staff at your head.`,
  title: ``,
  },
  78: {
  buttons: {
    'Attack': {
      attribute: 'strength',
      value: 15,
      pass: 80,
      fail: 80,
    },
    'Artemisia!': 81,
  },
  location: `throneRoom`,
  text: `You withstand the attack and are confused. Artemisia is again waiting for you to attack. It seems like he is afraid or something. Do you lead the attack or tell Artemisia to "Do something!"?`,
  title: ``,
  },
  79: {
  buttons: {
    'Attack': {
      attribute: 'strength',
      value: 15,
      pass: 80,
      fail: 80,
    },
    'Artemisia!': 81,
  },
  location: `throneRoom`,
  text: `You gracefully dodge the staff attack from Borf. Do you lead the attack or tell Artemisia to "Do something!"?`,
  title: ``,
  },
  80: {
  buttons: {
    'Kill Borf!!!': {
      attribute: 'strength',
      value: 15,
      pass: 84,
      fail: 82,
    },
  },
  location: `throneRoom`,
  text: `No one has fallen but Borf looks noticeably winded. You ready a finishing blow...`,
  title: ``,
  },
  81: {
  buttons: {
    'Kill Him!!': {
      attribute: 'strength',
      value: 15,
      pass: 84,
      fail: 82,
    },
  },
  location: `throneRoom`,
  text: `You turn to your companion, Artemisia, and yell "DO SOMETHING!!" Artemisia lunges forward at surprising speed with dagger at hand, taking shaken Borf off guard...`,
  title: ``,
  },
  82: {
  buttons: {
    'Duck!': {
      attribute: 'agility',
      value: 15,
      pass: 83,
      fail: 83,
    },
  },
  location: `throneRoom`,
  text: `The Goblin King survives the attack and has rekindled his flaming eyes of fury. He points his staff your direction and casts a fireball at your head. You could see this one coming from, like 10 feet away. You hit the deck as the fireball sours over.`,
  title: ``,
  },
  83: {
  buttons: {
    'Is This the End?': 84,
  },
  location: `throneRoom`,
  text: `You survive the barrage and turn around just in time to see Artemesia plunge a dagger into the back of an unsuspecting Borf. The Goblin King lets out a feral shriek before falling to the ground, prone and panting.`,
  title: ``,
  },
  84: {
  buttons: {
    'Ranch': 85,
    'Attack': 86,
  },
  location: `throneRoom`,
  text: `You have defeated the terrible Goblin King Borf. His gross behavior can no longer unleash terror upon the earth. He manages to utter one last menacing threat: "You haven't seen the last of me..." and then hands you a glamor shot of his likeness and expires. His foul plan to resurrect Jaime and open the doors to the underworld will die with him... so it would seem.
  Artemisia snatches up the magic staff. He turns to you and with a wry smile says "Hey, buddy. Thanks for helping me acquire the magic staff. I'm going to kill you and resurrect Jaime myself. With your undead lost lover by my side I will complete the ritual to open the doors to the underworld and unleash unknown horrors upon the earth. I'm not a goblin but I promise you I can be an excellent Goblin King!!! Now you die!"
  Artemisia attempts to cast a fireball but instead the magic staff lobs a glob of ranch dressing at you. That's where that stuff comes from!? You have been covered in cool ranch dressing. Attack Artemisia or fling ranch dressing at him?`,
  title: ``,
  },
  85: {
  buttons: {
    'Now For the Attack!': 86,
  },
  location: `throneRoom`,
  text: `You scoop a handful of cool ranch dressing from your face and hurl it at your worthy adversary. Artemisia is hit in the face with cool ranch dressing and is confused.`,
  title: ``,
  },
  86: {
  buttons: {
    'Play Again?': null,
  },
  location: `throneRoom`,
  text: `You attack and kill Artemisia with ease! You are truly the stuff heroes are made of.
  Tear in eye you take one last look at Jaime Jquerya. They would have made a lovely undead Goblin Royalty. They made a wonderful normal alive-human-true-love partner. Alas, that ship has sailed.
  You gather a small fortune in treasure and light the castle on fire as you leave. Tossing Borf's glamor shot in the fire you laugh out loud. The hero's journey has many branches and you have walked the path to victory. Fortune smiles upon thee.`,
  title: ``,
  },
}

export default Pages;
