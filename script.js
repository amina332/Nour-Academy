const courses = [
    {
        id: "course_1",
        img: "images/francais.png",
        titre: "Français",
        description: "Apprendre à lire, écrire et parler français.",
        prix: 250
    },
    {
        id: "course_2",
        img: "images/American Flag.png",
        titre: "Anglais",
        description: "Améliorer son anglais à l'oral et à l'écrit.",
        prix: 300
    },
    {
        id: "course_3",
        img: "images/arabe.png",
        titre: "Arabe",
        description: "Renforcer les compétences en langue arabe.",
        prix: 200
    },
    {
        id: "course_4",
        img: "images/mathematique.png",
        titre: "Mathématiques",
        description: "Apprendre à résoudre des problèmes mathématiques.",
        prix: 350
    },
    {
        id: "course_5",
        img: "images/physique.png",
        titre: "Physique",
        description: "Comprendre les phénomènes physiques.",
        prix: 350
    },
    {
        id: "course_6",
        img: "images/chimie.png",
        titre: "Chimie",
        description: "Découvrir les réactions chimiques.",
        prix: 350
    },
    {
        id: "course_7",
        img: "images/informatique.png",
        titre: "Informatique",
        description: "Apprendre les bases de l'informatique.",
        prix: 300
    },
    {
        id: "course_8",
        img: "images/javascript.png",
        titre: "JavaScript",
        description: "Créer des pages web interactives.",
        prix: 400
    },
    {
        id: "course_9",
        img: "images/html-css.png",
        titre: "HTML et CSS",
        description: "Créer et styliser des pages web.",
        prix: 350
    },
    {
        id: "course_10",
        img: "images/comptabilite.png",
        titre: "Comptabilité",
        description: "Apprendre les bases de la comptabilité.",
        prix: 300
    },
    {
        id: "course_11",
        img: "images/economie.png",
        titre: "Économie",
        description: "Comprendre les principes de l'économie.",
        prix: 250
    },
    {
        id: "course_12",
        img: "images/sciences.png",
        titre: "Sciences naturelles",
        description: "Étudier les êtres vivants et leur environnement.",
        prix: 300
    },
    {
        id: "course_13",
        img: "images/histoire.png",
        titre: "Histoire",
        description: "Découvrir les grandes périodes historiques.",
        prix: 200
    },
    {
        id: "course_14",
        img: "images/geographie.png",
        titre: "Géographie",
        description: "Découvrir les pays et les paysages.",
        prix: 200
    },
    {
        id: "course_15",
        img: "images/preparation-bac.png",
        titre: "Préparation au Bac",
        description: "Réviser les matières pour réussir le Bac.",
        prix: 500
    }
];

const panier_course = [
    
]

const course_select = document.getElementById("course_select");
const courses_container = document.getElementById("courses_container");

document.addEventListener("DOMContentLoaded", () => {

    courses.forEach((course) => {
        courses_container.innerHTML += `
            <div class="border border-gray-400 rounded-lg p-5">

                <div>
                    <img
                        src="${course.img}"
                        alt="${course.titre}"
                        class="w-full h-40 object-cover rounded-lg"
                    >
                </div>

                <div class="mt-2.5">
                    <h3 class="text-2xl">${course.titre}</h3>

                    <p class="text-xs text-gray-400">
                        ${course.description}
                    </p>

                    <p class="text-xs text-gray-400 mt-1">
                        Soir de 17h00 à 19h00
                    </p>
                </div>

                <div class="flex justify-between mt-2.5 items-center gap-2">

                    <p class="font-semibold">
                        ${course.prix} MAD / mois
                    </p>

                    <button
                        data-id="${course.id}"
                        class="border p-1.5 rounded-lg bg-[#123933] text-white hover:bg-[#123A34] transition-colors cursor-pointer"
                    >
                        Add to cart
                    </button>

                </div>

            </div>
        `;
    });

});


course_select.addEventListener("change", () => {
    courses_container.innerHTML = "";

    courses.forEach((course) => {
        if (
            course_select.value.toLowerCase() === "tout" ||
            course_select.value.toLowerCase() === course.titre.toLowerCase()
        ) {
            courses_container.innerHTML += `
                <div class="border border-gray-400 rounded-lg p-5">
                    <img src="${course.img}" alt="${course.titre}"
                        class="w-full h-40 object-cover rounded-lg">

                    <div class="mt-2.5">
                        <h3 class="text-2xl">${course.titre}</h3>
                        <p class="text-xs text-gray-400">${course.description}</p>
                        <p class="text-xs text-gray-400 mt-1">
                            Soir de 17h00 à 19h00
                        </p>
                    </div>

                    <div class="flex justify-between mt-2.5 items-center gap-2">
                        <p class="font-semibold">${course.prix} MAD / mois</p>
                        <button data-id="${course.id}"
                            class="border p-1.5 rounded-lg bg-[#123933] text-white hover:bg-[#123A34] transition-colors cursor-pointer">
                            Add to cart
                        </button>
                    </div>
                </div>
            `;
        }
    });
});


const popup_button = document.getElementById("popup_button");
const popup = document.getElementById("popup");
const exit_popup_button = document.getElementById("exit_popup");

popup_button.addEventListener("click" , () => {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
});

exit_popup_button.addEventListener("click" , () => {
    popup.classList.remove("flex");
    popup.classList.add("hidden");
})