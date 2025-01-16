// import appointment_img from './appointment_img.png'
// import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
// import contact_image from './contact_image.png'
// import about_image from './about_image.png'
// import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import tutor1 from './tutor1.jpg'
import tutor2 from './tutor2.jpg'
import tutor3 from './tutor3.jpg'
import tutor4 from './tutor4.jpg'
import tutor5 from './tutor5.jpg'
import tutor6 from './tutor6.jpg'
import tutor7 from './tutor7.jpg'
import tutor8 from './tutor8.jpg'
import tutor9 from './tutor9.jpg'
import tutor10 from './tutor10.jpg'
import tutor11 from './tutor11.jpg'
import tutor12 from './tutor12.jpg'
import tutor13 from './tutor13.jpg'
import tutor14 from './tutor14.jpg'
import tutor15 from './tutor15.jpg'
import tutor16 from './tutor16.jpg'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Biology',
        image: assets.Biology,
    },
    {
        speciality: 'Physics',
        image: assets.Physics,
    },
    {
        speciality: 'Mathematics',
        image: assets.Maths,
    },
    {
        speciality: 'Literature',
        image: assets.Literature,
    },
    {
        speciality: 'Chemistry',
        image: assets.Chemistry,
    },
    {
        speciality: 'Environmental Science',
        image: assets.Es,
    }, 
]
export const tutors = [
    {
        _id: 'tutor1',
        name: 'Prof. Amelia Johnson',
        image: tutor1,
        speciality: '',
        degree: 'PhD in Physics',
        experience: '10 Years',
        about: 'Prof. Amelia Johnson has a passion for teaching and mentoring students in the field of physics, encouraging innovative thinking and research.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor2',
        name: 'Dr. Benjamin Carter',
        image: tutor2,
        speciality: '',
        degree: 'PhD in Mathematics',
        experience: '8 Years',
        about: 'Dr. Benjamin Carter specializes in advanced calculus and number theory, inspiring students to explore mathematical concepts deeply.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor3',
        name: 'Dr. Sophia Martin',
        image: tutor3,
        speciality: '',
        degree: 'PhD in Biology',
        experience: '6 Years',
        about: 'Dr. Sophia Martin is dedicated to fostering an understanding of biological sciences through engaging and interactive teaching methods.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor4',
        name: 'Dr. Christopher Lee',
        image: tutor4,
        speciality: '',
        degree: 'PhD in Chemistry',
        experience: '5 Years',
        about: 'Dr. Christopher Lee brings a hands-on approach to teaching chemistry, making complex concepts accessible to students.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor5',
        name: 'Prof. Jennifer Garcia',
        image: tutor5,
        speciality: '',
        degree: 'MFA in Literature',
        experience: '9 Years',
        about: 'Prof. Jennifer Garcia inspires students with her love for literature and creative writing, encouraging critical and artistic expression.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor6',
        name: 'Dr. Andrew Williams',
        image: tutor6,
        speciality: '',
        degree: 'PhD in Computer Science',
        experience: '7 Years',
        about: 'Dr. Andrew Williams integrates cutting-edge technology into his teaching, fostering innovation in computer science.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor7',
        name: 'Prof. Chloe Evans',
        image: tutor7,
        speciality: '',
        degree: 'PhD in Psychology',
        experience: '10 Years',
        about: 'Prof. Chloe Evans is an expert in educational psychology, helping students unlock their potential through understanding and empathy.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor8',
        name: 'Dr. Timothy White',
        image: tutor8,
        speciality: '',
        degree: 'PhD in History',
        experience: '6 Years',
        about: 'Dr. Timothy White brings history to life in his classes, making connections between the past and present engaging.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor9',
        name: 'Dr. Ava Mitchell',
        image: tutor9,
        speciality: '',
        degree: 'PhD in Environmental Science',
        experience: '4 Years',
        about: 'Dr. Ava Mitchell emphasizes sustainability and environmental awareness in her engaging and practical teaching approach.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor10',
        name: 'Dr. Jeffrey King',
        image: tutor10,
        speciality: '',
        degree: 'PhD in Education',
        experience: '5 Years',
        about: 'Dr. Jeffrey King is passionate about curriculum development and teacher training, enhancing educational practices.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor11',
        name: 'Dr. Zoe Kelly',
        image: tutor11,
        speciality: '',
        degree: 'PhD in Economics',
        experience: '9 Years',
        about: 'Dr. Zoe Kelly equips students with analytical skills and a deep understanding of economic principles.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor12',
        name: 'Dr. Patrick Harris',
        image: tutor12,
        speciality: '',
        degree: 'PhD in Political Science',
        experience: '6 Years',
        about: 'Dr. Patrick Harris engages students with in-depth discussions on governance, policy-making, and global relations.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor13',
        name: 'Dr. Olivia Carter',
        image: tutor13,
        speciality: '',
        degree: 'PhD in Sociology',
        experience: '7 Years',
        about: 'Dr. Olivia Carter explores social dynamics and cultural trends, inspiring critical thinking among her students.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor14',
        name: 'Dr. Ryan Martinez',
        image: tutor14,
        speciality: '',
        degree: 'PhD in Anthropology',
        experience: '5 Years',
        about: 'Dr. Ryan Martinez delves into human culture and history, offering engaging lessons and unique perspectives.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor15',
        name: 'Dr. Amelia Hill',
        image: tutor15,
        speciality: '',
        degree: 'PhD in Linguistics',
        experience: '3 Years',
        about: 'Dr. Amelia Hill promotes linguistic diversity and effective communication through her interactive teaching methods.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tutor16',
        name: 'Dr. Nathan Moore',
        image: tutor16,
        speciality: '',
        degree: 'PhD in Philosophy',
        experience: '8 Years',
        about: 'Dr. Nathan Moore engages students in profound discussions about life, ethics, and human understanding.',
        fees: 55,
        address: {
            line1: '67th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
];