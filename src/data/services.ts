// One entry per service page. Pages are built from this file by
// src/pages/services/[slug].astro. Slugs that existed on the old site are kept.
// Anything written as [TODO ...] shows on the page as a highlighted marker.
import type { IconName } from '../components/Icon.astro';
import type { Faq } from '../lib/schema';
import type { ImageMetadata } from 'astro';
import cleaningSupplies from '../assets/photos/cleaning-supplies.jpg';

export type Funding = { label: string; text: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: IconName;
  summary: string;
  intro: string;
  whatItIs: string[];
  whoFor: string[];
  typicalHeading: string;
  typical: string[];
  funding: Funding[];
  faqs: Faq[];
  related: string[];
  enquireTab?: string;
  /* Shown above the funding card. */
  photo?: { src: ImageMetadata; alt: string };
};

const PRIVATE = {
  label: 'Private',
  text: 'You can pay for this service yourself. Our private rates follow the NDIS Pricing Arrangements, the same as for NDIS participants. We confirm the cost with you before we start.',
};

export const services: Service[] = [
  {
    slug: 'supported-independent-living',
    name: 'Supported Independent Living (SIL)',
    title: 'Supported Independent Living (SIL)',
    metaTitle: 'Supported Independent Living (SIL) Brisbane | Espoir Care',
    metaDescription:
      'Daily support in a shared home or your own place, with help there day and night if you need it. Espoir Care is a registered NDIS provider for SIL.',
    icon: 'house',
    summary: 'Day to day support in a shared home, so you can live as independently as you can.',
    intro:
      'Supported Independent Living, or SIL, is help with everyday tasks for adults who live in a shared home or their own place and need support for most of the day, and sometimes overnight.',
    whatItIs: [
      'SIL pays for support workers to help with the things you do at home every day. That might be getting ready in the morning, cooking, cleaning, taking medication on time or getting to appointments.',
      'The aim is for you to do as much as you can for yourself, with someone there when you need a hand. Support can be there day and night if your plan includes it.',
      'Espoir Care is a registered NDIS provider for SIL, under registration group 0138 (assistance with supported independent living).',
    ],
    whoFor: [
      'Adults with disability who have SIL funding in their NDIS plan',
      'People who want to move out of the family home or a hospital and need daily support to do it',
      'People already in SIL who would like to change provider',
      'Families who want to know their loved one has support around the clock',
    ],
    typicalHeading: 'What a typical day looks like',
    typical: [
      'Morning: help to get up, shower and dress, then breakfast.',
      'Daytime: household jobs, shopping, appointments or time out in the community.',
      'Evening: cooking dinner together, medication prompts and winding down.',
      'Overnight: a support worker is in the home if your plan includes overnight support.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'SIL is funded by the NDIS and has to be approved in your plan before it can start. If you think you need SIL and it is not in your plan, talk to your support coordinator or the NDIA about a home and living request.',
      },
    ],
    faqs: [
      {
        q: 'How do I get SIL in my NDIS plan?',
        a: 'The NDIA decides whether SIL goes in your plan. Your support coordinator, local area coordinator or the NDIA can help you ask for it. We are happy to explain the steps and work with your coordinator.',
      },
      {
        q: 'What is the difference between SIL and short term accommodation?',
        a: 'SIL is support in the place you live long term. Short term accommodation is a short stay away from home, often so you and your carers can have a break.',
      },
      {
        q: 'Can I keep doing the things I enjoy?',
        a: 'Yes. We plan your support around your routines, your interests and the people who matter to you. We review the plan with you as things change.',
      },
      {
        q: 'Do you have SIL vacancies right now?',
        a: 'Vacancies change, so the best way to find out is to call us or send an enquiry. We will tell you what is available and where.',
      },
    ],
    related: ['short-term-accommodation-brisbane', 'assist-personal-activities-brisbane', 'home-personal-care', 'community-access'],
  },
  {
    slug: 'short-term-accommodation-brisbane',
    name: 'Short term accommodation (STA) and respite',
    title: 'Short term accommodation (STA) and respite',
    metaTitle: 'Short term accommodation and respite Brisbane | Espoir Care',
    metaDescription:
      'Short stays away from home with support, meals and activities included. A change of scene for you and a break for the people who care for you.',
    icon: 'bed',
    summary: 'Short stays with support, so you get a change of scene and your carers get a rest.',
    intro:
      'Short term accommodation, often called STA or respite, is a short stay away from home with support included. It gives you a change of scene and gives the people who care for you a break.',
    whatItIs: [
      'During a stay we take care of your support, meals and activities, just like at home. You bring your things and your routines and we fit around them.',
      'A stay can be planned ahead, for example while a carer goes on holiday. It can also help when something unexpected comes up.',
      'Espoir Care is a registered NDIS provider for short term accommodation, under registration group 0115 (daily tasks and shared living).',
    ],
    whoFor: [
      'NDIS participants with short term accommodation in their plan',
      'Families and carers who need a planned or urgent break',
      'People who want to try living away from home for the first time',
    ],
    typicalHeading: 'What a stay looks like',
    typical: [
      'Before the stay we talk with you about routines, medication, food and anything that helps you feel settled.',
      'When you arrive, a support worker shows you around and helps you unpack.',
      'During the stay you can keep up your usual activities or try something new, with support as you need it.',
      'When you head home, we let your family or carer know how the stay went.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'STA is funded from the core supports in your NDIS plan. It usually covers your support, accommodation, food and activities during the stay. How many days you can use depends on your plan.',
      },
    ],
    faqs: [
      {
        q: 'How long can a stay be?',
        a: 'It depends on your NDIS plan and what you need. Tell us the dates you have in mind and we will check what fits.',
      },
      {
        q: 'What should I bring?',
        a: 'Bring your clothes, medication, any equipment you use and anything that helps you feel at home, like a favourite pillow or photos.',
      },
      {
        q: 'What if I need a stay at short notice?',
        a: 'Call us on 0412 632 913. We will do our best to help, although we cannot always find a place straight away.',
      },
      {
        q: 'Is STA the same as respite?',
        a: 'People often use the two words to mean the same thing. STA is the NDIS name for a short stay away from home, which gives carers respite.',
      },
    ],
    related: ['respite-for-carers', 'supported-independent-living', 'home-personal-care'],
  },
  {
    slug: 'community-nursing',
    name: 'Community nursing',
    title: 'Community nursing at home',
    metaTitle: 'Community nursing at home in Brisbane | Espoir Care',
    metaDescription:
      'Registered and enrolled nurses who visit you at home for wound care, medication, continence care and more. For NDIS, DVA and private clients.',
    icon: 'stethoscope',
    summary: 'Nurses who visit you at home for wound care, medication support and other clinical care.',
    intro:
      'Community nursing means a registered or enrolled nurse comes to your home to give you clinical care, so you do not have to travel to a clinic or stay in hospital longer than you need to.',
    whatItIs: [
      'Our nurses look after health needs that call for a qualified nurse. This includes wound care, medication management, continence assessments, catheter care, tracheostomy care, ventilator management and risk assessments.',
      'Our nurses also write your care plan and train the support workers who help you, so everyone caring for you knows what to do.',
      'We keep in touch with your GP and other health workers, so everyone knows what is happening.',
      'Espoir Care is a registered NDIS provider for community nursing care, under registration group 0114.',
    ],
    whoFor: [
      'NDIS participants who have disability related health supports in their plan',
      'Veterans with a DVA card and a referral for community nursing',
      'People who want to pay privately for nursing at home',
    ],
    typicalHeading: 'What a typical visit looks like',
    typical: [
      'The nurse arrives at the agreed time and asks how you are feeling.',
      'They give the care in your care plan, such as changing a dressing or helping with medication.',
      'They write up their notes and tell you, and your family if you like, what they did and what to look out for.',
      'If something has changed, they talk with you about next steps and contact your GP if needed.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Nursing for disability related health needs can be funded by the NDIS when it is in your plan.',
      },
      { label: 'DVA', text: 'Eligible veterans can have community nursing paid for by DVA. See our DVA community nursing page for how it works.' },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Do I need a referral?',
        a: 'For DVA nursing you need a referral from your GP, treating doctor or hospital. For NDIS and private nursing you can contact us directly. We may ask your doctor for information to plan your care.',
      },
      {
        q: 'Are your nurses qualified?',
        a: 'Yes. Our registered and enrolled nurses are registered with AHPRA, the national body that registers health practitioners in Australia.',
      },
      {
        q: 'Can a nurse visit more than once a day?',
        a: 'Some care needs more than one visit a day. We will talk with you about what you need and what your funding covers.',
      },
      {
        q: 'Is community nursing an emergency service?',
        a: 'No. If you are very unwell or someone is in danger, call 000.',
      },
    ],
    related: ['dva-community-nursing', 'nursing-care-services-brisbane', 'home-personal-care'],
  },
  {
    slug: 'dva-community-nursing',
    name: 'DVA community nursing',
    title: 'DVA community nursing for veterans',
    metaTitle: 'DVA community nursing for veterans | Espoir Care',
    metaDescription:
      'Nursing and personal care at home for veterans with a DVA Gold or White Card. Espoir Care is a DVA contracted community nursing provider.',
    icon: 'medal',
    summary: 'Nursing and personal care at home for veterans with a DVA Gold or White Card.',
    intro:
      "Espoir Care is a DVA contracted community nursing provider. We give veterans and other eligible DVA clients nursing and personal care at home, paid for by the Department of Veterans' Affairs.",
    whatItIs: [
      'DVA community nursing helps you stay well and safe at home. It can include clinical care from a nurse, such as wound care or medication management, and personal care such as help with showering and dressing.',
      'A nurse visits first to work out what you need. We then put together a care plan with you and keep your doctor up to date.',
      "We are also a Veterans' Home Care provider. If you are approved for those services, we can help with cleaning, gardening and other jobs around the home.",
    ],
    whoFor: [
      'DVA Gold Card holders',
      'DVA White Card holders, for care related to conditions DVA has accepted',
      'Veterans coming home from hospital who need nursing for a while',
      'Families looking for help for a parent or partner who is a veteran',
    ],
    typicalHeading: 'How it works',
    typical: [
      'Your GP, treating doctor or hospital sends us a referral for community nursing.',
      'One of our nurses visits you at home to work out what you need.',
      'We agree a care plan with you and keep DVA and your doctor informed.',
      'Nurses or care staff visit as planned, and we review your care as your needs change.',
    ],
    funding: [
      {
        label: 'DVA community nursing',
        text: 'DVA pays us directly for approved community nursing, so you do not get a bill for that care.',
      },
      {
        label: "Veterans' Home Care",
        text: "Veterans' Home Care services start after an assessment arranged through DVA. Some services have a small co-payment.",
      },
    ],
    faqs: [
      {
        q: 'Do I need a referral?',
        a: 'Yes. DVA community nursing needs a referral from your GP, a treating doctor or a hospital discharge planner. If you are not sure how to get one, call us and we will explain.',
      },
      {
        q: 'What is the difference between a Gold Card and a White Card?',
        a: 'A Gold Card covers care for all your health needs. A White Card covers care for specific conditions, such as conditions DVA has accepted as related to your service. We can help you check what applies to you.',
      },
      {
        q: 'Will I have to pay anything?',
        a: 'Approved DVA community nursing is paid for by DVA. If you ask for something outside what DVA approves, we will talk with you about the cost before we do it.',
      },
      {
        q: 'Can you help with cleaning and the garden too?',
        a: "Yes, if you are approved for Veterans' Home Care. We are a Veterans' Home Care provider and can help with domestic cleaning and safety related garden work.",
      },
    ],
    related: ['community-nursing', 'nursing-care-services-brisbane', 'domestic-cleaning', 'gardening'],
    enquireTab: 'veteran',
  },
  {
    slug: 'nursing-care-services-brisbane',
    name: 'In-home nursing',
    title: 'In-home nursing, including dementia, palliative and post-hospital care',
    metaTitle: 'In-home nursing in Brisbane and the Redlands | Espoir Care',
    metaDescription:
      'Nursing and care at home for people living with dementia, people receiving palliative care and anyone recovering after a hospital stay.',
    icon: 'heart-pulse',
    summary: 'Nursing at home for dementia, palliative care and getting back on your feet after hospital.',
    intro:
      'In-home nursing brings nursing care to you when your health needs change. We help people living with dementia, people coming home from hospital and people who want to be cared for at home towards the end of life.',
    whatItIs: [
      'Dementia support: steady routines, familiar faces and help with daily care, medication and staying safe at home. We also help families understand what is changing.',
      'Palliative care: comfort care at home, working alongside your palliative care team and GP. We look after the person and make time for the family too.',
      'Post-hospital support: help after surgery or a hospital stay, such as wound care, medication, showering and getting moving again, until you are back to your usual self.',
      'Our nurses work closely with our support workers, so nursing care and daily help are planned together.',
    ],
    whoFor: [
      'People living with dementia and their families',
      'People with a life limiting illness who want care at home',
      'Anyone coming home after surgery or a hospital stay',
      'Carers who need a trained person to share the load',
    ],
    typicalHeading: 'What a visit looks like',
    typical: [
      'We meet with you, and your family if you like, to understand what is needed and what matters most.',
      'A nurse or support worker visits at times that suit your routine.',
      'Each visit follows your care plan, and we write notes so the next person knows how you are going.',
      'We keep in touch with your GP, hospital team or palliative care service.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Nursing for disability related health needs can be funded through your NDIS plan. We are a registered NDIS provider for community nursing care.',
      },
      { label: 'DVA', text: 'Eligible veterans can get this care through DVA community nursing.' },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Can you help a parent with dementia stay at home?',
        a: 'Often, yes. We can help with routines, personal care, meals and medication. We can also give the family a break. We will be honest with you if we think more support is needed.',
      },
      {
        q: 'Do you provide palliative care at home?',
        a: 'We provide nursing and personal care at home for people receiving palliative care. We work with their palliative care team and GP.',
      },
      {
        q: 'How soon after hospital can you start?',
        a: 'Contact us before you leave hospital if you can. A discharge planner can also refer you to us. We will work out a start date that matches when you get home.',
      },
      {
        q: 'Do you offer 24 hour care?',
        a: 'Tell us the hours you need and we will let you know what we can cover.',
      },
    ],
    related: ['community-nursing', 'dva-community-nursing', 'home-personal-care', 'respite-for-carers'],
  },
  {
    slug: 'home-personal-care',
    name: 'Personal care',
    title: 'Personal care at home',
    metaTitle: 'Personal care at home in Brisbane | Espoir Care',
    metaDescription:
      'Respectful help with showering, dressing, grooming, toileting and moving around at home, from trained support workers who follow your routine.',
    icon: 'hand-heart',
    summary: 'Respectful help with showering, dressing, grooming and other personal tasks.',
    intro:
      'Personal care is help with private, everyday things like showering, dressing and using the toilet. We do it calmly and respectfully, at your pace and your way.',
    whatItIs: [
      'A support worker helps with the parts you find hard and leaves the rest to you. That might be getting in and out of the shower, getting dressed, shaving, doing your hair, continence care or moving safely from the bed to a chair.',
      'We ask how you like things done and write it in your care plan, so every worker follows the same routine.',
      'Espoir Care is a registered NDIS provider for assistance with daily personal activities (registration group 0107) and high intensity daily personal activities (0104).',
    ],
    whoFor: [
      'Adults and children with disability',
      'People recovering from illness or surgery',
      'Veterans approved for personal care through DVA',
      'Anyone who wants to keep living at home and needs a hand with daily care',
    ],
    typicalHeading: 'What a typical visit looks like',
    typical: [
      'Your support worker arrives at the same time each day where possible.',
      'They help with your morning or evening routine, the way your care plan sets out.',
      'They keep an eye on anything you have asked them to, like your skin or your mood, and tell you or your family if something seems different.',
      'Before they leave, they make sure you are comfortable and have what you need within reach.',
    ],
    funding: [
      { label: 'NDIS', text: 'Personal care is usually funded from the core supports in your NDIS plan.' },
      { label: 'DVA', text: "Veterans can get personal care through DVA community nursing or Veterans' Home Care, depending on their needs." },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Can I choose a male or female support worker?',
        a: 'Yes, please tell us your preference. We will do our best to match it every time.',
      },
      {
        q: 'What if I need help early in the morning or late at night?',
        a: 'Tell us the times you need. We will let you know honestly what we can cover before we start.',
      },
      {
        q: 'Will it be the same support worker each time?',
        a: 'We try to keep the same small group of workers with you, so you get to know them and they get to know you.',
      },
    ],
    related: ['assist-personal-activities-brisbane', 'home-care-for-disabled-adults-brisbane', 'nursing-care-services-brisbane'],
  },
  {
    slug: 'disability-support-services-brisbane',
    name: 'Disability support services',
    title: 'Disability support services',
    metaTitle: 'NDIS disability support services in Brisbane | Espoir Care',
    metaDescription:
      'Support workers for NDIS participants of all ages, at home and out in the community. Tell us your goals and we will plan support around them.',
    icon: 'heart-handshake',
    summary: 'Support workers who help with daily life, goals and getting out, planned around your NDIS goals.',
    intro:
      'Our support workers help NDIS participants with daily life at home and out in the community. We start with your NDIS goals and work out what support will help you reach them.',
    whatItIs: [
      'This is our general support service. It can include help at home, building everyday skills like cooking or catching the bus, getting to appointments and spending time doing things you enjoy.',
      'Many people use a mix of our services, for example personal care in the morning and community access in the afternoon. This page is a good place to start if you are not sure which service you need.',
    ],
    whoFor: [
      'NDIS participants of any age',
      'Families looking for reliable support workers for a son, daughter or partner',
      'Support coordinators looking for a provider for a participant',
      'People changing providers who want a fresh start',
    ],
    typicalHeading: 'What getting started looks like',
    typical: [
      'You tell us about yourself, your plan and what you would like help with.',
      'We meet you, usually at home, to talk through your goals and routines.',
      'We agree a service agreement and a support plan with you.',
      'We match you with support workers and check in regularly to see how it is going.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Funded from your NDIS plan, usually core supports and sometimes capacity building supports. We work with self managed, plan managed and NDIA managed participants.',
      },
    ],
    faqs: [
      {
        q: 'Do I need an NDIS plan to use your services?',
        a: 'For NDIS funded support, yes. If you are still waiting on a plan, you can contact us anyway. We can talk about what to expect and other ways to pay.',
      },
      {
        q: 'Can I meet my support worker before they start?',
        a: 'We are happy to arrange a meet and greet where we can. It helps everyone feel comfortable.',
      },
      {
        q: 'What if my support worker is not the right fit?',
        a: 'Tell us. We will listen and look for someone who suits you better, with no hard feelings.',
      },
      {
        q: 'Do you work with my support coordinator?',
        a: 'Yes. With your permission we keep your support coordinator or plan manager up to date.',
      },
    ],
    related: ['home-care-for-disabled-adults-brisbane', 'community-access', 'home-personal-care', 'ndis-child-care-services-brisbane'],
  },
  {
    slug: 'home-care-for-disabled-adults-brisbane',
    name: 'Home care for adults with disability',
    title: 'Home care for adults with disability',
    metaTitle: 'Home care for adults with disability | Espoir Care',
    metaDescription:
      'Regular support in your own home for adults with disability, from help with chores and meals to company and keeping on top of things.',
    icon: 'armchair',
    summary: 'Regular help in your own home, so you can keep living the way you choose.',
    intro:
      'Home care is regular support in the home you already live in, whether you live alone, with a partner or with family. It helps you stay in your own home and keep your own routines.',
    whatItIs: [
      'Unlike Supported Independent Living, home care is not about moving into shared housing. A support worker visits for set shifts each week to help with whatever you need at home.',
      'That could be a mix of household jobs, meals, personal care, sorting mail, phone calls, keeping appointments or just having someone to talk things through with.',
      'Espoir Care is a registered NDIS provider for assistance with daily personal activities (registration group 0107) and household tasks (0120).',
    ],
    whoFor: [
      'Adults with disability living in their own home or with family',
      'People who want to keep living where they are as their needs change',
      'Families who want someone reliable to check in during the week',
    ],
    typicalHeading: 'What a typical shift looks like',
    typical: [
      'Your support worker arrives and you talk about what the day needs.',
      'You work through the jobs together, and you do as much yourself as you want to.',
      'They might help you make a meal, sort the mail or get ready for an outing.',
      'At the end of the shift they note what was done, so the next worker can pick up where they left off.',
    ],
    funding: [{ label: 'NDIS', text: 'Usually funded from the core supports in your NDIS plan.' }, PRIVATE],
    faqs: [
      {
        q: 'How is this different from SIL?',
        a: 'SIL supports people in shared or supported housing, often around the clock. Home care is support in your own home for set hours each week.',
      },
      {
        q: 'Can my hours change over time?',
        a: 'Yes. Tell us if you need more or less help and we will update your support plan and service agreement with you.',
      },
      {
        q: 'Can you help me with letters and bills?',
        a: 'Yes. We can help you sort mail, make phone calls and keep track of appointments. You stay in charge of your own money.',
      },
    ],
    related: ['supported-independent-living', 'assist-personal-activities-brisbane', 'domestic-cleaning', 'home-personal-care'],
  },
  {
    slug: 'assist-personal-activities-brisbane',
    name: 'Assistance with personal activities',
    title: 'Assistance with personal activities, meals and overnight support',
    metaTitle: 'Daily activities, meals and overnight support | Espoir Care',
    metaDescription:
      'Help with meal planning, cooking, medication prompts and daily tasks, plus overnight support so someone is close by when you need them.',
    icon: 'cooking-pot',
    summary: 'Help with meals and daily tasks, and overnight support so someone is close by at night.',
    intro:
      'Assistance with personal activities is practical help with the daily tasks that keep life running, like planning meals, cooking and taking medication on time. It can also include support overnight.',
    whatItIs: [
      'Meal preparation: we can work with you to plan meals, write a shopping list, shop and cook. Or we can cook with you so you become more confident in the kitchen. We follow any diet or allergy needs you have.',
      'Daily tasks: reminders to take your medication, help with morning or evening routines and keeping track of the day.',
      'Overnight support: a support worker stays overnight. This could be a sleepover shift, where they sleep and wake up if you need them, or an active overnight shift, where they stay awake.',
      'Espoir Care is a registered NDIS provider for assistance with daily personal activities (registration group 0107) and household tasks (0120), which includes meal preparation.',
    ],
    whoFor: [
      'Adults and teenagers with disability who need help with daily tasks',
      'People who need someone nearby at night for safety or peace of mind',
      "Families who need overnight cover so they can get a full night's sleep",
    ],
    typicalHeading: 'What support can look like',
    typical: [
      "Afternoon: plan and shop for the week's meals together.",
      'Evening: cook dinner, then a reminder to take medication.',
      'Night: a sleepover support worker is in the home and on hand if you need help.',
      'Morning: help getting up and started before the worker hands over to the day team or your family.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Usually funded from the core supports in your NDIS plan. Sleepover and active overnight shifts are priced differently under the NDIS rules, and we will explain which one suits you.',
      },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'What is the difference between a sleepover and active overnight support?',
        a: 'In a sleepover shift the worker can sleep and gets up if you need help. In an active overnight shift the worker stays awake all night. Which one you need depends on how often you need help at night.',
      },
      {
        q: 'Can you cook for a special diet?',
        a: 'Yes. Tell us about allergies, cultural food needs or any diet from your doctor or dietitian and we will follow it.',
      },
      {
        q: 'Can you teach me to cook?',
        a: 'If you would like to learn, we can cook together and build your skills one meal at a time.',
      },
    ],
    related: ['home-personal-care', 'home-care-for-disabled-adults-brisbane', 'supported-independent-living', 'domestic-cleaning'],
  },
  {
    slug: 'domestic-cleaning',
    name: 'Domestic cleaning',
    title: 'Domestic cleaning',
    metaTitle: 'Domestic cleaning for NDIS and DVA clients | Espoir Care',
    metaDescription:
      'Regular home cleaning for people with disability and veterans. Kitchens, bathrooms, floors, washing and fresh bed linen, done the same way each visit.',
    icon: 'spray-can',
    photo: { src: cleaningSupplies, alt: 'Gloved hands holding a bucket of cleaning sprays and cloths' },
    summary: 'Regular cleaning so your home stays safe, clean and comfortable.',
    intro:
      'Our domestic cleaning service keeps your home clean and safe when doing it yourself is hard because of disability, illness or age.',
    whatItIs: [
      'Our team can vacuum and mop, clean the kitchen and bathroom, do the washing, change the bed linen and take out the bins.',
      'We follow the same checklist each visit, so you know what will be done. If something else needs attention, just tell us.',
      'Espoir Care is a registered NDIS provider for household tasks, under registration group 0120.',
    ],
    whoFor: [
      'NDIS participants with household tasks in their plan',
      "Veterans approved for domestic assistance through Veterans' Home Care",
      'People paying privately who need reliable help around the house',
    ],
    typicalHeading: 'What a typical clean looks like',
    typical: [
      'We agree the jobs with you and how often you would like us to come.',
      'Your cleaner arrives at the booked time and checks if there is anything extra today.',
      'They work through the checklist, room by room.',
      'Before they leave, they check that you are happy with everything.',
    ],
    funding: [
      { label: 'NDIS', text: 'Household tasks like cleaning can be funded from the core supports in your NDIS plan when you need help because of your disability.' },
      { label: 'DVA', text: "Veterans can get domestic assistance through Veterans' Home Care after an assessment. Espoir Care is a Veterans' Home Care provider." },
      PRIVATE,
    ],
    faqs: [
      { q: 'How often can you come?', a: 'Weekly, fortnightly or on another schedule that suits you and your funding.' },
      { q: 'Do I need to be home?', a: 'Not always. We can talk with you about how we get in safely when you are out.' },
      { q: 'Is it the same cleaner each time?', a: 'We aim to send the same person or a small team, so they get to know you and your home.' },
    ],
    related: ['gardening', 'home-care-for-disabled-adults-brisbane', 'dva-community-nursing', 'assist-personal-activities-brisbane'],
  },
  {
    slug: 'gardening',
    name: 'Gardening',
    title: 'Gardening and yard help',
    metaTitle: 'Gardening and yard help for NDIS and DVA | Espoir Care',
    metaDescription:
      'Lawn mowing, weeding, pruning and clearing paths so your yard stays safe and tidy. For NDIS participants, veterans and private clients.',
    icon: 'sprout',
    summary: 'Mowing, weeding and keeping paths clear, so your outdoor space is safe to use.',
    intro:
      'Our gardening service keeps your yard safe and tidy when you cannot do it yourself. It is about clear paths, a mowed lawn and a garden you can enjoy.',
    whatItIs: [
      'We can mow and edge lawns, weed garden beds, trim small hedges and shrubs, rake leaves, sweep paths and take away green waste.',
      'Safety comes first. Keeping paths and steps clear means you are less likely to trip or fall.',
      'Espoir Care is a registered NDIS provider for household tasks, under registration group 0120.',
    ],
    whoFor: [
      'NDIS participants with household tasks in their plan',
      "Veterans approved for home and garden maintenance through Veterans' Home Care",
      'People paying privately who cannot keep up with the yard',
    ],
    typicalHeading: 'What a typical visit looks like',
    typical: [
      'We walk around the yard with you and agree what you would like done.',
      'Our gardener comes on a regular schedule that suits the season.',
      'They take care of the jobs on the list and clear away the mess.',
      'They let you know if they spot something that needs attention, like a loose paver or a broken tap.',
    ],
    funding: [
      { label: 'NDIS', text: 'Yard work can be funded under household tasks in your NDIS plan when you cannot do it because of your disability.' },
      {
        label: 'DVA',
        text: "Veterans can get safety related home and garden maintenance through Veterans' Home Care after an assessment. Espoir Care is a Veterans' Home Care provider.",
      },
      PRIVATE,
    ],
    faqs: [
      { q: 'How often will you come?', a: 'We agree a schedule with you. Lawns usually need more visits in summer than in winter.' },
      {
        q: 'Can you do landscaping?',
        a: 'No. We look after existing gardens and keep them safe and tidy. For landscaping or tree removal you will need a specialist.',
      },
      {
        q: 'Does the NDIS pay for gardening?',
        a: 'It can, if you cannot look after your yard because of your disability and it is included in your plan. Your plan manager or support coordinator can confirm.',
      },
    ],
    related: ['domestic-cleaning', 'dva-community-nursing', 'home-care-for-disabled-adults-brisbane'],
  },
  {
    slug: 'community-access',
    name: 'Community access and participation',
    title: 'Community access and participation',
    metaTitle: 'Community access and participation support | Espoir Care',
    metaDescription:
      'Support to get out and do the things you enjoy, from shopping and sport to classes, groups, volunteering and catching up with friends.',
    icon: 'users',
    summary: 'Support to get out and about, see friends, join groups and try new things.',
    intro:
      'Community access means support to get out of the house and take part in the things you enjoy. It helps you build friendships, confidence and new skills.',
    whatItIs: [
      'A support worker goes with you to activities you choose. That could be shopping, the gym, a library group, church, a class, the footy, the beach or a cafe with friends.',
      'We can also help you build the skills to go on your own one day, like planning the trip, catching public transport or paying at the counter.',
      'Espoir Care is a registered NDIS provider for participation in community, social and civic activities, under registration group 0125.',
    ],
    whoFor: [
      'NDIS participants with social and community participation in their plan',
      'People who feel isolated or would like to meet new people',
      'Young people building independence after leaving school',
    ],
    typicalHeading: 'What a typical outing looks like',
    typical: [
      'You choose what you would like to do, or we help you come up with ideas.',
      'Your support worker meets you at home or at an agreed place.',
      'You head out together and they give as much or as little help as you want.',
      'Afterwards you talk about how it went and what you would like to do next time.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Funded from the core supports in your NDIS plan, under help with social, economic and community participation. Entry fees and other activity costs are usually not covered by the NDIS. We will explain this before you start.',
      },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Who pays for my ticket or my coffee?',
        a: 'You usually pay for your own activity costs. We will talk with you about any costs for your support worker before the outing.',
      },
      {
        q: 'Can my support worker drive me?',
        a: 'Yes, if transport is agreed in your plan and service agreement. Our travel and transport support page explains how it works.',
      },
      {
        q: 'Can I try something new?',
        a: 'Of course. Many people use this support to try a class, a sport or a volunteering role for the first time.',
      },
    ],
    related: ['disability-travel-support-services-brisbane', 'disability-support-services-brisbane', 'ndis-child-care-services-brisbane'],
  },
  {
    slug: 'disability-travel-support-services-brisbane',
    name: 'Travel and transport support',
    title: 'Travel and transport support',
    metaTitle: 'Disability travel and transport support | Espoir Care',
    metaDescription:
      'Help getting to appointments, work, study and outings. A support worker can drive you, or help you learn to use public transport on your own.',
    icon: 'car',
    summary: 'Help getting to appointments, work and outings. We can also help you learn to travel on your own.',
    intro:
      'Travel and transport support helps you get where you need to go, whether that is a medical appointment, work, study or a day out.',
    whatItIs: [
      'A support worker can drive you and stay with you while you are out, if you need them to.',
      'If you would like to travel on your own, we can help you learn. That might mean practising a bus or train trip together until you feel confident.',
      'Espoir Care is a registered NDIS provider for assistance with travel and transport arrangements, under registration group 0108.',
    ],
    whoFor: [
      'People who cannot drive or use public transport on their own because of disability',
      'People who want to learn to travel independently',
      'People who need support at an appointment as well as getting there',
    ],
    typicalHeading: 'What a typical trip looks like',
    typical: [
      'We agree the trip, the pick-up time and whether you need support at the other end.',
      'Your support worker picks you up and helps you in and out of the car if needed.',
      'They stay with you or come back at a set time, as agreed.',
      'They make sure you get home safely.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'Your NDIS plan may include transport funding as well as support worker time. Providers can also claim some travel costs under the NDIS Pricing Arrangements. We will tell you about any travel charges before we start.',
      },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Can you take me to a medical appointment?',
        a: 'Yes. Your support worker can drive you, wait with you and help you remember what the doctor said, if you would like.',
      },
      {
        q: 'Are there kilometre charges?',
        a: 'There may be. The NDIS allows providers to claim some travel costs. We will explain what applies to you before your first trip.',
      },
      {
        q: 'Can you help me learn to catch the bus?',
        a: 'Yes. We can practise the trip together, step by step, until you are confident.',
      },
    ],
    related: ['community-access', 'disability-support-services-brisbane', 'ndis-child-care-services-brisbane'],
  },
  {
    slug: 'ndis-child-care-services-brisbane',
    name: "Children's NDIS support",
    title: "Early childhood and children's NDIS support",
    metaTitle: 'NDIS support for children in Brisbane | Espoir Care',
    metaDescription:
      'Support workers for children with disability or developmental delay. We help with routines, play and outings and give parents a break.',
    icon: 'blocks',
    summary: 'Support for young children and older kids at home and out and about, with breaks for parents.',
    intro:
      'We support children with disability or developmental delay, and their families. Our support workers help with daily routines, play and getting out in the community, so children can join in and parents can catch their breath.',
    whatItIs: [
      "For younger children, support focuses on daily routines and play at home. We work towards the goals set by your family and your child's therapists.",
      'For older children, it may involve support after school, community access, building independence skills and spending time with friends.',
      "Our support workers are not therapists. We work with your child's therapists and early childhood partner, so support at home is part of the overall plan.",
      'The NDIS early childhood approach is a good first step when your child is younger than 9. An early childhood partner can help you understand what your child may need support with.',
    ],
    whoFor: [
      'Children under 7 with developmental delay or disability, and their families',
      'School aged children with an NDIS plan',
      'Parents and carers who need support at home or a break',
    ],
    typicalHeading: 'What a typical session looks like',
    typical: [
      'We meet the family first to learn about your child, what they love and what they find hard.',
      'A support worker comes at a regular time, often after school or on weekends.',
      "They help with routines or an activity, following any strategies from your child's therapists.",
      'They tell you how the session went, so you know what is working.',
    ],
    funding: [{ label: 'NDIS', text: "Funded from your child's NDIS plan." }],
    faqs: [
      {
        q: 'What checks do your support workers have?',
        a: 'Every support worker who works with children holds an NDIS Worker Screening Check and a Blue Card.',
      },
      {
        q: 'My child is under 7. Where do I start?',
        a: 'Contact an NDIS early childhood partner near you. They can help with early supports and with applying for the NDIS if your child needs longer term help. You are welcome to call us too.',
      },
      {
        q: 'Can you help my child join in activities?',
        a: 'Yes. We can support your child at activities like swimming lessons, playgroups or holiday programs, so they can join in with other kids.',
      },
      {
        q: 'Do you provide therapy?',
        a: "No. Our support workers are not therapists. We follow the plans your child's therapists put in place.",
      },
    ],
    related: ['respite-for-carers', 'community-access', 'disability-support-services-brisbane'],
  },
  {
    slug: 'respite-for-carers',
    name: 'Respite for carers',
    title: 'Respite for carers',
    metaTitle: 'Respite for carers in Brisbane | Espoir Care',
    metaDescription:
      'Take a break while we look after the person you care for, at home, out in the community or during a short stay. NDIS, DVA and private options.',
    icon: 'coffee',
    summary: 'A break for family carers while we look after the person you care for.',
    intro:
      'Caring for someone you love can be rewarding and tiring. Respite gives you time to rest, work, see friends or look after your own health while we care for your loved one.',
    whatItIs: [
      'In-home respite: a support worker or nurse comes to your home and takes over the care for a few hours, a day or overnight.',
      'Community respite: we take your loved one out to do something they enjoy, so you get some time at home.',
      'Short stays: your loved one stays with us for a short time. Our short term accommodation page explains how it works.',
    ],
    whoFor: [
      'Parents of children with disability',
      'Partners and adult children caring for someone at home',
      'People caring for a veteran',
      'Carers who need cover because they are unwell or have an appointment',
    ],
    typicalHeading: 'How respite works',
    typical: [
      'We get to know you both, including routines, likes and what helps on a hard day.',
      'We book respite for the times you need, regular or one-off.',
      "Our worker follows your loved one's routine while you are away.",
      'When you get back, we tell you how it went.',
    ],
    funding: [
      {
        label: 'NDIS',
        text: 'The person you care for can use their NDIS plan for in-home support, community access or short term accommodation. We are a registered NDIS provider for all three.',
      },
      {
        label: 'DVA',
        text: "Veterans may be able to get in-home respite through Veterans' Home Care. Espoir Care is a Veterans' Home Care provider.",
      },
      {
        label: 'Carer Gateway',
        text: 'Carer Gateway is a free Australian Government service for carers. Call 1800 422 737 or visit carergateway.gov.au to ask about support and emergency respite.',
      },
      PRIVATE,
    ],
    faqs: [
      {
        q: 'Can I get respite at short notice?',
        a: 'Call us on 0412 632 913 and we will do our best. Carer Gateway can also help with emergency respite on 1800 422 737.',
      },
      {
        q: 'Will my loved one be looked after the way I do it?',
        a: 'We ask you to walk us through the routine and we write it down, so we can follow it as closely as possible.',
      },
      {
        q: 'Is respite only for NDIS participants?',
        a: 'No. We also support veterans through DVA and people who pay privately.',
      },
    ],
    related: ['short-term-accommodation-brisbane', 'ndis-child-care-services-brisbane', 'nursing-care-services-brisbane'],
  },
];

export const serviceBySlug = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
};

export const servicePath = (slug: string) => `/services/${slug}/`;
