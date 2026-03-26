import ProjectDetail from "../../components/ProjectDetail";

export default function Trippie() {
    const project = {
        title: "Trippie",
        image: "/src/images/Trippie.png",
        live: "https://project.cmi.hr.nl/2024_2025/cle3_t10/trippie/",
        github: "https://github.com/Chrisieee/trippie",
        description: (
            <>
                <p>
                    Trippie is a travel app that helps people with a light intellectual disability use
                    public transport. The app makes it easier to plan trips, find stations, and see the route.
                </p>
                <p>
                    For this school project, we had to make public transport accessible for people who need
                    extra help. The app uses simple language, big buttons, and clear steps. Everything is
                    designed to be easy to understand.
                </p>
                <p>
                    The app helps users plan their trip step by step. You can type where you want to go,
                    choose a time, and see the route on a map. The app gives clear feedback so you know
                    what to do next.
                </p>
            </>
        ),
        development: (
            <>
                <p>
                    <strong className="text-yellow-400">Team Project</strong> - We worked together as a team
                    for this project. Our goal was to make public transport easier for people with a light
                    intellectual disability. We studied the group we were helping and tested our app with them.
                </p>

                <p>
                    <strong className="text-yellow-400">The Users (Target Group):</strong>
                </p>
                <p>
                    Our app is made for people with a light intellectual disability. This means we had to
                    use simple words, clear pictures, and easy steps. Everything in the app must be easy
                    to read and understand.
                </p>

                <p>
                    <strong className="text-yellow-400">What I did in this project:</strong>
                </p>

                <p className="mt-3">
                    <span className="text-yellow-400">home Page:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made a progress bar so users can see how far they are in planning their trip</li>
                    <li>Made big input fields that are easy to read</li>
                    <li>Added "Next" and "Back" buttons to help users move through the steps</li>
                    <li>Added validation in HTML and JavaScript - if you leave a field empty, you get a message and cannot go further</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Map & Location:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Put the Google Maps map at the bottom so it's easy to see</li>
                    <li>The route is shown clearly on the map</li>
                    <li>Added zoom in and zoom out buttons so the map is easy to use</li>
                    <li>Added a clear title that says "route map" so users know what they are looking at</li>
                </ul>

                <p>
                    <span className="text-yellow-400">AutoComplete Function:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>When you type a station name, the letters become bold so it's easier to see what you are typing</li>
                    <li>Simple and clear text for all questions</li>
                    <li>Big font size so everything is easy to read</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Simple Text & Logo:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Wrote short and simple sentences that are easy to understand</li>
                    <li>Made a simple logo that clearly shows the app is about public transport</li>
                    <li>Made an example layout for my teammate who worked on the design</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Help Videos:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>Made three videos that explain how the app works</li>
                    <li>Used simple language and slow, calm explanations</li>
                    <li>Made the videos to help users use the app by themselves</li>
                </ul>

                <p>
                    <strong className="text-yellow-400">Testing with Users:</strong>
                </p>

                <p className="mt-2">
                    <span className="text-yellow-400">First test (March 31, 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>I tested the app with a family member who has a light intellectual disability</li>
                    <li>She did not know you could scroll down to see more times</li>
                    <li>She did not understand the icons that show how busy it is</li>
                </ul>

                <p>
                    <span className="text-yellow-400">Second test (April 7, 2025):</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                    <li>I tested the app again after we made changes</li>
                    <li>She said the app was clear and easy to use</li>
                    <li>Now she understood the busy icons</li>
                    <li>She knew she could scroll down to see more options</li>
                    <li>She found the route map clear and helpful</li>
                </ul>

                <p>
                    The feedback from testing was very helpful. It showed that our changes worked well.
                    The app became easier to use because we listened to what users needed.
                </p>

                <p>
                    <strong className="text-yellow-400">What I learned:</strong>
                </p>
                <p>
                    This project taught me how to make things for people who need extra help. I learned
                    that simple words and clear design make a big difference. Testing with real users
                    helped us see what worked and what we needed to change. I am proud that the users
                    found the app clear and helpful in the end.
                </p>
            </>
        ),
        techStack: [
            { name: "HTML", icon: "/src/images/tech/html.png" },
            { name: "CSS", icon: "/src/images/tech/css.png" },
            { name: "JavaScript", icon: "/src/images/tech/javascript.png" },
            { name: "Google Maps API", icon: "/src/images/tech/googlemaps.png" },
            { name: "NS API", icon: "/src/images/tech/ns.png" }
        ],
        tools: [
            { name: "phpStorm", icon: "/src/images/tech/phpstorm.png" },
            { name: "GitHub", icon: "/src/images/tech/github.png" },
            { name: "Git", icon: "/src/images/tech/git.png" },
        ],
        additionalImages: [
            {
                src: "/src/images/TrippieView.png",
                alt: "A page of all the trips",
                caption: "The page where you can see all your planned trips and click on them to see the details"
            },
            {
                src: "/src/images/TrippieValidation.png",
                alt: "Validation message when field is empty",
                caption: "The app shows a message when you forget to fill something in"
            },
            {
                src: "/src/images/TrippieMap.png",
                alt: "Google Maps with route",
                caption: "The route map with zoom buttons"
            },
            {
                src: "/src/images/TrippieAutocomplete.png",
                alt: "AutoComplete function with bold letters",
                caption: "AutoComplete makes the letters bold when you type"
            }
        ]
    };

    return <ProjectDetail project={project} />;
}