// Função numero aleatorio
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    return a + (b - a) * t
}

class Neuron {
    constructor(inputs) {
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }
}

g(signalList = []); {
    let u = 0;

    for (let i = 0; i < this.weightList.lenght; i++) {
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) >this.bias) return 1; // Ativado
    else return 0; // Desativado
};

mutate(rate = 1); {
    this.weightList = this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1 , 1), range)
}

class RNA {
    constructor(inoutCount = 1, levelList = []) {
        this.score = 0;

        this.levelList = levelList.map((l, i) => {
            const inoutSize = i === 0 ? inputCount : levelList[i -1]

            return new Array(l).fill().map(() => new Neuron(inoutSize));
        });
    }

    compute(list = []) {
        for (let i = 0; i < this.levelList.length; i++) {
            const tempList = []

            for (const neuron of this.levelList[i]) {
                if (list.length !== neuron.weightList) throw new Error("Entrada inválida");
                tempList.push(neuron.g(list))
            }
            list = temPlist;
        }
        return list;
    }
}

mutate(rate = 1); {
    for (const level of this.levelList) {
        for  (const neuron of level) neuron.mutate(rate)
    }
}

load(rna); {
    if (!rna) return;
    try {
        this.levelList = rna.map((neuronList) =>{
            return neuronList.map((neuron) => {
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList;

                return n;
            });
        });
    } catch (e) {
        return;
    }

    save(); {
        return this.levelList;
    }
}

export default RNA;