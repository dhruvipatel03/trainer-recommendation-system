import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import dropdown_icon from './dropdown_icon.svg'
import contact_img from './contact_img.jpg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import appointment_img from './appointment_img.png'
import tutorsImg from './tutors.png';
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
import tutor17 from './tutor17.jpg'
import tutor18 from './tutor18.jpg'
import tutor19 from './tutor19.jpg'
import tutor20 from './tutor20.jpg'
import tutor21 from './tutor21.jpg'
import tutor22 from './tutor22.jpg'
import tutor23 from './tutor23.jpg'
import tutor24 from './tutor24.jpg'
import tutor25 from './tutor25.jpg'
import tutor26 from './tutor26.jpg'
import tutor27 from './tutor27.jpg'
import tutor28 from './tutor28.jpg'
import tutor29 from './tutor29.jpg'
import tutor30 from './tutor30.jpg'
import tutor31 from './tutor31.jpg'
import tutor32 from './tutor32.jpg'
import tutor33 from './tutor33.jpg'
import tutor34 from './tutor34.jpg'
import Biology from './Biology.png'
import Physics from './Physics.png'
import Maths from './Maths.png'
import Literature from '../assets/Literature.png'
import Chemistry from './Chemistry.png'
import Es from './Es.png'
import about_img from './about_img.jpg'

export const assets = {
    contact_img,
    tutorsImg,
    about_img,
    group_profiles,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    appointment_img
}

export const specialityData = [
    {
        speciality: 'Biology',
        image:Biology,
    },
    {
        speciality: 'Physics',
        image:Physics,
    },
    {
        speciality: 'Mathematics',
        image: Maths,
    },
    {
        speciality: 'Literature',
        image: Literature,
    },
    {
        speciality: 'Chemistry',
        image: Chemistry,
    },
    {
        speciality: 'Environmental Science',
        image: Es,
    }, 
    {
        speciality: 'Computer Science',
        image: Es,
    }, 
    {
        speciality: 'Psychology',
        image: Es,
    }, 
    {
        speciality: 'History',
        image: Es,
    }, 
]
export const tutors = [
    {
        _id: 'tutor1',
        name: 'Prof. Arjun Patel',
        image: tutor1,
        speciality: 'Physics',
        degree: 'PhD in Physics',
        experience: '12 Years',
        about: 'Prof. Arjun Patel is a leading expert in quantum mechanics, dedicated to bridging theoretical knowledge with real-world applications.His groundbreaking research has been published in leading journals, and he is frequently invited to speak at international conferences.',
        fees: 55,
        address: {
            line1: '28th Cross, Andheri East',
            line2: 'Mumbai, Maharashtra, India'
        }
    },
    {
        _id: 'tutor2',
        name: 'Priya Sharma',
        image: tutor2,
        speciality: 'Mathematics',
        degree: 'MSc in Applied Mathematics',
        experience: '10 Years',
        about: 'Priya Sharma specializes in abstract algebra and mathematical logic, creating an engaging learning environment for her students.',
        fees: 65,
        address: {
            line1: '12th Cross, Baner',
            line2: 'Pune, Maharashtra, India'
        } 
    },
    {
        _id: 'tutor25',
        name: 'Isha Chauhan',
        image: tutor25,
        speciality: 'Environmental Science',
        degree: 'MSc in Environmental Science',
        experience: '6 Years',
        about: 'Isha Chauhan teaches environmental sustainability with a hands-on approach, helping students develop an understanding of practical solutions.',
        fees: 35,
        address: {
            line1: '37th Cross, Madiwala',
            line2: 'Bangalore, Karnataka, India'
        }
    },
    {
        _id: 'tutor17',
        name: 'Prof. Rohan Sharma',
        image: tutor17,
        speciality: 'Physics',
        degree: 'PhD in Physics',
        experience: '12 Years',
        about: 'Prof. Rohan Sharma is passionate about experimental physics, working to make complex concepts easier for students to understand.',
        fees: 55,
        address: {
            line1: '33rd Cross, Malviya Nagar',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor3',
        name: 'Dr. Vikram Desai',
        image: tutor3,
        speciality: 'Biology',
        degree: 'MSc in Environmental Biology',
        experience: '8 Years',
        about: 'Dr. Vikram Desai is passionate about ecological biology and uses field-based learning to deepen understanding of environmental issues.',
        fees: 35,
        address: {
            line1: '55th Cross, Akurli',
            line2: 'Mumbai, Maharashtra, India'
        }
    },
    {
        _id: 'tutor4',
        name: 'Dr. Aman Singh',
        image: tutor4,
        speciality: 'Chemistry',
        degree: 'MSc in Organic Chemistry',
        experience: '7 Years',
        about: 'Dr. Aman Singh emphasizes hands-on experiments and real-world chemistry applications, making learning both fun and practical.',
        fees: 45,
        address: {
            line1: '14th Cross, Kundan Bagh',
            line2: 'Hyderabad, Telangana, India'
        }
    },
    {
        _id: 'tutor13',
        name: 'Prof. Mohini shah',
        image: tutor13,
        speciality: 'Biology',
        degree: 'MSc in Molecular Biology',
        experience: '8 Years',
        about: 'Prof. Mohini shah specializes in molecular biology, motivating her students to explore the intricate world of cells and genes.',
        fees: 35,
        address: {
            line1: '49th Cross, Chintadripet',
            line2: 'Chennai, Tamil Nadu, India'
        }
    },
    {
        _id: 'tutor11',
        name: 'Dr. Priyanshi singh',
        image: tutor11,
        speciality: 'Mathematics',
        degree: 'MSc in Applied Mathematics',
        experience: '10 Years',
        about: 'Dr. Priyanshi singh specializes in abstract algebra and mathematical logic, creating an engaging learning environment for her students.',
        fees: 65,
        address: {
            line1: '22nd Cross, Patparganj',
            line2: 'Pune, Maharashtra, India'
        }
    },
    {
        _id: 'tutor5',
        name: 'Prof. Rajesh Reddy',
        image: tutor5,
        speciality: 'Literature',
        degree: 'MA in English Literature',
        experience: '11 Years',
        about: 'Prof. Rajesh Reddy nurtures creativity and critical thinking through in-depth analyses of classic and modern literature.',
        fees: 55,
        address: {
            line1: '18th Cross, Ghaziabad',
            line2: 'Uttar Pradesh, India'
        }
    },
    {
        _id: 'tutor14',
        name: 'Prof. Naresh sen',
        image: tutor14,
        speciality: 'Biology',
        degree: 'MSc in Molecular Biology',
        experience: '8 Years',
        about: 'Prof. Naresh sen specializes in molecular biology, motivating her students to explore the intricate world of cells and genes.',
        fees: 35,
        address: {
            line1: '49th Cross, Chintadripet',
            line2: 'Chennai, Tamil Nadu, India'
        }
    },
    {
        _id: 'tutor15',
        name: 'Dr. Krupa bhanushali',
        image: tutor15,
        speciality: 'Chemistry',
        degree: 'MSc in Inorganic Chemistry',
        experience: '7 Years',
        about: 'Dr. Krupa bhanushali is a leading expert in organic chemistry, focusing on reaction mechanisms and synthetic methodologies.',
        fees: 45,
        address: {
            line1: '12nd Cross, Dadar',
            line2: 'Mumbai, Maharashtra, India'
        }
    },
    {
        _id: 'tutor9',
        name: 'Dr. Tanvi Jain',
        image: tutor9,
        speciality: 'Environmental Science',
        degree: 'MSc in Environmental Management',
        experience: '6 Years',
        about: 'Dr. Tanvi Jain is an advocate for environmental sustainability, fostering awareness of ecological issues through innovative teaching.',
        fees: 35,
        address: {
            line1: '44th Cross, Sector 56',
            line2: 'Noida, Uttar Pradesh, India'
        }
    },
    {
        _id: 'tutor19',
        name: 'Prof. Priya Verma',
        image: tutor19,
        speciality: 'Biology',
        degree: 'MSc in Molecular Biology',
        experience: '8 Years',
        about: 'Prof. Priya Verma specializes in molecular biology, motivating her students to explore the intricate world of cells and genes.',
        fees: 35,
        address: {
            line1: '45th Cross, Chintadripet',
            line2: 'Chennai, Tamil Nadu, India'
        }
    },
    {
        _id: 'tutor18',
        name: 'Prof. Ananya Gupta',
        image: tutor18,
        speciality: 'Mathematics',
        degree: 'MSc in Pure Mathematics',
        experience: '10 Years',
        about: 'Prof. Ananya Gupta is an expert in number theory, known for her ability to simplify complex problems into solvable steps.',
        fees: 65,
        address: {
            line1: '50th Cross, Kormangala',
            line2: 'Bangalore, Karnataka, India'
        }
    },
    {
        _id: 'tutor16',
        name: 'Dr. Gautam kothari',
        image: tutor16,
        speciality: 'Chemistry',
        degree: 'MSc in Inorganic Chemistry',
        experience: '7 Years',
        about: 'Dr. Gautam kothari is a leading expert in organic chemistry, focusing on reaction mechanisms and synthetic methodologies.',
        fees: 45,
        address: {
            line1: '100nd Cross, Dadar',
            line2: 'Mumbai, Maharashtra, India'
        }
    },
    {
        _id: 'tutor22',
        name: 'Harshvardhan Mehta',
        image: tutor22,
        speciality: 'Computer Science',
        degree: 'MSc in Data Science',
        experience: '9 Years',
        about: 'Harshvardhan Mehta specializes in data science and software development, inspiring students to innovate and solve problems.',
        fees: 55,
        address: {
            line1: '22nd Cross, Patparganj',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor26',
        name: 'Prof. Anisha bhatt',
        image: tutor26,
        speciality: 'Literature',
        degree: 'MA in Comparative Literature',
        experience: '11 Years',
        about: 'Prof. Anisha bhatt is passionate about creative writing and works with students to develop their literary voices.',
        fees: 55,
        address: {
            line1: '9th Cross, New Alipore',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor10',
        name: 'Prof. Rohini yadav',
        image: tutor10,
        speciality: 'Physics',
        degree: 'Masters in Physics',
        experience: '12 Years',
        about: 'Prof. Rohini yadav is passionate about experimental physics, working to make complex concepts easier for students to understand.',
        fees: 55,
        address: {
            line1: '13th Cross, Cyberabad',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor23',
        name: 'Prof. Tarun Kapoor',
        image: tutor23,
        speciality: 'Psychology',
        degree: 'MSc in Counseling Psychology',
        experience: '12 Years',
        about: 'Prof. Tarun Kapoor integrates both theory and practice in psychological education, allowing students to explore human emotions deeply.',
        fees: 55,
        address: {
            line1: '3rd Cross, South Extension',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'tutor27',
        name: 'Prof. Kanika parikh',
        image: tutor27,
        speciality: 'Literature',
        degree: 'MA in Comparative Literature',
        experience: '11 Years',
        about: 'Prof. Kanika parikh is passionate about creative writing and works with students to develop their literary voices.',
        fees: 55,
        address: {
            line1: '9th Cross, New Alipore',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor20',
        name: 'Dr. Kunal Kapoor',
        image: tutor20,
        speciality: 'Chemistry',
        degree: 'MSc in Inorganic Chemistry',
        experience: '7 Years',
        about: 'Dr. Kunal Kapoor is a leading expert in organic chemistry, focusing on reaction mechanisms and synthetic methodologies.',
        fees: 45,
        address: {
            line1: '32nd Cross, Dadar',
            line2: 'Mumbai, Maharashtra, India'
        }
    },
    {
        _id: 'tutor21',
        name: 'Prof. Aishwarya Kapoor',
        image: tutor21,
        speciality: 'Literature',
        degree: 'MA in Comparative Literature',
        experience: '11 Years',
        about: 'Prof. Aishwarya Kapoor is passionate about creative writing and works with students to develop their literary voices.',
        fees: 55,
        address: {
            line1: '9th Cross, New Alipore',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor24',
        name: 'Dr. Meera Iyer',
        image: tutor24,
        speciality: 'History',
        degree: 'MA in Modern History',
        experience: '8 Years',
        about: 'Dr. Meera Iyer brings history to life, using storytelling techniques that engage students in the lessons of the past.',
        fees: 65,
        address: {
            line1: '25th Cross, Jadavpur',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor33',
        name: 'Manan dave',
        image: tutor33,
        speciality: 'Environmental Science',
        degree: 'MSc in Environmental Science',
        experience: '6 Years',
        about: 'Manan dave teaches environmental sustainability with a hands-on approach, helping students develop an understanding of practical solutions.',
        fees: 35,
        address: {
            line1: '37th Cross, Madiwala',
            line2: 'Bangalore, Karnataka, India'
        }
    },
    {
        _id: 'tutor6',
        name: 'Dr. Devendra Singh',
        image: tutor6,
        speciality: 'Computer Science',
        degree: 'MSc in Computer Applications',
        experience: '9 Years',
        about: 'Dr. Devendra Singh integrates AI and machine learning into his teaching, providing students with real-world coding experience.',
        fees: 55,
        address: {
            line1: '13th Cross, Cyberabad',
            line2: 'Hyderabad, Telangana, India'
        }
    },
    {
        _id: 'tutor29',
        name: 'Akshat prajapati',
        image: tutor29,
        speciality: 'Computer Science',
        degree: 'MSc in Data Science',
        experience: '9 Years',
        about: 'Akshat prajapati specializes in data science and software development, inspiring students to innovate and solve problems.',
        fees: 55,
        address: {
            line1: '22nd Cross, Patparganj',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor7',
        name: 'Prof. Kavita Joshi',
        image: tutor7,
        speciality: 'Psychology',
        degree: 'MSc in Clinical Psychology',
        experience: '12 Years',
        about: 'Prof. Kavita Joshi focuses on behavioral psychology, guiding students to explore human behavior through a scientific lens.',
        fees: 55,
        address: {
            line1: '11th Cross, BTM Layout',
            line2: 'Bangalore, Karnataka, India'
        }
    },
    {
        _id: 'tutor30',
        name: 'Prof. Tarun Kapoor',
        image: tutor30,
        speciality: 'Psychology',
        degree: 'MSc in Counseling Psychology',
        experience: '12 Years',
        about: 'Prof. Tarun Kapoor integrates both theory and practice in psychological education, allowing students to explore human emotions deeply.',
        fees: 55,
        address: {
            line1: '3rd Cross, South Extension',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'tutor8',
        name: 'Dr. Trupti nagar',
        image: tutor8,
        speciality: 'History',
        degree: 'MA in Ancient Indian History',
        experience: '8 Years',
        about: 'Dr. Trupti nagar offers an immersive look into world history, connecting past events with current global issues.',
        fees: 65,
        address: {
            line1: '19th Cross, Kamla Nagar',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor31',
        name: 'Dr. Naman panday',
        image: tutor31,
        speciality: 'History',
        degree: 'MA in Modern History',
        experience: '8 Years',
        about: 'Dr. Naman panday brings history to life, using storytelling techniques that engage students in the lessons of the past.',
        fees: 65,
        address: {
            line1: '25th Cross, Jadavpur',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor28',
        name: 'prof. Vedant amin',
        image: tutor28,
        speciality: 'Computer Science',
        degree: 'MSc in Data Science',
        experience: '9 Years',
        about: 'Vedant amin specializes in data science and software development, inspiring students to innovate and solve problems.',
        fees: 55,
        address: {
            line1: '22nd Cross, Patparganj',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'tutor32',
        name: 'Dr. Jasmin parikh',
        image: tutor32,
        speciality: 'History',
        degree: 'MA in Modern History',
        experience: '8 Years',
        about: 'Dr. Meera Iyer brings history to life, using storytelling techniques that engage students in the lessons of the past.',
        fees: 65,
        address: {
            line1: '25th Cross, Jadavpur',
            line2: 'Kolkata, West Bengal, India'
        }
    },
    {
        _id: 'tutor12',
        name: 'Prof. Aman sahay',
        image: tutor12,
        speciality: 'Mathematics',
        degree: 'MSc in Pure Mathematics',
        experience: '10 Years',
        about: 'Prof. Aman sahay is an expert in number theory, known for her ability to simplify complex problems into solvable steps.',
        fees: 65,
        address: {
            line1: '2th Cross, Kormangala',
            line2: 'Bangalore, Karnataka, India'
        }
    },
    {
        _id: 'tutor34',
        name: 'Mahisha kulkarni',
        image: tutor34,
        speciality: 'Environmental Science',
        degree: 'MSc in Environmental Science',
        experience: '6 Years',
        about: 'Mahisha kulkarni teaches environmental sustainability with a hands-on approach, helping students develop an understanding of practical solutions.',
        fees: 35,
        address: {
            line1: '37th Cross, Madiwala',
            line2: 'Bangalore, Karnataka, India'
        }
    }
];
