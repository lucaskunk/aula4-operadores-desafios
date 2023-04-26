kw = Number(prompt("Digite quantos Quilowatts por hora são consumidos em sua residência: "))

calc = kw * 0.05
kwPorDia = calc * 24

console.log("Você consome ", kw, "KW/h, sua conta de luz em 24h é: R$ ", kwPorDia)

desc = kwPorDia * (15 / 100)

console.log("Sua conta de luz com 15% de desconto fica : R$ ", desc)