export class Main {
    constructor() {
        document.body.style.backgroundColor = "orange"
        const body = document.body

        body.style.display = "flex"
        body.style.flexDirection = "column"
        body.style.alignItems = "center"
        body.style.justifyContent = "center"
        body.style.height = "100vh"
        body.style.fontFamily = "sans-serif"
        body.style.gap = "20px"

        const title = document.createElement("h1")
        title.innerText = "Gunting Batu Kertas"
        body.appendChild(title)

        const you = document.createElement("div")
        you.innerText = "Kamu pilih: "
        you.style.fontSize = "20px"
        body.appendChild(you)

        const comp = document.createElement("div")
        comp.innerText = "komputer pilih: "
        comp.style.fontSize = "20px"
        body.appendChild(comp)


        const win = document.createElement("div")
        win.style.fontSize = "20px"
        body.appendChild(win)


        const result = document.createElement("div")
        result.style.fontSize = "20px"
        body.appendChild(result)


        const choices = ["Gunting", "Batu", "Kertas"]

        function getComputerChoice(): string {
            const random = Math.floor(Math.random() * choices.length)
            return choices[random]
        }

        function checkWinner(player: string, computer: string): string {
            if (player === computer) return "Seri!"

            if (
                (player === "Batu" && computer === "Gunting") ||
                (player === "Kertas" && computer === "Batu") ||
                (player === "Gunting" && computer === "Kertas")
            ) {
                return "kamu menang!"
            }

            return "komputer menang!"
        }

        choices.forEach(choice => {
            const btn = document.createElement("button")
            btn.innerText = choice
            btn.style.backgroundColor="yellow"
            btn.style.width = "100px"
            btn.style.padding = "10px 20px"
            btn.style.fontSize = "18px"

            btn.addEventListener("click", () => {
                comp.innerText = `komputer pilih: memilih...`

                setTimeout(() => {
                    const computer = getComputerChoice()
                    const winner = checkWinner(choice, computer)

                    you.innerText = `kamu pilih: ${choice}`
                    comp.innerText = `komputer pilih: ${computer}`
                    win.innerText = `${winner}`
                }, 1000)
            })

            body.appendChild(btn)
        })
        this.fullScreen();
    }

    fullScreen() {
        document.body.addEventListener("touchstart", () => {
            document.documentElement.requestFullscreen();
        });
    }
}

document.body.style.margin = "0px"
document.body.style.padding = "0px"
