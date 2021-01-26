// this page and socialDetail will mirror EventsDetail and EventsState. parameters need to be changed

// import all of the image or media files ----here---
import alps1 from '../images/IMG_0162[7553].JPG'
import alps2 from '../images/IMG_6884[7589].jpg'
import alps3 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (4).jpg'
import alps4 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (3).jpg'
import sportive1 from '../images/IMG_0165.JPG'
// import sportive2 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (2).jpg'
import sportive3 from '../images/IMG_0308.JPG'
import sportive4 from '../images/IMG_0271[7579].jpg'
import waiting from '../images/IMG_0312.JPG'
import ventouxts from '../images/Ventoux B TS.jpg'

export const SocialState = () => {
  return [
    {
      title: 'The Mountains',
      mainImg: alps1,
        secondaryImg: ventouxts,
          thirdImg: alps2,
      fourthImg: alps4,
      url: '/social/alps',
      awards: [
        {
          title: 'Wye Velo Annual Alps trip - Group A',
          description:
            "Alps trip. In 2016, 9 of us paved the way for more trips to the mountains, conquering 'La Marmotte' from Alpe d'Huez. Returning in 2018 we rode the mountains again, this time from our base in Valloire at the foot of the Galibier and the top of the Telegraphe. 2020..... postponed! The picture above was taken from our chalet at the top of Alpe d'Huez out towards the Galibier, which Naz's finger is atop.",
        },
        {
          title: 'Wye Velo Ventoux and Valloire trips - Group B',
          description:
            'Ventoux 2017 and Valloire 2019. Personal challenges are what we all love. Ticking off some the biggest is always rewarded with a suitable refreshment(SSSssss)!',
        },
      ],
    },
    {
      title: 'Races and Sportives',
      mainImg: sportive1,
      secondaryImg:  alps3 ,
      thirdImg:   sportive3,
      fourthImg: sportive4  ,
      url: '/social/races',
      awards: [
        {
          title: 'Races and Sportives',
          description:
            "We all regularly participate in local and international races and sportives. From the Marmotte and Ronde de Picardie to The Kentish Killer and Hellfire Corner. Some of our members even race triathlons.... but we don't like to talk about that. A cyclist shouldn't be able to lift their bike above their head! #Rule 95",
        },
        {
          title: 'Foreign Travel',
          description:
            "We used to be allowed to travel the world in search of new roads and trails to ride. One day we might get back to some of these places. The pictures on this page are from Bourg d'Oisans, Mt Ventoux, Barcelona and Dubai.",
        },
      ],
    },
   
    {
      title: 'Upcoming...',
      mainImg: waiting,
    //   secondaryImg: muddy2 ,
      url: '/social/upcoming',
      awards: [
        {
          title: 'Upcoming events.... AGM [postponed]',
          description:
            'Road ride then lunch in the New Flying Horse. When the pubs re-open, this event will be organised.',
        },
        {
          title: 'More to come when out of lockdown.',
          description:
            '.....',
        },
      ],
    },
  ];
};

// export default SocialState;
