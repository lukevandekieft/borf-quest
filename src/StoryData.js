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
      'Fail': 7,
      'Pass': 5,
    },
    location: 'cabin',
    text: `You have answered the stupid riddle with the wrong choice. They seem equally viable but this old hag, er, Vurda only accepts the answer "Pearls". She cackles, as she would, and tells you that her big brother Borf will be delighted she prevented you from leaving town. At this point you realize you don't know the name of the drunkard. You have spent a few hours conversing about fate and it's cruel tricks; about life and the dreams you have. You have made a true friend that has a shared interest in defeating Borf. If you survive this encounter with Vurda (whomst'nt name no one needs to know ever, whomst've is a damned goblin related to Borf) you should maybe introduce yourself??
    Well, I guess you need to push this old hag/goblin aside and continue on your journey, eh? You do so with ease and hear her mumbling something behind you. Shoot! She has cast a spell! (More cackles.) If you fail this charisma stat test your fate will be even less fortunate than usual lol.`,
    title: `Stats Test`,
  },
  5: {
    buttons: {
      'Pass': 8,
      'Fail': 7,
    },
    location: `cabin`,
    text: `“Fools!” the hermit yells, as he rises from his crouched position. His cloak fall away to reveal the form of a demon. “You have chosen poorly! Now you shall perish!” says the demon as he makes his way toward you.

    The outlook is grim. He is a massive, dark creature. Your only option is to run. Make an agility roll to run for your life!`,
    title: `Stats Test`,
  },
  6: {
    buttons:  {
      'Replay': null,
    },
    location: `cabin`,
    text: `Fortune does not smile upon thee. It has been a long journey and you have shown yourself to be a potentially excellent hero. Really. But you have just made a fatal error. It's over. It's done. Caput. Alas, you are...

      ...NOW DEAD. Rest in Peace and Thanks for Playing! T_T

      Give it another go?`,
    title: `Death`,
  },
  7: {
    buttons: {
      'Replay': null,
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
    text: `Leaving the town behind, your sadness is replaced with determination. You are one step closer to finding out what happened to your lost love. You push forward through the evening mist until you happen upon a dark and scary forest. “I know these woods well,” Bootstrap says as he takes a swig from his flask. You shiver as you hear the unknown noises of the forest before you. “The forest is treacherous, but it is the shortest way there."`,
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
    buttons: {},
    location: `forest`,
    text: `*CRACK* You attempt to sneak away, but Bootstrap clumsily steps on a branch. The sound of the twig snapping echoes through the forest. The goblins roar as they swing around to discover you there. They raise their weapons and begin advancing toward you. “Ay! I’ve been looking for a fight. These evil fiends will taste my blade!” Bootstrap cries. Do you choose to stay and fight or attempt to run away?`,
    title: `Goblin Battle - Bootstrap`,
  },
  14: {
    buttons: {
      'Continue': 49,
    },
    location: `forest`,
    text: `The goblins are strong and their size formidable. Without a weapon of your own, you fear certain death. You climb a nearby tree to escape their slimy grip. You breathe a sigh of relief as you find yourself well out of their reach. Thank goodness goblins cannot climb. The tree begins to shake and you hold on for dear life. Looking down, you see the goblins are hacking away at the tree with their axes. You begin to say your final prayers as the goblin’s axe makes a slicing blow to the tree. The tree falls to the forest floor with a deafening thud. You land in a bush, badly scratched and short of breath. In a glorious turn of fate, you rise to see that the tree has fallen and crushed your goblin adversaries. You thank the gods that the goblins were not nearly as smart as they were strong. You quickly move on through the forest.`,
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
  16: { buttons: {}, location: `forest`, text: ``, title: ``, },
  17: { buttons: {}, location: `forest`, text: ``, title: ``, },
  18: {
    buttons: {
      'Play Again': null,
    },
    location: `forest`,
    text: `The goblins are strong and their size formidable. There seems to be no escape, so you must turn and face them. Without a weapon of your own, you fear certain death. You frantically search around you for something to use in battle. You grab a large rock and attempt to hurl it at your foe. The stone glances off the heavily armored creature. Your feeble attack has only angered the goblins more. They lunge at your with their battle axes. The blade makes contact and slices into your shoulder. You cry out as the searing pain overtakes your body. You collapse to the ground as the goblins tower over you. You pray for a swift death as the goblins claws begin to rip into you. Your final thought is of your beloved. Did they suffer the same fate at the hands of the goblins? As the world goes black, you are comforted at the possibility of being with your beloved in the afterlife. Game over!`,
    title: ``,
  },
  19: { buttons: {}, location: `forest`, text: ``, title: ``, },
  20: { buttons: {}, location: `forest`, text: ``, title: ``, },
  21: { buttons: {}, location: `castle`, text: ``, title: ``, },
  22: { buttons: {}, location: `castle`, text: ``, title: ``, },
  23: { buttons: {}, location: `castle`, text: ``, title: ``, },
  24: { buttons: {}, location: `castle`, text: ``, title: ``, },
  25: { buttons: {}, location: `castle`, text: ``, title: ``, },
  26: { buttons: {}, location: `castle`, text: ``, title: ``, },
  27: { buttons: {}, location: `castle`, text: ``, title: ``, },
  28: { buttons: {}, location: `castle`, text: ``, title: ``, },
  29: { buttons: {}, location: `castle`, text: ``, title: ``, },
  30: { buttons: {}, location: `castle`, text: ``, title: ``, },
  31: { buttons: {}, location: `castle`, text: ``, title: ``, },
  32: { buttons: {}, location: `castle`, text: ``, title: ``, },
  33: { buttons: {}, location: `castle`, text: ``, title: ``, },
  34: { buttons: {}, location: `castle`, text: ``, title: ``, },
  35: { buttons: {}, location: `castle`, text: ``, title: ``, },
  36: { buttons: {}, location: `castle`, text: ``, title: ``, },
  37: { buttons: {}, location: `castle`, text: ``, title: ``, },
  38: { buttons: {}, location: `castle`, text: ``, title: ``, },
  39: { buttons: {}, location: `castle`, text: ``, title: ``, },
  40: { buttons: {}, location: `castle`, text: ``, title: ``, },
  41: { buttons: {}, location: `castle`, text: ``, title: ``, },
  42: { buttons: {}, location: `castle`, text: ``, title: ``, },
  43: { buttons: {}, location: `castle`, text: ``, title: ``, },
  44: { buttons: {}, location: `castle`, text: ``, title: ``, },
  45: { buttons: {}, location: `castle`, text: ``, title: ``, },
  46: { buttons: {}, location: `castle`, text: ``, title: ``, },
  47: { buttons: {}, location: `castle`, text: ``, title: ``, },
  48: { buttons: {}, location: `castle`, text: ``, title: ``, },
  49: { buttons: {}, location: `castle`, text: ``, title: ``, },
  50: { buttons: {}, location: `castle`, text: ``, title: ``, },
  51: { buttons: {}, location: `castle`, text: ``, title: ``, },
  52: { buttons: {}, location: `castle`, text: ``, title: ``, },
  53: { buttons: {}, location: `castle`, text: ``, title: ``, },
  54: { buttons: {}, location: `castle`, text: ``, title: ``, },
  55: { buttons: {}, location: `castle`, text: ``, title: ``, },
  56: { buttons: {}, location: `castle`, text: ``, title: ``, },
  57: { buttons: {}, location: `castle`, text: ``, title: ``, },
  58: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  59: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  60: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  61: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  62: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  63: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  64: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  65: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  66: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  67: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  68: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  69: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  70: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  71: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  72: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  73: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  74: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  75: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  76: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  77: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  78: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  79: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  80: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  81: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  82: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  83: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  84: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  85: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
  86: { buttons: {}, location: `throneRoom`, text: ``, title: ``, },
}

export default Pages;
