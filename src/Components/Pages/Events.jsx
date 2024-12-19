import React, { useState } from "react";

const events = [
    {
        id: 1,
        name: "Model Expo 2024",
        description: "Unleashing Scientific Creativity.",
        image: "/img/modalExpo.jpeg",
        details: {
            overview:
                "The Model Expo 2024 is a platform for budding innovators and young scientists to showcase their talent, creativity, and understanding of science and technology. Open exclusively to PUC I & II (XI/XII) Science Stream students, this event aims to inspire critical thinking, innovation, and practical application of scientific principles.",
            rules: [
                "Models must be original.",
                "Participants must explain their model within 10 minutes.",
                "Teams can have a maximum of 3 members.",
            ],
            rounds: [
                {
                    title: "Key Highlights:",
                    description: [
                        "Eligibility: PUC Science students, individual or team (2-4 members).",
                        "Project Guidelines: Original, innovative, and practical models (working/static). No hazardous materials allowed.",
                        "Presentation: 8-10 minutes to explain concept, innovation, and real-world relevance."
                    ],
                },
                {
                    title: "Evaluation Criteria:",
                    description: [
                        "Scientific Thought & Goals (20%)",
                        "Creativity & Innovation (20%)",
                        "Presentation Clarity (15%)",
                        "Practicality & Application (15%)",
                        "Teamwork & Effort (10%)",
                        "Model Design & Functionality (20%)"
                    ],
                },
                {
                    title: "Safety Compliance:",
                    description: [
                        "Adherence to safety standards, insulated electricals, and secure materials is mandatory."
                    ],
                },
            ],
            Coordinators : ["Shrishail Bhat - 9739461774"]
        },

    },
    {
        id: 2,
        name: "Sparkore",
        description: "Turning Curiosity into Creation",
        image: "/img/SPARKKKK.jpg",
        details: {
            overview:
                "An intercollege competition promoting engineering, innovation, and teamwork. Students showcase technical knowledge and problem-solving through interactive rounds. Two teams will be crowned champions with recognition and prizes.",
            rules: [
                "Team of two is cumpulsory, single person cannot participate",
                "ID card is cumpulsory",

            ],
            rounds: [
                {
                    title: "Round 1: Technical Quiz Theme",
                    description: [
                        "Theme: Engineering Concepts, Riddles, Puzzles",
                        "Format: MCQs, short answers, logic puzzles (25 min)",
                        "Outcome: Top 25 teams advance."
                    ],
                },
                {
                    title: "Round 2: Technical Pictionary",
                    description: [
                        "Theme: Depict and Decode",
                        "Format: One sketches technical words; the other guesses.",
                        "Outcome: 16 teams advance."
                    ],
                },
                {
                    title: "Round 3: Escape Room",
                    description: [
                        "Theme: Decode and Discover",
                        "Format: Solve puzzles/clues to collect circuit components.",
                        "Outcome: 8 teams advance. "
                    ],
                },
                {
                    title: "Final Round : Circuit Implementation with a Twist ",
                    description: [
                        "Theme: Innovate, Execute, Communicate",
                        "Format: Arduino tasks with role-based teamwork:",
                        "Outcome: 3 winning teams crowned STEM champions. "
                    ],
                },
            ],
            Coordinators : ["Navin Kasim - +91 9611562089",
                            "Mohammed Arzan - +91 9535632314",
                            "Noora "
            ]
        },
    },
    {
        id: 3,
        name: "Bugged out",
        description: "Debug the code,ignite the load.",
        image: "/img/buggedout_posterr.jpg",
        details: {
            overview:
                "Bugged Out” is an interactive event designed aiming to provide practical exposure to engineering concepts in a fun and engaging way. Through a series of exciting rounds, participants will explore basic engineering principles, problem-solving skills, and teamwork, giving them a taste of what the field of engineering has to offer.",
            rules: [
                "Each quiz has a 20-minute time limit.",
                "No use of external resources is allowed.",
                "Participants must work individually.",
            ],
            rounds: [
                {
                    title: "Round 1: Prelims – Quiz Show",
                    description: [
                        "Participants will answer quiz questions based on PUC-level engineering basics,General knowledge",
                        "The top-scoring students will qualify for the next round.",
                    ],
                },
                {
                    title: "Round 2: Decode and Conquer",
                    description: [
                        "Morse Code & Bug Buster: Uncover clues using logic and Morse code.",
                        "Taboo: Guess technical words without saying forbidden terms.",
                        "Wall Street: Decode, trade, and strategize in a market-inspired challenge."
                    ],
                },
                {
                    title: "Round 2: Innovation Arena",
                    description: [
                        "Showcase creativity, teamwork, and technical prowess through hands-on tasks integrating electronics and computer science. Engage in fun engineering challenges, culminating in an exciting electrical demonstration."
                    ],
                },
            ],
            Coordinators : ["Ramzi - 9483737133",
                "Uwez - 8904558525",
                "Mariya"
]
        },
    },
    {
        id: 4,
        name: "Electrivia",
        description: "Ignite your knowledge with Sparkore challenges.",
        image: "/img/Electrivia.jpeg",
        details: {
            overview:
                "Sparkore tests participants with challenging quizzes to test their technical knowledge.",
            rules: [
                "Each quiz has a 20-minute time limit.",
                "No use of external resources is allowed.",
                "Participants must work individually.",
            ],
            rounds: [
                {
                    title: "Round 1: Written Quiz",
                    description: [
                        "Answer multiple-choice questions based on technical knowledge.",
                        "Participants will have 20 minutes to complete the quiz.",
                    ],
                },
                {
                    title: "Round 2: Rapid Fire",
                    description: [
                        "Top scorers will participate in a rapid-fire Q&A session.",
                        "Quick thinking and correct answers will earn more points.",
                    ],
                },
            ],
            Coordinators : ["Prof. Mohinuddin S - 896404383946"
                ,"Prof. Manohar - 8971301464",
                "Shabuddin Khadak - 8867312028"
                
]
        },
    },
    {
        id: 5,
        name: "Evolvance",
        description: "Evolving Minds, Advancing Tech",
        image: "/img/evolvance.png",
        details: {
            overview:
                "Step into the unknown with Evolvance, a thrilling journey where intellect meets innovation, and the unexpected awaits at every turn. This three-round challenge is designed to push your creativity, teamwork, and problem-solving skills to the limit. Do you have what it takes to advance?",
            rules: [
                "Each quiz has a 20-minute time limit.",
                "No use of external resources is allowed.",
                "Participants must work individually.",
            ],
            rounds: [
                {
                    title: "Round 1: Emoji Quiz",
                    description: [
                        "Not your ordinary quiz! Dive into a world of emojis hiding engineering concepts, renowned scientists, and groundbreaking ideas. Crack the code to move closer to the mystery ahead!"
                    ],
                },
                {
                    title: "Round 2: Engineering Workstations",
                    description: [
                        "Welcome to the real test. Tackle hands-on challenges in Mechanical, Civil, and Electrical engineering – but here’s the catch: materials must be earned through brain-teasing riddles and puzzles. Will your strategy and skills outshine the competition?"
                    ],
                },
                {
                    title: "Round 3: Poster Making & Presentation",
                    description: [
                        "The ultimate reveal! Create a visually stunning poster on sustainable development or a surprise theme that’s as thought-provoking as it is impactful. Present your vision to a panel of experts – and leave them in awe."
                    ],
                },
            ],
            Coordinators : ["Abubakar - 8747991541",
                "Iqra","Fathima Naufa"
]
        },
    },
];


const EventsList = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section className="bg-cover bg-center bg-no-repeat px-8 py-16">
            <div className="container mx-auto">
                <h1 className="text-4xl lg:text-6xl text-white font-bold text-center mb-12">EVENTS</h1>
                
                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="relative bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden group shadow-lg transform transition duration-300 hover:scale-105"
                        >
                            {/* Event Poster */}
                            <img
                                src={event.image}
                                alt={event.name}
                                className="w-full lg:h-64 md:h-64 object-cover transition duration-300 group-hover:opacity-70"
                            />
                            
                            {/* Event Details */}
                            <div className="p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2 text-[#da4ea2]">{event.name}</h3>
                                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                                
                                <button
                                    onClick={() => setSelectedEvent(event)}
                                    className="bg-[#da4ea2] hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-xl transition duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 overflow-y-auto">
                        <div className="bg-gray-900 text-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                                <h2 className="text-3xl font-bold text-[#da4ea2]">{selectedEvent.name}</h2>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                {/* Event Image */}
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.name}
                                    className="w-full object-cover rounded-lg mb-6"
                                />

                                {/* Overview */}
                                <section className="mb-6">
                                    <h3 className="text-2xl font-semibold text-[#da4ea2] mb-3">Overview</h3>
                                    <p className="text-gray-300">{selectedEvent.details.overview}</p>
                                </section>

                                {/* Rules */}
                                <section className="mb-6">
                                    <h3 className="text-2xl font-semibold text-[#da4ea2] mb-3">Rules</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {selectedEvent.details.rules.map((rule, index) => (
                                            <li key={index}>{rule}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Rounds */}
                                <section className="mb-6">
                                    <h3 className="text-2xl font-semibold text-[#da4ea2] mb-3">Rounds</h3>
                                    {selectedEvent.details.rounds.map((round, index) => (
                                        <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4">
                                            <h4 className="text-xl font-bold text-[#da4ea2] mb-2">{round.title}</h4>
                                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                {round.description.map((desc, descIndex) => (
                                                    <li key={descIndex}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </section>

                                {/* Coordinators */}
                                <section>
                                    <h3 className="text-2xl font-semibold text-[#da4ea2] mb-3">Coordinators</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {selectedEvent.details.Coordinators.map((coordinator, index) => (
                                            <li key={index}>{coordinator}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Close Button */}
                                <div className="mt-8 text-right">
                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="bg-[#da4ea2] hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EventsList;