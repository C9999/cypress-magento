import http from 'k6/http';
import {sleep, check} from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.1.1/dist/bundle.js";

const url = 'https://magento.softwaretestingboard.com/';

// Tempo ideal e limite máximo de resposta em ms
const tempoIdeal = 1500;
const tempoLimiteMaximo = 4000;

export let options = {
    stages: [
        {duration: '1m', target: 200}, // 200 usuários por 1 minuto
        {duration: '1m30s', target: 600},
        {duration: '2m', target: 1000},
    ],
};

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function () {
    let startTime = new Date().getTime();
    let response = http.get(url);

    check(response, {
        'status 200': (r) => r.status === 200,
        'tempo de resposta dentro da faixa ideal': (r) => r.timings.duration <= tempoIdeal,
        'tempo de resposta dentro do limite máximo': (r) => r.timings.duration <= tempoLimiteMaximo,
    });

    let endTime = new Date().getTime();
    let responseTime = endTime - startTime;

    // Verifica se o tempo de resposta é superior a 4 segundos (4000 ms)
    check(response, {
        'o tempo de resposta é menor que 4s': (r) => responseTime <= 4000,
    });

    sleep(1);
}
