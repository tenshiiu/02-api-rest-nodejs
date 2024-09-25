interface User {
    birthYear: number,
}

function calcularIdade(user: User) {
    return new Date().getFullYear() - user.birthYear
}

calcularIdade({
    birthYear: 2009
})

console.log(calcularIdade)