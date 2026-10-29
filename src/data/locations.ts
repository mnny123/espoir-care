// Location pages. Each one is written for its own area, not a copy with the
// suburb swapped. Suburb lists and travel notes are best guesses marked TODO
// until you confirm them.
import type { Faq } from '../lib/schema';

export type Location = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  about: string[];
  suburbs: string[];
  suburbsNote: string;
  gettingThere: string[];
  popularServices: string[];
  popularNote: string;
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: 'ndis-service-provider-redland-bay',
    name: 'Redland Bay and the Redlands',
    title: 'Disability support and nursing care in Redland Bay and the Redlands',
    metaTitle: 'NDIS provider in Redland Bay and the Redlands | Espoir Care',
    metaDescription:
      'Local NDIS and DVA support in Redland Bay, Capalaba, Cleveland, Victoria Point and nearby suburbs, from a team based in the Redlands.',
    intro:
      'The Redlands is home for Espoir Care. Our team is based here, so Redland Bay and the suburbs around it are where we spend a lot of our time.',
    about: [
      'Being local means we know the area. Whether you want support to get to the shops at Victoria Point, a walk along the Cleveland foreshore or an appointment in Capalaba, we can plan around it with you.',
      'We support people with disability, veterans and families who are caring for someone at home. That includes daily support, nursing and a break for carers, so people can keep living close to the bay.',
      'Coming home from Redland Hospital in Cleveland? Ask the ward or discharge planner to contact us. You can also call us yourself. Either way, we can plan support for when you get home.',
    ],
    suburbs: [
      'Redland Bay',
      'Victoria Point',
      'Thornlands',
      'Cleveland',
      'Ormiston',
      'Wellington Point',
      'Birkdale',
      'Alexandra Hills',
      'Capalaba',
      'Sheldon',
      'Mount Cotton',
    ],
    suburbsNote: '[TODO confirm this suburb list]',
    gettingThere: [
      'Our team is based in the Redlands, so most visits here are a short local drive.',
      'Live on Russell, Macleay, Lamb or Karragarra Island? The ferries to the Southern Moreton Bay Islands leave from Redland Bay. Call us to talk about island visits. [TODO confirm whether you visit the Bay Islands or North Stradbroke Island]',
    ],
    popularServices: [
      'nursing-care-services-brisbane',
      'dva-community-nursing',
      'home-personal-care',
      'domestic-cleaning',
      'gardening',
      'respite-for-carers',
    ],
    popularNote: '[TODO check this list against your real Redlands enquiries]',
    faqs: [
      {
        q: 'Do you cover Capalaba?',
        a: 'Yes. Capalaba is part of our home area in the Redlands.',
      },
      {
        q: 'Can you help after a stay at Redland Hospital?',
        a: 'Yes. We provide post-hospital support at home, including nursing and personal care. Ask your discharge planner to contact us, or call us yourself.',
      },
      {
        q: 'Do you visit the Bay Islands?',
        a: 'Please call us to check. [TODO confirm island coverage]',
      },
    ],
  },
  {
    slug: 'ndis-service-provider-brisbane-north',
    name: 'Brisbane north',
    title: 'Disability support and nursing care in Brisbane north',
    metaTitle: 'NDIS provider in Brisbane north | Espoir Care',
    metaDescription:
      "Support workers and nurses visiting homes across Brisbane's northern suburbs, for NDIS participants, veterans and private clients.",
    intro: "We visit clients across Brisbane's northern suburbs, from the inner north out towards the Moreton Bay region.",
    about: [
      'The north side has a mix of older family homes, units and newer estates. Wherever you live, we work around your routine and the way your home is set up.',
      "If you are coming home from The Prince Charles Hospital at Chermside or the Royal Brisbane and Women's Hospital at Herston, we can help plan support for your first weeks back at home.",
      'For people who want to get out more, our community access and travel support can help you get to the shops, sport, groups or appointments on the north side.',
    ],
    suburbs: [
      'Chermside',
      'Aspley',
      'Nundah',
      'Stafford',
      'Everton Park',
      'Kedron',
      'Geebung',
      'Zillmere',
      'Carseldine',
      'Bracken Ridge',
      'Sandgate',
      'Strathpine',
    ],
    suburbsNote: '[TODO confirm this suburb list and how far into the Moreton Bay region you go]',
    gettingThere: [
      'Our team travels to the north side from our base in the Redlands, usually via the Gateway Motorway.',
      'Where we can, we group visits by area. That keeps travel time down and helps keep travel costs down for you. [TODO confirm how you schedule north side visits and any travel charges]',
    ],
    popularServices: [
      'community-access',
      'disability-travel-support-services-brisbane',
      'disability-support-services-brisbane',
      'nursing-care-services-brisbane',
      'home-personal-care',
    ],
    popularNote: '[TODO check this list against your real Brisbane north enquiries]',
    faqs: [
      {
        q: 'Do you cover the Moreton Bay region?',
        a: "We cover Brisbane's northern suburbs and some nearby areas. Call us with your suburb and we will let you know. [TODO confirm your northern boundary]",
      },
      {
        q: 'Are there extra travel costs for the north side?',
        a: 'Under the NDIS, providers can claim some travel time and costs. We will explain any travel charges before you start, so there are no surprises.',
      },
      {
        q: 'Can you help after a stay at The Prince Charles Hospital?',
        a: 'Yes. Ask your discharge planner to contact us or call us yourself. We will plan post-hospital support at home with you.',
      },
    ],
  },
  {
    slug: 'ndis-service-provider-brisbane-south',
    name: 'Brisbane south',
    title: 'Disability support and nursing care in Brisbane south',
    metaTitle: 'NDIS provider in Brisbane south | Espoir Care',
    metaDescription:
      "Disability support, nursing and DVA care across Brisbane's southern suburbs, from Mount Gravatt and Carindale to Sunnybank.",
    intro: "Brisbane's south side sits between our Redlands base and the city, so it is an easy trip for our team.",
    about: [
      'Greenslopes Private Hospital, a hospital many veterans know well, is on the south side. If you are a veteran heading home from hospital, we can provide DVA community nursing once you have a referral.',
      'The Princess Alexandra Hospital and QEII Jubilee Hospital also serve this area. We can work with discharge planners at any hospital to plan your support at home.',
      'We also support families on the south side who are caring for someone at home and need a regular break.',
    ],
    suburbs: [
      'Mount Gravatt',
      'Holland Park',
      'Carindale',
      'Carina',
      'Camp Hill',
      'Coorparoo',
      'Greenslopes',
      'Sunnybank',
      'Eight Mile Plains',
      'Rochedale',
      'Underwood',
      'Springwood',
    ],
    suburbsNote: '[TODO confirm this suburb list and whether you cover parts of Logan]',
    gettingThere: [
      'From the Redlands, our team reaches the south side along Old Cleveland Road or Mount Gravatt-Capalaba Road. [TODO confirm]',
      'Because the south side is close to our base, it is often easier to fit in extra or short notice visits here. [TODO confirm this is true before launch]',
    ],
    popularServices: [
      'dva-community-nursing',
      'nursing-care-services-brisbane',
      'community-nursing',
      'home-personal-care',
      'respite-for-carers',
    ],
    popularNote: '[TODO check this list against your real Brisbane south enquiries]',
    faqs: [
      {
        q: 'Can you help a veteran after a stay at Greenslopes?',
        a: "Yes, if they have a DVA Gold or White Card and a referral for community nursing. We can also help around the home through Veterans' Home Care.",
      },
      {
        q: 'Do you cover Logan?',
        a: 'We cover some suburbs near the Brisbane and Logan border. Call us with your suburb to check. [TODO confirm]',
      },
      {
        q: 'How quickly can support start?',
        a: 'It depends on what you need and who is available. We will give you a realistic start date when we call you back.',
      },
    ],
  },
  {
    slug: 'ndis-service-provider-brisbane-west',
    name: 'Brisbane west',
    title: 'Disability support and nursing care in Brisbane west',
    metaTitle: 'NDIS provider in Brisbane west | Espoir Care',
    metaDescription:
      "Support workers and nurses for people in Brisbane's western suburbs, including Toowong, Indooroopilly, Kenmore and the Centenary suburbs.",
    intro: "We support people in Brisbane's western suburbs, from Toowong and Indooroopilly out to Kenmore and the Centenary suburbs.",
    about: [
      'The west has plenty of hilly streets and homes with stairs, which can make getting around harder. We can help you move around your home safely and tell you when it might be worth talking to an occupational therapist.',
      'Our community access and travel support can help you get to the shops, the parks along the river and appointments around the area.',
      'For young adults ready to move out of the family home, we can talk with you about Supported Independent Living and daily living support.',
    ],
    suburbs: [
      'Toowong',
      'Indooroopilly',
      'St Lucia',
      'Taringa',
      'Kenmore',
      'Chapel Hill',
      'The Gap',
      'Jindalee',
      'Mount Ommaney',
      'Sherwood',
      'Corinda',
      'Oxley',
    ],
    suburbsNote: '[TODO confirm this suburb list]',
    gettingThere: [
      'The west is the furthest part of Brisbane from our Redlands base. Where we can, we plan west side visits in blocks, which helps keep travel time down.',
      '[TODO confirm how you schedule west side visits and any travel charges]',
    ],
    popularServices: [
      'community-access',
      'disability-travel-support-services-brisbane',
      'supported-independent-living',
      'home-personal-care',
      'assist-personal-activities-brisbane',
    ],
    popularNote: '[TODO check this list against your real Brisbane west enquiries]',
    faqs: [
      {
        q: 'Is the west too far for you?',
        a: "No. We support people across Brisbane's west. We may group visits on certain days, and we will talk through times with you first.",
      },
      {
        q: 'Do you charge for travel?',
        a: 'NDIS rules allow providers to claim some travel. Before you start, we will tell you exactly what travel charges apply to you, if any.',
      },
      {
        q: 'Can you help my adult son or daughter live more independently?',
        a: 'Yes. Supported Independent Living, daily living support and travel training can all help. We will talk with you about what fits their goals.',
      },
    ],
  },
];
