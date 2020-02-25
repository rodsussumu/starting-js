try {// Executada quando nao tem erros
    
}catch(e) { // Executada quando tem erro
    
} finally { // Sempre
   
}


function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de data.');
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    });
    
}

try {
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log("Tenha um bom dia");
}

