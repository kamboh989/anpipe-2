export const LINKEDIN_PROFILE_URL =
  "https://www.linkedin.com/in/shannonsmithjdms/";

export type LinkedInPost = {
  id: string;
  slug: string;

  authorName: string;
  authorTitle: string;
  authorAvatar: string; // /public/... path
  dateLabel: string;

  
  content: string;

  image?: string; // /public/... path (optional)
  likes: number;
  comments: number;
  shares: number;

  postUrl: string;
};

export const linkedinPosts: LinkedInPost[] = [
  {
    id: "1",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
    "Applied Neuroscience | Ethical Persuasion | Buyer Psychology",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
    
    content:
    `The most important part of surviving a toxic boss?\n\nRecovery.\n\nWhen I worked with a toxic (client),\nI’d walk out of the meeting telling myself I was fine.\nThe meeting was over.\nBut, my nervous system didn’t get the memo.\n\nMy jaw stayed tight.\nMy mind replayed everything.\nMy body stayed braced for hours.\n\nThat’s where the real damage happens.\nNot during the interaction.\nAfter it.\n\nHere’s how to recover properly\nso it doesn’t live in your body all night.\n\n1/ Interrupt the replay loop\n The brain replays to keep you alert.\n Rumination keeps cortisol elevated.\n Do this: say internally “this is over, I’m safe now.”\n Do this: redirect attention to a neutral task.\n\n2/ Discharge stored stress\n Stress is energy mobilized in the body.\n If it doesn’t move, it stays.\n Do this: walk, stretch, or shake for two minutes.\n Do this: take slow breaths with longer exhales.\n\n3/ Separate their energy from yours\n Emotions transfer under power imbalance.\n Your system absorbs more than you realize.\n Do this: say “that emotion belongs to them.”\n Do this: feel your body where you are now.\n\n4/ Re-anchor safety in the present\n Your nervous system needs proof the threat passed.\n Logic alone won’t do it.\n Do this: look around and name five objects.\n Do this: feel your feet and your breath.\n\n5/ Rebuild self-trust\n Toxic encounters quietly create self-doubt.\n Confidence collapses after the fact.\n Do this: say “I handled that.”\n Do this: remind yourself “I survived that.”\n\n6/ Create meaning later\n Analysis while activated reinforces threat.\n Growth sticks only after regulation.\n Do this: delay reflection until calm returns.\n Do this: ask what this showed you about boundaries. \ n7/ Reset through healthy resonance \nThe social nervous system calms with safety. \ nConnection counteracts stress chemistry. \ nDo this: have a brief calm conversation. \ nDo this: share a moment of lightness or laughter. \ n8/ Close the stress cycle intentionally \ nUnclosed loops spill into the next day. \ nYour body needs an ending signal. \ nDo this: create a short closing ritual. \ nDo this: walk, shower, journal, or play music. \ nThe meeting ends. \ nRecovery decides whether the stress does. \ nPS How do you recover from a toxic boss attack? \ nToxic Boss Immunity \ nBuilding a self-serve platform \ nTo create a path to freedom where you call the shots, you're unshakable, you're influential, and free from anyone else’s control. \ nGet on the waitlist for FREE https://lnkd.in/gGJYwXPa  \ n-----------------------------------------------------------------------  \ n➕ Follow 🧠 Shannon for brain-based tools to stay cool  \ ♻️ Repost if someone you know keeps carrying work home.`,
   image: "/a2.png",
    likes: 233,
    comments: 88,
    shares: 23,
    postUrl: LINKEDIN_PROFILE_URL,
  },
  
  {
    id: "2",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
    "Neuroscience of Influence | Ethical Sales",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
    
    content:
    `Your CRM shows ACTIVITY.\n\nIt doesn't show REALITY.\n\nMost managers think they understand their pipeline.\nBut they’re only seeing the version their reps feel comfortable sharing.\n\nThe CRM shows progress.\nThe reps show confidence.\nThe pipeline shows movement.\n\nBut underneath all of that\nthere’s hesitation, uncertainty, and doubt\nthat never makes it into the forecast.\n\nAnd that’s the part that costs you.\n\nReps aren’t trying to mislead you.\nThey’re trying to look competent.\nSo they hold back the early warning signs.\nThey soften how shaky a deal feels.\nThey overstate buyer momentum.\n\nThey wait until a problem becomes undeniable\nand by then\nyour quarter is already in danger.\n\nThat’s why so many leaders get blindsided.\nNot because the deals are bad\nbut because the real signals were never visible.\n\nA CRM tracks activity.\nIt doesn’t track conviction.\nIt doesn’t track buyer emotions.\nIt doesn’t track rep confidence.\nIt doesn’t track the energy of the deal\nwhich is the part that collapses first.\n\nSalesSage exposes that hidden layer.\nIt reveals where reps feel unsure.\nIt highlights deals that look fine on paper\nbut feel unstable underneath.\nIt identifies slipping belief before it becomes slipping revenue.\nIt gives you truth early\nso you can fix the problem while there’s still time.\n\nLeaders don’t need more data.\nThey need the truth behind the data.\nThat’s the gap SalesSage closes.\n\nIf you want to see what’s really happening\nbeneath the surface of your pipeline sign up\n14 day free trial\nhttps://salessage.co/\n\nP.S. How was your Q4?\n\n-----------------------------------------------------------------\n➕ Follow 🧠 Shannon for brain based sales leadership\n♻️ Share if you’ve ever been blindsided by a “healthy” deal that fell apart`,
     image: "/a3.png",
    likes: 425,
    comments: 116,
    shares: 18,
    postUrl: LINKEDIN_PROFILE_URL,
  },
  
  {
    id: "3",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
    "Applied Neuroscience | Trust-Based Selling",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
    
    content:
    `Don't just pray for a job.\n\nPray for a leader, not a toxic boss.\n\nThey say you leave your manager, not your job.\nSo. True.\n\nCulture lives in nervous systems.\nLeaders set the baseline every day.\nTeams regulate around that signal automatically.\n\nHere are 5 signs of a great leader:\n\n1/ Self-regulation\n A great leader notices their own stress.\n They slow down before they speak.\n The room settles when they enter.\n\nA toxic leader brings unprocessed stress.\nThe room tightens immediately.\n\n2/ Clarity under pressure\n A great leader keeps priorities stable.\n Expectations stay clear during chaos.\n Brains relax when rules do not shift.\n\nA toxic leader changes direction emotionally.\nThe team scans moods instead of work.\n\n3/ Pressure flows upward\n A great leader absorbs pressure from above.\n They filter noise before it hits the team.\n Focus stays intact.\n\nA toxic leader pushes pressure downward.\nUrgency spreads through the group.\n\n4/ Recovery is allowed\n A great leader respects human limits.\n Pauses are normal and safe.\n Energy and thinking stay strong.\n\nA toxic leader rewards constant output.\nRest feels risky or earned.\n\n5/ Response over reaction\n A great leader pauses in conflict.\n Their nervous system stays online.\n Hard talks feel contained.\n\nA toxic leader reacts emotionally.\nOthers mirror the instability. \Trust erodes quietly. \Leadership is not control. \It is regulation. \PS Which one of these have you felt? \Toxic Boss Immunity \Building a self-serve platform \To create a path to freedom where you call the shots, you're unshakable, you're influential, and free from anyone else’s control. \Get on the waitlist for FREE \https://lnkd.in/gGJYwXPa \-----------------------------------------------------------\ \➕ Follow Shannon for brain-based leadership tools. \♻️ Repost if a leader you know needs this lens.`,
     image: "/a4.png",
    likes: 310,
    comments: 128,
    shares: 26,
    postUrl: LINKEDIN_PROFILE_URL,
  },
  
  {
    id: "4",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
    "Neuroscience | Leadership Under Pressure",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
    
    content:
   `You’re not broken.\n\nYou're just not connected...\n\n...in a way no one taught you to recognize.\n\nWe have more connection technology than ever.\nGroup chats. Slack threads. Social feeds.\nStanding meetings. Faces everywhere.\n\nYou can be busy, productive, and surrounded by people\nAnd still feel unseen, unfelt, and unsupported.\n\nModern life keeps the nervous system overstimulated.\nYour brain is flooded with input, decisions,\nand performance cues.\n\nWhen that happens, the social brain goes offline.\nYou don’t lose the desire for connection.\nYou lose access to it.\n\nSo you adapt.\n\nYou stay functional instead of present.\nYou keep conversations light instead of real.\nYou handle things alone because it feels safer.\nYou tell yourself you’re “fine”\nwhile feeling disconnected from yourself.\n\nOver time, that state becomes your baseline.\nAnd the most painful part?\n\nYou start to believe this is just how life is.\nIt’s not.\n\nDisconnection isn’t a personality trait.\nIt’s a nervous system state.\nAnd nervous system states can change.\n\nHere’s what neuroscience shows actually helps.\n\n1/ regulation comes before connection.\n When your system is overloaded,\n bonding chemistry can’t do its job.\n You don’t need better words.\n You need your body to feel safe enough\n to be real.\n\n2/ small moments matter more\n than deep conversations.\n Eye contact that lasts a beat longer.\n A pause instead of rushing away.\n Naming what you notice\n instead of what sounds impressive.\n\n3/ connection accelerates in the right environment.\nTrying to heal disconnection alone\n keeps the brain in protection mode.\n Being around others doing hard inner work\n creates co-regulation.\n\nYour nervous system learns:\n“I don’t have to carry this by myself.”\nThat’s why community matters.\n\nNot noisy.\nNot performative.\nNot networking.\n\nBut a grounded space of people \nreconnecting with themselves\nand with others.\n\nThis is what I’m building.\nA community for capable, thoughtful people\ndoing hard things\nwho don’t want to do them alone.\n\nA place to regulate, reflect, and be real\nwithout fixing yourself\nor pretending you’re fine.\n\nIf you’ve felt alone in a world full of people,\nit’s not because something is wrong with you.\nIt’s because your nervous system\nhasn’t had the right conditions yet.\n\nAnd you don’t have to create those alone.\nIf this resonated, the community is open\nfor people ready to reconnect with themselves and with others.\n\nP.S. Where do you feel most disconnected right now?\n\nIntroducing Butterhood Connect:\nFind your people - other entrepreneurs like yourself. \nPLUS...FREE content on:\n- Craft content that converts\n- Understand your ICP deeply\n- Increase your cognitive flexibility\n- DM to get in front of your prospect\n You don't have to do this alone. Join us FREE\nhttps://lnkd.in/gqMj4Vfz\n\n------------------------------------------------------------\n➕ Follow 🧠 Shannon for brain-based connection\n♻️ Share this with someone who might feel alone but never say it`
,
image: "/a5.png",
    likes: 453,
    comments: 134,
    shares: 15,
    postUrl: LINKEDIN_PROFILE_URL,
  },
  
  {
    id: "5",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
    "Ethical Persuasion | Behavioral Neuroscience",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
    
    content:
   `7 signs you're tough enough for your toxic boss...\n\nwithout quitting your job.\n\nYour nervous system has a baseline.\nThat baseline shapes how pressure lands.\n\nHere are 7 signs you're tough enough:\n\n1/ Your baseline state\n A system that rarely rests stays closer to threat.\n From that state, stress hits faster and harder.\n Do this: notice how you feel when you first wake up.\n Do this: schedule one daily pause with no objective.\n\n2/ Continuous motion\n Moving task to task keeps activation high.\n The body never completes a stress cycle.\n Do this: insert a 2-minute pause between blocks.\n Do this: stand still and breathe before switching tasks.\n\n3/ Mental load during “rest”\n A busy mind keeps the system activated.\n Physical stillness alone doesn’t equal recovery.\n Do this: notice if your mind stays busy at rest.\n Do this: gently bring attention to body sensations.\n\n4/ Guilt around slowing down\n Guilt keeps the nervous system alert.\n Safety requires permission to stop.\n Do this: notice the urge to justify rest.\n Do this: remind yourself recovery supports performance.\n\n5/ Morning and evening carryover\n Tension on waking signals unresolved load.\n Evening stress blocks downshifting.\n Do this: check your body before checking your phone.\n Do this: create a short shutdown ritual at night.\n\n6/ Recovery timing\n Waiting for exhaustion delays regulation.\n Late recovery takes longer to work.\n Do this: rest before you feel depleted.\n Do this: add small resets throughout the day.\n\n7/ Social threat sensitivity\n Overloaded systems struggle with power dynamics.\n Emotional range narrows under pressure.\n Do this: regulate before interactions, not after.\n Do this: widen awareness when tension rises.\n\nThis comes before any boss strategy.\nAwareness of starting state is the first layer of immunity. \nP.S Which point showed you something you hadn’t noticed before?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?`,
   image: "/a6.png",
    likes: 311,
    comments: 145,
    shares: 18,
    postUrl: LINKEDIN_PROFILE_URL,
  },
  {
    id: "6",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
      "Applied Neuroscience | Ethical Persuasion | Toxic Boss Immunity | $20K Brain-Based Sales System",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "December 2025",
   
    content:
  `The worst surprises in sales...\n\nare the ones your CRM never shows you.\n\nYou know the ones.\n\n✅The deals that look clean.\n✅The reps who sound confident.\n✅The pipeline that looks “fine.”\n\nRight up until the moment everything falls apart.\nThat’s the truth gap.\n\nAnd it hurts the most because you never see it coming.\n\nYour reps aren’t hiding data.\nThey’re hiding uncertainty.\nThey soften risk.\nThey overstate momentum.\nThey mask hesitation.\n\nNot because they want to mislead you.\nBecause they want to look capable.\nHuman nature beats CRM logic every single time.\n\nSo you get blindsided.\nForecasts crumble.\nDeals slip quietly.\nAnd you carry the blame for information\nYou didn’t get soon enough.\n\nYou don’t lose quarters from bad deals.\nYou lose quarters from delayed truth.\n\nSalesSage fixes that in one 10-minute pulse.\nNo pressure on reps.\nNo interrogation vibes.\nNo pipeline theater.\n\nJust clean emotional signals your CRM can’t track.\n\nYou see fear before it becomes silence.\nYou see drift before it becomes a slip.\nYou see weak conviction before it becomes a blown forecast.\n\nAnd what happens next is the real transformation:\nYour team starts telling the truth early.\nYour forecasts match reality.\nYour quarter stops swinging on last-minute surprises.\nAnd you lead with clarity instead of damage control.\n\nIf you want fewer shocks and more control over your number,\nStart your free 14-day trial:\n\n👉 https://salessage.co/\nSee the truth your team feels but can’t articulate\nBEFORE it costs you the quarter.\n\nP.S. What’s the most painful “this deal is fine” moment that blew up on you?\n\n----------------------------------------------------------\n\n♻️ Share if you’re done getting blindsided\n➕ Follow 🧠 Shannon for sales insights that make leading easier`,

    image: "/a1.jpeg",
    likes: 150,
    comments: 43,
    shares: 14,
    // If you don't have real post link, keep profile link for now:
    postUrl: LINKEDIN_PROFILE_URL,
  },
   {
    id: "7",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
      "Applied Neuroscience | Ethical Persuasion | Toxic Boss Immunity | $20K Brain-Based Sales System",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
   
    content:
  `The way to get clients on Linkedin is this...\n\nUnderstand the inner thoughts of your ICP\n\nMost people study their ICP on the surface.\nTop sellers study how their ICP thinks.\n\nIf you want to sell on LinkedIn,\nyou have to know what your ICP is actually worried about,\nnot what they pretend to care about.\n\nHere are 8 steps to uncover the real subtext \nof your ICP on LinkedIn:\n\n1. Audit Their LinkedIn Profiles\nLook at what they emphasize.\nTension shows up in their headcount, KPIs, and team priorities.\nTheir top headaches are usually hiding in plain sight.\n\n2. Study Their Event Activity\nSearch for events they attend.\nThen check the attendee list.\nThe themes they show up for\ntell you what’s keeping them up at night.\n\n3. Watch Them in Comment Sections\nLook at your ICP commenting on competitors’ posts.\nTheir questions reveal fears.\nTheir reactions reveal pressure points.\n\n4. Analyze Comments Under Hand-Raising Posts\nCreators often say “comment for more info.”\nThose comments are gold.\nThey show exactly what your ICP thinks they need\nand what they wish someone would help them solve.\n\n5. Read Your Own Comments Differently\nYour commenters are micro-versions of your ICP.\nStudy their language, frustrations, and patterns.\nYour future offer refinement is already hiding there.\n\n6. Track What They Subscribe To\nNewsletters, creators, and series they follow\ntell you what they’re actively trying to improve.\nSubscription signals = priority signals.\n\n7. Act Like Your ICP For a Day\nAsk yourself:\nIf I were them, what problems would I think about at 10 a.m.?\nBudget. Productivity. Risk. Politics. Efficiency.\nNot “culture” or “soft skills.”\nSpeak to the internal pressure they feel,\nnot the topic you want to teach.\n\n8. Go One Layer Deeper Than Logic\nOnce you find the logical problem,\ndouble punch it.\nWhat’s the emotional layer?\nFear of missing targets?\nFear of looking incompetent?\nFear of wasting budget?\nFear of taking a risk and being wrong?\nThis is the real subtext.\n\nIf you understand your ICP’s subtext,\nyou won’t sound like their 10th vendor.\nYou’ll sound like the only person\nwho actually gets how they think.\n\nBIG NEWS! SALES SAGE IS LIVE!\nSee the truth your reps won’t say out loud \n(before it blows up your number)\nTaking 100 beta testers - 14 day free trial\nhttps://salessage.co/\n\nP.S. What is the number 1 problem your ICP cares about?\n\n----------------------------------------------------------\n\n➕ Follow Shannon for brain based sales and insight\n♻️ Share to help someone see what their buyers really mean`,

    image: "/a7.png",
    likes: 273,
    comments: 118,
    shares: 12,
    // If you don't have real post link, keep profile link for now:
    postUrl: LINKEDIN_PROFILE_URL,
  },
   {
    id: "8",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
      "Applied Neuroscience | Ethical Persuasion | Toxic Boss Immunity | $20K Brain-Based Sales System",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
   
    content:
 `Toxic bosses inspire your stars to leave.\n\nGreat leaders inspire your stars to stay.\n\nWhy toxic bosses hit harder than they should\nIt’s not their behavior.\nIt’s what their behavior does to your brain.\n\nUncertainty triggers threat.\nThreat shuts down thinking.\nYou react instead of choose.\n\nThat’s not a personality flaw.\nThat’s nervous system hijack.\n\nHere’s how you immunize using neuroscience.\n\n1/ Stabilize your body before engaging\n Threat lives in the body first.\n Regulation restores access to thinking.\n Do this: inhale through your nose for 4.\n Do this: exhale slowly for 6 before speaking.\n\n2/ Break emotional absorption\n Stress spreads through empathy circuits.\n Awareness restores separation.\n Do this: feel your feet on the ground.\n Do this: remind yourself “this emotion isn’t mine.”\n\n3/ Respond from structure, not emotion\n Calm bodies create clean boundaries.\n Structure keeps the brain online.\n Do this: pause two seconds before replying.\n Do this: speak one clear sentence, then stop.\n\nSame boss.\nSame environment.\nDifferent internal response.\n\nThat’s immunity.\n\nP.S. Which time was the worst with your toxic boss?\n\nToxic Boss Immunity \nBuilding a self-serve platform\nTo create a path to freedom where you call the shots, you're unshakable, you're influential, and free from anyone else’s control.\nGet on the waitlist for FREE\nhttps://lnkd.in/gGJYwXPa\n\n--------------------------------------------------------------\n\n➕Follow Shannon for brain-based tools to stay calm at work.\n♻️ Repost if someone you know needs this right now.`,

    image: "/a8.png",
    likes: 200,
    comments: 95,
    shares: 14,
    // If you don't have real post link, keep profile link for now:
    postUrl: LINKEDIN_PROFILE_URL,
  },
  {
    id: "9",
    slug: "Linkedin-Post",
    authorName: "Shannon Smith, J.D., M.S.",
    authorTitle:
      "Applied Neuroscience | Ethical Persuasion | Toxic Boss Immunity | $20K Brain-Based Sales System",
    authorAvatar: "/avatar.jpeg",
    dateLabel: "January 2026",
   
    content:
 `If you've ever felt alone in a room full of people...\n\nAnd wondered what was wrong with you...\n\nNothing is wrong with you.\n\nWe live in the most connected era in human history.\n\nVideo calls. \nGroup chats. \nUnlimited DMs. \nSocial feeds full of faces.\n\nAnd somehow, a lot of people feel deeply alone\neven while surrounded by people.\n\nThat’s not a personal failure.\nIt’s a nervous system mismatch.\nMost modern connection is cognitive.\n\nTyping. \nScrolling. \nCurating.\nPerforming. \n\nYour brain stays active, alert, and evaluated.\nBut real connection doesn’t happen in the thinking brain.\nIt happens in the body.\n\n“I’m seen, but not felt.”\n“I’m included, but not safe.”\n“I’m connected, but not attuned.”\n\nThe nervous system doesn’t bond through information.\nIt bonds through regulation.\n\nThat’s why people soften around animals.\nNo agenda. \nNo impression management. \nNo performance.\nJust presence.\n\nYour body drops out of scan mode.\nOxytocin releases.\nYou feel like yourself again.\n\nYou don’t need fewer people or better social skills.\nYou need better nervous system conditions.\n\n1/ Presence creates safety.\nSafety creates connection.\nWhen you slow your pace, soften your face, and actually arrive,\nother nervous systems feel it before they understand it.\n\n2/ Eye contact that lasts a beat longer.\nA pause instead of a rush.\n\n3/ Saying what you notice instead of what sounds right.\nThose moments aren’t small.\nThey trigger dopamine and oxytocin.\nThey tell the brain, “You belong here.”\n\nGiving connection regulates you faster than getting it.\nYou don’t have to wait to be invited.\n\nYou can initiate presence.\nA smile.\nA genuine compliment.\nNaming relief, humor, effort.\nLetting silence breathe.\n\nAnd when you learn how to connect with yourself first\nby slowing down, \ndropping performance, \nand regulating your own system...\n\nConnection with others stops feeling forced.\nIt starts feeling natural.\n\nThis is the work I help people do.\nRebuilding the biological conditions for real connection\nwith themselves and with others.\n\nBecause in a hyper-connected world,\npresence is still the rarest signal of all.\n\nPS: What’s one moment today where you can choose presence?\n\nIntroducing Butterhood Connect:\nFind your people - other entrepreneurs like yourself. \nPLUS...FREE content on:\n- Craft content that converts\n- Understand your ICP deeply\n- Increase your cognitive flexibility\n- DM to get in front of your prospect\nYou don't have to do this alone. Join us FREE\nhttps://lnkd.in/gqMj4Vfz\n\n--------------------------------------------------------------------------\n\n➕ Follow me for more brain-based insights on connection\n♻️ Share this with someone who might be feeling alone on the inside.`,

    image: "/a9.png",
    likes: 201,
    comments: 76,
    shares: 8,
    // If you don't have real post link, keep profile link for now:
    postUrl: LINKEDIN_PROFILE_URL,
  },
];
