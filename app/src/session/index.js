
export const sessionSet = dados => {
    localStorage.setItem('dadosUser', JSON.stringify(dados));
}

export const sessionGet = dado => {
    const dados = JSON.parse(localStorage.getItem('dadosUser'));

    return (dados) ? dados[dado] : 'Sessão não gravada!';
}

export const sessionGetAll = () => {
    const dados = JSON.parse(localStorage.getItem('dadosUser'));

    return (dados) ? dados : 'Sessão não gravada!';
}

export const sessionAdd = (title, dado) => {
    let dados = JSON.parse(localStorage.getItem('dadosUser'));

    dados[title] = dado;

    localStorage.setItem('dadosUser', JSON.stringify(dados));
}

export const isLogged = () => ((localStorage.getItem('dadosUser')) ? true : false);

export const isLoggedIMAP = () => {
    const dados = JSON.parse(localStorage.getItem('dadosUser'));

    return (dados.token) ? true : false;
}

export const sessionRemove = title => {
    let dados = JSON.parse(localStorage.getItem('dadosUser'));

    delete dados[title];

    localStorage.setItem('dadosUser', JSON.stringify(dados));
}

export const logout = async () => {
    localStorage.clear();

    window.location = '/';
};

export const clearSession = async () => {
    localStorage.clear();
    window.location = '/';
};
