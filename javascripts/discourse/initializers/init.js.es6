import {withPluginApi} from "discourse/lib/plugin-api"

export default {
    name: "custom-homepage",
    initialize() {
        withPluginApi("0.8.7", (api) => {
            fetch("/latest.json")
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data)
                    updateLatest(data)
                })
                .catch((error) => console.log(error))
            const marquee_list = settings.marquee_list.split("|");

            function updateLatest(data) {
                const list = document.getElementById("marquee-bar")
                const div = document.createElement("div")
                const ul = document.createElement("ul")
                const ul2 = document.createElement("ul")
                list.innerHTML = ""

                for (let i = 0; i < marquee_list.length; i++) {
                    let li = document.createElement("li")
                    li.innerHTML = marquee_list[i]
                    ul.appendChild(li)
                }

                ul2.innerHTML = ul.innerHTML

                div.appendChild(ul)
                div.appendChild(ul2)
                list.appendChild(div)
            }
        })
    },
}
