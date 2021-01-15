// import all of the image or media files ----here---
import group1 from '../images/IMG_0264.JPG';
import group2 from '../images/IMG_0266.JPG';
import laces from '../images/IMG_0088.JPG';
import hour from '../images/IMG_0002.JPG';
import hour2 from '../images/IMG_0020.JPG';
import muddy from '../images/IMG_0097.JPG';
import agm from '../images/IMG_5087.jpg';
import muddy2 from '../images/IMG_0028 - Copy.JPG';
import agm2 from '../images/IMG_0158.JPG';
import hillPain from '../images/IMG_0177.JPG';
// import bteam from '../images/IMG_0110.JPG';

export const EventsState = () => {
  return [
    {
      title: 'WVSCR',
      mainImg: group1,
      secondaryImg: group2,
      url: '/events/wvscr',
      awards: [
        {
          title: 'Wye Velo Sunday Club Run - Group A',
          description:
            'We have two groups that ride the roads on Sunday mornings. The first, group A, leaves from the church in Wye @0800 during darker winter months and @0700 during light summer months. Rides are usually around 2.5hrs at around 26kph avg.',
        },
        {
          title: 'Wye Velo Sunday Club Run - Group B',
          description:
            'The second, group B, leaves Wye at a more civilised 0900 at the earliest, for a couple of hours at at slightly more relaxed pace.',
        },
      ],
    },
    {
      title: 'AGM',
      mainImg: agm,
      secondaryImg: agm2,
      url: '/events/agm',
      awards: [
        {
          title: 'The AGM',
          description:
            'A large group WINTER ride with all abilities. Group leader comes in last..... No minimum speed requirements. Refreshments and lunch at a local pub in front of an open fire. Leave no man (or ale) behind!',
        },
        {
          title: 'Agenda',
          description:
            'A few planning items for the year to come. A few more beers to celebrate.',
        },
      ],
    },
    {
      title: 'Club Hill Climb - White Hill',
      mainImg: laces,
      secondaryImg: hillPain,
      url: '/events/hill-climb',
      awards: [
        {
          title: 'Hill Climb',
          description:
            'Organised event: White Hill from White Ladies to the top car park. This is an end of season event. To be held in September each year.',
        },
        {
          title: 'Hill Climb Record',
          description: 'Current club champ: TBC',
        },
      ],
    },
    {
      title: 'The Hour Record',
      mainImg: hour,
      secondaryImg: hour2,
      url: '/events/hour-record',
      awards: [
        {
          title: 'The Hour Record',
          description:
            "Post a ride of 60mins to see how far you can go. Go further next time. Challenge yourself, not just the other members! Official or unofficial..... If it's online, it counts.",
        },
      ],
    },
    // {
    //   title: 'A-Team Loops',
    //   // mainImg: ,
    //   // secondaryImg: ,
    //   url: './.....',
    //   awards: [
    //     {
    //       title: 'A-Team DL1',
    //       description:
    //         'Can you break 60mins? 19.1 hilly miles. Club record currently held by "Iron Mike" with 54mins and change. It\'s tight at the top but 60mins is a tough ride!!',
    //     },
    //     {
    //       title: 'A-Team DL2',
    //       description:
    //         '36miles in 2 hours? A hilly course. Club record currently held by "Iron Mike". A few people have gone under 120mins!',
    //     },
    //   ],
    // },
    // {
    //   title: 'B-Team Loop',
    //   mainImg: bteam,
    //   // secondaryImg: ,
    //   url: './.....',
    //   awards: [
    //     {
    //       title: 'B-Team Loop',
    //       description: 'Lorem20',
    //     },
    //   ],
    // },
    {
      title: 'MTB',
      mainImg: muddy,
      secondaryImg: muddy2,
      url: '/events/mtb',
      awards: [
        {
          title: 'Mountain Biking',
          description:
            "There are a million miles of trails and bridleways through the North Kent and Wye Downs. Chilham and Crundale Loops, Johnny's Jumps and King's Wood give plenty of options accessible from the village.",
        },
        {
          title: 'Night Rider',
          description:
            'We also do a "Chilham Loop" under the cover of darkness to add a little more fear to the event! Headlights and a well earned pint for the finishers.....',
        },
      ],
    },
  ];
};

// export default EventsState;
